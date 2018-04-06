var myid = chrome.runtime.id;
$s = jQuery.noConflict();
signup_pages =[['airbnb.co','Signing up? Stop signin up by clcikin here and get 1,200 off on your first purchase','bit.ly/_fs_airbnb','https://www.airbnb.co.in/referrals/terms_and_conditions?offer_name=IN_localized_v3'],
['abof','Don\'t Signup directly, just click here on this link to gain 200 off with no minimum purchase. Free Stuff !!!','bit.ly/_fs_abof','https://www.abof.com/checkout/sign-in?param=refer&redirectTo=/checkout/referral'],
['lenskart.com','Signing up directly? Use our refer code "ASHU2ESG" and get flat Rs. 500 off on your first purchase','bit.ly/_fs_lenskart','http://www.lenskart.com/refer-and-earn-paytm'],
];
signup_page =['airbnb.co.in/signup_login','abof.com/checkout/sign-in'];
function ad_offer(i){
    var signup_page_data = '<div id="fs_popup_container"><div id="fs_cornerContent" class="fs_cornerContent" style="position: fixed !important;bottom: -400px;left: 15px;transition: all 1s ease-in-out;"><div id="fs_m_contaoner"><div id="fs_popup_image_cont"><img src="chrome-extension://'+myid+'/images/flipshopelogo.png" id="fs_popup_logo" style="height: 20px !important;"><button id="fs_popup_close" style="background-image: url(chrome-extension://'+myid+'/images/icon-close.png);"></button><div id="fs_popup_coupon_cont"><div id="fs_popup_coupon_count" style="font-size: 14px;font-weight: 600;margin: 0 -10px !important;line-height: 20px;"><span>'+signup_pages[i][1]+'<br><br><div id="fs_popup_coupon_count" style="padding: 0 !important;"><span>Link: <a href="http://'+signup_pages[i][2]+'" target = "_blank">'+signup_pages[i][2]+'</a></span><span id="fs_popup_span2"><a href="'+signup_pages[i][3]+'" target="_blank">TnC</a></span></div></span></div></div></div></div></div></div>';
    $s("body").append(signup_page_data);
    $s("body").on("click", "#fs_popup_close", function() {$s(".fs_cornerContent").css('bottom','-400px');});
    $s(".fs_cornerContent").css('bottom',0);
}
chrome.runtime.onMessage.addListener(function(request, sender){
  if(request.suurl)
  {
    supage = request.suurl;
    if(!document.getElementById('fs_popup_container'))
    {
    for(i=0; i<signup_pages.length; i++){if(supage.indexOf(signup_pages[i][0]) >-1) return ad_offer(i);}
    }
  }
});
var locat = window.location.href;
if(!document.getElementById('fs_popup_container'))
    {
    for(i=0; i<signup_page.length; i++){if(locat.indexOf(signup_page[i]) >-1){for(i=0; i<signup_pages.length; i++){if(window.location.hostname.indexOf(signup_pages[i][0]) >-1){ ad_offer(i); break;}}break;}}
    }