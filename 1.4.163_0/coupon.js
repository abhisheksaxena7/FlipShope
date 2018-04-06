var myid = chrome.runtime.id;
var site = window.location.hostname;
var proto = document.location.protocol;
$s = jQuery.noConflict();
var request = new XMLHttpRequest();
if(site.split(".").length == 2 )  var site_name = site.split(".")[0];
else var site_name =site.split(".")[1];
var fs_url = site_name;
switch (fs_url)
{
    case "archiesonline":
        fs_url = "archies";
    break;
    case "cromaretail":
        fs_url = "croma";
    break;
    case "ezoneonline":
        fs_url = "ezoneon";
    break;
    case "globusfashion":
        fs_url = "globus";
    break;
    case "indiatimes":
        fs_url = "indiatimesshopping";
    break;
    case "goindigo":
        fs_url = "indigo";
    break;
    case "rediff":
        fs_url = "rediffshopping";
    break;
}
site_name = site_name.charAt(0).toUpperCase()+site_name.slice(1);
var cou_page = 0;
var coupon_data = '<div class="fs_background for_fs_coupons"><fsall id="fs_all_coupons"> <div class="fs_side_container fs_coupon fs_closed"> <div class="fs_side_button"> <div class="fs_icon"> <img src="chrome-extension://' + myid + '/images/coupon_icon.png"> </div> <div class="fs_icon_desc"> Coupons </div> </div> <div class="fs_sider"> <div class="fs_header"> ' + site_name + ' Coupons </div> <a href="https://flipshope.com/add_voucher" target="_blank"><div class="fs_addCoupon"> <div class="fs_boot-row"> <div class="fs_boot-9"> Add Voucher </div> <div class="fs_boot-3 fs_boot-center"> <i>+</i> </div> </div> </div></a> <div class="fs_body">';
var deals_data = '<div class="fs_background for_fs_deals"><fsall id="fs_all_deals"> <div class="fs_side_container fs_deals fs_closed"> <div class="fs_side_button"> <div class="fs_icon"> <img src="chrome-extension://' + myid + '/images/deals_icon.png"> </div> <div class="fs_icon_desc"> Deals </div> </div> <div class="fs_sider"> <div class="fs_header"> ' + site_name + ' Deals </div> <div class="fs_body">';
var compare_data = '<div class="fs_background for_fs_compare"><fsall id="fs_all_compare"> <div class="fs_side_container fs_compare fs_closed"> <div class="fs_side_button"> <div class="fs_icon"> <img src="chrome-extension://' + myid + '/images/compare_icon.png"> </div> <div class="fs_icon_desc"> Compare </div> </div> <div class="fs_sider"> <div class="fs_header"> Compare </div> <div class="fs_body">';
function getant(n) {
    try{
    switch (n) {
    case "www.myntra.com":
        var a = document.getElementsByTagName("h1")[0].innerText;

        var t = document.getElementsByClassName('price')[0].innerText.split("CLICK")[0].split(" ")[1].replace(/\s+/g, '');
        break;
    case "www.homeshop18.com":
        var a = document.getElementById("productTitleInPDP")
            .innerText;
        var t = document.getElementById("hs18Price")
            .innerText.split("Rs. ")[1].replace(/\s+/g, '');
        break;
    case "www.jabong.com":
        var q = document.getElementsByClassName("brand-name")[0].innerText;
        var p = document.getElementById("qa-title-product")
            .innerText;
        var a = q + " " + p;
        var t = document.getElementById("before_price")
            .innerText.split("Rs. ")[1].replace(/\s+/g, '');
        break;
    case "www.shopclues.com":
        var a = document.getElementsByClassName("name")[0].getElementsByTagName("h1")[0].innerText;
        var t = document.getElementsByClassName("product-pricing")[0].getElementsByClassName("price")[0].innerText.split("Rs.")[1].replace(",", "")
            .replace(/\s+/g, '');
        break;
    case "www.snapdeal.com":
        var a = document.getElementsByClassName("font20")[0].innerHTML;
        var t = document.getElementById("selling-price-id")
            .innerHTML.replace(/\s+/g, '');
        break;
    case "shopping.rediff.com":
        var a = document.getElementsByClassName('prodtitlenew')[0].innerText;
        var t = document.getElementsByClassName('cinch_price_amount')[0].innerText.replace(",", "")
            .replace(/\s+/g, '');
        break;
    case "www.infibeam.com":
        var a = document.getElementsByClassName('product-title-big')[0].innerText;
        var t = document.getElementById('price-after-discount')
            .innerText.split(" ")[1].replace(",", "")
            .replace(/\s+/g, '');
        break;
    case "shopping.indiatimes.com":
        var a = document.getElementsByTagName("h1")[0].innerText;
        var t = document.getElementsByClassName('offerprice flt')[0].innerText.replace(/\s+/g, '');
        break;
    case "www.ebay.in":
        var a = document.getElementById("itemTitle")
            .innerText;
        var t = document.getElementById("prcIsum")
            .innerHTML.split(" ")[1].split(".")[0].replace(",", "")
            .replace(/\s+/g, '');
        break;
    case "www.flipkart.com":
        var x = document.getElementsByTagName('h1');
        for (var i = 0; i, x.length; i++) {
            if (x[i].className == "title") {
                var a = x[i].innerHTML;
                break;
            }
        }
        var x = document.getElementsByClassName('selling-price omniture-field');
        for (var i = 0; i < x.length; i++) {
            var t = x[0].innerHTML.split(" ")[1].replace(",", "")
                .replace(/\s+/g, '');
        };
        break;
    case "www.amazon.in":
        var a = document.getElementById("productTitle")
            .innerText;
        if (document.getElementById("priceblock_saleprice")) var t = document.getElementById("priceblock_saleprice")
            .innerText.replace(/\s+/g, '').replace(",","");
        else if (document.getElementById("priceblock_ourprice")) var t = document.getElementById("priceblock_ourprice")
            .innerText.replace(/\s+/g, '').replace(",","");
        break;
    }
    if (a !== undefined && t !== undefined) initComparison(a, t);
    else if (a !== undefined) initComparison(a, 0);
    if (a) document.getElementById("f_search").placeholder = a;
}
catch(err) {}
}
function initComparison(e, t) {
    if (t == 0) var i = "http://compare.buyhatke.com/updates10.php?searchText=" + e;
    else var i = "http://compare.buyhatke.com/updates10.php?searchText=" + e + "&price=" + t;
    $s.ajax({
        url: i,  
        type: "GET",  
        cache: false,
        timeout: 30000,
       // $s("table#priceTable").append('<img id="loadingDiv" src="images/loading.gif" style="position: absolute;top: 50%;margin: -56px;display: none;">');
        success: function(t) {
        var t = $s.parseJSON(t);
        if (t) {
            $s("#comp_data").html("");
            $s('#flip-toggel-btn').show();
            for (var i = 0; i < t.length; i++) {
                var x = t[i].link;
                var l = x.split("?redirect=")[1];
                if (l) var f = "https://flipshope.com/redirect.php?url=" + l;
                else var f = "https://flipshope.com/redirect.php?url=" + x;
                compare_data += '<a href="' + f+ '" target="_blank"><div class="fs_indi_row"> <div class="fs_boot-row"> <div class="fs_boot-3"> <img src="' + t[i].image + '" class="fs_boot-responsive fs_image"> </div> <div class="fs_boot-9"> <div class="fs_deal_name"> '+t[i].prod+'</div> <div class="fs_boot-row"> <div class="fs_boot-4 fs_shop">' + t[i].site_name +' </div> <div class="fs_boot-8 fs_boot-right"><span class="fs_price"> Rs. ' +t[i].price + ' </span></div> </div> </div> </div> </div></a>';
        }
        compare_data += '</div> <div class="fs_footer"> © Powerd by Flipshope.com </div> </div></div></fsall></div>';
        $s("#fs_all_container").append(compare_data);
      }
        },
         error: function(){
           }
    }); 
}

function apply_coupon(m,cp)
{
switch (m) {
    case "www.amazon.in":
    $s('input[name="claimCode"]')[0].value = cp;
    $s('input[value="Apply"]')[0].click();
        break;
    case "www.homeshop18.com":
        $s('input[name="coupon"]')[0].value = cp;
         $s('button.cssbtn-orange')[0].click();
        break;
    case "www.jabong.com":
        $s("input#couponCode")[0].value=cp;
        $s('input[value="Apply"]')[0].click();
        break;
    case "secure.shopclues.com":
        $s('input[name="coupon_code"]')[0].value = cp;
        $s('a[rev="coupon_code_form"]')[0].click();
         break;
    case "www.snapdeal.com":
        $s('input[name="promocode"]')[0].value = cp;
        $s('span.apply-bttn.promo-apply')[0].click();
        break;
    case "www.infibeam.com":
        $s('input[name="promotionCode"]')[0].value = cp;
        $s('input[name="Apply"]')[0].click();
        break;
    case "paytm.com":
        document.getElementsByClassName("F12")[0].click();
       setTimeout(function(){document.getElementsByClassName("input-promo")[0].value = cp;},100);
        break;
    case "order2.ebay.in":
        $s("input#enterCoupon")[0].value = cp; 
        $s("#couponApply").click();
        break;
    case "zovi.com":
        $s('input[name="coupon_code"]')[0].value = cp;
        $s("button", ".couponform")[0].click();
        break;
    case "www.infibeam.com":
        $s('input[name="promotionCode"]')[0].value = cp;
        $s('input[name="Apply"]')[0].click();
        break;
    case "www.infibeam.com":
        $s('input[name="promotionCode"]')[0].value = cp;
        $s('input[name="Apply"]')[0].click();
        break;
}
}


