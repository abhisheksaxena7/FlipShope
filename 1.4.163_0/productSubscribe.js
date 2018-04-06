$s = jQuery.noConflict();
function getProductId(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getPIDFromStoreName(store,url){
    var pid;
    switch(store) {
    case "flipkart" :
        pid=getProductId("pid", url);
        break;
    case "amazon":
        pid= window.location.pathname.split("/")[3];
        break;
    case "snapdeal":
        pid=url.substring(url.lastIndexOf('/')+1);
        if(pid.lastIndexOf("#")!=-1)
            pid=pid.substring(0,pid.lastIndexOf('#'));
        break;
    case "shopclues":
        pid = window.location.pathname.slice(1)
        break;
    case "myntra":
        var pid_array=url.split('/');
        pid_index=pid_array.length;
        pid=pid_array[pid_index-2];
        break;
    case "paytm":
        var link = window.location.href;
        pid = link;
        if (pid.split("#")
            .length > 1) {
            pid = pid.split("#")[0];
        }
        if (pid.split("&")
            .length > 1) {
            pid = pid.split("&")[0];
        }
        if (pid.split("?")
            .length > 1) {
            pid = pid.split("?")[0];
        }
        if (pid.split("/shop/p/")
            .length > 1) {
            pid = pid.split("/shop/p/")[1];
        }
        if (pid.split("/shop/g/")
            .length > 1) {
            pid = "";
        }
        break;
    case "jabong":
        pid=getProductId("cid", url);
        break;

    }
    return pid;
}

function getStoreName(url){
    var hostname = window.location.hostname;
    var storeName;
    hostname = hostname.split('.');
    if(hostname[0] === 'www')
        storeName = hostname[1];
    else
        storeName = hostname[0];
    return storeName;
}

function getProductTitle(store){
    var productTitle;
    switch(store) {
    case "flipkart" :
        productTitle = $s("h1")[0].innerText;
        break;
    case "amazon":
        productTitle = $s('h1')[0].innerText;
        break;
    case "paytm":
        productTitle = $s('h1')[0].innerText;
        break;
    case "myntra":
        productTitle = $s('h1')[0].innerText;
        break;
    case "jabong":
        productTitle = $s('h1')[0].innerText;
        break;
    case "snapdeal":
        productTitle = $s('h1')[0].innerText;
        break;

    case "shopclues":
        productTitle = $s('h1')[0].innerText;
        break;
    }
    return productTitle;

}

function getProductImage(store){
    var productImage;
    switch(store) {
    case "flipkart" :
        productImageAll=$s("img");
        for(var i =0;i<productImageAll.length;i++)
        {
            if(i==2)
              productImage=productImageAll[i].getAttribute('src');
        }
        break;
    case "amazon":
        var img;
        img = $s(document).find("#landingImage").attr('data-a-dynamic-image');
        img = JSON.parse(img);
        productImage=Object.keys(img)[0];
        break;
    case "snapdeal":
        var img= $s(document).find('#criteo-tags-div').next().find('img').attr('src');
        if(!img)
            img = $s(document).find('.cloudzoom').attr('src');
        productImage=img;
        break;
    case "shopclues":
        productImage =$s(document).find('#zoom_picture_gall').attr('src');
        break;
    case "myntra":
        productImage=$s('img')[1].getAttribute('src');
        break;
    case "paytm":
        productImage=$s('img')[0].getAttribute('src');
        break;
    }
    return productImage;
}

function checkIfProductPage(store, link){
    var productPageFlag=0;
    switch(store) {
    case "flipkart" :
        if(link.indexOf('pid=')!=-1)
            productPageFlag=1;
        break;

    case "amazon":
        var pid= window.location.pathname.split("/")[3];
        if(pid.length==10)
        productPageFlag=1;
        break;

    case "snapdeal" :
        if(link.split("/")[3]=="product")
            productPageFlag=1;
    break;

    case "paytm":
        break;
        if(link.indexOf('src=')!=-1)
            productPageFlag=1;
        break;

    case "jabong":
         if(link.indexOf('cid=')!=-1)
            productPageFlag=1;
        break;
    case "myntra":
        var len= link.split("/").length;
            if(link.split("/")[len-1]=="buy")
                productPageFlag=1;
         break;
    case "shopclues":
        if($s(document).find('.pID'))
            productPageFlag=1;
    }
    return productPageFlag;
}
var url = window.location.href;
        var store = getStoreName(url);
        var pid = getPIDFromStoreName(store,url);
        var productTitle=getProductTitle(store);
  var productImage=getProductImage(store);
var userId;
 if(checkIfProductPage(store,url) === 1) {
     $s("body").append('<div id="message_on_suscribe"><div id="show_message_subscription"></div><div id="close_popup">X</div></div>');
     $s("body").append('<div id="wrapper" ><div class="modal-toggle button_modal circle_modal"  id="modal-click">Click</div></div>');
     $s("body").append('<div class="modal"><div class="modal-overlay modal-toggle"></div><div class="modal-wrapper modal-transition"><div class="modal-header"><div class="modal-close modal-toggle" ></div><div class="modal-heading" >Watch price and share with friends</div></div><div class="modal-body"><div class="modal-content" style="display:inline-flex"><div id="div-container"><div id="product-title">'+productTitle+'</div><img id="productImage" src='+productImage+'></div><div style="margin-left:2.5vw"><div id="div-sub-container" ><div class="title">Price Wanted</div><input class="input_box" type="text" id="priceWanted" placeholder="Price Wanted"><center><span id="invalid_price_msg"></span></center><button class="button_popup input_box" id="subscribeButton">Subscribe</button></div><div id="div-sub-container" ><div class="title">Share</div><input class="input_box" id="phoneNumber" type="text" maxlength="10" placeholder="Mobile No (10 digit)"><center><span id="invalid_no_msg"></span></center><button class="button_popup input_box" id="smsButton">Share</button></div><div id="add_wishlist">&#43 Add to my wishlist </div></div></div><div class="fs_footer" style="background: #009688;"> © Powerd by Flipshope.com </div></div></div></div>');
     $s("body").on("click", ".modal-toggle", function(e){
          e.preventDefault();
          chrome.runtime.sendMessage({
            sksmode : "analytics",
            category : 'watch price',
            action : 'click',
            label : 'modal open'
            });
          chrome.runtime.sendMessage({
              sksmode: "checkLogin"
          }, function(response) {
              if(typeof response.loggedIn !== 'undefined' && response.loggedIn === true) {
                  userId = response.userId;
                  $s('.modal').toggleClass('is-visible');
              }
              else {
                  chrome.runtime.sendMessage({
                      sksmode: "openPopupWindow"
                  }, function(response) {});
              }
          });
    });
 }
$s('#modal-click').mouseover(function(){
    $s("#show_message").css("left", "20px");
});
$s('#modal-click').mouseout(function(){
    $s("#show_message").css("left", "-500px");
});


 $s("#subscribeButton").click(function(){
        var price=$s("#priceWanted").val();

        var url = window.location.href;
        var store = getStoreName(url);
        var pid = getPIDFromStoreName(store,url);
        var productTitle=getProductTitle(store);
        var productImage=getProductImage(store);
        if(/^\d+$/.test(price))
        {
            $s('#invalid_price_msg').text("");
            var data_send = {
                            pid:pid,
                            price:price,
                            store:store,
                            title:productTitle,
                            image:productImage,
                            userId: userId
                            };
            chrome.runtime.sendMessage({
            sksmode : "analytics",
            category : 'watch price',
            action : 'create',
            label : JSON.stringify(data_send)
            });
            data = JSON.stringify(data_send);
            chrome.runtime.sendMessage({
                sksmode: "createUserProductSubcription",
                data: data,
            }, function (response) {
                console.log(response.reply);
                var message = JSON.parse(response.reply);
                if(message['SUCCESS']==true){
                    // alert("DONE SUCCES");
                    $s("#message_on_suscribe").removeClass("fsred");
                    $s("#show_message_subscription").text("You have succesfully subscribed for"+productTitle);
                }
                else if(message['SUCCESS']==false){
                    // alert("Failed And Reason Is"+message['CAUSE']);
                    $s("#message_on_suscribe").addClass("fsred");
                    if(message['CAUSE']) $s("#show_message_subscription").text(message['CAUSE']);
                    else $s("#show_message_subscription").text("Sorry Your Subscription Failed !");
                }
                $s('.modal').toggleClass('is-visible');
                $s("#message_on_suscribe").css('right','20px');
                $s('#close_popup').click(function(){$s('#message_on_suscribe').css('right','-500px');});
                setTimeout(function(){$s('#message_on_suscribe').css('right','-500px');},6000)
            });
        }
        else {
            $s('#invalid_price_msg').text("* Invalid Price");
        }
});

 $s("#smsButton").click(function(){

        var toPhone=$s("#phoneNumber").val();
        var url = window.location.href;
        var data = {
                        toPhone:toPhone,
                        url:url,
                        fromUser: userId
                        };
        data = JSON.stringify(data);
        chrome.runtime.sendMessage({
            sksmode : "analytics",
            category : 'sms share',
            action : 'send sms',
            label : data
            });
        if(toPhone.replace(/[^0-9]/g,"").length==10){
            $s('#invalid_no_msg').text('');
            chrome.runtime.sendMessage({
                sksmode: "productSmsShare",
                data: data
            }, function (response) {
                console.log(response.reply);
                var message = JSON.parse(response.reply);
                if(message['SUCCESS']==true){
                    $s("#message_on_suscribe").removeClass("fsred");
                    $s("#show_message_subscription").text(productTitle+" has been succesfully shared to "+toPhone);
                }
                else if(message['SUCCESS']==false){
                    $s("#message_on_suscribe").addClass("fsred");
                    if(message['CAUSE']) $s("#show_message_subscription").text(message['CAUSE']);
                    else $s("#show_message_subscription").text("This product could not be share because your daily sms limit crossed");
                }
                $s('.modal').toggleClass('is-visible');
                $s("#message_on_suscribe").css('right','20px');
                $s('#close_popup').click(function(){$s('#message_on_suscribe').css('right','-500px');});
                setTimeout(function(){$s("#message_on_suscribe").css('right','-500px');},4000);
            });
        }
        else{
            $s('#invalid_no_msg').text('* Invalid Mobile Number');
        }
});