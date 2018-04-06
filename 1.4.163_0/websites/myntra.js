try {
    var product_name = document.getElementsByTagName("h1")[0].innerText;

    function getPID() {
        var link = window.location.href;    
        var pid = link;
        pid = pid.split("#")[0];
        pid = pid.split("&")[0];
        pid = pid.split("?")[0];
        if (pid.split("/buy")
            .length > 1) {
            pid = pid.split("/buy")[0];
        }
        if (pid.split("/")
            .length > 1) {
            pid = pid.split("/");
            pid = pid[pid.length - 1];
        }
        if(isNaN(pid)) pid ='';
        return pid;
    }

    var pid = getPID();

    var price = document.getElementsByClassName("pdp-price")[0].innerText;
    price = test(price);
    price = parseInt(price);
    function test(words) {
        var n = words.split(" ");
        return n[n.length - 1];
    }

    var availability;
    if (document.querySelector('.size-buttons-out-of-stock') !== null) {
        availability = 0;
    }
    else
        availability = 1;

    var actual_price, actual_price_string;
    if (document.querySelector('.pdp-discount-container') !== null) {
        actual_price_string = document.getElementsByClassName("pdp-discount-container")[0].firstChild.innerText;
        actual_price_string = actual_price_string.match(/\d/g);
        actual_price_string = actual_price_string.join("");
        actual_price = parseInt(actual_price_string);
    }
    else
        actual_price = price;

    var discount, discount_string;
    if (document.querySelector('.pdp-discount') !== null) {
        discount_string = document.getElementsByClassName("pdp-discount")[0].innerText;
        discount_string = discount_string.match(/\d/g);
        discount_string = discount_string.join("");
        discount = parseInt(discount_string);
    }
    else
        discount = "";
    var rest_img = document.getElementsByClassName("thumbnails-thumbnail");
    var rest_img_url = [];
    for (i = 1; i < rest_img.length / 2; i++) {
        rest_img_url[i - 1] = rest_img[i].getAttribute("src");
    }

    var main_img = document.getElementsByClassName("thumbnails-selected-image")[0].getAttribute("src");
    var description = document.getElementsByClassName("pdp-product-description-content")[0].innerText;

    var l = document.getElementsByClassName("breadcrumbs-link").length;
    var brand_category = document.getElementsByClassName("breadcrumbs-link")[l - 3].innerText;

    var s = document.getElementsByClassName("breadcrumbs-bold-link")[0].innerText;
    s = s.split(" " + brand_category);
    var brand_name = s[0];

    var category = document.getElementsByClassName("breadcrumbs-link")[1].innerText;
    var features = "";
    var services = "";
    var color = "";
    var details = [pid, product_name, price, actual_price, discount, features, availability, services, description, color, category, main_img, rest_img_url, brand_name];
    var final_result = {
        pid: details[0],
        title: details[1],
        price: details[2],
        mrp: details[3],
        discount: details[4],
        features: details[5],
        availability: details[6],
        services: details[7],
        description: details[8],
        color: details[9],
        category: details[10],
        image: details[11],
        altImages: details[12],
        brand: details[13],
        link: window.location.href
    }

   //console.log('myntra data', final_result);
    json = JSON.stringify(final_result);
    chrome.runtime.sendMessage({
        sksmode: "productData",
        data: json,
        website: "myntra"
    }, function (response) {
    });
} catch(e) {}