$s(document)
    .ready(function () {
        if(proto == "http:"){
          getant(site);
  }
});

$s("body").append('<div id="fs_all_container" title="Drag me"><div style="background-image: url(chrome-extension://'+myid+'/images/icon-close.png);" id="fs_close_all"></div></div>');
$s("body").on("click", "#fs_close_all", function(){$s("#fs_all_container").css("right","-60px"); $s(".fs_icon").css("display","none");});
    $s("body").on("click", ".fs_side_button", function() {
    $s(this)["parent"]()["toggleClass"]("fs_closed");
    $s(".fs_side_container")["not"]($s(this)["parent"]())["addClass"]("fs_closed");
    });
if(localStorage['fs_storet'] && localStorage['fs_store'] && localStorage['fs_storet'] > new Date().getTime() && localStorage['fs_store'].length > 25){
    addcouponbar( JSON.parse(localStorage['fs_store']));
}
else {
    localStorage.removeItem('fs_storet'); 
    localStorage.removeItem('fs_store');
    chrome.runtime.sendMessage({
      sksmode : "coupon",
      site : fs_url
    }, function(response) {});
}
chrome.runtime.onMessage.addListener(function(response) {
    addcouponbar(response);});
function addcouponbar(response){
   var data = '{"coupons":[{"id":"105084","code":"DEALCD","title":"25% OFF","description":"25% Discount on Kotak Bank users"},{"id":"106936","code":"NICEOFFR25","title":"25% OFF","description":"Avail 25% discount On Min. Purchase of &#8377;1999"},{"id":"105085","code":"ICICI500","title":"&#8377;500 OFF","description":"Get &#8377;500 off for ICICI Bank Users"},{"id":"106939","code":"FFF","title":"25% OFF","description":"Get 25% Off On Min. Purchase of &#8377;1599"}],"deals":[{"id":"120343","code":null,"title":"20% OFF","description":"Avail 20% off on Buying 2 Jack &amp; Jones"},{"id":"123613","code":null,"title":"70% OFF","description":"Avail Up to 70% Off on SPortswear"},{"id":"122080","code":null,"title":"30% OFF","description":"Get 30% Discount on Women&#039;s Clothing And More"},{"id":"101913","code":null,"title":"Great Value","description":"Buy 2 @ &#8377;1095 on Jack &amp; Jones Apparels For Men"},{"id":"108029","code":null,"title":"Free","description":"Free Nail Paint On Min. Purchase of &#8377;1099"},{"id":"107064","code":null,"title":"Super Offer","description":"2 Women apparel @ just &#8377;599"},{"id":"107066","code":null,"title":"10% OFF","description":"10% OFF on Socks"}],"total_coupons":4,"total_deals":7}';
   //response = {  data : data, id : "flipshope", coupon : 1}
  if (response && response["coupon"] == 1) {
    var all = JSON.parse(response['coupondata']);
    var coupon_number = all['total_coupons'];
    var deal_number = all['total_deals'];
    coupons = all['coupons'];
    var deals = all['deals'];
    var fs_id = response["id"];
    localStorage['fs_storet'] = new Date().getTime() + 1800000;
    localStorage['fs_store'] = JSON.stringify(response);
    for (i=0;i < coupons.length;i++) {
      var coupon = coupons[i];
      coupon_data += '<div class="fs_indi_row fs_coupon_row"> <div class="fs_coupon_head"><a href="https://flipshope.com/coupons/go.php?id='+coupon["id"]+'&fs_id='+fs_id+'" target="_blank" >' + coupon['title'] +'</a> <div style=" color: gray; font-size: 13px;">'+ coupon['description']+'<a href="https://flipshope.com/coupons/'+fs_url+'" target="_blank" class="see_more">View full details</a> </div></div> <div class="fs_boot-row copy_parent"> <div class="fs_boot-9"> <input class="fs_boot-input fs_copy-coupon" type="text" disabled="disabled" value="' + coupon["code"] + '"> </div> <div class="fs_boot-3"> <span id="' + coupon["code"] + '" class="fs_boot-copy" copy-data="' + coupon["code"] + '"> <img  src="chrome-extension://' + myid + '/images/copy.png"> </span> </div> </div> </div>';
    }
    for (i=0;i < deals.length;i++) {
        var deal = deals[i];
        deals_data += '<div class="fs_indi_row"> <div class="fs_boot-row"> <div class="fs_boot-2"> <img src="chrome-extension://' + myid + '/images/alt.png"> </div> <div class="fs_boot-10"> <div class="fs_coupon_head"><a href="https://flipshope.com/coupons/go.php?id='+deal["id"]+'&fs_id='+fs_id+'" target="_blank" >' + deal['description'] +'</a><a href="https://flipshope.com/coupons/'+fs_url+'" target="_blank" class="see_more" >View full details</a> </div>  </div> </div> </div> ';
    }
    coupon_data += '</div> <div class="fs_footer"> © Powerd by Flipshope.com </div> </div> </div></fsall></div>';
    deals_data += '</div> <div class="fs_footer"> © Powerd by Flipshope.com </div> </div> </div></fsall></div>';
    if(is_cou_page(window.location.href)){fullautocoup(coupons,coupon_number)}
    if (coupon_number) {
      $s("#fs_all_container").append(coupon_data);
        chrome.runtime.onMessage.addListener(function(request, sender) {
          if(request.newurl)
          {
            if(request.newurl == 'amazoncou')
            {
            console.log('done');
            fullautocoup(coupons);
            }
          }
        });
    }
    if (deal_number) {
      $s("#fs_all_container").append(deals_data);
    }
    $s(".fs_boot-copy")["click"](function() {
      var code = $s(this)["attr"]("copy-data");
      chrome["runtime"]["sendMessage"]({
        copy : "yes",
        code : code
      }, function(dataAndEvents) {
      });
      var r20 = "Copied";
      $s('<p class="fs_tooltip"></p>')["text"](r20)["appendTo"]("body")["fadeIn"]("slow");
      $s(document)["mousemove"](function(dataAndEvents) {
        /** @type {number} */
        var pickWinLeft = dataAndEvents["pageX"] - 67;
        /** @type {number} */
        var pickWinTop = dataAndEvents["pageY"] - 42;
        $s(".fs_tooltip")["css"]({
          top : pickWinTop,
          left : pickWinLeft
        });
      });
      setTimeout(function() {
        $s(".fs_tooltip")["fadeOut"]("slow");
      }, 800);
    });
  }
}
function is_cou_page(page)
{
    var pages = ["secure.yatra.com/checkout-ui","www.foodpanda.in/review-order/", "www.cleartrip.com/hotels/itinerary","www.cleartrip.com/trains/itinerary" ,"www.cleartrip.com/packages/itinerary","goibibo.com/bus-booking/","www.cleartrip.com/flights/itinerary","goibibo.com/go/booking","goibibo.com/gostays/hotel-booking","www.goibibo.com/hotels/hotel-booking","www.goibibo.com/flight-booking","paytm.com/coupons","jabong.com/cart","amazon.in/gp/buy/spc/handlers/display.html","http://www.homeshop18.com/shopping-cart","secure.shopclues.com/index.php?dispatch=checkout.checkout","www.snapdeal.com/proceedToCheckout","www.snapdeal.com/buyNow","http://www.infibeam.com/ShowCart.action","myntra.com/checkout/cart","ebay.in/ReviewOrder?cartId"];
    for(i=0; i<pages.length; i++)
    {
        if(page.indexOf(pages[i]) > -1) return 1;
    }
    return 0;
}
String.prototype.getprice = function(){ return parseFloat(this.replace(/[^\d.]/g, '').replace(/^\./, ''));}
if(!reload) var reload=0;
if(!isfinal) var isfinal = 0;
function fullautocoup(coupons,number){
if(number)var autocou = '<div id="fs_popup_container"><div><div id="fs_cornerContent"><div id="fs_m_contaoner"><div><div id="fs_popup_image_cont"><img src="chrome-extension://' + myid + '/images/flipshopelogo.png" id="fs_popup_logo"> <button id="fs_popup_close" style="background-image: url(chrome-extension://' + myid + '/images/icon-close.png);"></button> <img src="chrome-extension://' + myid + '/images/coupons_found.svg"><div id="fs_popup_coupon_cont"><div id="fs_popup_coupon_sub_cont"><p id="fs_popup_coupon_count"><span>Coupon codes</span> <span id="fs_popup_span2">'+number+'</span></div></div><button id="fs_save_money" class="fs_save_money">Save Money</button></div></div></div></div></div></div>';
else var autocou = '<div id="fs_popup_container"><div><div id="fs_cornerContent"><div id="fs_m_contaoner"><div><div id="fs_popup_image_cont"><img src="chrome-extension://' + myid + '/images/flipshopelogo.png" id="fs_popup_logo"> <button id="fs_popup_close" style="background-image: url(chrome-extension://' + myid + '/images/icon-close.png);"></button> <img src="chrome-extension://' + myid + '/images/coupons_not_found.png"><a href="https://flipshope.com/add_voucher" target="_blank" class="fs_save_money">Share it with us</a></div></div></div></div></div></div>';
$s("body").append(autocou);
if((getCookie('fsapplycou') || getCookie("fscouponnumber")) && !getCookie("fsstopa")){$s(document).ready(function(){reload = 1; startautoapply(coupons);});}
$s("body").on("click", "#fs_save_money", function() {startautoapply(coupons);$s('#fs_popup_container').remove();});
$s("body").on("click", "#fs_popup_close", function() {$s('#fs_popup_container').remove();});
}
function startautoapply(coupons)
{
   total = coupons.length;
    i = 0;
    if( reload && parseInt(getCookie("fscouponnumber")) >0) i= parseInt(getCookie("fscouponnumber"));
    max_dis= [0,''];
    if(i> total) return;
    var coupon_popup ='<div id="fullautopopup" style="position:fixed;top:0;right:0;z-index:2147483647;transition:opacity .2s;opacity:1;pointer-events:none;visibility:initial"id=fsautocou><div><style>#fsautocou *{font-family:avenir,avenir-next-regular,"Open Sans",sans-serif,arial;box-sizing:border-box}#fsautocou div{color:#40484f}#fsautocou a{display:inline-block;text-decoration:none;color:#69bff0}#fsautocou a:hover{text-decoration:none;color:#51a8d8}#fsautocou a:focus{text-decoration:none;color:#51a8d8}</style><div style="width:634px;left:calc(50vw - 317px); left: -200p;position:fixed;z-index:1;pointer-events:auto;top:40px"><div style=position:fixed;top:0;left:0;background-color:#40484f;opacity:.8;height:100vh;width:100vw></div><div style=position:relative><div style=background-color:#feffff;overflow:auto;border-radius:4px;box-sizing:content-box><div><div style="height:60px;background-color:#fff;text-align:center;border-bottom:1px solid #d1d8e1;box-shadow:0 1px 6px 0 rgba(0,0,0,.1);border-top-left-radius:4px;border-top-right-radius:4px;position:relative"><img src="https://flipshope.com/assets/images/logo.png" style=height:40px;margin-top:10px;margin-right:15px;margin-left:15px;margin-bottom:10px> <button id="fsautoclose" style="position:absolute;top:25px;right:20px;padding:0;cursor:pointer;background-image:url(https://flipshope.com/assets/images/autoimages/icon-close.png);background-size:100%;height:10px;width:10px;border:none;outline:0;background-color:transparent;transition:opacity .2s;opacity:.7"></button><div style=position:absolute;bottom:-2px;height:2px;color:#e6be50;background-color:#ffd359;opacity:0></div></div><div id="fsautofullcont" style=overflow:auto;text-align:center><div style=width:100%;height:194px;overflow:visible><img src=https://flipshope.com/assets/images/autoimages/try.svg style=width:100%;background-color:#F0FBFB></div><div style=margin-top:18px;font-weight:600;font-size:14px;line-height:20px>Brewing up a sweet deal...</div><div style="margin:20px auto;height:12px;width:300px;border-radius:2px;background-color:#f6cca4;overflow:hidden"><div style="height:100%;background-color:#f1863c;transition:width .2s;width:0%"id=fsautoprogbar></div></div><div id="fscouprogfull" style=font-weight:600;font-size:14px >Testing code <span id=fscouprog style="font-weight:600;font-size:14px">'+i+'</span> of '+total+'</div><div style=margin-top:10px;margin-bottom:22px ><span id=fsautocoupcode style="font-size:12px;padding:4px 6px;background-color:#f9fbfd;border:1px solid #d1d8e1;border-radius:1px;font-weight:600">Flipshope</span><div id="fstotalsav" style="display: none; right: 20px; bottom: 0px; position: absolute; font-size: 13px; color: black; "><span id="fstotalsavrs" style=" color: green; font-size: 17px; font-weight: 900;"></span> Saved till now</div></div></div></div></div></div></div></div><div id="fspix" style="width: 1px;height: 1px;"></div></div>';
    $s("body").on("click", "#fsautoclose", function() {$s("#fullautopopup").remove();console.log(1);setCookie("fsstopa",1, 1);});
    $s("body").append(coupon_popup);
    if(reload && getCookie('fsapplycou1')) max_dis=getCookie('fsapplycou1').split('#');
    applyindi();    
}
    function applyindi()
    {
        if(!$s('#fullautopopup').length) return 0;
        var prevcode ="";
        if(i>0) var prevcode = coupons[i-1]['code'];
        var code = coupons[i]['code'];
        var percent = (i+1)*100/total+"%";
        $s('#fsautocoupcode').text(code);
        $s('#fscouprog').text(i+1);
        $s('#fsautoprogbar').css('width',percent);
        i++;
        switch (site)
        {
            case "paytm.com":
            $s("a[ng-click='showPromoDiv = true']")[0].click();
            $s("input[ng-model='promoCode']")[0].click();
            $s("input[ng-model='promoCode']:eq(0)").val(code);
            $s("a[ng-show='promoCode']")[0].click();
            if($s("a[ng-show='promoText']:eq(0)").text().getprice() > max_dis[0])
                {

                    max_dis[0] = $s("a[ng-show='promoText']:eq(0)").text().getprice();
                    max_dis[1] = code;
                }            
            break;        
            case "www.jabong.com":
            if(getCookie('fsapplycou')){var coupon =getCookie('fsapplycou').split('#'); setTimeout( function(){ applyfinal(coupon);},10000); break;}
            var csrf = $s("input[name='_csrf']")[0].value;
            $s.post("https://www.jabong.com/cart/applycoupon/", {
                      couponcode: code,
                      _csrf: csrf
                  })
                    .done(function(data) {
                        if(typeof(data) != "object")
                        {
                            if(data.split("Discount")[1].split("standard-price")[1].split("/span")[0].getprice() >max_dis[0])
                            {
                                max_dis[0] = data.split("Discount")[1].split("standard-price")[1].split("/span")[0].getprice();
                                max_dis[1] = code;
                                $s('#fstotalsav').show();
                                $s('#fstotalsavrs').text('Rs. '+max_dis[0]);
                            }
                        }
                        if(i> total) return;
                        if(i<total) applyindi();             
                        if(i == total && max_dis[0]>0){

                            applyfinal(max_dis); 
                            //setTimeout(function(){applyindi();},10000);
                            }     
                        else if(i == total) {
                            $s('#fsautofullcont').html('<div style="width:100%;border-top:1px solid #d1d8e1;padding-bottom:12px;background-color:#f9fbfd;overflow:hidden;" > <div style="margin-top:12px;margin-right:12px;margin-bottom:0px;margin-left:12px;background-color:#feffff;border-color:#e8e8e9;border-radius:4px;box-shadow:1px 1px 4px rgba(0,0,0,0.3);overflow:hidden;border-bottom:1px solid #d1d8e1;color:#40484f;text-align:center;font-size:16px;padding-bottom:16px;padding-left:16px;padding-right:16px;" > <h1 style="margin-bottom:2px;font-size:24px;font-weight:600;margin-top:0px;padding-top:28px;" >Bummer. Nothing worked. But with all the time we saved for you, you can pick a new sport</h1><span > </br>If you wanna go dig, here is the solution:</span> <div style="margin-top:24px;padding-left:96px;padding-right:96px;" ><a style="font-size:18px;font-weight:400;margin-top:10px;margin-bottom:24px;color:#40484f;width:50%;display:inline-block;" target="_blank" href="//couponzila.com/" >couponzila.com</a></div><img src="flipshope.com/autoimages/dig.svg" > <div style="font-size:14px;color:#40484f;text-align:center;padding-top:12px;margin:0px -16px;width:calc(100% + 32px);border-top:1px solid #e8e8e9;" ><button id="fsautoclose" style="position: relative; font-weight: 500; font-size: 16px; padding: 10px 30px; display: block; outline: none; line-height: initial; border-radius: 60px; text-align: center; color: white; transition: box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease; background-repeat: no-repeat; background-position: center center; background-size: 18px 18px; border-width: 1px; border-style: solid; border-color: rgb(241, 134, 60); background-color: rgb(241, 134, 60); cursor: pointer; margin: 6px auto; width: 248px;" >Continue to Checkout</button></div></div></div>');
                        }
                          });
            break;
            case "www.amazon.in":
            if(!$s('#fsscrip').length) $s('#fsautofullcont').append('<div id="fsscrip"><script>$( document ).ajaxComplete(function() {setTimeout(function(){if($("#fspix:visible").length && !$.active){ $("#fspix").click();}},100)});</script></div>');
            setCookie("fscouponnumber",i-1, 0.3);
            if(!reload)
            {
            $s('input[name="claimCode"]').val(code);
            $s('input[data-action="gc-element"]:eq(0)').click();
            }
            $s('#fspix').bind('click', function(){
                reload = 0;
                $s('#fspix').unbind("click");
                setTimeout(function(){ 
                if($s('#subtotals-marketplace-table tr').text().split("romotion")[1])
                {
                    if($s('#subtotals-marketplace-table tr').text().split("romotion")[1].split('rder')[0].getprice() > max_dis[0])
                    {
                    max_dis[0] = $s('#subtotals-marketplace-table tr').text().split("romotion")[1].split('rder')[0].getprice();
                    max_dis[1] = code;
                    }
                }
            if(max_dis[0]){ 
                    setCookie("fsapplycou1", max_dis[0]+"#"+max_dis[1], 0.5); 
                    $s('#fstotalsav').show();
                    $s('#fstotalsavrs').text('Rs. '+max_dis[0]);
                }
            if(i> total) return;
            else if(i< total)   applyindi();
            else if(i == total && getCookie("fsapplycou1")){
                if(getCookie("done")) var isfinal =1;
                else setCookie("done",1 , 1);
                setTimeout( function(){applyfinal(getCookie('fsapplycou1').split('#')),isfinal},200);
            }
            else if(i == total) {
                            $s('#fsautofullcont').html('<div style="width:100%;border-top:1px solid #d1d8e1;padding-bottom:12px;background-color:#f9fbfd;overflow:hidden;" > <div style="margin-top:12px;margin-right:12px;margin-bottom:0px;margin-left:12px;background-color:#feffff;border-color:#e8e8e9;border-radius:4px;box-shadow:1px 1px 4px rgba(0,0,0,0.3);overflow:hidden;border-bottom:1px solid #d1d8e1;color:#40484f;text-align:center;font-size:16px;padding-bottom:16px;padding-left:16px;padding-right:16px;" > <h1 style="margin-bottom:2px;font-size:24px;font-weight:600;margin-top:0px;padding-top:28px;" >Bummer. Nothing worked. But with all the time we saved for you, you can pick a new sport</h1><span > </br>If you wanna go dig, here is the solution:</span> <div style="margin-top:24px;padding-left:96px;padding-right:96px;" ><a style="font-size:18px;font-weight:400;margin-top:10px;margin-bottom:24px;color:#40484f;width:50%;display:inline-block;" target="_blank" href="//couponzila.com/" >couponzila.com</a></div><img src="https://flipshope.com/assets/images/autoimages/dig.svg" > <div style="font-size:14px;color:#40484f;text-align:center;padding-top:12px;margin:0px -16px;width:calc(100% + 32px);border-top:1px solid #e8e8e9;" ><button id="fsautoclose" style="position: relative; font-weight: 500; font-size: 16px; padding: 10px 30px; display: block; outline: none; line-height: initial; border-radius: 60px; text-align: center; color: white; transition: box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease; background-repeat: no-repeat; background-position: center center; background-size: 18px 18px; border-width: 1px; border-style: solid; border-color: rgb(241, 134, 60); background-color: rgb(241, 134, 60); cursor: pointer; margin: 6px auto; width: 248px;" >Continue to Checkout</button></div></div></div>');
                        } 
            },1000);
            });
            if(reload) $s('#fspix').click();
     
            break;             
            case "www.snapdeal.com":
            if(!$s('#fsscrip').length) $s('#fsautofullcont').append('<div id="fsscrip"><script>$( document ).ajaxComplete(function() {setTimeout(function(){if($("#fspix:visible").length && !$.active){ $("#fspix").click();}},100)});</script></div>');           
            $s('#promo-value').val(code);
            $s('#apply-promo').click();
            $s('#fspix').bind('click', function(){                
                $s('#fspix').unbind("click");
                setTimeout(function(){
                if($s('#subtotals-marketplace-table tr').text().split("romotion")[1])
                {
                    if($s('#subtotals-marketplace-table tr').text().split("romotion")[1].split('rder')[0].getprice() > max_dis[0])
                    {
                    max_dis[0] = $s('#subtotals-marketplace-table tr').text().split("romotion")[1].split('rder')[0].getprice();
                    max_dis[1] = code;
                    }
                }
            if(max_dis[0]){
                    $s('#fstotalsav').show();
                    $s('#fstotalsavrs').text('Rs. '+max_dis[0]);
                }

            if(i> total) return;
            else if(i< total) applyindi();
            else if(i == total && max_dis[0]>0){
                setTimeout(function(){applyfinal(max_dis)},2000);
            }
            else if(i == total) {
                            $s('#fsautofullcont').html('<div style="width:100%;border-top:1px solid #d1d8e1;padding-bottom:12px;background-color:#f9fbfd;overflow:hidden;" > <div style="margin-top:12px;margin-right:12px;margin-bottom:0px;margin-left:12px;background-color:#feffff;border-color:#e8e8e9;border-radius:4px;box-shadow:1px 1px 4px rgba(0,0,0,0.3);overflow:hidden;border-bottom:1px solid #d1d8e1;color:#40484f;text-align:center;font-size:16px;padding-bottom:16px;padding-left:16px;padding-right:16px;" > <h1 style="margin-bottom:2px;font-size:24px;font-weight:600;margin-top:0px;padding-top:28px;" >Bummer. Nothing worked. But with all the time we saved for you, you can pick a new sport</h1><span > </br>If you wanna go dig, here is the solution:</span> <div style="margin-top:24px;padding-left:96px;padding-right:96px;" ><a style="font-size:18px;font-weight:400;margin-top:10px;margin-bottom:24px;color:#40484f;width:50%;display:inline-block;" target="_blank" href="//couponzila.com/" >couponzila.com</a></div><img src="https://flipshope.com/assets/images/autoimages/dig.svg" > <div style="font-size:14px;color:#40484f;text-align:center;padding-top:12px;margin:0px -16px;width:calc(100% + 32px);border-top:1px solid #e8e8e9;" ><button id="fsautoclose" style="position: relative; font-weight: 500; font-size: 16px; padding: 10px 30px; display: block; outline: none; line-height: initial; border-radius: 60px; text-align: center; color: white; transition: box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease; background-repeat: no-repeat; background-position: center center; background-size: 18px 18px; border-width: 1px; border-style: solid; border-color: rgb(241, 134, 60); background-color: rgb(241, 134, 60); cursor: pointer; margin: 6px auto; width: 248px;" >Continue to Checkout</button></div></div></div>');
                        }  
                    },200);});        
            break;
            case "secure.shopclues.com":
            if(!$s('#fsscrip').length) $s('#fsautofullcont').append('<div id="fsscrip"><script>$( document ).ajaxComplete(function() {setTimeout(function(){if($("#fspix:visible").length && !$.active){ $("#fspix").click();}},100)});</script></div>');           
            setCookie("fscouponnumber",i-1, 1);  
            if(!reload)
            {          
            $s('#coupon_field').val(code);
            document.getElementsByClassName('cm-submit-link')[0].click();
            }
            $s('#fspix').bind('click', function(){
                reload =0;
                $s('#fspix').unbind("click");
                setTimeout(function(){
                if($s('.box_paymentcalculations:eq(0)').text().split('Order Discount :')[1])
                {
                    if($s('.box_paymentcalculations:eq(0)').text().split('Order Discount :')[1].split('rice')[0].getprice() > max_dis[0])
                    {
                    max_dis[0] = $s('.box_paymentcalculations:eq(0)').text().split('Order Discount :')[1].split('rice')[0].getprice();
                    max_dis[1] = code;
                    }
                }
            if(max_dis[0]){
                    setCookie("fsapplycou1", max_dis[0]+"#"+max_dis[1], 1.5); 
                    $s('#fstotalsav').show();
                    $s('#fstotalsavrs').text('Rs. '+max_dis[0]);
                }

            if(i> total) return;
            else if(i< total) applyindi();
            else if(i == total && max_dis[0]>0){
                //setCookie("fscouponnumber",0, 0);
                if(getCookie("done")) var isfinal =1
                else setCookie("done",1 , 1);
                setTimeout(function(){applyfinal(max_dis,isfinal)},200);
            }
            else if(i == total) {
                setCookie("fscouponnumber",0, 0);
                            $s('#fsautofullcont').html('<div style="width:100%;border-top:1px solid #d1d8e1;padding-bottom:12px;background-color:#f9fbfd;overflow:hidden;" > <div style="margin-top:12px;margin-right:12px;margin-bottom:0px;margin-left:12px;background-color:#feffff;border-color:#e8e8e9;border-radius:4px;box-shadow:1px 1px 4px rgba(0,0,0,0.3);overflow:hidden;border-bottom:1px solid #d1d8e1;color:#40484f;text-align:center;font-size:16px;padding-bottom:16px;padding-left:16px;padding-right:16px;" > <h1 style="margin-bottom:2px;font-size:24px;font-weight:600;margin-top:0px;padding-top:28px;" >Bummer. Nothing worked. But with all the time we saved for you, you can pick a new sport</h1><span > </br>If you wanna go dig, here is the solution:</span> <div style="margin-top:24px;padding-left:96px;padding-right:96px;" ><a style="font-size:18px;font-weight:400;margin-top:10px;margin-bottom:24px;color:#40484f;width:50%;display:inline-block;" target="_blank" href="//couponzila.com/" >couponzila.com</a></div><img src="https://flipshope.com/assets/images/autoimages/dig.svg" > <div style="font-size:14px;color:#40484f;text-align:center;padding-top:12px;margin:0px -16px;width:calc(100% + 32px);border-top:1px solid #e8e8e9;" ><button id="fsautoclose" style="position: relative; font-weight: 500; font-size: 16px; padding: 10px 30px; display: block; outline: none; line-height: initial; border-radius: 60px; text-align: center; color: white; transition: box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease; background-repeat: no-repeat; background-position: center center; background-size: 18px 18px; border-width: 1px; border-style: solid; border-color: rgb(241, 134, 60); background-color: rgb(241, 134, 60); cursor: pointer; margin: 6px auto; width: 248px;" >Continue to Checkout</button></div></div></div>');
                        }  
                    },200);});  
            if(reload) $s('#fspix').click();
            break;
            case "order2.ebay.in":
            if($s('#couponRemove:visible').length>0){

                document.getElementById('couponRemove').click();
                i--;
                setTimeout(function(){applyindi();},5000);
                return;
            }
                document.getElementById('enterCoupon').value =code;
                document.getElementById('couponApply').click();

                setTimeout(function(){
                if($s('#couponTotDiv:visible').length)
                {
                    if($s('#couponTotDiv').text().getprice() > max_dis[0])
                    {
                    max_dis[0] = $s('#couponTotDiv').text().getprice();
                    max_dis[1] = code;
                    $s('#fstotalsav').show();
                    $s('#fstotalsavrs').text('Rs. '+max_dis[0]);
                    }
                    //$s('#couponRemove').click();
                    //return;
                }
            if(i> total) return;
            else if(i< total) applyindi();
            else if(i == total && max_dis[0]>0){
                setTimeout(function(){applyfinal(max_dis)},200);
            }
            else if(i == total) {
                            $s('#fsautofullcont').html('<div style="width:100%;border-top:1px solid #d1d8e1;padding-bottom:12px;background-color:#f9fbfd;overflow:hidden;" > <div style="margin-top:12px;margin-right:12px;margin-bottom:0px;margin-left:12px;background-color:#feffff;border-color:#e8e8e9;border-radius:4px;box-shadow:1px 1px 4px rgba(0,0,0,0.3);overflow:hidden;border-bottom:1px solid #d1d8e1;color:#40484f;text-align:center;font-size:16px;padding-bottom:16px;padding-left:16px;padding-right:16px;" > <h1 style="margin-bottom:2px;font-size:24px;font-weight:600;margin-top:0px;padding-top:28px;" >Bummer. Nothing worked. But with all the time we saved for you, you can go for a date</h1><span > </br>If you wanna go dig, here is the solution:</span> <div style="margin-top:24px;padding-left:96px;padding-right:96px;" ><a style="font-size:18px;font-weight:400;margin-top:10px;margin-bottom:24px;color:#40484f;width:50%;display:inline-block;" target="_blank" href="//couponzila.com/" >couponzila.com</a></div><img src="https://flipshope.com/assets/images/autoimages/dig.svg" > <div style="font-size:14px;color:#40484f;text-align:center;padding-top:12px;margin:0px -16px;width:calc(100% + 32px);border-top:1px solid #e8e8e9;" ><button id="fsautoclose" style="position: relative; font-weight: 500; font-size: 16px; padding: 10px 30px; display: block; outline: none; line-height: initial; border-radius: 60px; text-align: center; color: white; transition: box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease; background-repeat: no-repeat; background-position: center center; background-size: 18px 18px; border-width: 1px; border-style: solid; border-color: rgb(241, 134, 60); background-color: rgb(241, 134, 60); cursor: pointer; margin: 6px auto; width: 248px;" >Continue to Checkout</button></div></div></div>');
                        }  
                    },4000);        
            break;
            case "www.myntra.com":
            if(getCookie('fsapplycou')){var coupon =getCookie('fsapplycou').split('#'); setTimeout( function(){ applyfinal(coupon);},10000); break;}
            var token = $s("input[name='_token']")[0].value;
            $s.post("https://www.myntra.com/checkout/cart", {token: token, coupon: code, operation: "APPLY_COUPON"})
                    .done(function(data) {
                        if(typeof(data) != "object")
                        {
                            if(data.toLowerCase().split("coupon discount:")[1].split("/div")[0].getprice() >max_dis[0])
                            {
                                max_dis[0] = data.split("coupon discount:")[1].split("/div")[0].getprice();
                                max_dis[1] = code;
                                $s('#fstotalsav').show();
                                $s('#fstotalsavrs').text('Rs. '+max_dis[0]);
                            }
                        }
                        if(i> total) return;
                        if(i<total) applyindi();             
                        if(i == total && max_dis[0]>0){

                            applyfinal(max_dis); 
                            //setTimeout(function(){applyindi();},10000);
                            }     
                        else if(i == total) {
                            $s('#fsautofullcont').html('<div style="width:100%;border-top:1px solid #d1d8e1;padding-bottom:12px;background-color:#f9fbfd;overflow:hidden;" > <div style="margin-top:12px;margin-right:12px;margin-bottom:0px;margin-left:12px;background-color:#feffff;border-color:#e8e8e9;border-radius:4px;box-shadow:1px 1px 4px rgba(0,0,0,0.3);overflow:hidden;border-bottom:1px solid #d1d8e1;color:#40484f;text-align:center;font-size:16px;padding-bottom:16px;padding-left:16px;padding-right:16px;" > <h1 style="margin-bottom:2px;font-size:24px;font-weight:600;margin-top:0px;padding-top:28px;" >Bummer. Nothing worked. But with all the time we saved for you, you can go for a date</h1><span > </br>If you wanna go dig, here is the solution:</span> <div style="margin-top:24px;padding-left:96px;padding-right:96px;" ><a style="font-size:18px;font-weight:400;margin-top:10px;margin-bottom:24px;color:#40484f;width:50%;display:inline-block;" target="_blank" href="//couponzila.com/" >couponzila.com</a></div><img src="https://flipshope.com/assets/images/autoimages/dig.svg" > <div style="font-size:14px;color:#40484f;text-align:center;padding-top:12px;margin:0px -16px;width:calc(100% + 32px);border-top:1px solid #e8e8e9;" ><button id="fsautoclose" style="position: relative; font-weight: 500; font-size: 16px; padding: 10px 30px; display: block; outline: none; line-height: initial; border-radius: 60px; text-align: center; color: white; transition: box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease; background-repeat: no-repeat; background-position: center center; background-size: 18px 18px; border-width: 1px; border-style: solid; border-color: rgb(241, 134, 60); background-color: rgb(241, 134, 60); cursor: pointer; margin: 6px auto; width: 248px;" >Continue to Checkout</button></div></div></div>');
                        }
                          });
            break;
            case 'www.goibibo.com':
            if(!$s('#fsscrip').length) $s('#fsautofullcont').append('<div id="fsscrip"><script>$( document ).ajaxComplete(function() {setTimeout(function(){if($("#fspix:visible").length && !$.active){ $("#fspix").click();}},100)});</script></div>');
            $s('#promo_check_box').click();
            $s('#gi_promocode').val(code);
            $s('#gi_search_promo').click();
            $s('#fspix').bind('click', function(){                
            $s('#fspix').unbind("click");
            setTimeout(function(){
            if($s('#go_gi_change_fareD:visible .popBody:eq(0)').text().split('Rs')[1])
            {
                console.log(code);
                if($s('#go_gi_change_fareD:visible .popBody:eq(0)').text().split('Rs')[1].substring(0,8).getprice() > max_dis[0])
                {
                max_dis[0] = $s('#go_gi_change_fareD:visible .popBody:eq(0)').text().split('Rs')[1].substring(0,8).getprice();
                max_dis[1] = code;
                }
            }
            else if($s('#go_gi_change_fareD:visible .popBody:eq(0)').text().split('uccessful')[1])
            {
                if($s('#go_gi_change_fareD:visible .popBody:eq(0)').text().split('uccessful')[1].getprice() > max_dis[0])
                {
                max_dis[0] = $s('#go_gi_change_fareD:visible .popBody:eq(0)').text().split('uccessful')[1].getprice();
                max_dis[1] = code;
                }
            }
            if(max_dis[0]){
                    $s('#fstotalsav').show();
                    $s('#fstotalsavrs').text('Rs. '+max_dis[0]);
                }
            $s('#go_gi_change_fareD button.button.blue').click();
            if(i> total) return;
            else if(i< total) applyindi();
            else if(i == total && max_dis[0]>0){
                setTimeout(function(){applyfinal(max_dis)},2000);
            }
            else if(i == total) {
                            $s('#fsautofullcont').html('<div style="width:100%;border-top:1px solid #d1d8e1;padding-bottom:12px;background-color:#f9fbfd;overflow:hidden;" > <div style="margin-top:12px;margin-right:12px;margin-bottom:0px;margin-left:12px;background-color:#feffff;border-color:#e8e8e9;border-radius:4px;box-shadow:1px 1px 4px rgba(0,0,0,0.3);overflow:hidden;border-bottom:1px solid #d1d8e1;color:#40484f;text-align:center;font-size:16px;padding-bottom:16px;padding-left:16px;padding-right:16px;" > <h1 style="margin-bottom:2px;font-size:24px;font-weight:600;margin-top:0px;padding-top:28px;" >Bummer. Nothing worked. But with all the time we saved for you, you can pick a new sport</h1><span > </br>If you wanna go dig, here is the solution:</span> <div style="margin-top:24px;padding-left:96px;padding-right:96px;" ><a style="font-size:18px;font-weight:400;margin-top:10px;margin-bottom:24px;color:#40484f;width:50%;display:inline-block;" target="_blank" href="//couponzila.com/" >couponzila.com</a></div><img src="https://flipshope.com/assets/images/autoimages/dig.svg" > <div style="font-size:14px;color:#40484f;text-align:center;padding-top:12px;margin:0px -16px;width:calc(100% + 32px);border-top:1px solid #e8e8e9;" ><button id="fsautoclose" style="position: relative; font-weight: 500; font-size: 16px; padding: 10px 30px; display: block; outline: none; line-height: initial; border-radius: 60px; text-align: center; color: white; transition: box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease; background-repeat: no-repeat; background-position: center center; background-size: 18px 18px; border-width: 1px; border-style: solid; border-color: rgb(241, 134, 60); background-color: rgb(241, 134, 60); cursor: pointer; margin: 6px auto; width: 248px;" >Continue to Checkout</button></div></div></div>');
                        }  
                    },200);});   
            break;
            case "www.cleartrip.com":
            $s('#coupon').val(code);
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                try{
                    data = xhttp.responseText;
                    console.log(data);
                     data = JSON.parse(data);
                     if (data['amount'] > max_dis[0]) {
                         max_dis[0] = data['amount'];
                         max_dis[1] = code;
                         $s('#fstotalsav')
                             .show();
                         $s('#fstotalsavrs')
                             .text('Rs. ' + max_dis[0]);
                     }
                 }
                 catch(e){}
                     if (i > total) return;
                     if (i < total) applyindi();
                     if (i == total && max_dis[0] > 0) {

                         applyfinal(max_dis);
                         //setTimeout(function(){applyindi();},10000);
                     } else if (i == total) {
                         $s('#fsautofullcont')
                             .html('<div style="width:100%;border-top:1px solid #d1d8e1;padding-bottom:12px;background-color:#f9fbfd;overflow:hidden;" > <div style="margin-top:12px;margin-right:12px;margin-bottom:0px;margin-left:12px;background-color:#feffff;border-color:#e8e8e9;border-radius:4px;box-shadow:1px 1px 4px rgba(0,0,0,0.3);overflow:hidden;border-bottom:1px solid #d1d8e1;color:#40484f;text-align:center;font-size:16px;padding-bottom:16px;padding-left:16px;padding-right:16px;" > <h1 style="margin-bottom:2px;font-size:24px;font-weight:600;margin-top:0px;padding-top:28px;" >Bummer. Nothing worked. But with all the time we saved for you, you can pick a new sport</h1><span > </br>If you wanna go dig, here is the solution:</span> <div style="margin-top:24px;padding-left:96px;padding-right:96px;" ><a style="font-size:18px;font-weight:400;margin-top:10px;margin-bottom:24px;color:#40484f;width:50%;display:inline-block;" target="_blank" href="//couponzila.com/" >couponzila.com</a></div><img src="https://flipshope.com/assets/images/autoimages/dig.svg" > <div style="font-size:14px;color:#40484f;text-align:center;padding-top:12px;margin:0px -16px;width:calc(100% + 32px);border-top:1px solid #e8e8e9;" ><button id="fsautoclose" style="position: relative; font-weight: 500; font-size: 16px; padding: 10px 30px; display: block; outline: none; line-height: initial; border-radius: 60px; text-align: center; color: white; transition: box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease; background-repeat: no-repeat; background-position: center center; background-size: 18px 18px; border-width: 1px; border-style: solid; border-color: rgb(241, 134, 60); background-color: rgb(241, 134, 60); cursor: pointer; margin: 6px auto; width: 248px;" >Continue to Checkout</button></div></div></div>');
                     }
                 }
             };
              xhttp.open("POST", "apply-coupon", true);
              xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
              xhttp.send('coupon='+code+'&isCheckSavings=true');
            break;
            case "www.foodpanda.in":
            setCookie("fscouponnumber",i-1, 1);
            if(!reload){            
            $s('#shop_order_cart_type_vouchers').val(code);
            $s('#shop_order_cart_type_voucher_button').click();
            }
            if(reload)
            {
            reload =0;
            if($s('.voucher .price .price-wrapper').text())
                {
                    if($s('.voucher .price .price-wrapper').text().getprice() > max_dis[0])
                    {
                    max_dis[0] = $s('.voucher .price .price-wrapper').text().getprice();
                    max_dis[1] = code;
                    }
                }
            if(max_dis[0]){
                    setCookie("fsapplycou1", max_dis[0]+"#"+max_dis[1], 1.5); 
                    $s('#fstotalsav').show();
                    $s('#fstotalsavrs').text('Rs. '+max_dis[0]);
                }

            if(i> total) return;
            else if(i< total) applyindi();
            else if(i == total && max_dis[0]>0){
                //setCookie("fscouponnumber",0, 0);
                if(getCookie("done")) var isfinal =1
                else setCookie("done",1 , 1);
                setTimeout(function(){applyfinal(max_dis,isfinal)},200);
            }
            else if(i == total) {
                setCookie("fscouponnumber",0, 0);
                            $s('#fsautofullcont').html('<div style="width:100%;border-top:1px solid #d1d8e1;padding-bottom:12px;background-color:#f9fbfd;overflow:hidden;" > <div style="margin-top:12px;margin-right:12px;margin-bottom:0px;margin-left:12px;background-color:#feffff;border-color:#e8e8e9;border-radius:4px;box-shadow:1px 1px 4px rgba(0,0,0,0.3);overflow:hidden;border-bottom:1px solid #d1d8e1;color:#40484f;text-align:center;font-size:16px;padding-bottom:16px;padding-left:16px;padding-right:16px;" > <h1 style="margin-bottom:2px;font-size:24px;font-weight:600;margin-top:0px;padding-top:28px;" >Bummer. Nothing worked. But with all the time we saved for you, you can go for a date</h1><span > </br>If you wanna go dig, here is the solution:</span> <div style="margin-top:24px;padding-left:96px;padding-right:96px;" ><a style="font-size:18px;font-weight:400;margin-top:10px;margin-bottom:24px;color:#40484f;width:50%;display:inline-block;" target="_blank" href="//couponzila.com/" >couponzila.com</a></div><img src="https://flipshope.com/assets/images/autoimages/dig.svg" > <div style="font-size:14px;color:#40484f;text-align:center;padding-top:12px;margin:0px -16px;width:calc(100% + 32px);border-top:1px solid #e8e8e9;" ><button id="fsautoclose" style="position: relative; font-weight: 500; font-size: 16px; padding: 10px 30px; display: block; outline: none; line-height: initial; border-radius: 60px; text-align: center; color: white; transition: box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease; background-repeat: no-repeat; background-position: center center; background-size: 18px 18px; border-width: 1px; border-style: solid; border-color: rgb(241, 134, 60); background-color: rgb(241, 134, 60); cursor: pointer; margin: 6px auto; width: 248px;" >Continue to Checkout</button></div></div></div>');
                        }
                    }
            break;
            case 'secure.yatra.com':
            if ($s('#ourSearchKey_superPnr') 
                .length > 0 && $s('#ourSearchKey_superPnr')
                .text()
                .trim() != "") { 
                var superPnr = $s('#ourSearchKey_superPnr')
                    .text()
                    .trim();
            }
            if ($s('#ourSearchKey_ftype')
                .length > 0 && $s('#ourSearchKey_ftype')
                .text()
                .trim() != "") {
                var ftype = $s('#ourSearchKey_ftype')
                    .text()
                    .trim();
            }
            if ($s('#ourSearchKey_pricingId')
                .length > 0 && $s('#ourSearchKey_pricingId')
                .text()
                .trim() != "") {
                var pricingId = $s('#ourSearchKey_pricingId')
                    .text()
                    .trim();
            }
            if ($s('#ourSearchKey_totalAmount')
                .length > 0 && $s('#ourSearchKey_totalAmount')
                .text()
                .trim() != "") {
                var totalAmount = $s('#ourSearchKey_totalAmount')
                    .text()
                    .trim();
            }
            if (window.location.href.indexOf('-ui/dom2')>0) dom2 ='dom2';
            else dom2 = 'int2';
            $s.post("https://secure.yatra.com/air-pay-book-service/"+dom2+"/promocode/validateNew", {
                    superPnr: superPnr,
                    flightType: ftype,
                    pricingId: pricingId,
                    totalAmount: totalAmount,
                    promoContext: "REVIEW",
                    UserId: "",
                    promoCode: code
                })
                .done(function(data) {
                        var data = JSON.parse(data);
                        if(data['success'] == 'true')
                            {
                            if(parseInt(data['cash']['discountAmount'])>parseInt(data['eCash']['discountAmount'])) maxb = parseInt(data['cash']['discountAmount']);
                            else maxb = parseInt(data['eCash']['discountAmount']);
                            if(maxb>max_dis[0])
                            {
                                max_dis[0] = maxb;
                                max_dis[1] = code;
                                $s('#fstotalsav').show();
                                $s('#fstotalsavrs').text('Rs. '+max_dis[0]);
                            }
                        }
                        if(i> total) return;
                        if(i<total) applyindi();             
                        if(i == total && max_dis[0]>0){
                            var newcontant = '<div style="overflow:auto;text-align:center"> <div style="width:100%;height:194px;overflow:visible"><img src="https://flipshope.com/assets/images/autoimages/try.svg" style="width:100%;background-color:#F0FBFB"></div><div style="color: green;margin: 18px;font-weight:600;font-size: 17px;line-height:20px;">Congratulations, You have just saved Rs. '+max_dis[0]+'</div><div id="fscouprogfull" style="font-weight:600;font-size:14px">Use coupon code '+max_dis[1]+' to get the discount</div><div style="margin-top:10px;margin-bottom:22px"> <a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fflipshope.com" id="fssharefb" target="_blank" style="text-transform:none; font-size:12px;padding:4px 6px;background-color:#f9fbfd;border:1px solid #d1d8e1;border-radius:1px;font-weight:600;margin: 5px;background: #3b5998;color: white;">Share on Fb</a> <a id="fssharegp" target="_blank" style="text-transform: none;font-size:12px;padding:4px 6px;background-color:#f9fbfd;border:1px solid #d1d8e1;border-radius:1px;font-weight:600;margin: 5px;background: #dc4a38;color: white;" href="https://plus.google.com/share?url=https%3A%2F%2Fflipshope.com&t=I%20just%20saved%20Rs.%20'+max_dis[0]+'%20using%20flipshope,%20awesome%20shopping%20extension">Share on Google+</a><a id="fsshareftw" style="text-transform: none;font-size:12px;padding:4px 6px;background-color:#f9fbfd;border:1px solid #d1d8e1;border-radius:1px;font-weight:600;margin: 5px;background: #11c1ff;color: white;" href="https://twitter.com/intent/tweet?text=I%20just%20saved%20Rs.%20'+max_dis[0]+'%20using%20flipshope,%20awesome%20shopping%20extension&url=https%3A%2F%2Fflipshope.com&original_referer=https%3A%2F%2Fflipshope.com" target="_blank">Share on Twitter</a><a id="fsautoclose" style="font-size:12px;color: #777777;padding:4px 6px;background-color:#f9fbfd;border:1px solid #d1d8e1;border-radius:1px;font-weight:600;margin: 5px;ursor: pointer;cursor: pointer;">Close</a></div></div>';
                            $s('#fsautofullcont').html(newcontant);
                            }     
                        else if(i == total) {
                            $s('#fsautofullcont').html('<div style="width:100%;border-top:1px solid #d1d8e1;padding-bottom:12px;background-color:#f9fbfd;overflow:hidden;" > <div style="margin-top:12px;margin-right:12px;margin-bottom:0px;margin-left:12px;background-color:#feffff;border-color:#e8e8e9;border-radius:4px;box-shadow:1px 1px 4px rgba(0,0,0,0.3);overflow:hidden;border-bottom:1px solid #d1d8e1;color:#40484f;text-align:center;font-size:16px;padding-bottom:16px;padding-left:16px;padding-right:16px;" > <h1 style="margin-bottom:2px;font-size:24px;font-weight:600;margin-top:0px;padding-top:28px;" >Bummer. Nothing worked. But with all the time we saved for you, you can pick a new sport</h1><span > </br>If you wanna go dig, here is the solution:</span> <div style="margin-top:24px;padding-left:96px;padding-right:96px;" ><a style="font-size:18px;font-weight:400;margin-top:10px;margin-bottom:24px;color:#40484f;width:50%;display:inline-block;" target="_blank" href="//couponzila.com/" >couponzila.com</a></div><img src="https://flipshope.com/assets/images/autoimages/dig.svg" > <div style="font-size:14px;color:#40484f;text-align:center;padding-top:12px;margin:0px -16px;width:calc(100% + 32px);border-top:1px solid #e8e8e9;" ><button id="fsautoclose" style="position: relative; font-weight: 500; font-size: 16px; padding: 10px 30px; display: block; outline: none; line-height: initial; border-radius: 60px; text-align: center; color: white; transition: box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease; background-repeat: no-repeat; background-position: center center; background-size: 18px 18px; border-width: 1px; border-style: solid; border-color: rgb(241, 134, 60); background-color: rgb(241, 134, 60); cursor: pointer; margin: 6px auto; width: 248px;" >Continue to Checkout</button></div></div></div>');
                            }
                          });                    
            break;
            case "pizzaonline.dominos.co.in":
            $s.post("https://pizzaonline.dominos.co.in/redeem/coupon", {
                    coupon_code: code
                })
                .done(function(data) {
                    var data = JSON.parse(data);
                    if(data['success'] == 'true')
                    {
                    if(parseInt(data['cash']['discountAmount'])>parseInt(data['eCash']['discountAmount'])) maxb = parseInt(data['cash']['discountAmount']);
                    else maxb = parseInt(data['eCash']['discountAmount']);
                    if(maxb>max_dis[0])
                        {
                            max_dis[0] = maxb;
                            max_dis[1] = code;
                            $s('#fstotalsav').show();
                            $s('#fstotalsavrs').text('Rs. '+max_dis[0]);
                        }
                    }
                    if(i> total) return;
                    if(i<total) applyindi();             
                    if(i == total && max_dis[0]>0){
                        var newcontant = '<div style="overflow:auto;text-align:center"> <div style="width:100%;height:194px;overflow:visible"><img src="https://flipshope.com/assets/images/autoimages/try.svg" style="width:100%;background-color:#F0FBFB"></div><div style="color: green;margin: 18px;font-weight:600;font-size: 17px;line-height:20px;">Congratulations, You have just saved Rs. '+max_dis[0]+'</div><div id="fscouprogfull" style="font-weight:600;font-size:14px">Use coupon code '+max_dis[1]+' to get the discount</div><div style="margin-top:10px;margin-bottom:22px"> <a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fflipshope.com" id="fssharefb" target="_blank" style="text-transform:none; font-size:12px;padding:4px 6px;background-color:#f9fbfd;border:1px solid #d1d8e1;border-radius:1px;font-weight:600;margin: 5px;background: #3b5998;color: white;">Share on Fb</a> <a id="fssharegp" target="_blank" style="text-transform: none;font-size:12px;padding:4px 6px;background-color:#f9fbfd;border:1px solid #d1d8e1;border-radius:1px;font-weight:600;margin: 5px;background: #dc4a38;color: white;" href="https://plus.google.com/share?url=https%3A%2F%2Fflipshope.com&t=I%20just%20saved%20Rs.%20'+max_dis[0]+'%20using%20flipshope,%20awesome%20shopping%20extension">Share on Google+</a><a id="fsshareftw" style="text-transform: none;font-size:12px;padding:4px 6px;background-color:#f9fbfd;border:1px solid #d1d8e1;border-radius:1px;font-weight:600;margin: 5px;background: #11c1ff;color: white;" href="https://twitter.com/intent/tweet?text=I%20just%20saved%20Rs.%20'+max_dis[0]+'%20using%20flipshope,%20awesome%20shopping%20extension&url=https%3A%2F%2Fflipshope.com&original_referer=https%3A%2F%2Fflipshope.com" target="_blank">Share on Twitter</a><a id="fsautoclose" style="font-size:12px;color: #777777;padding:4px 6px;background-color:#f9fbfd;border:1px solid #d1d8e1;border-radius:1px;font-weight:600;margin: 5px;cursor: pointer;cursor: pointer;">Close</a></div></div>';
                        $s('#fsautofullcont').html(newcontant);
                        }     
                    else if(i == total) {
                        $s('#fsautofullcont').html('<div style="width:100%;border-top:1px solid #d1d8e1;padding-bottom:12px;background-color:#f9fbfd;overflow:hidden;" > <div style="margin-top:12px;margin-right:12px;margin-bottom:0px;margin-left:12px;background-color:#feffff;border-color:#e8e8e9;border-radius:4px;box-shadow:1px 1px 4px rgba(0,0,0,0.3);overflow:hidden;border-bottom:1px solid #d1d8e1;color:#40484f;text-align:center;font-size:16px;padding-bottom:16px;padding-left:16px;padding-right:16px;" > <h1 style="margin-bottom:2px;font-size:24px;font-weight:600;margin-top:0px;padding-top:28px;" >Bummer. Nothing worked. But with all the time we saved for you, you can pick a new sport</h1><span > </br>If you wanna go dig, here is the solution:</span> <div style="margin-top:24px;padding-left:96px;padding-right:96px;" ><a style="font-size:18px;font-weight:400;margin-top:10px;margin-bottom:24px;color:#40484f;width:50%;display:inline-block;" target="_blank" href="//couponzila.com/" >couponzila.com</a></div><img src="https://flipshope.com/assets/images/autoimages/dig.svg" > <div style="font-size:14px;color:#40484f;text-align:center;padding-top:12px;margin:0px -16px;width:calc(100% + 32px);border-top:1px solid #e8e8e9;" ><button id="fsautoclose" style="position: relative; font-weight: 500; font-size: 16px; padding: 10px 30px; display: block; outline: none; line-height: initial; border-radius: 60px; text-align: center; color: white; transition: box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease; background-repeat: no-repeat; background-position: center center; background-size: 18px 18px; border-width: 1px; border-style: solid; border-color: rgb(241, 134, 60); background-color: rgb(241, 134, 60); cursor: pointer; margin: 6px auto; width: 248px;" >Continue to Checkout</button></div></div></div>');
                        }
                    });
            break;
        }
    } 
