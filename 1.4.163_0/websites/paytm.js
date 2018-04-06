function paytm($) {
    var websitePath = window.location.pathname;
	var data = [];
    var count = 0;
	if( websitePath.startsWith('/shop/search')
		|| websitePath.startsWith('/shop/g') ) { // i.e., if this is product search page
		console.log(2);
		//return;
		$items = $(document).find('.GridItems');
		for ( i = 0; i < $items.length; ++i) {
			var dataI = new Object();
    		pURL = $($items[i]).find('a').attr('href');
    		qStartIndex = pURL.indexOf('?');
    		if(qStartIndex == -1)
	    		qStartIndex = pURL.length;
    		pURL = pURL.substring(0, qStartIndex);
    		dashEndIndex = pURL.lastIndexOf('-');
    		dataI[ipjpn["pid"]] = pURL.substring(dashEndIndex + 1, pURL.length);
    		dataI[ipjpn["title"]] = $($items[i]).find('.details > div').text();
    		dataI[ipjpn["image"]] = $($items[i]).find('img').attr('src');
    		dataI[ipjpn["price"]] = $($items[i]).find('.details > ul').find('li:eq(1)').text();
    		dataI[ipjpn["discount"]] = $($items[i]).find('.TAG > div').text();
    		dataI[ipjpn["finalPrice"]] = $($items[i]).find('.details > ul').find('li:eq(0)').text();
    		dataI[ipjpn["available"]] = $($items[i]).find('.outstoke.ng-hide')
    										? availParams['yes'] : availParams['no'];
    		data[count++] = dataI;
    	}
    	if(count > 0){
			console.log('paytm data', data);
	        postDataToServer('paytm', data, "info");
	        return;
	    }
	}

	if(websitePath.startsWith('/shop/p/')) { // i.e., if this is main product page
		var dataI = new Object();
		pURL = window.location.href;
		qStartIndex = pURL.indexOf('?');
		if(qStartIndex == -1)
	    	qStartIndex = pURL.length;
		pURL = pURL.substring(0, qStartIndex);
		dashEndIndex = pURL.lastIndexOf('-');
		dataI[ipjpn["pid"]] = pURL.substring(dashEndIndex + 1, pURL.length);
		var firstH1 = $(document).find('h1').first();
		dataI[ipjpn["title"]] = firstH1.text();
		dataI[ipjpn["image"]] = $(document).find('img').first().attr('src');
		var priceMeta = $(document).find('meta[itemprop="price"]');
		dataI[ipjpn["finalPrice"]] = parseFloat(priceMeta.attr("content")).toFixed(0);
		var mrp = priceMeta.next().next().find('>:first-child').text();
		if(mrp.indexOf('Rs') > -1)
		    dataI[ipjpn["price"]] = parseFloat(mrp.replace(/\D/g,'')).toFixed(0);
		else
            dataI[ipjpn["price"]] = dataI[ipjpn["finalPrice"]]
        dataI[ipjpn['discount']] = ((dataI[ipjpn['price']] - dataI[ipjpn["finalPrice"]]) / dataI[ipjpn["price"]]) * 100;
        dataI[ipjpn['discount']] = dataI[ipjpn['discount']].toFixed(0);
		dataI[ipjpn["availability"]] = $(document).find('.size > span').text().indexOf('Out of stock') > (-1)
										? availParams['no'] : availParams['yes'];
		var desE = $(document).find('ul.aile');
		var des = desE.map(function() {
		    return $(this).text();
        }).get();
        dataI[ipjpn["description"]] = '';
		for(i = 0; i < des.length; ++i)
            dataI[ipjpn["description"]]  += des[i] + '; ';
        dataI[ipjpn["features"]] = dataI[ipjpn["description"]];
        dataI[ipjpn["brand"]] = firstH1.next().text().replace('# ', '');
        dataI[ipjpn["category"]] = $(document).find('div[itemtype="https://data-vocabulary.org/Breadcrumb"]').find('>:last-child').text();
        dataI[ipjpn["color"]] = $(document).find('.w3LC:contains(Color):last').next().text();
        dataI[ipjpn['url']] = window.location.href;
        dataI[ipjpn['altImages']] = $(document).find("._2EKu img").map(function () {
            return $(this).attr('src');
        }).get();
       console.log('paytm data', dataI);
        data = JSON.stringify(dataI);
        chrome.runtime.sendMessage({
            sksmode: "productData",
            data: data,
			website: "paytm"
        }, function (response) {});
	    return;
	}

	if( websitePath.startsWith('/shop/summary') ||
			websitePath.startsWith('/myorders')) { //i.e., if this is order successful page
        //return;
		order_id = $(document).find('.cartValue > span').text();
        $sellerItems = $(document).find('.order-listing');
	    for(var i = 0; i < $sellerItems.length; ++i) {
			var dataI = new Object();
			dataI[opjpn["order_id"]] = order_id;
        	dataI[opjpn["seller_name"]] = $($sellerItems[i]).find('span:eq(0)').text();
	        dataI[opjpn["order_list"]] = [];
        	$orderItems = $($sellerItems[i]).find('.detailorder-listing');
        	for(var j = 0; j < $orderItems.length; ++j) {
        		var dataJ = new Object();
        		pURL = $($orderItems[j]).find('li:eq(0) > a').attr('href');
	    		qStartIndex = pURL.indexOf('?');
	    		if(qStartIndex == -1)
	    			qStartIndex = pURL.length;
	    		pURL = pURL.substring(0, qStartIndex);
	    		dashEndIndex = pURL.lastIndexOf('-');
	    		dataJ[opjpn["pid"]] = pURL.substring(dashEndIndex + 1, pURL.length);
	    		dataJ[opjpn["title"]] = $($orderItems[j]).find('li:eq(1) > a').text();
				dataJ[opjpn["price"]] = $($orderItems[j]).find('.col').next().first()
										.contents().filter(function() {
										    return this.nodeType == 3;
										}).text().replace(/\s\s+|Buy for/g, "");
				dataJ[opjpn["scheduled_delivery"]] = $($orderItems[j]).find('.col > div').text();
				dataI[opjpn["order_list"]].push(dataJ);
        	}
        	data[count++] = dataI;
        }
       console.log('paytm data', data);
       postDataToServer('paytm', data, 'order');
		return;
	}
}

jQuery(document).ready(function($) {
    window.setTimeout(paytm($), 2000);
});