function flipkart($) {
    var price_string = $("div[class^=_1vC4]").first().text();
    price_string = price_string.match(/\d/g);
    price_string = price_string.join("");
    var price = Number(parseInt(price_string));


    var actual_price;
    if ($('div[class*=_16fZ]').length !== 0) {
        actual_price_string = $('div[class*=_16fZ]').first().text();
        actual_price_string = actual_price_string.match(/\d/g);
        actual_price_string = actual_price_string.join("");
        actual_price = parseInt(actual_price_string);
    }
    else
        actual_price = price;

    var product_name = document.getElementsByTagName("h1")[0].innerText;
    var flag_color = 0;
    var color = "";
    var div_color = document.querySelectorAll('div[class^=vmXP]');
    for (i = 0; i < div_color.length; i++) {
        var color_containing_div = div_color[i].innerText.toLowerCase();
        if (color_containing_div.indexOf("color") !== -1) {
            flag_color = 1;
            var next_div_color = div_color[i].nextSibling;
            color = next_div_color.firstChild.innerHTML;
            break;
        }
    }
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    var pid = getParameterByName('pid', location.href);

    var discount = (((actual_price - price) / actual_price) * 100).toFixed(0);

    var category = document.querySelectorAll("[class^=_1KHd]")[1].innerText;
    var features;
    if (document.querySelector('div[class^=g2dD]') !== null)
        features = document.querySelectorAll("div[class^=g2dD]")[0].innerText;
    else
        features = "";
    var services;
    if (document.querySelector('div[class^=n9S0]') !== null)
        services = document.querySelectorAll("div[class^=n9S0]")[0].innerText;
    else
        services = "";

    var description;
    if (document.querySelector('div[class^=bzey]') !== null)
        description = document.querySelectorAll("div[class^=bzey]")[0].innerText;
    else
        description = "";

    var main_img = document.querySelectorAll("div[class^=_1kJJ]")[0].style.backgroundImage;
    var main_img_url = main_img.substring(4, main_img.length - 1);
    var rest_img = document.querySelectorAll("div[class^=_1kJJ]");
    var rest_img_url = [];
    for (i = 1; i < rest_img.length; i++) {
        var rest_image_individual = rest_img[i].style.backgroundImage;
        rest_img_url[i - 1] = rest_image_individual.substring(4, rest_image_individual.length - 1);
    }
    var len;
    len = document.querySelectorAll("div[class^=_1KHd]").length;
    var brand = document.querySelectorAll("div[class^=_1KHd]")[len - 1].innerText;
    var brand_name = brand.substr(0, brand.indexOf(' '));
    var availability;
    if (document.querySelector('div[class^=_3xgq]') !== null)
        availability = 0;
    else
        availability = 1;

    var details = [pid, product_name, price, actual_price, discount, features, availability, services, description, color, category, main_img_url, rest_img_url, brand_name];
    // var json = JSON.stringify(details);
    //console.log(json);

    //alert("Name="+details[0]+"\n"+"Price="+details[1]+"\n"+"mrp="+details[2]+"\n"+"off ="+details[3]+"\n"+"Features="+details[4]+"\n"+"availability="+details[5]+"\n"+"services="+details[6]+"\n"+"description="+details[7]+"\n"+"color="+details[8]+"\n"+"category="+details[9]+"\n"+"main_img="+details[10]+"\n"+"rest_img="+details[11]+"\n"+"brand="+details[12]);

    var final_result = {
        pid: details[0],
        title: details[1],
        price: details[2],
        mrp: details[3],
        discount: details[4],
        features: details[5],
        availability: details[6],
        services: details[7].replace(/\s\s+/g, ""),
        description: details[8],
        color: details[9],
        category: details[10],
        image: details[11],
        altImages: details[12],
        brand: details[13],
        link: window.location.href
    }
    //console.log('flipkart data', final_result);
    data = JSON.stringify(final_result);
    chrome.runtime.sendMessage({
        sksmode: "productData",
        data: data,
        website: "flipkart"
    }, function (response) {
    });
}

jQuery(document).ready(function($) {
    try{
        flipkart($);
    } catch(e) {console.log(e.message);}
});
