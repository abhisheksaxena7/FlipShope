try {
    var pid = window.location.pathname.slice(1);

    var product_name;
    if (document.querySelector('h1') !== null) {
        product_name = document.getElementsByTagName("h1")[0].innerText;
    }
    else
        product_name = '';


    var price_string = document.getElementsByClassName("f_price")[0].innerText;
    price_string = price_string.match(/\d/g);
    price_string = price_string.join("");
    var price = parseInt(price_string);

    var discounted_price;
    if (document.querySelector('.o_price') !== null) {
        var discounted_price_string = document.getElementsByClassName("o_price")[0].innerText;
        discounted_price_string = discounted_price_string.match(/\d/g);
        discounted_price_string = discounted_price_string.join("");
        discounted_price = parseInt(discounted_price_string);
    }
    else {
        discounted_price = '';
    }

    var actual_price;
    if (document.querySelector('.o_price1') !== null) {
        var actual_price_string = document.getElementsByClassName("o_price1")[0].innerText;
        actual_price_string = actual_price_string.match(/\d/g);
        actual_price_string = actual_price_string.join("");
        actual_price = parseInt(actual_price_string);
    }
    else
        actual_price = '';

    var discount;
    if (document.querySelector('.discount') !== null) {
        discount = document.getElementsByClassName("discount")[0].innerText;
        discount = parseInt(discount.substring(discount.lastIndexOf(0, discount.lastIndexOf('%'))));
    }
    else
        discount = '';


    var span_list = document.getElementsByTagName("span");
    var brand_name = "";
    var category = "";
    for (var i = 0; i < span_list.length; i++) {
        if (span_list[i].getAttribute("itemprop") == "brand") {
            brand_name = span_list[i].innerText;
        }
        else if (span_list[i].getAttribute("itemprop") == "title") {
            category = span_list[i].innerText;
        }
    }


    var features = document.getElementsByClassName("tabbing_info")[0].innerText;

    var description = document.getElementsByClassName("des_info")[0].innerText;


    var main_img = document.getElementsByClassName("img")[0].getAttribute("src");

    var rest_img = [];
    if (document.querySelector('#thumblist') !== null) {
        var div_other_img = document.getElementById("thumblist").getElementsByTagName('li');
        for (var j = 0; j < div_other_img.length; j++) {
            rest_img[j] = div_other_img[j].getElementsByTagName('a')[0].getAttribute('data-image');
        }
    }

    var color;
    var colors_list = document.getElementById('specification').getElementsByTagName('tr');
    for (var i = 0; i < colors_list.length; i++) {
        if (colors_list[i].innerText.indexOf('Color') != -1)
            color = colors_list[i].innerText.substring(colors_list[i].innerText.lastIndexOf('	') + 1);
    }

    // var details=[product_name,price,discounted_price,actual_price,discount,brand_name,category,features,description,main_img,rest_img,color_list];
    if (document.querySelector('.product_ntavailable') !== null)
        var availability = 0;
    else
        var availability = 1;

    var final_result = {
        pid: pid,
        title: product_name,
        price: price,
        mrp: actual_price,
        discount: discount,
        features: features,
        availability: availability,
        description: description,
        color: color,
        category: category,
        image: main_img,
        altImages: rest_img,
        brand: brand_name,
        link: window.location.href
    }
   //console.log('shopclues data', final_result);
    json = JSON.stringify(final_result);
    chrome.runtime.sendMessage({
        sksmode: "productData",
        data: json,
        website: "shopclues"
    }, function (response) {
    });
} catch(e) {}