function applyfinal(code,isfinal){
        amt = code[0];
        code = code[1];
        j=2000;
        if(site == "www.myntra.com") j = 6000;
        $s('#fsautocoupcode').text(code);
        $s('#fscouprogfull').text("Apply the coupon below for getting maximum discount");
        $s('#fsautoprogbar').css('width',"100%");
        var newcontant = '<div style="overflow:auto;text-align:center"> <div style="width:100%;height:194px;overflow:visible"><img src="https://flipshope.com/assets/images/autoimages/try.svg" style="width:100%;background-color:#F0FBFB"></div><div style="color: green;margin: 18px;font-weight:600;font-size: 17px;line-height:20px;">Congratulations, You have just saved Rs. '+amt+'</div><div id="fscouprogfull" style="font-weight:600;font-size:14px">Using coupon code '+code+' </div><div style="margin-top:10px;margin-bottom:22px"> <a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fflipshope.com" id="fssharefb" target="_blank" style="text-transform:none; font-size:12px;padding:4px 6px;background-color:#f9fbfd;border:1px solid #d1d8e1;border-radius:1px;font-weight:600;margin: 5px;background: #3b5998;color: white;">Share on Fb</a> <a id="fssharegp" target="_blank" style="text-transform: none;font-size:12px;padding:4px 6px;background-color:#f9fbfd;border:1px solid #d1d8e1;border-radius:1px;font-weight:600;margin: 5px;background: #dc4a38;color: white;" href="https://plus.google.com/share?url=https%3A%2F%2Fflipshope.com&t=I%20just%20saved%20Rs.%20'+amt+'%20using%20flipshope,%20awesome%20shopping%20extension">Share on Google+</a><a id="fsshareftw" style="text-transform: none;font-size:12px;padding:4px 6px;background-color:#f9fbfd;border:1px solid #d1d8e1;border-radius:1px;font-weight:600;margin: 5px;background: #11c1ff;color: white;" href="https://twitter.com/intent/tweet?text=I%20just%20saved%20Rs.%20'+amt+'%20using%20flipshope,%20awesome%20shopping%20extension&url=https%3A%2F%2Fflipshope.com&original_referer=https%3A%2F%2Fflipshope.com" target="_blank">Share on Twitter</a><a id="fsautoclose" style="font-size:12px;color: #777777;padding:4px 6px;background-color:#f9fbfd;border:1px solid #d1d8e1;border-radius:1px;font-weight:600;margin: 5px;cursor: pointer;">Close</a></div></div>';
        setTimeout( function(){ $s('#fsautofullcont').html(newcontant);},j);
        if(isfinal) return 0;
     switch (site)
        {
            case "www.jabong.com":
            if($s(".remove-coupon:visible").length) {
                document.getElementsByClassName("remove-coupon")[0].click();
                setCookie("fsapplycou", amt+"#"+code, 1.0);
                window.location.reload();
                return;
                }  
            $s('div[data-custom-class="apply-coupon"]').click();
            setTimeout( function(){ $s('#applyCoupon').val(code); document.getElementsByClassName("jbApplyCoupon")[0].click(); },7000);         
            break;
            case "www.amazon.in":
            $s('input[name="claimCode"]').val(code);
            $s('input[data-action="gc-element"]:eq(0)').click();
            break;
            case "www.snapdeal.com":
            $s('#promo-value').val(code);
            $s('#apply-promo').click();
            break;
            case "secure.shopclues.com":
            $s('#coupon_field').val(code);
            document.getElementsByClassName('cm-submit-link')[0].click();
            break;
            case "order2.ebay.in":
            $s('#enterCoupon').val(code);
            $s('#couponApply').click();
            break;
            case "www.myntra.com":
            if($s('.edit-coupon.hint--bottom').length) $s('.edit-coupon.hint--bottom')[0].click();
            else $s('.apply-coupon.apply')[0].click();
            setTimeout(function(){$s('input[name="coupon_code"]:eq(0)').val(code); $s('button[name="btn-apply"]')[0].click();},6000);
            break;
            case 'www.goibibo.com':
            $s('#promo_check_box').click();
            $s('#gi_promocode').val(code);
            $s('#gi_search_promo').click();
            break;
            case "www.cleartrip.com":
            console.log(12);
            $s('#coupon').val(code);
            document.getElementById('check_saving').click();
            break;
            case "www.foodpanda.in":         
            $s('#shop_order_cart_type_vouchers').val(code);
            $s('#shop_order_cart_type_voucher_button').click();
            break;
            case "pizzaonline.dominos.co.in":
            $('.redeemCupon a:visible ')[0].click();
            $s('#coupon-code-field').val(code);
            $s('#redeem_coupon_button').click();
            break;     
        }
        
}

  function setCookie(cname, cvalue, exmin) {
      var d = new Date();
      d.setTime(d.getTime() + (exmin* 60 * 1000));
      var expires = "expires=" + d.toGMTString();
      document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
  }
 
  function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') c = c.substring(1);
          if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
      }
      return "";
  }
function simulateClick(obj) {
  var evt = document.createEvent("MouseEvents");
  evt.initMouseEvent("click", true, true, window,
    0, 0, 0, 0, 0, false, false, false, false, 0, null);
  var canceled = !obj.dispatchEvent(evt);

  if(canceled) {
    // A handler called preventDefault
    alert("canceled");
  } else {
    // None of the handlers called preventDefault
    alert("not canceled");
  }
}
var offset = 0;
var isDown = false;
var m = document.getElementById('fs_all_container');
document.addEventListener('mouseup', function() {
    isDown = false;
}, true);
m.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = m.offsetTop - e.clientY;
}, true);
document.addEventListener('mousemove', function(event) {
    if (isDown) {
    	event.preventDefault();
        m.style.top  = (event.clientY + offset) + 'px';
    }
}, true);

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-54661846-1', 'auto');
            ga('set', 'checkProtocolTask', function(){});
            $s(document).ready(function() {
                $s('body').on('click', '.fs_side_container.fs_closed', function() {
                    chrome.runtime.sendMessage({
                    sksmode : "analytics",
                    category : "Fs Sidebar",
                    action : 'click',
                    label : $s(this).children('fsall').eq(0).attr('id')
                    });
                });
            });
