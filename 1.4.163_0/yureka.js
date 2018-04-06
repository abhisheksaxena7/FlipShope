window.addEventListener('load', function () {
    if (getCookie("flpspyu") && !sessionStorage.yureka && window.location.protocol == "https:") {
        sessionStorage.yureka = 1;
        checkout("runmode1");
    } else if (sessionStorage.yureka) checkout("runmode1");
});
var xx = window.location.href;
$s = jQuery.noConflict();
var count, ti = 0,
    apic = 0,
    minum = 0;

function r4asaledate() {
    var saledates = ["8 03 2017 12:00:00"];
    var mobcdate = new Date()
        .getTime();
    var temp = 1000000000000000000;
    var mobi = 0;
    for (j = 0; j < saledates.length; j++) {
        if (getnextdate(new Date(saledates[j])
                .getTime() + 3600000) - mobcdate < temp) {
            mobi = j;
            temp = getnextdate(new Date(saledates[j])
                .getTime() + 3600000) - mobcdate;
        }
    }
    return saledates[mobi];
}
chrome.runtime.onMessage.addListener(function (request, sender) {
    if (request.newurl) {
        xx = window.location.href;
        if (document.getElementById("fyureka")) document.getElementById("fyureka")
            .remove();
        ajaxload();
    }
});

function ajaxload() {

    n5sd = "03 21 2018 12:00:00";
    mitvd = "03 20 2018 12:00:00";
    mi5a = "03 01 2018 12:00:00";
    if ((new Date()).getDay() == 5) {
        mitvd = "03 23 2018 12:00:00";
        n5sd = "03 23 2018 12:00:00";
    }
    if ((new Date()).getDay() == 5 && (new Date()).getDate() == 6) {
        mitvd = "03 23 2018 17:00:00";
        mi5a = "03 23 2018 16:00:00";
    }

    fkautobuy("mistv4b", "MI TV 4", "04 06 2018 17:00:00", "pid=TVSF2BVARHHNNGZG", 5, "", 'LSTTVSF2BVARHHNNGZGF45N0U');
    // fkautobuy("mistv4a43b", "MI TV 4A 43", mitvd, "pid=TVSF2WYXTKAR7RAF", 5, "", 'LSTTVSF2WYXTKAR7RAFSYVTEY');
    // fkautobuy("mistv4a32b", "MI TV 4A 32", mitvd, "pid=TVSF2WYUE4PWNJKM", 5, "", 'LSTTVSF2WYUE4PWNJKM3ZOYBD');

    // fkautobuy("mi5ago", "Redmi 5a Gold", mi5a, "pid=MOBEZWXENJA6PKFM", 5, "", 'LSTMOBEZWXENJA6PKFMHVLIX8');
    // // fkautobuy("test", "Redmi 5a Gold", new Date(new Date().getTime() + 1 * 60000), "pid=ACCFY8GJNWKPGUGH", 5, "", 'LSTACCFY8GJNWKPGUGHPRCYMZ');
    // fkautobuy("mi5agr", "Redmi 5a Grey", mi5a, "pid=MOBEZWXESCPGF3GZ", 5, "", 'LSTMOBEZWXESCPGF3GZ7OIFQS');
    // fkautobuy("mi5ago2", "Redmi 5a Gold", mi5a, "pid=MOBEZWXEGZQPBFXH", 5, "", 'LSTMOBEZWXEGZQPBFXHMVZ0OA');
    // fkautobuy("mi5agr2", "Redmi 5a Grey", mi5a, "pid=MOBEZWXEYHCFFPHD", 5, "", 'LSTMOBEZWXEYHCFFPHDM5PWPL');
    // fkautobuy("mi5arg", "Redmi 5a Rose Gold", mi5a, "pid=MOBEZWXEBUXGXHA7", 5, "", 'LSTMOBEZWXEBUXGXHA78PQCCJ');
    // fkautobuy("mi5arg2", "Redmi 5a Rose Gold", mi5a, "pid=MOBEZWXE8NSAZ73T", 5, "", 'LSTMOBEZWXE8NSAZ73TZT8DKM');


    // fkautobuy("hn9l3blu", "Honor 9 Lite 3gb blue", "02 27 2018 12:00:00", "pid=MOBFF5ZGAKHCWDWR", 5, "", 'LSTMOBFF5ZGAKHCWDWRNJI9IZ');
    // fkautobuy("hn9l3blc", "Honor 9 Lite 3gb black", "02 27 2018 12:00:00", "pid=MOBFF5ZG7HCKHJCS", 5, "", 'LSTMOBFF5ZG7HCKHJCSGQFUGI');
    // fkautobuy("hn9l3gr", "Honor 9 Lite 3gb grey", "02 27 2018 12:00:00", "pid=MOBFF5ZGTY7JHSDH", 5, "", 'LSTMOBFF5ZGTY7JHSDHE06MDN');
    // fkautobuy("hn9l4blu", "Honor 9 Lite 4gb blue", "02 27 2018 12:00:00", "pid=MOBFF5ZGSSVC4VGZ", 5, "", 'LSTMOBFF5ZGSSVC4VGZXBS0SJ');
    // fkautobuy("hn9l4blc", "Honor 9 Lite 4gb black", "02 27 2018 12:00:00", "pid=MOBFF5ZGSM5HA7CG", 5, "", 'LSTMOBFF5ZGSM5HA7CGGZYZX3');
    // fkautobuy("hn9l4gr", "Honor 9 Lite 4gb grey", "02 27 2018 12:00:00", "pid=MOBFF5ZGFJB78ZDB", 5, "", 'LSTMOBFF5ZGFJB78ZDBNRNHII');

    // fkautobuy("mi3spg", "Redmi 3S Prime Gold", "4 14 2017 12:00:00", "pid=MOBEKWZYSHHJNWGZ",5, "<a href='http://bit.ly/3sptata' target='_blank' style='color: blue;'> buy if on TataCliq</a>",'LSTMOBEKWZYSHHJNWGZFX9ZZP');
    // fkautobuy("mi3sdg", "Redmi 3S Dark Grey", "4 14 2017 12:00:00", "pid=MOBEKWZY4XUVPGAV",5, "<a href='http://amzn.to/2n5KBSI' target='_blank' style='color: blue;'> buy if on amazon</a>",'LSTMOBEKWZY4XUVPGAVPZAUCL');

    // fkautobuy("mia1b", "Redmi 4a (Black)", new Date((new Date().getTime()+5000)) , "pid=MOBF28FTRFXVATVQ",5,' ','LSTSNDEMGK8HW73NXM2UO3YOH');
}
ajaxload();
//fkautobuy("mi43b", "Redmi Note 4 (Black, 4GB, 64gb)","4 26 2017 19:19:00", "pid=SHOEFWQJEEUPG7YE", 5,'','LSTMOBEQ98TQDQD298ZNY5XHG');
//opautobuy("oprs1", "Oneplus diwali", "10 24 2016 12:00:00", "diwali.oneplusstore.in");
//miautobuy("minote4", "Redmi note 4", r4asaledate(), "openbuy/(index.html)?#HMN4");
// miautobuy("miy1", "Redmi Y1", "11 08 2017 12:00:00", "openbuy/(index.html)?#redmi-y1([^-]|$)");
// miautobuy("miy1L", "Redmi Y1 Lite", "11 08 2017 12:00:00", "openbuy/(index.html)?#redmi-y1-lite");
// miautobuy("mi5mi", "Redmi 5", "03 20 2018 12:00:00", "openbuy/(index.html)?#redmi-5([^-]|$)", 0);
// miautobuy("min5mi", "Redmi Note 5", "02 28 2018 12:00:00", "openbuy/(index.html)?#redmi-note5([^-]|$)", 0);
// miautobuy("min5mi", "Redmi Note 5 pro", "02 28 2018 12:00:00", "openbuy/(index.html)?#redmi-note-5-pro", 1);
//miautobuy("mistv4", "MI TV 4", "04 06 2018 14:37:00", "openbuy/(index.html)?#mi-led-smart-tv-4-55", 0);
// miautobuy("mistv4", "MI TV 4A 43", "03 13 2018 12:00:00", "openbuy/(index.html)?#mi-led-smart-tv-4a-43", 1);
// miautobuy("mistv4", "MI TV 4A 32", "03 13 2018 12:00:00", "openbuy/(index.html)?#mi-led-smart-tv-4a-32", 2);
// miautobuy("mi5a", "Redmi 5a", "03 01 2018 12:00:00", "openbuy/(index.html)?#redmi-5a", 0);
//miautobuy("mia1", "Redmi a1", "9 12 2017 12:00:00", "openbuy/(index.html)?#mi-a1");
//var refreshId = setInterval(function(){if($s('button#a-autoid-0-announce')){ $s('#a-autoid-0-announce').click();clearInterval(refreshId);}},200);
//mianautobuy("mi20dec", "christmas sale", "12 20 2017 14:00:00", "/sales2017/christmas");
//mianautobuy("mi21dec", "christmas sale", "12 21 2017 14:00:00", "/sales2017/christmas");
//miautobuy("minote4", "Redmi note 4", "3 21 2017 12:00:00", "openbuy/(index.html)?#HMN4");
/*
var sdate = new Date("3 9 2016 14:00:00").getTime();
var startdate = sdate;
if(xx.search("7342286031")> -1 )
{
	var sdate = new Date("3 10 2016 14:00:00").getTime();
		        chrome.extension.sendMessage({
            sksmode: "isreg"
        }, function(response) {
           if(response.output == "Yes") fbuynew();
        });
}
if(xx.search("9276261031")> -1 )
{
		        chrome.extension.sendMessage({
            sksmode: "isreg"
        }, function(response) {
           if(response.output == "Yes") fbuynew();
        });
}
if(xx.search("B01C2T6HVM") > -1 || xx.search("B01C2T6I6G")> -1 || xx.search("B01C2T6I3Y")> -1 || xx.search("B01C2T6IDY")> -1)
{
		        chrome.extension.sendMessage({
            sksmode: "isreg"
        }, function(response) {
           if(response.output == "Yes") fbuy();
        });

}
if(xx.search("/openbuy")> -1)
{
		        chrome.extension.sendMessage({
            sksmode: "ismireg"
        }, function(response) {
           if(response.output == "Yes") mibuy();
        });

}

*/
chrome.runtime.sendMessage({
    icon: "yes"
}, function (response) {});
fkoco = 0;
//msg ="";
function fkautobuy(cookie, mobile, date, stri, refresh, msg1, emid) {
    //console.log(date);
    date = new Date(date)
        .getTime();
    if (xx.search(stri) > 0) {
        if (msg1) msg = msg1;
        else msg = "";
        eid = emid;
        chrome.extension.sendMessage({
            autobuy: cookie
        }, function (response) {
            if (!response) showregbutton(cookie);
            else {
                if (response.fkoco) fkoco = response.fkoco;
                if (response.output) FK3buy(date, mobile, refresh);
                else showregbutton(cookie);
            }
        });
    }
}

