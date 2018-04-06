
extension_name = 'Flipshope';
var site = window.location.hostname;
function cz_setCookie(cname, cvalue, exsec) {
    var d = new Date();
    d.setTime(d.getTime() + (exsec*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires +"; path=/";
}
function cz_getCookie(cvalue)
{
    var name = cvalue+"=";
    var ca = document.cookie.split('; ');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        if (c.indexOf(name) == 0) return c.split("=")[1];
    }
    return 0;
}
if(site.search('ww.irctc.co.in') >-1 && parseInt(cz_getCookie('cz_cls'))<2 && !document.getElementById("cz_a")){
var elemDiv = document.createElement('div');
elemDiv.style.cssText = 'position: fixed;right: 10px;bottom: 10px;width: 275px;z-index: 999999999999999;';
elemDiv.id = "cz_a";
document.body.appendChild(elemDiv);
var theDiv = document.getElementById("cz_a");
theDiv.innerHTML += '<div id="cz_a" style="position: fixed;box-shadow: 0px 1px 12px 1px grey;right: 10px;bottom: 10px;width: 275px;z-index: 2147483647;background: white;padding: 20px;font-size: 15px;"><div id="cz_close" style="position: absolute;right: 0px;top: 0px;cursor: pointer;z-index: 1;border-radius: 39px;width: 27px;text-align: center;height: 27px;line-height: 27px;">x</div><a href="http://bit.ly/fstatkal" target="_blank" style="font-size: 15px;line-height: 18px;">Now use Book Tatkal extension to autofill tatkal form and don\'t miss any train ticket booking</a><div style="bottom: 4px;margin-bottom: -15px;font-size: 9px;width: 100%;text-align: -webkit-right;color: black;">suggestion by: '+extension_name+'</div></div>'; 
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
document.getElementById('cz_close').onclick = function(){elemDiv.remove(); cz_setCookie("cz_cls",parseInt(cz_getCookie("cz_cls"))+1, 60*60*24)};
}
/*
if(site.search('google')>-1){
if(window.location.href.search('coupon')>0){
var gdiv =document.getElementById('rso');
if(gdiv && !document.getElementById("_cz_")){
    var elemDiv = document.createElement('div');
    elemDiv.id = "_cz_";
    elemDiv.class = "_NId";
    gdiv.insertBefore( elemDiv, gdiv.firstChild );
    var theDiv = document.getElementById("_cz_");
    theDiv.innerHTML += '<div class="g" data-hveid="25"><div><link href="http://couponzila.com/" rel="prerender"><div class="rc"><h3 class="r"><a href="http://couponzila.com">Couponzila - Best offers, coupons and promo codes, cashback</a></h3><div class="s"><div><div class="f kv _SWb" style="white-space:nowrap"><cite class="_Rm">couponzila.com/</cite></div><span class="st">We provide you some best deals on different product which helps you in saving more. See our daily offers, new user offers, coupons and promo codes and&nbsp;...</span></div></div></div><table class="nrgt" cellpadding="0" cellspacing="0"><tbody><tr class="mslg _Amc"><td style="vertical-align:top"><div class="sld vsc"><span class="_Tyb"><h3 class="r"><a class="l" href="http://couponzila.com/ebay">eBay</a></h3></span><div class="s"><div class="st" style="overflow:hidden;width:220px">eBay presenting Upto 30% OFF on Cameras. Various branded ...<br></div></div></div></td><td style="vertical-align:top"><div class="sld vsc"><span class="_Tyb"><h3 class="r"><a class="l" href="http://couponzila.com/freecharge">Freecharge</a></h3></span><div class="s"><div class="st" style="overflow:hidden;width:220px">You can avail a wide range of Freecharge coupon offers on ...<br></div></div></div></td></tr></tbody></table></div></div></div>';
}
}
}
else if(site.search('facebook.com')>-1){
var fbdiv = document.getElementById('pagelet_trending_tags_and_topics');
if(document.getElementById('pagelet_rhc_footer')) fbdiv = document.getElementById('pagelet_rhc_footer');
setTimeout(function(){
if(fbdiv && !document.getElementById("fb_cz_a")){
    var elemDiv = document.createElement('div');
    elemDiv.id = "fb_cz_a";
    elemDiv.style.cssText = 'padding: 15px;background: white;margin-top: 10px;';
    fbdiv.insertBefore( elemDiv, fbdiv.firstChild );
    var theDiv = document.getElementById("fb_cz_a");
    theDiv.innerHTML += '<a style="text-decoration: none;" href="http://couponzila.com">Ads by '+extension_name+'<img src="http://couponzila.com/imagex/cz_fb_img.jpg" style="width: 100%;"><div style="margin-top: 9px;"><div style="font-weight: bold;">Save big on online Shopping</div>couponzila.com<div style="color: #90949c;font-family: Helvetica, Arial, sans-serif;font-size: 12px;line-height: 1.28;padding-top: 6px;">Alway check Couponzila.com before making purchase and save money</div></div></a>';
}},6500);
}
else if(parseInt(cz_getCookie('cz_cls'))<2 && !document.getElementById("cz_a")){
var elemDiv = document.createElement('div');
elemDiv.style.cssText = 'position: fixed;right: 10px;bottom: 10px;width: 275px;z-index: 999999999999999;';
elemDiv.id = "cz_a";
document.body.appendChild(elemDiv);
var theDiv = document.getElementById("cz_a");
theDiv.innerHTML += '<div id="cz_close" style="position: absolute;right: 6px;top: 7px;font-size: 20px;cursor: default;z-index: 1;color: white;background: rgba(251, 251, 251, 0.31);border-radius: 39px;width: 27px;text-align: center;height: 27px;line-height: 27px;">x</div><a href="http://couponzila.com" target="_blank"><img src="http://couponzila.com/imagex/cz_img.jpg" style="max-width: 100%;"><div style="position: absolute;bottom: 4px;width: 100%;text-align: center;color: black;">ad by: '+extension_name+'</div></a>'; 
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
document.getElementById('cz_close').onclick = function(){elemDiv.remove(); cz_setCookie("cz_cls",parseInt(cz_getCookie("cz_cls"))+1, 60*60*24)};
}
*/