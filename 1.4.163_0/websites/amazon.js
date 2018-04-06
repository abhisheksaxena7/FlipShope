function amazon($) {
    var websitePath = window.location.pathname;
	var data = [];
    var count = 0;

    if (websitePath.startsWith('/s/')) { //i.e., this is search page
		return;
    	$items = $(document).find('.s-result-item');
    	for ( i = 0; i < $items.length; ++i) {
    		var dataI = new Object();
    		dataI[ipjpn["pid"]] = $($items[i]).attr("data-asin");
    		dataI[ipjpn["finalPrice"]] = $($items[i]).find('.s-price').text();
    		if(! dataI[ipjpn["finalPrice"]]) { //i.e., price is written as "X offers starts from Rs. Y"
    			dataI[ipjpn["finalPrice"]] = $($items[i]).find('span.a-color-price').text()
    											.replace('from', '');
    		}
    		data[count++] = dataI;
    	}
    	if(count > 0){
	        // postDataToServer('amazon', data, "info");
	        return;
	    }
    }

    if($(document).find('#centreCol')) { //i.e., this is main product page
        try {
            data = [];
            var dataI = new Object();
            dataI[ipjpn['title']] = $(document).find('#productTitle').text().replace(/\s+/g, ' ').trim();
            dataI[ipjpn['pid']] = window.location.pathname.split('/')[3];
            dataI[ipjpn["finalPrice"]] = $(document).find('#priceblock_ourprice').text();
            if (!dataI[ipjpn["finalPrice"]])
                dataI[ipjpn["finalPrice"]] = $(document).find('#priceblock_dealprice').text();
            dataI[ipjpn["finalPrice"]] = dataI[ipjpn["finalPrice"]].replace(',', '');
            dataI[ipjpn["finalPrice"]] = parseFloat(dataI[ipjpn["finalPrice"]]);
            if (!dataI[ipjpn["finalPrice"]]) {
                dataI[ipjpn["finalPrice"]] = $(document).find('.a-color-price').first().text();
                dataI[ipjpn["finalPrice"]] = dataI[ipjpn["finalPrice"]].replace(',', '');
                dataI[ipjpn["finalPrice"]] = parseFloat(dataI[ipjpn["finalPrice"]]);
            }
            dataI[ipjpn["description"]] = $(document).find('#feature-bullets').find('ul > li > span')
                .map(function () {
                        return $(this).text();
                    }
                ).get().join().replace(/\s\s+/g, "");
            var cat = $(document).find('#wayfinding-breadcrumbs_feature_div')
                .text().replace(/\s\s+/g, "");
            cat = cat.split('›');
            cat = cat[1];
            dataI[ipjpn['category']] = cat;
            if (!dataI[ipjpn['category']])
                dataI[ipjpn['category']] = $(document).find('.nav-a-content').first().text();
            dataI[ipjpn['price']] = $(document).find('.a-text-strike').text().replace(',', '');
            dataI[ipjpn['price']] = parseFloat(dataI[ipjpn['price']]);
            if (!dataI[ipjpn['price']])
                dataI[ipjpn['price']] = dataI[ipjpn['finalPrice']];
            dataI[ipjpn['discount']] = ((dataI[ipjpn['price']] - dataI[ipjpn["finalPrice"]]) / dataI[ipjpn["price"]]) * 100;
            dataI[ipjpn['discount']] = dataI[ipjpn['discount']].toFixed(0);
            var img;
            img = $(document).find("#landingImage").attr('data-a-dynamic-image');
            if (!img)
                img = $(document).find("#img-canvas img").attr('data-a-dynamic-image');
            img = JSON.parse(img);
            dataI[ipjpn['image']] = Object.keys(img)[0];
            dataI[ipjpn['altImages']] = $(document).find("#altImages img").map(function () {
                return $(this).attr('src');
            }).get();
            var fts = $(document).find("#prodDetails").find('.techD').find('table tr').get().map(function (row) {
                return $(row).find('td').get().map(function (cell) {
                    return $(cell).text();
                });
            });
            dataI[ipjpn['brand']] = $(document).find('#brandByline_feature_div').text().replace(/\s+/g, ' ').trim();
            if(!dataI[ipjpn['brand']])
                dataI[ipjpn['brand']] = $(document).find('table th:contains(Brand)').next().text().replace(/\s+/g, ' ').trim();
            dataI[ipjpn['features']] = '';
            for (i = 0; i < fts.length - 1; ++i) {
                if (fts[i][0] == 'Customer Reviews')
                    break;
                dataI[ipjpn['features']] += fts[i][0].replace(/\s+/g, ' ').trim() + ' ' + fts[i][1].replace(/\s+/g, ' ').trim() + '; ';
            }
            dataI[ipjpn['color']] = $(document).find('#variation_color_name .selection').text().replace(/\s+/g, ' ');
            if($(document).find('#availability .a-color-price').length)
                dataI[ipjpn['availability']] = 0;
            else
                dataI[ipjpn['availability']] = 1;
            dataI[ipjpn['url']] = window.location.href;
            //console.log('amazon product data', dataI);
            if (dataI[ipjpn['pid']]) {
                data = JSON.stringify(dataI);
                chrome.runtime.sendMessage({
                    sksmode: "productData",
                    data: data,
                    website: "amazon"
                }, function (response) {
                });
                return;
            }
        } catch(e){}
    }

    if( $(document).find('#orders-list')) { // order success page
        try {
            var dataI = new Object();
            dataI[opjpn["order_id"]] = $(document).find('h5 span').text().replace(/\s+/g, ' ');
            // dataI[opjpn["phone"]] = $(document).find('#customer-mobile-number-stored').text();
            dataI[opjpn["order_list"]] = [];
            $(document).find(".a-unordered-list.a-vertical li").each(function () {
                var item = {};
                item[opjpn["title"]] = $(this).find('.wrap-item-title').text();
                var da = $(this).find('.a-declarative').attr('data-a-popover');
                da = JSON.parse(da);
                item[opjpn["delivery_address"]] = da.content;
                item[opjpn["scheduled_delivery"]] = $(this).find('b').text();
                dataI[opjpn["order_list"]].push(item);
            });
            chrome.runtime.sendMessage({
                sksmode: "orderData",
                data: dataI,
                website: "amazon"
            });
            return;
        } catch(e) {}
    }
}

jQuery(document).ready(function($) {
    amazon($);
});