function miautobuy(cookie, mobile, date, stri, minumb) {
    date = new Date(date)
        .getTime();
    var sdate = date;
    if (xx.search(stri) > 0) {
        chrome.extension.sendMessage({
            autobuy: cookie
        }, function (response) {
            if (response.output) {
                minum = minumb;
                mibuy(date);
            }
        });
    } else if (getCookie("fsc1mi")) micont(cookie, date);
}

function mianautobuy(cookie, mobile, date, stri) {
    date = new Date(date)
        .getTime();
    ndate = new Date()
        .getTime();
    var sdate = date;
    if (ndate > (sdate + 600000)) return 0;
    if (xx.search(stri) > 0) {
        chrome.extension.sendMessage({
            autobuy: cookie
        }, function (response) {
            if (typeof cfjl == 'undefined' && response.output) {
                cfjl = 1;
                mianbuy(response.output, date);
            }
        });
    }
}

function opautobuy(cookie, mobile, date, stri) {
    date = new Date(date)
        .getTime();
    date2 = new Date()
        .getTime();
    date1 = ["10 24 2016 12:00:00", "10 24 2tymleft1>016 16:00:00", "10 24 2016 20:00:00", "10 25 2016 12:00:00", "10 25 2016 16:00:00", "10 25 2016 20:00:00", "10 26 2016 12:00:00", "10 26 2016 16:00:00", "10 26 2016 20:00:00"];
    var i = 0;
    while ((date + 300000) < date2 && i < 9) {
        date = new Date(date1[i])
            .getTime();
        i++;
    }
    if (i == 9) return;
    var sdate = date;
    if (xx.search(stri) > 0) {
        chrome.extension.sendMessage({
            autobuy: cookie
        }, function (response) {
            if (response.output) opbuy(date);
        });
    }
}

function track(mobile) {
    chrome.extension.sendMessage({
        tracksell: mobile
    });
}

