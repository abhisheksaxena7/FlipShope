try {
    var price = document.getElementsByClassName("actual-price")[0].innerText;
    price = parseInt(price);
    var brand = document.getElementsByClassName("brand")[0].innerText;

    var discount, discount_string;
    if (document.querySelector('.productDiscount') !== null) {
        discount_string = document.getElementsByClassName("productDiscount")[0].innerText;
        discount_string = discount_string.match(/\d/g);
        discount_string = discount_string.join("");
        discount = parseInt(discount_string);
    }
    else
        discount = "";


    function getPID() {
        var link = window.location.href;
        var pid = link;
        if (pid.split("=").length > 1) {
            var length = pid.split("=").length;
            pid = pid.split("=");
            pid = pid[length - 1];
        }
        return pid;
    }

    var pid = getPID();

    var product_name = document.getElementsByClassName("product-title")[0].innerText;
    var mrp;
    var mrpDom = document.querySelectorAll('.standard-price');
    if (mrpDom !== null) {
        if(mrpDom[0].innerText != "")
            mrp = mrpDom[0].innerText;
        else if(typeof(mrpDom[1]) !== 'undefined' && mrpDom[1].innerText != "")
            mrp = mrpDom[1].innerText;
       //console.error("mrp", mrp);
    }
    else
        mrp = price;

    var parent = document.querySelector('.discounts');
    if (parent.querySelector('.standard-price ') !== null) {
        mrp = document.getElementsByClassName("standard-price")[1].innerText;
    }
    else
        mrp = price;
    var services = "";
    var color = "";
    var div_color = document.getElementsByClassName("product-info-left");
    for (i = 0; i < div_color.length; i++) {
        var color_containing_div = div_color[i].innerText.toLowerCase();
        if (color_containing_div.indexOf("color") !== -1) {
            var next_div_color = div_color[i].nextSibling;
            color = next_div_color.innerText;
            break;
        }
    }
    var description = document.getElementsByClassName("prod-disc")[0].innerText;
    var div_features = document.getElementsByClassName("product-info-left");
    var features = [];
    for (i = 0; i < div_features.length; i++) {
        features[i] = document.getElementsByClassName("product-info-left")[i].innerText + ":" + document.getElementsByClassName("product-info-left")[i].nextSibling.innerText;
    }
    var category = document.getElementsByClassName("breadcrumb")[0].children[2].innerText;
    var availability = 1;
    var img = document.getElementsByClassName("loaded primary-image thumb");
    var image = [];
    var index = 0;
    var main_img;
    var other_img = [];
    for (var i = 0; i < img.length; i++) {
        if (index == 0) {
            main_img = img[i].getAttribute('src');
            index++;
        }
        else {
            other_img[index - 1] = img[i].getAttribute('src');
            index++;
        }

    }
    var details = [pid, product_name, price, mrp, discount, features, availability, services, description, color, category, main_img, other_img, brand];
    var final_result = {
        pid: details[0],
        title: details[1],
        price: details[2],
        mrp: details[3],
        discount: details[4],
        features: details[5].toString(),
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
   //console.log('jabong data', final_result);
    json = JSON.stringify(final_result);
    chrome.runtime.sendMessage({
        sksmode: "productData",
        data: json,
        website: "jabong"
    }, function (response) {
    });
} catch(e) {}