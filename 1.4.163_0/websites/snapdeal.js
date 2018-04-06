function snapdeal($) {
    var websitePath = window.location.pathname;
    var data = [];

    if (websitePath.startsWith('/search') || // search page type 1
        websitePath.startsWith('/brand/') || // search page type 2
        websitePath.startsWith('/products/')) { // search page type 3
        return;
        $items = $(document).find('.product_grid_cont');
        for ( i = 0; i < $items.length; ++i) {
            var dataI = new Object();
            dataI[ipjpn['pid']] = $($items[i]).find('.product-txtWrapper  > a').attr('pogid');
            dataI[ipjpn['finalPrice']] = $($items[i]).find('#price').text();
            if( !dataI[ipjpn['finalPrice']]) {
                dataI[ipjpn['finalPrice']] = $($items[i]).find('.product-price > p:eq(0)').text();
            }
            dataI[ipjpn['available']] = $($items[i]).find('.soldout-tag').text().indexOf('sold out') > (-1)
                                            ? availParams['no'] : availParams['yes'];
            data.push(dataI);
        }
        if(data.length > 0) {
            postDataToServer('snapdeal', data, 'info');
            return;
        }
    }

    if(websitePath.startsWith('/product/')) { // main product page
        var dataI = new Object();
        dataI[ipjpn['pid']] = websitePath.substring(websitePath.lastIndexOf('/') + 1,
                                    websitePath.length);
        dataI[ipjpn['title']] = $(document).find('.pdp-e-i-head').text().trim();
        dataI[ipjpn['finalPrice']] = $(document).find('.product-detail').find('.payBlkBig').text();
        dataI[ipjpn['finalPrice']] = parseFloat(dataI[ipjpn['finalPrice']].replace(',', ''));
        dataI[ipjpn['price']] = parseFloat($(document).find('.pdpCutPrice').text().replace(/\D/g,''));
        if(!dataI[ipjpn['price']])
            dataI[ipjpn['price']] = dataI[ipjpn['finalPrice']];
        dataI[ipjpn['discount']] = ((dataI[ipjpn['price']] - dataI[ipjpn["finalPrice"]]) / dataI[ipjpn["price"]]) * 100;
        dataI[ipjpn['discount']] = dataI[ipjpn['discount']].toFixed(0);
        $cat = $(document).find('#breadCrumbWrapper2');
        dataI[ipjpn['category']] = '';
        for(j = 0; j < $($cat).find('.containerBreadcrumb').length - 1; ++j) {
            dataI[ipjpn['category']] += $($cat).find('.containerBreadcrumb:eq(' + j + ')').text() + '>';
        }
        dataI[ipjpn['category']] = dataI[ipjpn['category']].replace(/\s\s+/g, "");
        dataI[ipjpn['category']] = dataI[ipjpn['category']].substring(0,
                                         dataI[ipjpn['category']].length - 1);
        dataI[ipjpn['category']] = dataI[ipjpn['category']].split('>');
        dataI[ipjpn['category']] = dataI[ipjpn['category']][1];
        dataI[ipjpn['color']] = $(document).find('.attr-color').text().trim().split('\n');
        dataI[ipjpn['color']] = dataI[ipjpn['color']][0];
        dataI[ipjpn['description']] = '';
        $(document).find('.spec-body:eq(0)').find('li').each(function(){
            dataI[ipjpn['description']] += $(this).text() + ',';
        });
        dataI[ipjpn['description']] = dataI[ipjpn['description']].replace(/\s\s+/g, "");
        dataI[ipjpn['description']] = dataI[ipjpn['description']].substring(0,
                                         dataI[ipjpn['description']].length - 1);
        dataI[ipjpn['features']] = dataI[ipjpn['description']];
        dataI[ipjpn['image']] = $(document).find('#criteo-tags-div').next().find('img').attr('src');
        if(!dataI[ipjpn['image']])
            dataI[ipjpn['image']] = $(document).find('.cloudzoom').attr('src');
        dataI[ipjpn['altImages']] = $(document).find("#bx-pager-left-image-panel img").map(function(){
            return $(this).attr('src');
        }).get();
        var avl = $(document).find('.soldleftImg').text();
        if(avl)
            dataI[ipjpn['availability']] = 0;
        else
            dataI[ipjpn['availability']] = 1;
        dataI[ipjpn['color']] = $(document).find(".clr-name").first().text().replace(/\s\s+/g, "");
        if(!dataI[ipjpn['color']])
            dataI[ipjpn['color']] = $(document).find('td:contains(Colour)').next().text().replace(/\s\s+/g, "");
        if(!dataI[ipjpn['color']])
            dataI[ipjpn['color']] = $(document).find('td:contains(Color)').next().text().replace(/\s\s+/g, "");
        if(!dataI[ipjpn['color']]) {
            dataI[ipjpn['color']] = $(document).find('span.h-content:contains(Color)').text().replace(/\s\s+/g, "");
            dataI[ipjpn['color']] = dataI[ipjpn['color']].substr(7, dataI[ipjpn['color']].length / 2 - 7)
        }
        dataI[ipjpn['brand']] = $(document).find('span.h-content:contains(Brand)').text().replace(/\s\s+/g, "");
        dataI[ipjpn['brand']] = dataI[ipjpn['brand']].substr(7, dataI[ipjpn['brand']].length / 2 - 7);
        if(!dataI[ipjpn['brand']])
            dataI[ipjpn['brand']] = $(document).find('*[itemprop="brand"] a').text().replace(/\s\s+/g, "");
        dataI[ipjpn['url']] = window.location.href;
        data = JSON.stringify(dataI);
        //console.log('snapdeal data', data);
        chrome.runtime.sendMessage({
                sksmode: "productData",
                data: data,
                website: "snapdeal"
            }, function (response) {});
        return;
    }


    if(websitePath.startsWith('/prepareThankYouPage')) { // i.e., if this order-successful page
        //return;
        var dataI = new Object();
        dataI[opjpn['order_id']] = $(document).find('.ocn-header-text > .order-id').text()
                                        .substring('Your Order ID: '.length);
        dataI[opjpn['email']] = $(document).find('.ocn-footer-wrapper').find('.ocn-cutomer-email').attr('title');
        dataI[opjpn['phone']] = $(document).find('.ocn-footer-wrapper').find('.ocn-cutomer-mobile').text();
        address = $(document).find('.ocn-footer-wrapper').find('.ocn-cutomer-address').text();
        dataI[opjpn['order_list']] = [];
        $orderList = $(document).find('.ocn-cart-items-list > .ocn-cart-item');
        for(j = 0; j < $orderList.length; ++j) {
            var dataJ = new Object();
            dataJ[opjpn['pid']] = $($orderList[j]).find('.ocn-item-name > a').attr('href');
            dataJ[opjpn['pid']] = dataJ[opjpn['pid']].substring(dataJ[opjpn['pid']].lastIndexOf('/') + 1);
            dataJ[opjpn['title']] = $($orderList[j]).find('.ocn-item-name > a').attr('title');
            dataJ[opjpn['price']] = $($orderList[j]).find('.ocn-item-price').text().replace(/\s\s+/g, "");
            dataJ[opjpn['scheduled_delivery']] = $($orderList[j]).find('.ocn-shipping-estimate-date')
                                                    .text().substring('Estimated Delivery: '.length + 1);
            dataJ[opjpn['delivery_address']] = address;
            dataI[opjpn['order_list']].push(dataJ);
        }
        data.push(dataI);
        postDataToServer('snapdeal', data, 'order');
    }
}

jQuery(document).ready(function($) {
    window.setTimeout(snapdeal($), 3000);
});