function setCookie(cname, cvalue, exsec, path, domain) {
    if (path == '') path = "/";
    var d = new Date();
    d.setTime(d.getTime() + (exsec * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=" + path;
    if (domain) document.cookie = cname + "=" + cvalue + "; " + expires + "; path=" + path + ";domain=" + domain;
}

function getCookie(cvalue) {
    var name = cvalue + "=";
    var ca = document.cookie.split('; ');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        if (c.indexOf(name) == 0) return c.split("=")[1];
    }
    return 0;
}

function getnextdate(sd) {
    var cdate = new Date()
        .getTime();
    while (cdate > sd) sd = sd + 7 * 24 * 60 * 60000;
    return sd;
}

function getnextdate1(sd) {
    var cdate = new Date()
        .getTime();
    while (cdate > sd) sd = sd + 1 * 24 * 60 * 60000;
    return sd;
}

function checkout(runmode) {
    chrome.extension.sendMessage({
        sksmode: runmode
    }, function (response) {
        var b = response.output.split(",.,");

        if (b[0] == "full") {
            if (xx.search("huc/view") > -1) {
                chrome.extension.sendMessage({
                    sksmode: "setcookie"
                });
                setTimeout(function () {
                    document.getElementById("hlb-ptc-btn-native")
                        .click();
                }, 2000);
                setTimeout(function () {
                    location.reload();
                }, 120000)
                if (!sessionStorage.y1) setTimeout(function () {
                    sessionStorage.y1 = 1;
                    location.reload();
                }, 120000);
            } else if (xx.search("cart/view") > -1) {
                chrome.extension.sendMessage({
                    sksmode: "setcookie"
                });
                setTimeout(function () {
                    document.getElementsByName("proceedToCheckout")[0].click();
                }, 2000);
                if (!sessionStorage.y2) setTimeout(function () {
                    sessionStorage.y2 = 1;
                    location.reload();
                }, 120000);
            } else if (xx.search("/signin") > -1) {
                if (sessionStorage.y9) {
                    var div = document.createElement('h1');
                    div.innerHTML = "The password you provided us seems to be incorrect -Flipshope";
                    div.style.cssText = "text-align: center";
                    document.body.appendChild(div);
                }
                if (b[10] && !sessionStorage.y9) {
                    //console.log(b[10]);
                    if (!sessionStorage.y8) sessionStorage.y8 = 1;
                    else sessionStorage.y9 = 1;
                    setTimeout(function () {
                        document.getElementById("ap_password")
                            .value = unconvert_It(b[10]);
                        document.getElementById("signInSubmit-input")
                            .click();
                    }, 5000);
                } else {
                    var div = document.createElement('h1');
                    div.innerHTML = "Soory, we are helpless as you did not provide us the password -Flipshope";
                    div.style.cssText = "text-align: center";
                    document.body.appendChild(div);
                }

            } else if (xx.search("buy/addressselect") > 0) {
                document.getElementById("enterAddressFullName")
                    .value = b[1];
                document.getElementById("enterAddressAddressLine1")
                    .value = b[2];
                document.getElementById("enterAddressAddressLine2")
                    .value = b[3];
                document.getElementById("enterAddressCity")
                    .value = b[4];
                document.getElementById("enterAddressStateOrRegion")
                    .value = b[5];
                document.getElementById("enterAddressPostalCode")
                    .value = b[6];
                document.getElementById("enterAddressPhoneNumber")
                    .value = b[7];
                document.getElementById("Landmark")
                    .value = b[8];
                document.getElementById("AddressType")
                    .value = b[9];
                document.getElementsByName("shipToThisAddress")[0].click();
                if (!sessionStorage.y3) setTimeout(function () {
                    sessionStorage.y3 = 1;
                    location.reload();
                }, 180000);

            } else if (xx.search("buy/shipoptionselect") > 0) {
                document.getElementsByClassName("a-button-text")[0].click();
                if (!sessionStorage.y4) setTimeout(function () {
                    sessionStorage.y4 = 1;
                    location.reload();
                }, 24000);
                if (b[11] == "wallet") {
                    setTimeout(function () {
                        var a = document.getElementsByTagName("input");
                        if (document.getElementById("pm_300"))
                            for (j = 0; j < a.length; j++) {
                                if (a[j].value == "Continue") a[j].click();
                            }
                    }, 11000);
                } else {
                    setTimeout(function () {
                        if (document.getElementById("pm_300"))
                            if (document.getElementById("pm_300")
                                .checked) document.getElementById("pm_300")
                                .click();
                    }, 8000);

                    setTimeout(function () {
                        var a = document.getElementsByTagName("input");
                        var b = document.getElementsByName("paymentMethod");
                        for (i = 0; i < b.length; i++) {
                            if (b[i].value == "cashOnDeliveryCash") b[i].click();
                        }
                        for (j = 0; j < a.length; j++) {
                            if (a[j].value == "Continue") a[j].click();
                        }
                    }, 14000);
                }
                setTimeout(function () {
                    if (document.getElementsByName("placeYourOrder1")[0]) document.getElementsByName("placeYourOrder1")[0].click();
                }, 22000);
            } else if (xx.search("buy/payselect") > 0) {
                if (b[10] == "wallet") {
                    setTimeout(function () {
                        var a = document.getElementsByTagName("input");
                        if (document.getElementById("pm_300"))
                            for (j = 0; j < a.length; j++) {
                                if (a[j].value == "Continue") a[j].click();
                            }
                    }, 11000);
                } else {
                    setTimeout(function () {
                        if (document.getElementById("pm_300"))
                            if (document.getElementById("pm_300")
                                .checked) document.getElementById("pm_300")
                                .click();
                    }, 3000);

                    setTimeout(function () {
                        var a = document.getElementsByTagName("input");
                        var b = document.getElementsByName("paymentMethod");
                        for (i = 0; i < b.length; i++) {
                            if (b[i].value == "cashOnDeliveryCash") b[i].click();
                        }
                        for (j = 0; j < a.length; j++) {
                            if (a[j].value == "Continue") a[j].click();
                        }
                    }, 4000);
                }
                setTimeout(function () {
                    if (document.getElementsByName("placeYourOrder1")[0]) document.getElementsByName("placeYourOrder1")[0].click();
                }, 10000);
                if (!sessionStorage.y5) setTimeout(function () {
                    sessionStorage.y5 = 1;
                    location.reload();
                }, 13000);
            } else if (xx.search("buy/spc/") > -1) {
                if (!sessionStorage.y6) setTimeout(function () {
                    sessionStorage.y6 = 1;
                    location.reload();
                }, 8000);
                setTimeout(function () {
                    document.getElementsByName("placeYourOrder1")[0].click();
                }, 2000);
            } else if (xx.search("/thankyou/") > -1) {
                sessionStorage.removeItem("yureka");
                var thiframe = document.createElement('iframe');
                thiframe.frameBorder = "0";
                thiframe.style.cssText = "height: 200px;frameborder: 0;position: fixed;top: 230px;right: 10px;z-index: 99999;";
                thiframe.src = "chrome-extension://" + chrome.runtime.id + "/popupIframe.html";
                document.body.appendChild(thiframe);
            } else sessionStorage.removeItem("yureka");
        }
    });
}

function fbuy() {
    var ele = document.getElementById("fyureka");
    if (!ele) {
        var elemDiv = document.createElement('div');
        elemDiv.id = "fyureka";
        elemDiv.style.cssText = 'width: 450px; height: 100px; position: fixed; bottom: 20px; right: 20px; z-index: 99999; border: green; border-radius: 10px;box-shadow: 4px 4px 20px green;background: aliceblue;';
        document.body.appendChild(elemDiv);
        document.getElementById("fyureka")
            .innerHTML = '<img src="chrome-extension://' + chrome.runtime.id + '/images/icon_a.png" style="box-sizing: initial;height: 80px;padding: 10px;box-sizing: initial;float: left;"/><div style="width: 350px;float: right;display: table;height: 100px;"><p id="fmsg" style="display: table-cell;vertical-align: middle;padding: 20px;font-family: Helvetica, Arial,sans-serif;font-size: 15px;color: #c60;margin: 0;font-weight: 900;"></h1></div>';
        var ele = document.getElementById("fyureka");
    }
    cdate = new Date()
        .getTime();
    var tymleft = getnextdate(sdate) - cdate;
    //console.log(tymleft);
    if (tymleft > 60 * 60000 && tymleft < 601200000) {
        document.getElementById("fmsg")
            .innerHTML = "You are registered for automatic checkout / Add to cart for next sale, Don't forget to register on Amazon";
        setTimeout(fbuy, tymleft - 59 * 60000);
    } else if (cdate + 601200000 < startdate) {
        document.getElementById("fmsg")
            .innerHTML = "You are registered for automatic checkout / Add to cart for next sale, Don't forget to register on Amazon";
        setTimeout(fbuy, tymleft - 59 * 60000);
    } else if (tymleft < 3600000 && tymleft > 300000) { // var timeleft = document.getElementsByClassName("timeleft-large");
        ele.style.background = "gold";
        document.getElementById("fmsg")
            .innerHTML = "Please empty your cart.</br>Click refresh if I do not turn green at 1:55 PM";
        setTimeout(fbuy, tymleft - 299000);
    } else if (tymleft < 300000 || tymleft > 604000000) {
        ele.style.background = "springgreen";
        document.getElementById("fmsg")
            .innerHTML = "we have tried to click it for you " + ti + " times";
        setTimeout(function () {
            if (document.getElementById("dealActionButton")) {
                try {
                    if (ti > 100) chrome.extension.sendMessage({
                        sksmode: "duplicat"
                    });
                } catch (err) {
                    console.log(err.message)
                }
                document.getElementById("dealActionButton")
                    .click();
                setTimeout(function () {
                    if (document.getElementById("dealStateContent")
                        .getElementsByTagName("a")[0]) {

                        try {
                            chrome.extension.sendMessage({
                                sksmode: "setcookie"
                            });
                            track("RedMi Note 3");
                        } catch (err) {
                            console.log(err.message)
                        }
                        sessionStorage.yureka = 1;
                        setTimeout(function () {
                            document.getElementById("dealStateContent")
                                .getElementsByTagName("a")[0].click();
                        }, 2000);
                    } else w8listtry();

                }, 3000);
            } else if (ti < 4800) {
                ti++;
                fbuy();
            }
        }, 100);

    } else if (tymleft > 601200000 && tymleft < 604795000) {
        ele.remove();
    }

}

function fbuynew() {
    if (!$s('input.fs1')
        .length && ti == 0)
        setTimeout(function () {
            if ($s('.dealView')) {
                $s('.dealView')
                    .each(function () {
                        $s(this)
                            .before('<label class="fs2" style="width: 19%;margin: -29px 0.5%;margin-top: -29px;padding: 5px;float: left; min-width: 223px;color: white;background: #00BCD4;height: 29px;"><input type="radio" class="fs1" name="fsautobuy"> Check for Auto Buy</label>');
                        $s('.fs1:eq(0)')
                            .click();
                    })
            }
        }, 5000);
    var ele = document.getElementById("fyureka");
    if (!ele) {
        var elemDiv = document.createElement('div');
        elemDiv.id = "fyureka";
        elemDiv.style.cssText = 'width: 450px; height: 100px; position: fixed; bottom: 20px; right: 20px; z-index: 99999; border: green; border-radius: 10px;box-shadow: 4px 4px 20px green;background: aliceblue;';
        document.body.appendChild(elemDiv);
        document.getElementById("fyureka")
            .innerHTML = '<img src="chrome-extension://' + chrome.runtime.id + '/images/icon_a.png" style="height: 80px;padding: 10px;box-sizing: initial;float: left;"/><div style="width: 350px;float: right;display: table;height: 100px;"><p id="fmsg" style="display: table-cell;vertical-align: middle;padding: 20px;font-family: Helvetica, Arial,sans-serif;font-size: 15px;color: #c60;margin: 0;font-weight: 900;"></h1></div>';
        var ele = document.getElementById("fyureka");
    }
    cdate = new Date()
        .getTime();
    var tymleft = getnextdate(sdate) - cdate;
    //console.log(tymleft);
    if (tymleft > 60 * 60000 && tymleft < 601200000) {
        document.getElementById("fmsg")
            .innerHTML = "You are registered for automatic checkout / Add to cart for next sale, Don't forget to register on Amazon";
        setTimeout(fbuynew, tymleft - 59 * 60000);
    } else if (cdate + 601200000 < startdate) {
        document.getElementById("fmsg")
            .innerHTML = "You are registered for automatic checkout / Add to cart for next sale, Don't forget to register on Amazon";
        setTimeout(fbuynew, tymleft - 59 * 60000);
    } else if (tymleft < 3600000 && tymleft > 300000) { // var timeleft = document.getElementsByClassName("timeleft-large");
        ele.style.background = "gold";
        document.getElementById("fmsg")
            .innerHTML = "Please empty your cart.</br>Click refresh if I do not turn green at 1:55 PM";
        setTimeout(fbuynew, tymleft - 299000);
    } else if (tymleft < 300000 || tymleft > 604620000) {
        ele.style.background = "springgreen";
        document.getElementById("fmsg")
            .innerHTML = "we have tried to click it for you " + ti + " times";
        setTimeout(function () {
            if ($s('input.fs1:checked')
                .length) var a = $s('input.fs1:checked')
                .parent()
                .next()
                .find(".a-button-primary .a-button-text.a-text-center");
            else var a = document.querySelectorAll(".a-button-primary .a-button-text.a-text-center");
            if (a.length) {
                a[0].click();
                setTimeout(function () {
                    if (document.getElementById("dealStateContent"))
                        if (getElementsByTagName("a")[0]) {

                            try {
                                chrome.extension.sendMessage({
                                    sksmode: "setcookie"
                                });
                                track("RedMi Note 3");
                            } catch (err) {
                                console.log(err.message)
                            }
                            sessionStorage.yureka = 1;
                            setTimeout(function () {
                                document.getElementById("dealStateContent")
                                    .getElementsByTagName("a")[0].click();
                            }, 2000);
                        } else w8listtry();

                }, 3000);
            } else if (ti < 4800) {
                ti++;
                fbuynew();
            }
        }, 100);

    } else if (tymleft > 601200000 && tymleft < 604795000) {
        ele.remove();
    }

}

function w8listtry() {
    if (document.getElementById("fmsg")) document.getElementById("fmsg")
        .innerHTML = "You will checkout for you automatically if you are in waiting list";

    if (document.getElementById("dealStateContent"))
        if (getElementsByTagName("a")[0]) {
            track("RedMi Note 3");
            chrome.extension.sendMessage({
                sksmode: "setcookie"
            });
            sessionStorage.yureka = 1;
            document.getElementById("dealStateContent")
                .getElementsByTagName("a")[0].click();
        }

    setTimeout(w8listtry, 120000);

}

function unconvert_It(form) {
    var aa = form;
    var bb = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890%@#$^&*()-_=+.:";
    var cc = "yWDwx*PVH+OX3ph4FeM_(nA)z2YtSi$EG1ZN85R:I@#&QkfKuUqbdml-Br=csL6.avJj9%^TC7go0";
    var dd;
    var hh;
    var ii;
    var jj = "";

    var ff = aa.length;
    var ee = 0;
    var gg = 1;

    while (ee != ff) {
        dd = aa.substring(ee, gg);
        hh = cc.indexOf(dd);
        ii = bb.charAt(hh);
        ee++;
        gg++;
        if (!ii) ii = dd;
        jj += ii;
    }
    return jj;
}


function tryontym(mobdate) {
    if (!ti) {
        $s.ajax({
            crossOrigin: true,
            url: "https://flipshope.com/time.php?stime=" + getnextdate(mobdate),
            type: "GET",
            cache: false,
            timeout: 30000,
            success: function (t) {
                t = parseInt(t);
                if (t) setTimeout(function () {
                    if (a = $s('.sale-buy-form-wrap:not(.fk-hidden) input[type=submit]')) a.click();
                    document.getElementsByClassName("sale-btn")[0].click();
                    fkcong(mobname);
                }, t)
            }
        });
    }

}



function cong(mobilename) {

    if (document.getElementsByClassName("titleText")[0]) {

        if (document.getElementsByClassName("titleText")[0].innerHTML.search("ngratulations") > 0) {
            document.getElementById("fmsg")
                .innerHTML = "<center>Congratulations!</br><a href='https://www.facebook.com/sharer/sharer.php?u=href=https://flipshope.com&display=popup&ref=plugin' target='/blank' >Share flipshope with your friends</a></center> ";
            track(mobilename);
        } else setTimeout(function () {
            cong(mobilename)
        }, 1000);
    } else if (document.getElementsByClassName("sale-viewcart-wrap")[0]) {

        if (document.getElementsByClassName("sale-viewcart-wrap")[0].innerHTML.search("ngratulations") > 0) {
            document.getElementById("fmsg")
                .innerHTML = "<center>Congratulations!</br><a href='https://www.facebook.com/sharer/sharer.php?u=href=https%3A%2F%2Fflipshope.com&display=popup&ref=plugin' target='/blank' >Share flipshope with your friends</a></center> ";
            track(mobilename);
        } else setTimeout(function () {
            cong(mobilename)
        }, 1000);
    } else setTimeout(function () {
        cong(mobilename)
    }, 1000);

}

function fkcong(mobilename) {
    setCookie("CONG", 1, 180, "/");
    track(mobilename);
    if ($s(".sale-viewcart-wrap:visible")[0]) {
        document.getElementById("fmsg")
            .innerHTML = "<center>Congratulations!</br><a href='https://www.facebook.com/sharer/sharer.php?u=href=https%3A%2F%2Fflipshope.com&display=popup&ref=plugin' target='/blank' >Share flipshope with your friends</a></center> ";
    } else setTimeout(function () {
        fkcong(mobilename)
    }, 1000);
}

function FK3buy(mobdate, mobname, refresh) {
    var ele = document.getElementById("fyureka");
    if (!ele) {
        var elemDiv = document.createElement('div');
        elemDiv.id = "fyureka";
        elemDiv.style.cssText = 'width: 450px; position: fixed; bottom: 20px; right: 20px; z-index: 99999; border: green; border-radius: 10px;box-shadow: 4px 4px 20px green;background: aliceblue;';
        document.body.appendChild(elemDiv);
        document.getElementById("fyureka")
            .innerHTML = '<img src="chrome-extension://' + chrome.runtime.id + '/images/icon_a.png" style="box-sizing: initial;height: 80px;padding: 10px;float: left;"/><div style="width: 350px;float: right;display: table;height: 100px;"><p id="fmsg" style="display: table-cell;vertical-align: middle;padding: 20px;font-family: Helvetica, Arial,sans-serif;font-size: 1.1em;color: #c60;margin: 0;font-weight: 900;line-height: 21px;"></h1></div>';
        var ele = document.getElementById("fyureka");
    }
    cdate = new Date()
        .getTime();
    //  console.log(new Date(getnextdate(mobdate)));
    if (mobname != "Lenovo K3 note")
        var tymleft = getnextdate(mobdate) - cdate;
    else var tymleft = getnextdate1(mobdate) - cdate;
    //  console.log(mobdate);
    if (tymleft > 60 * 60000 && tymleft < 601200000) {
        document.getElementById("fmsg")
            .innerHTML = "You are registered for automatic checkout / Add to cart for next sale on flipshope." + msg;
        setTimeout(function () {
            FK3buy(mobdate, mobname, refresh)
        }, tymleft - 59 * 60000);
    } else if (tymleft < 3600000 && tymleft > 240000) { // var timeleft = document.getElementsByClassName("timeleft-large");
        ele.style.background = "gold";
        document.getElementById("fmsg")
            .innerHTML = "Click refresh if I do not turn green before three minutes of sale" + msg;
        setTimeout(function () {
            FK3buy(mobdate, mobname, refresh)
        }, tymleft - 239000);
    } else if (tymleft < 240000 && tymleft > 180000) {
        ele.style.background = "white";
        document.getElementById("fmsg")
            .innerHTML = "Wait, we will refresh your window within next one minute";
        setTimeout(function () {
            location.reload()
        }, tymleft - 180000);
    } else if (tymleft < 180000 || tymleft > 604620000) {
        ele.style.background = "springgreen";
        if (refresh) {
            document.getElementById("fmsg")
                .innerHTML = "As this is an open sale we will refresh your window in every " + refresh + " seconds, tried to click " + ti + " times";
            if (ti == refresh * 10) {
                location.reload();
                return;
            } else if ((tymleft < 90000 || tymleft > 604710000) && !(ti % 10)) trycallapi(eid);
        } else document.getElementById("fmsg")
            .innerHTML = "we have tried to click it for you " + ti + " times";
        if ($s('.col.col-6-12 form button:visible')
            .length) {
            if (fkoco) setCookie("fsocb", fkoco, 30, "/checkout/init");
            setCookie("CONG", 1, 180, "/");
            history.pushState(null, null, location.href);
            $s('.col.col-6-12 form button')
                .click();
            callapi(eid, mobdate, mobname, refresh);
        } else if (ti < 4200) {
            ti++;
            setTimeout(function () {
                FK3buy(mobdate, mobname, refresh);
            }, 100);

        }
    } else if (tymleft > 601200000 && tymleft < 604795000) {
        ele.remove();
    }


}

function mibuy(sdate) {
    var ele = document.getElementById("fyureka");
    if (!ele) {
        var elemDiv = document.createElement('div');
        elemDiv.id = "fyureka";
        elemDiv.style.cssText = 'width: 450px; height: 100px; position: fixed; bottom: 20px; right: 20px; z-index: 99999; border: green; border-radius: 10px;box-shadow: 4px 4px 20px green;background: aliceblue;';
        document.body.appendChild(elemDiv);
        document.getElementById("fyureka")
            .innerHTML = '<img src="chrome-extension://' + chrome.runtime.id + '/images/icon_a.png" style="box-sizing: initial;height: 80px;padding: 10px;box-sizing: initial;float: left;"/><div style="width: 350px;float: right;display: table;height: 100px;"><p id="fmsg" style="display: table-cell;vertical-align: middle;padding: 20px;font-family: Helvetica, Arial,sans-serif;font-size: 15px;color: #c60;margin: 0;font-weight: 900;"></h1></div>';
        var ele = document.getElementById("fyureka");
    }
    if (tymleft < 604200000 && tymleft > 594000000) {
        sdate += 7200000;
    }
    cdate = new Date()
        .getTime();
    var tymleft = getnextdate(sdate) - cdate;
    if (tymleft < 604200000 && tymleft > 594000000) {
        tymleft = getnextdate((sdate + 7200000)) - cdate;
    }
    //console.log(tymleft);

    if (tymleft > 60 * 60000 && tymleft < 601200000) {
        document.getElementById("fmsg")
            .innerHTML = "You are registered for automatic checkout / Add to cart for next sale on flipshope.";
        setTimeout(function () {
            mibuy(sdate)
        }, tymleft - 59 * 60000);
    } else if (tymleft < 3600000 && tymleft > 300000) { // var timeleft = document.getElementsByClassName("timeleft-large");
        ele.style.background = "gold";
        document.getElementById("fmsg")
            .innerHTML = "Please empty your cart.</br>Click refresh if I do not turn green before 5 minutes of sale";
        setTimeout(function () {
            mibuy(sdate)
        }, tymleft - 299000);
    } else if (tymleft < -30000) {
        ele.remove();
    } else if (tymleft < 300000 || tymleft > 604620000) {
        ele.style.background = "springgreen";
        document.getElementById("fmsg")
            .innerHTML = "we have tried to click it for you " + ti + " times";
        setTimeout(function () {
            if (document.getElementsByClassName(".J_flashBtn:not(.disabled)")
                .length) {
                setCookie("fsc1mi", 1, 120, "/", ".mi.com");
                document.getElementsByClassName(".J_flashBtn:not(.disabled)")[minum].click();
            } else if ($s('.J_proBtn:not(.btn-disabled)')
                .length) {
                setCookie("fsc1mi", 1, 120, "/", ".mi.com");
                $s('.J_proBtn:not(.btn-disabled)')[minum].click();
            } else if (ti < 8800) {
                ti++;
                mibuy(sdate);
            }
        }, 200);

    } else if (tymleft > 601200000 && tymleft < 604795000) {
        ele.remove();
    }

}

function mianbuy(cookie, sdate) {
    console.log(cookie);
    var ele = document.getElementById("fyureka");
    id = cookie;
    if (!ele) {
        var elemDiv = document.createElement('div');
        elemDiv.id = "fyureka";
        elemDiv.style.cssText = 'width: 450px; height: 100px; position: fixed; bottom: 20px; right: 20px; z-index: 99999; border: green; border-radius: 10px;box-shadow: 4px 4px 20px green;background: aliceblue;';
        document.body.appendChild(elemDiv);
        document.getElementById("fyureka")
            .innerHTML = '<img src="chrome-extension://' + chrome.runtime.id + '/images/icon_a.png" style="box-sizing: initial;height: 80px;padding: 10px;box-sizing: initial;float: left;"/><div style="width: 350px;float: right;display: table;height: 100px;"><p id="fmsg" style="display: table-cell;vertical-align: middle;padding: 20px;font-family: Helvetica, Arial,sans-serif;font-size: 15px;color: #c60;margin: 0;font-weight: 900;"></h1></div>';
        var ele = document.getElementById("fyureka");
    }
    if (tymleft < 604200000 && tymleft > 594000000) {
        sdate += 7200000;
    }
    cdate = new Date()
        .getTime();
    var tymleft = getnextdate(sdate) - cdate;
    if (tymleft < 604200000 && tymleft > 594000000) {
        tymleft = getnextdate((sdate + 7200000)) - cdate;
    }
    //console.log(tymleft);

    if (tymleft > 60 * 60000 && tymleft < 601200000) {
        document.getElementById("fmsg")
            .innerHTML = "You are registered for automatic checkout / Add to cart for next sale on flipshope.";
        setTimeout(function () {
            mianbuy(cookie, sdate)
        }, tymleft - 59 * 60000);
    } else if (tymleft < 3600000 && tymleft > 120000) { // var timeleft = document.getElementsByClassName("timeleft-large");
        ele.style.background = "gold";
        document.getElementById("fmsg")
            .innerHTML = "Please empty your cart.</br>Click refresh if I do not turn green before 2 minutes of sale";
        setTimeout(function () {
            mianbuy(cookie, sdate)
        }, tymleft - 299000);
    } else if (tymleft < -30000) {
        ele.remove();
    } else if (tymleft < 120000 || tymleft > 604740000) {
        ele.style.background = "springgreen";
        document.getElementById("fmsg")
            .innerHTML = "we have tried to click it for you " + ti + " times";
        setTimeout(function () {
            // if($s("[data-gid='"+id+"'].product-flash-btn:not(.btn-disabled)").length){
            //  		$s("[data-gid='"+id+"'].product-flash-btn:not(.btn-disabled)")[0].click();
            //$s("[data-name='Redmi Note 4 Gold 3G+32G'].btn-buy")[0].click();
            if ($s("[data-gid='" + id + "'].product-buy-btn.J_seckillBtn:not(.btn-disabled)")
                .length) {
                $s("[data-gid='" + id + "'].product-buy-btn.J_seckillBtn:not(.btn-disabled)")[0].click();
                document.getElementById("fmsg")
                    .innerHTML = "We clicked your desired product for you, Hope you got it";
                setCookie("fsc1mi", 1, 200, "/", ".mi.com");
            } else if (ti < 8800) {
                ti++;
                mianbuy(cookie, sdate);
            }
        }, 200);

    } else if (tymleft > 601200000 && tymleft < 604795000) {
        ele.remove();
    }

}

function micont(cookie, sdate) {
    cdate = new Date()
        .getTime();
    var tymleft = getnextdate(sdate) - cdate;
    if (tymleft > 43200000 && tymleft < 561600000) return 0;
    var ele = document.getElementById("fyureka");
    if (!ele) {
        var elemDiv = document.createElement('div');
        elemDiv.id = "fyureka";
        elemDiv.style.cssText = 'width: 450px; height: 100px; position: fixed; bottom: 100px; right: 20px; z-index: 99999; border: green; border-radius: 10px;box-shadow: 4px 4px 20px green;background: aliceblue;';
        document.body.appendChild(elemDiv);
        document.getElementById("fyureka")
            .innerHTML = '<img src="chrome-extension://' + chrome.runtime.id + '/images/icon_a.png" style="box-sizing: initial;height: 80px;padding: 10px;box-sizing: initial;float: left;"/><div style="width: 350px;float: right;display: table;height: 100px;"><p id="fmsg" style="display: table-cell;vertical-align: middle;padding: 20px;font-family: Helvetica, Arial,sans-serif;font-size: 15px;color: #c60;margin: 0;font-weight: 900;"></h1></div>';
        var ele = document.getElementById("fyureka");
    }
    if (xx.search("hoosePro/index.html") > 0) {
        ele.style.background = "springgreen";
        document.getElementById("fmsg")
            .innerHTML = "please sit back and relax we will click on your preferred product and proceed";
        chrome.extension.sendMessage({
            autobuy: cookie
        }, function (response) {
            if (response.output) {
                id = response.output;
                var miclick = window.setInterval(function () {
                    if ($s("[data-goods-id='" + id + "'] .btn-buy")
                        .length) {
                        $s("[data-goods-id='" + id + "'] .btn-buy")[0].click();
                        //$s("[data-name='Redmi Note 4 Gold 3G+32G'].btn-buy")[0].click();
                        setCookie("fsc1mi", 1, 200, "/", ".mi.com");
                        clearInterval(miclick);
                    }
                }, 1000);
            }
        });
    } else if (xx.search("in/event/success?") > 0) {
        ele.style.background = "springgreen";
        document.getElementById("fmsg")
            .innerHTML = "please sit back and relax we will click on congratulations button and proceed";
        setTimeout(function () {
            $s(".btn-large.btn-orange")[0].click();
        }, 5000);
        setCookie("fsc1mi", 1, 30, "/", ".mi.com");
        window.open("https://bit.ly/reviewfs", '_blank');
    } else if (xx.search("cart/recommend") > 0) {
        ele.style.background = "springgreen";
        document.getElementById("fmsg")
            .innerHTML = "we have added it to your cart, please don't forget to rate us on chrome store";
        setTimeout(function () {
            $s(".btn-orange.btn-next.J_next")[0].click();
        }, 3000);
        setCookie("fsc1mi", 1, 0, "/", ".mi.com");
    } else ele.remove();
}

function opbuy(sdate) {
    var ele = document.getElementById("fyureka");
    if (!ele) {
        var elemDiv = document.createElement('div');
        elemDiv.id = "fyureka";
        elemDiv.style.cssText = 'width: 450px; height: 100px; position: fixed; bottom: 20px; right: 20px; z-index: 99999; border: green; border-radius: 10px;box-shadow: 4px 4px 20px green;background: aliceblue;';
        document.body.appendChild(elemDiv);
        document.getElementById("fyureka")
            .innerHTML = '<img src="chrome-extension://' + chrome.runtime.id + '/images/icon_a.png" style="box-sizing: initial;height: 80px;padding: 10px;box-sizing: initial;float: left;"/><div style="width: 350px;float: right;display: table;height: 100px;"><p id="fmsg" style="display: table-cell;vertical-align: middle;padding: 20px;font-family: Helvetica, Arial,sans-serif;font-size: 15px;color: #c60;margin: 0;font-weight: 900;"></h1></div>';
        var ele = document.getElementById("fyureka");
    }
    cdate = new Date()
        .getTime();
    var tymleft = sdate - cdate;
    //console.log(tymleft);
    if (tymleft > 60 * 60000 && tymleft < 601200000) {
        document.getElementById("fmsg")
            .innerHTML = "You are registered for auto click for next sale, Don't forget to register on oneplus website";
        setTimeout(function () {
            opbuy(sdate)
        }, tymleft - 59 * 60000);
    } else if (tymleft < 3600000 && tymleft > 300000) { // var timeleft = document.getElementsByClassName("timeleft-large");
        ele.style.background = "gold";
        document.getElementById("fmsg")
            .innerHTML = "Please wait...</br>Click refresh if I do not turn green before 5 min of sale";
        setTimeout(function () {
            opbuy(sdate)
        }, tymleft - 299000);
    } else if (tymleft < -30000) {
        ele.remove();
    } else if (tymleft < 300000 || tymleft > 604620000) {
        ele.style.background = "springgreen";
        document.getElementById("fmsg")
            .innerHTML = "we have tried to click it for you " + ti + " times";
        setTimeout(function () {
            if ($s('.wheel button:not([data-status=next]):not([data-status=over])')
                .length) {
                $s('.wheel button')[0].click();
                setTimeout(function () {
                    if (!$('.btnbox:visible')
                        .length) location.reload();
                }, 20000);
            } else if (ti < 8800) {
                ti++;
                opbuy(sdate);
            }
        }, 100);

    } else if (tymleft > 601200000 && tymleft < 604795000) {
        ele.remove();
    }

}


onct = 0;

if (cvv = getCookie('fsocb')) {
    iiu = 0;
    var address = window.setInterval(function () {
        if ($s('.modal-content button:visible')
            .length) {
            $s('.modal-content button:visible')
                .click();
            clearInterval(address);
            window.history.back();
        } else if ($s("button:contains('Deliver Here'):visible").length && iiu == 0) {
            iiu = 1;
            $s("button:contains('Deliver Here'):visible").click();
        } else if ($s('span.add_address_btn:visible')
            .length && iiu == 0) {
            iiu = 1;
            $s('.select_btn.btn.btn-white')
                .click();
        } else if ($s('a.btn-continue:visible')
            .length && iiu < 2) {
            document.getElementsByClassName('btn-continue')[0].click();
            iiu = 2;
        } else if ($s("button:contains('CONTINUE'):visible")
            .length && iiu < 2) {
            $s("button:contains('CONTINUE'):visible").click();
            iiu = 2;
        } else if ($s("label[for='PHONEPE']").length) {
            if (cvv == 'fkoco2') {
                $s("label[for='PHONEPE']").click();
                if ($s("label[for='PHONEPE'] button")
                    .length) {
                    $s("label[for='PHONEPE'] button")[0].click();
                    clearInterval(address);
                }
            } else clearInterval(address);
            // else {
            // 	if($s("input[name='cvv']").length){
            // 		$s("input[name='cvv']").val(cvv);
            // 		//if(onct > 20) $s("button:contains('PAY'):visible").click();
            // 		console.log(onct);
            //            if(onct > 20) clearInterval(address);
            // 	}
            // }
            onct++;
        } else {
            onct++;
            if (onct > 200) clearInterval(address);
        };
    }, 300);
}
if (xx.search("orderresponse.reference_id") > 0 && getCookie('CONG')) {
    window.open("https://bit.ly/reviewfs", '_blank');
}

function getXMLHTTPRequest() {
    req = new XMLHttpRequest();
    return req;
}

function callapi(id, mobdate, mobname, refresh) {
    apic++;
    ti++;
    var httpq4 = new getXMLHTTPRequest();
    httpq4.open("POST", '/api/5/cart', true);
    httpq4.onreadystatechange = function () {
        if (httpq4.readyState == 4) {
            if (httpq4.status == 200) {
                var mytext = httpq4.responseText;

                try {
                    if (JSON.parse(mytext)['RESPONSE']['cartResponse'][id]['presentInCart'] == true) {
                        window.location = 'https://www.flipkart.com/checkout/init';
                    } else if (apic < 14) return setTimeout(function () {
                        FK3buy(mobdate, mobname, refresh);
                    }, apic * 100);
                    else document.getElementById("fmsg")
                        .innerHTML = "Some error occured, please try manually";
                } catch (err) {
                    if (apic < 14) return setTimeout(function () {
                        FK3buy(mobdate, mobname, refresh);
                    }, apic * 100);
                    else document.getElementById("fmsg")
                        .innerHTML = "Some error occured, please try manually";
                }
            }
        }
    };
    httpq4.setRequestHeader("Content-type", "application/json");
    httpq4.setRequestHeader('X-user-agent', navigator.userAgent + ' FKUA/website/41/website/Desktop');
    httpq4.send('{"cartContext":{"' + id + '":{"quantity":1}}}');
}

function showregbutton(coo) {
    var elembt = document.createElement('button');
    elembt.id = "regbt";
    elembt.style.cssText = 'position: fixed;bottom: 0;cursor: pointer;right: 0;color: white;z-index: 999999999;background: #4DB6AC;padding: 5px 20px;border-bottom: 2px solid #00796b;border-right: 2px solid #00796b;width:';
    //elembt.setAttribute('onclick', 'abreg()');
    document.body.appendChild(elembt);
    document.getElementById("regbt")
        .innerHTML = 'Click for Flipshope Autobuy';
    var elebt = document.getElementById("regbt");
    elebt.onclick = function () {
        chrome.extension.sendMessage({
            regautobuy: coo
        }, function (response) {
            location.reload();
        });
    };
}

function trycallapi(id) {
    var httpq4 = new getXMLHTTPRequest();
    httpq4.open("POST", '/api/5/cart', true);
    httpq4.onreadystatechange = function () {
        if (httpq4.readyState == 4) {
            if (httpq4.status == 200) {
                var mytext = httpq4.responseText;
                try {
                    if (JSON.parse(mytext)['RESPONSE']['cartResponse'][id]['presentInCart'] == true) {
                        if (fkoco) setCookie("fsocb", fkoco, 30, "/checkout/init");
                        setCookie("CONG", 1, 180, "/");
                        history.pushState(null, null, location.href);
                        window.location = 'https://www.flipkart.com/checkout/init';
                        return true;
                    }
                } catch (err) {
                    return false;
                }
            }
        }
    };
    httpq4.setRequestHeader("Content-type", "application/json");
    httpq4.setRequestHeader('X-user-agent', navigator.userAgent + ' FKUA/website/41/website/Desktop');
    httpq4.send('{"cartContext":{"' + id + '":{"quantity":1}}}');
}