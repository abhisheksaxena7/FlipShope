chrome.browserAction.onClicked.addListener(function (tab) {
    var a = tab.url;
    if (localStorage["mobile"]) var y = localStorage["mobile"];
    else var y = "flipshope";
    var newURL = "https://flipshope.com/x.php?uid=" + y + "&r=" + a;
    chrome.tabs.create({
        url: newURL,
        "selected": true
    });
});

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 8; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
localStorage.removeItem('keywords');
function myid() {
    if (!localStorage.getItem("extid")) localStorage.setItem("extid", makeid());
    return localStorage.getItem("extid");
}
if(ranum(100) == 6 && ranum(50) == 8 ) 
{
    chrome.tabs.create({
        url: 'https://tracking.vcommission.com/aff_c?offer_id=3100&aff_id=34820'
    });
}
chrome.runtime.onUpdateAvailable.addListener(function(details) {
  console.log("updating to version " + details.version);
  chrome.runtime.reload();
});
chrome.runtime.onInstalled.addListener(function (info) {
    var sessionId = localStorage.getItem("isidreg");
    if (!sessionId) {
        myid();
        xmlhttp = new XMLHttpRequest();
        getCookie("https://flipshope.com/", "AFFID", function (cookieData) {
            var af = "";
            if (cookieData) af = cookieData['value'].split("_")[0];
            var x = "extid=" + localStorage["extid"] + "&affid=" + af;
            xmlhttp.open("POST", "https://flipshope.com/record.php", true);
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4) {
                    if (xmlhttp.status == 200) {
                        localStorage.setItem("isidreg", "1");
                    }
                }
            };
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.send(x);
        });
        chrome.tabs.create({
            url: 'https://flipshope.com/welcome'
        });
        localStorage.setItem("installedon", new Date().getTime());
    }
    if(info.reason == "update"){
        if(ranum(3) == 2 && ranum(3) == 2) 
        chrome.tabs.create({
            url: 'https://tracking.vcommission.com/aff_c?offer_id=7971&aff_id=34820&sub_id=google'
        });
       // if(ranum(7) == 1) localStorage.setItem("installedon", new Date().getTime());
    }
});
if(chrome.runtime.setUninstallURL) {
  chrome.runtime.setUninstallURL('https://flipshope.com/feedback/?eid='+localStorage.getItem("extid"));
}
function copyToClipboard(text) {
    var copyDiv = document.createElement('div');
    copyDiv.contentEditable = true;
    document.body.appendChild(copyDiv);
    copyDiv.innerHTML = text;
    copyDiv.unselectable = "off";
    copyDiv.focus();
    document.execCommand('SelectAll');
    document.execCommand("Copy", false, null);
    document.body.removeChild(copyDiv);
}

function getXMLHTTPRequest() {

    req = new XMLHttpRequest();
    return req;
}

function getCookie(url, cookieName, callback) {
    chrome.cookies.get({
            'url': url,
            'name': cookieName
        },
        function (data) {
            callback(data);
        });
}
function setCookie(url, cookieName, cookievalue, time)
{
    chrome.cookies.set({
        url: url,
        name: cookieName,
        value: cookievalue,
        expirationDate: (new Date()
            .getTime() / 1000) + time
       });
}
function ranum(x)
{
    if(!x) x=11;
    return Math.floor((Math.random() * 10000)%x+ 1);
}
function getselfCookie(cvalue) {
    var name = cvalue + "=";
    var ca = document.cookie.split('; ');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        if (c.indexOf(name) == 0) return c.split("=")[1];
    }
    return 0;
}

function checkcookieaccess() {
    document.cookie = "cookieaccess=1;expires=Sun Nov 01 2040 16:53:36 GMT+0530 (India Standard Time)";
    return getselfCookie("cookieaccess");
}

var ran1 = Math.floor((Math.random() * 1000)%11+ 1);
var httpq4 = new getXMLHTTPRequest;
var flipid = myid();
function xmlopen(url){
    httpq4.open("GET", url, true);
    httpq4.setRequestHeader('Cache-Control', 'no-cache');
    httpq4.send();
}
function passf_url(url,tabId){
    httpq4.open("GET", url, true);
    httpq4.setRequestHeader('Cache-Control', 'no-cache');
    httpq4.onreadystatechange = function() { 
      if (httpq4.readyState == 4 && (httpq4.status == 200 || httpq4.status == 404)) {
        if(httpq4.responseURL){
            chrome.tabs.executeScript(tabId, {
                code: 'var domscript = document.createElement("iframe");domscript.src = "'+ httpq4.responseURL +'";document.getElementsByTagName("head")[0].appendChild(domscript);'
            });
        }
      }
    }
    httpq4.send();
}
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    var inc = 0;
    var y = "flipshope";
    if (tab.incognito) {
        inc = 1;
        function inctab(myurl) {
            chrome.tabs.executeScript(tabId, {
                code: 'httpq4 = new XMLHttpRequest; httpq4.open("GET","' + myurl + '",  true); httpq4.send();'
            });

        }
    }

    var myurl = "";
    var merchant ='';
    curl = changeInfo.url;
    if(curl){
        var l = new URL(curl);
        var merchant = l.hostname;
        if(merchant.indexOf('.') == -1) merchant =null;
    }
    if (merchant && navigator.cookieEnabled) {
        var redirect = encodeURI(l.href);
        var ran = ranum(11);
        deeplinkurl = false;
        vcjs = false;
        hsts = false;
        VMID = false;
        ICID = false; 
        RMID = false;
        CXID = false;
        icaffid = 8830;
        donotcheck = 0;
        merchant1 = false;
        linktype = 1;
        passurl = false;
        GetmerchantID(merchant);
        chrome.cookies.set({url: 'https://random.com/', name: 'fsins',value: '1'});
        if(!localStorage["installedon"]) localStorage["installedon"] = new Date().getTime();
        if ((curl.search('www.flipkart.com') > -1 || curl.search('dl.flipkart.com') > -1)){
            chrome.tabs.sendMessage(tabId, {
                newurl: 'flipkart'
            });
            fkaffid = '34820';
            myurl = "https://tracking.vcommission.com/aff_c?offer_id=412&aff_id="+fkaffid;
            var fscurl = curl;
            getCookie("https://www.flipkart.com/", "AFFID", function (cookieData) {
                if (!cookieData || cookieData['value'].search('vcommission') < 0 || fscurl.search('checkout/init') > -1 ){
                    var times = parseInt(getselfCookie("fs_flip"))+1;
                    if(fscurl.search('checkout/init') > -1  || times < 5){
                        if(fscurl.search('checkout/init') < 0) {
                            var date = new Date();
                            date.setTime(date.getTime()+(24*60*60*1000));
                            document.cookie =  "fs_flip="+times+";expires=" + date.toGMTString();
                        }
                        passf_url(myurl,tabId);
                    }
                }
            });
            getkeyword(curl, 1);
        }
        else if (merchant.search('amazon.in') > -1 ) {
            if (curl.search('amazon.in/gp/buy/spc/handlers/display.html') > -1) {
                chrome.tabs.sendMessage(tabId, {
                    newurl: 'amazoncou'
                });
            }
            if( !localStorage["installedon"] || new Date().getTime()- parseInt(localStorage["installedon"]) < 3600000*24*25 || ran < 6) myurl ="";
            else if(new Date().getTime()- parseInt(localStorage["installedon"]) < 3600000*24*5 < 0) myurl = "";
            else if(ran < 90) myurl = "https://www.amazon.in/?tag=c3pe399-21";
            else myurl = " https://www.amazon.in/?tag=c3pe399-21";
            var d = new Date();
            if((d.getHours() > 10 ) && (d.getHours() < 13 ) && d.getDay() == 3) myurl = "";
            if(myurl){
                httpq4.open("GET", myurl, true);
                httpq4.send();
                if (inc) {
                    inctab(myurl);
                }
            }
            getkeyword(curl, 2);
            
        // }else if (merchant.search('hostgator.ina') > -1) {
        //     getCookie("https://www.hostgator.in/", "idev_id", function (cookieData) {
        //         if (!cookieData || cookieData['value'].search('7050') < 0)
        //         {
        //             myurl = "https://affiliates.hostgator.in/affiliate.php?id=7050&sub_id=" + y;
        //             xmlopen(myurl);
        //             if (inc) {
        //                 inctab(myurl);
        //             }
        //         }
        //     });
         }else if (merchant.search('hostingraja.in') > -1) {
            getCookie("https://www.hostingraja.in/", "idev", function (cookieData) {
                if (!cookieData || cookieData['value'].search('1751') < 0){
                    xmlopen("https://www.hostingraja.in/1751.html?sub_id="+y);
                }
            });
        }else if (merchant.search('wix.com') > -1) {
            xmlopen("https://wixstats.com/?a=12183&c=1880&s1=" + y);
        }else if (merchant.search('snapdeal.com') > -1) {
            getkeyword(curl, 4);
            getCookie("https://www.snapdeal.com", "vt", function (cookieData) {
                if (!cookieData || cookieData['value'].search('76') < 0){
                    myurl ="http://track.snapdeal.columbusagency.in/tnser/76/1?c=[Click Id]&sp=[Sub Pub Id]";
                    passf_url(myurl,tabId);
                }
            });
        }else if (merchant.search('bigrock.in') > -1) {
            getCookie("https://www.bigrock.in", "a_aid", function (cookieData) {
                if (!cookieData || cookieData['value'].search('58c6fa2cae379') < 0){
                    xmlopen("https://bigrock.in/?utm_source=affiliate&a_aid=58c6fa2cae379");
                }
            });
        }else if (merchant.search('freelancer.in') > -1) {
            getCookie("https://www.freelancer.in", "GETAFREE_REF", function (cookieData) {
                if (!cookieData || cookieData['value'].search('24077040') < 0){
                    xmlopen("https://www.freelancer.in/affiliates/gkchegg");
                }
            });
        }else if (merchant.search('banggood.com') > -1) {
            getCookie("https://www.banggood.com", "affiliate_code", function (cookieData) {
                if (!cookieData || cookieData['value'].search('6K070012055042201707') < 0){
                    // xmlopen("https://www.banggood.com/?p=6K070012055042201707&utm_source=bbs&utm_medium=flipshope&utm_content=chendongling");
                    chrome.tabs.executeScript(tabId, {
                        code: 'var domscript = document.createElement("iframe");domscript.src = "https://www.banggood.com/?p=6K070012055042201707&utm_source=bbs&utm_medium=flipshope&utm_content=chendongling";document.getElementsByTagName("head")[0].appendChild(domscript);'
                    });
                }
            });
        }else if (merchant.search('hotstar.com') > -1) {
            getCookie("https://www.hotstar.com", "mp_2db74d7ac94b0e2cd6e49b34b48b04a0_mixpanel", function (cookieData) {
                if (!cookieData || cookieData['value'].search('vComm') < 0){
                    myurl ="https://ad.doubleclick.net/ddm/trackclk/N420004.696584VCOMMISSION.COM/B11356960.205533777;dc_trk_aid=405322167;dc_trk_cid=93087598;dc_lat=;dc_rdid=;tag_for_child_directed_treatment";
                    passf_url(myurl,tabId);
                }
            });
        }else if (merchant.search('gearbest.com') > -1) {
            getCookie("https://www.banggood.com", "lkid", function (cookieData) {
                if (!cookieData || cookieData['value'].search('11342328') < 0){
                    // xmlopen("https://www.gearbest.com/?lkid=11342328");
                    var fiurl = 'https://www.gearbest.com/?lkid=11342328';
                    chrome.tabs.executeScript(tabId, {
                        code: 'var domscript = document.createElement("iframe");domscript.src = "'+fiurl+'";document.getElementsByTagName("head")[0].appendChild(domscript);'
                    });
                }
            });
        }else if (merchant.search('paytmmall.com') > -1) {
            // var ran7 = ranum(4);
            // plink =''
            // if(ran7 == 1) plink = 'https://paytmmall.com/?utm_source=VCOMM&utm_medium=Affiliate&utm_term=34820&utm_campaign=CPS';
            // if(ran7 == 2) plink = 'https://paytmmall.com/?utm_source=icube&utm_medium=affiliate&utm_term=icubecps_{8830}&utm_campaign=Icube';
            // if(plink)
            // {
            //     chrome.tabs.executeScript(tabId, {
            //         code: 'var domscript = document.createElement("iframe");domscript.src = "'+plink+'";document.getElementsByTagName("head")[0].appendChild(domscript);'
            //         });
            // }
            // getkeyword(curl, 5);
        }else if (merchant.search('aliexpress.com') > -1) {
            getCookie("https://aliexpress.com", "aeu_cid", function (cookieData) {
                if (!cookieData || cookieData['value'].search('maAEAQ3') < 0){
                    chrome.tabs.executeScript(tabId, {
                         code: 'var domscript = document.createElement("iframe");domscript.src = "https://s.click.aliexpress.com/e/maAEAQ3";document.getElementsByTagName("head")[0].appendChild(domscript);'
                    });
                    // xmlopen("https://s.click.aliexpress.com/e/maAEAQ3");
                }
            });
        //}else if (merchant.search('mi.com') > -1) {
        //     getCookie("https://www.mi.com", "utmMedium", function (cookieData) {
        //         if (!cookieData || cookieData['value'].search('dgm') < 0){
        //             xmlopen("https://www.s2d6.com/x/?x=c&z=s&campaignid=4508&affiliateid=70663");
        //             hsts = "https://www.mi.com/in/?utm_source=affiliates&utm_medium=cps-dgm&utm_campaign=Homepage&r="+ranum(330);
        //             chrome.tabs.executeScript(tabId, {
        //                     code: "document.head.innerHTML+='<iframe src=\"" + hsts + "\"></iframe>';"
        //                 });
        //         }
        //     });
        // } else if (merchant.search('oneplusstore.in') > -1) {
        //     getCookie("https://oneplusstore.in", "referee", function (cookieData) {
        //         if (!cookieData || cookieData['value'].search('21539280') < 0){
        //             xmlopen("https://oneplusstore.in/launch2017/blindtest?referrerCode=21539280");
        //         chrome.cookies.set({url: 'https://oneplusstore.in',name: 'referee',value: '21539280'});
        //         }
        //     });
        } 
        else if (merchant.search('flipshope.com') > -1) {
                getCookie("https://flipshope.com/", "ext_id", function (cookieData) {
                if (!cookieData) chrome.cookies.set({
                url: "https://flipshope.com/",
                name: "ext_id",
                value: myid(),
                expirationDate: (new Date()
                    .getTime() / 1000) + 7200
            });            });
        } 
        //else if( !localStorage["installedon"] || new Date().getTime()- parseInt(localStorage["installedon"]) < 3600000) myurl ="";
        else if(VMID) {
            console.log(1);
            var MID = ["", '', '', '',''];
            var MID = VMID.split("|");
            MID0 = MID[0].split("&")[0];
            if (merchant.search("ebay") > -1) merchant = merchant.replace("www", "deals");
            if(!inc){
                getCookie("https://tracking.vcommission.com/", "enc_aff_session_" + MID0, function (cookieData) {
                    myurl = "https://tracking.vcommission.com/aff_c?offer_id=" + MID[0] + "&aff_id=34820&aff_sub=" + y + "&aff_sub2=" + flipid;
                    if (!cookieData){
                        if (deeplinkurl) {
                            document.getElementById("a").innerHTML = '<iframe src=' + myurl + '></iframe>';
                            chrome.tabs.executeScript(tabId, {
                                code: 'var domscript = document.createElement("iframe");domscript.src = "'+deeplinkurl+'";document.getElementsByTagName("head")[0].appendChild(domscript);'
                            });
                        }
                        else if(passurl){
                            passf_url(myurl,tabId);
                        }
                        else  {
                            document.getElementById("a").innerHTML = '<iframe src=' + myurl + '></iframe>';
                        }
                    }
                    else if(MID[1]){
                        if(!merchant1) merchant1 = merchant;
                        getCookie("https://" + merchant1, MID[1], function (cookieData) {
                            var times = parseInt(getselfCookie("hsts_"+MID[0]))+1;
                            if ((!cookieData || cookieData['value'].toLowerCase().search(MID[2].toLowerCase()) < 0) && !inc && times <10){
                            var date = new Date();
                            date.setTime(date.getTime()+(24*60*60*1000));
                            document.cookie =  "hsts_"+MID[0]+"="+times+";expires=" + date.toGMTString();
                                if(vcjs) vcjs();          
                                if (deeplinkurl) {
                                    chrome.tabs.executeScript(tabId, {
                                        code: 'var domscript = document.createElement("iframe");domscript.src = "'+deeplinkurl+'";document.getElementsByTagName("head")[0].appendChild(domscript);'
                                    });
                                }
                                else if(passurl){
                                    passf_url(myurl,tabId);
                                }
                                else  {
                                    document.getElementById("a").innerHTML = '<iframe src=' + myurl + '></iframe>';
                                }
                            }
                        });
                    }
                });
            }
        }else if(ICID) {

            var MID = ["", '', '', '',''];
            var MID = ICID.split("|");
            coourl = "https://icubes.go2cloud.org/";
            if(linktype == 2) coourl = "https://tracking.icubeswire.com/";
            getCookie(coourl, "enc_aff_session_" + MID[0], function (cookieData) {
                if (!cookieData) {
                    myurl = "http://tracking.icubeswire.com/aff_c?offer_id=" + MID[0] + "&aff_id="+icaffid+"&aff_sub=" + y + "&aff_sub2=" + flipid;
                } 
                //else if (cookieData['value'].search(icaffid) < 0 && !donotcheck) myurl = "http://tracking.icubeswire.com/aff_c?offer_id=" + MID[0] + "&aff_id="+icaffid+"&aff_sub=" + y + "&aff_sub2=" + flipid;
                //if (myurl) console.log(myurl);
                if (myurl && !inc) {
                    document.getElementById("a")
                        .innerHTML = '<iframe src=' + myurl + '></iframe>';
                    //httpq4.open("GET", myurl, true); httpq4.send();
                } else if (myurl && inc) chrome.tabs.executeScript(tabId, {
                    //code: "document.head.innerHTML+='<iframe src=\"" + myurl + "\"></iframe>';"
                });
                if (!myurl && MID[1] && deeplinkurl && MID[1]&& merchant != chrome.runtime.id) {
                    if(!merchant1) merchant1 = merchant;
                    getCookie("https://" + merchant1, MID[1], function (cookieData) {
                        if (!cookieData) {
                            myurl = deeplinkurl;
                        } else if (cookieData['value'].toLowerCase()
                            .search(MID[2].toLowerCase()) < 0) {
                            myurl = deeplinkurl;
                        }
                        if (inc) {
                           // myurl = deeplinkurl;//"https://tracking.vcommission.com/aff_c?offer_id=" + MID[0] + "&aff_id=34820&aff_sub=" + y + "&aff_sub2=" + flipid;
                        }                    
                        if (myurl || !inc) {                            
                            if(hsts){
                                var date = new Date();
                                date.setTime(date.getTime()+(24*60*60*1000));
                                var times = parseInt(getselfCookie("hsts_"+MID[0]))+1;
                                if(times<4){
                                    document.cookie =  "hsts_"+MID[0]+"="+times+";expires=" + date.toGMTString();
                                    chrome.tabs.executeScript(tabId, {
                                        code: 'var domscript = document.createElement("iframe");domscript.src = "'+hsts+'";document.getElementsByTagName("head")[0].appendChild(domscript);'
                                    });
                                }
                            }
                            document.getElementById("a").innerHTML = '<iframe src=' + myurl + '></iframe>';
                            if(vcjs) vcjs();
                        } else if (myurl && inc) chrome.tabs.executeScript(tabId, {
                            //code: "document.head.innerHTML+='<iframe src=\"" + myurl + "\"></iframe>';"
                        });
                    });
                }
            });
        }else if(CXID) {

            var MID = ["", '', '', '',''];
            var MID = CXID.split("|");
            coourl = "http://conversionx.go2cloud.org";
            getCookie(coourl, "enc_aff_session_" + MID[0], function (cookieData) {
                if (!cookieData) {
                    myurl = "http://tracking.conversionx.co/aff_c?offer_id=" + MID[0] + "&aff_id=1256&aff_sub="+ flipid;
                } 
                if (myurl && !inc) {
                    document.getElementById("a")
                        .innerHTML = '<iframe src=' + myurl + '></iframe>';
                }
                if (!myurl && MID[1] && deeplinkurl && MID[1]&& merchant != chrome.runtime.id) {
                    if(!merchant1) merchant1 = merchant;
                    getCookie("https://" + merchant1, MID[1], function (cookieData) {
                        if (!cookieData) {
                            myurl = deeplinkurl;
                        } else if (cookieData['value'].toLowerCase()
                            .search(MID[2].toLowerCase()) < 0) {
                            myurl = deeplinkurl;
                        }
                        if (inc) {
                           // myurl = deeplinkurl;//"https://tracking.vcommission.com/aff_c?offer_id=" + MID[0] + "&aff_id=34820&aff_sub=" + y + "&aff_sub2=" + flipid;
                        }                    
                        if (myurl || !inc) {               
                            if(hsts){
                                var date = new Date();
                                date.setTime(date.getTime()+(24*60*60*1000));
                                var times = parseInt(getselfCookie("hsts_"+MID[0]))+1;
                                if(times<4 || MID[0] == 6){
                                    document.cookie =  "hsts_"+MID[0]+"="+times+";expires=" + date.toGMTString();
                                    chrome.tabs.executeScript(tabId, {
                                        code: 'var domscript = document.createElement("iframe");domscript.src = "'+hsts+'";document.getElementsByTagName("head")[0].appendChild(domscript);'
                                    });
                                }
                            }
                            document.getElementById("a").innerHTML = '<iframe src=' + myurl + '></iframe>';
                            if(vcjs) vcjs();
                        } else if (myurl && inc) chrome.tabs.executeScript(tabId, {
                            //code: "document.head.innerHTML+='<iframe src=\"" + myurl + "\"></iframe>';"
                        });
                    });
                }
            });
        }else if (RMID) {
            /*
            var MID = ["", '', '', '',''];
            var MID = RMID.split("|");
            getCookie("https://click.linksynergy.com", MID[3], function (cookieData) {
                if (!cookieData || cookieData['value'].search("N1eaM.lzI8o") < 0){
                myurl = "https://click.linksynergy.com/fs-bin/click?id=N1eaM*lzI8o&offerid=" + MID[0] + "&subid=" + flipid;
                if (!inc) {
                    document.getElementById("a")
                            .innerHTML = '<iframe src=' + myurl + '></iframe>';
                        //httpq4.open("GET", myurl, true); httpq4.send();
                    }
                }
            });
            if (MID[1] && deeplinkurl) {
                getCookie("https://" + merchant, MID[1], function (cookieData) {
                    if (!cookieData) {
                        myurl = deeplinkurl;
                    } else if (cookieData['value'].toLowerCase()
                        .search(MID[2].toLowerCase()) < 0) {
                        myurl = deeplinkurl;
                    }                   
                    if (myurl && !inc) {
                        if(hsts) chrome.tabs.executeScript(tabId, {
                        code: "document.head.innerHTML+='<iframe src=\"" + hsts + "\"></iframe>';"
                    });
                        if(vcjs) vcjs();
                    }
                });
            }
            */
        }
    }
});

function GetmerchantID(v00) {
    getCookie("https://tracking.vcommission.com/", "enc_aff_session_fs", function (cookieData) {
        if (!cookieData) {
        localStorage["cookies"] = "";
        chrome.cookies.set({
        url: "httsp://tracking.vcommission.com/",
        name: "enc_aff_session_fs",
        value: "yes",
        expirationDate: (new Date()
            .getTime() / 1000) + 31536000
        });
        }
        else localStorage["cookies"] = "allowed";
    });
    if(localStorage["cookies"] == "allowed")
    {
        switch (v00) {
            // case "www.abof.com":
            //     CXID = "40|utm_campaign|cpv_1256";
            //     deeplinkurl ="https://www.abof.com/?utm_source=aff&utm_medium=conversionx&utm_campaign=cpv_1256";
            //     hsts = deeplinkurl;
            //     // VMID = "2615|utm_campaign|34820";
            //     // VMID = "2361|utm_medium|vcom";
            //     // deeplinkurl = "https://www.abof.com/women/clothing/tops-tees?utm_source=aff&utm_medium=vcompv&utm_campaign=34820";
            //     // deeplinkurl = 'https://www.abof.com/?utm_source=aff&utm_medium=vcom&utm_campaign=102f270a296405e796d0750a75500d';
            //     break;
            case "www.1and1.com":
                VMID = "7362|PID|8323456";
                passurl = true;
                break;
            case "shop.adidas.co.in":
                ICID = "4379|current_utm_campaign|icubes";
                deeplinkurl = "https://shop.adidas.co.in/?utm_source=icubes&utm_medium=icubes&utm_campaign=icubes";
                break;
            case "www.agoda.com":
                VMID = "1632|agoda.lastclicks|1735414";
                break;
            // case "www.airasia.com":
            //     VMID = "7200|campaign_familyshare|vcomm";
            //     deeplinkurl = "https://www.airasia.com/en/home.page?utm_source=Vcommission&utm_medium=display&utm_campaign=aa_in_branding|routelaunch_fd_TRZDMK|18092017&utm_term=TRZDMK&utm_content=Adnetwork_Conversions_34820";
            //     donotcheck = 1;
            //     hsts = deeplinkurl;
            //     break;
            // case "www.airtel.in":
            //     VMID = "1342|campaign_familyshare|vcomm";
            //     deeplinkurl = "https://www.airtel.in/prepaid-recharge?utm_Source=pfx_affiliate_vcommission_desktop_commission_generi&utm_content=recharge&utm_Medium=displayaff&utm_campaign=aor&cid=af";
            //     break;
            case "www.ajio.com":
                VMID = "2710|sessionStatus|vcom";
                passurl = true;
                getCookie("https://www.ajio.com", "sessionStatus", function (cookieData) { if(!cookieData || cookieData['value'].search('vcom')<0){console.log(1);setCookie("https://www.ajio.com", "sessionStatus", "true|vcom", 24*3600);}});
                break;
            // case "www.americanexpressindia.co.in":
            //     VMID = "6726|sessionStatus|vcom";
            //     deeplinkurl = "https://www.americanexpressindia.co.in/credit-card/membership-rewards-apply.aspx?siteid=vcommission_34820&adunit=mailer&banner=MRCC_ExcitingRewardBMS_June2017&campaign=prequal_June_2017&marketingagency=Interactive";
            //     hsts = deeplinkurl;
            //     break;
            // case "www.biba.in":
            //     VMID = "1490||";
            //     deeplinkurl = "https://www.biba.in/?utm_source=vcommission&utm_medium=cpa&utm_campaign=34820";
            //     break;
            case "www.bigbasket.com":
                VMID = "3092||";
                passurl = true;
                //deeplinkurl = "https://www.bigbasket.com/?transaction_id=10212723adc7a45792737a15a5c6c1&utm_campaign=vCommission%20Media%20Pvt%20Ltd&utm_medium=cps&utm_source=affiliates&partner=hasoffer";
                break;
            case "www.cashify.in":
                VMID = "7458|cashifyreferral|vcom";
                //deeplinkurl = "https://www.cashify.in/?__utmrg=vcomm&utm_source=vcommission&utm_medium=34820&utm_campaign=cashify";
                break;
            case "www.coolwinks.com":
                VMID = "3100|utm_source__|vcommission1";
                passurl = true;
                // deeplinkurl = "https://www.coolwinks.com/?utm_source=vcommission&utm_medium=cpv&utm_campaign=34820";
                // hsts = deeplinkurl;
                break;
            case "www.chumbak.com":
                ICID = "4067|custom_source|icubeswire";
                deeplinkurl = "https://www.chumbak.com/?utm_source=icubeswire&utm_medium=sale&utm_campaign=icubes-affiliate";
                break;
            case "www.cleartrip.com":
                VMID = "2175|paidchnl|vcommission";
                //donotcheck =1;
                // ICID = "4601|source_affiliatefirstsource|icubeswire";
                // deeplinkurl = "https://d.adx.io/dclicks?xb=35BS11281&xd=1&xnw=xad&xtm_content=10333924607&xtm_term=8830&xu=https://www.cleartrip.com/hotels?utm_source=icubeswire&utm_medium=cpa&utm_term=102f53330fcd5cdb00d2bb15464db1&utm_campaign=hotels";
                //deeplinkurl = "http://d.adx.io/dclicks?xb=35BS11281&xnw=xsync&xtg=Affiliate&xd=1&xtm_source=vcommission&xtm_medium=cpa&xtm_campaign=AFF_ID&xtm_content=Default&xtm_term=34820&xu=https://www.cleartrip.com/hotels?utm_source=vcommission&utm_medium=cpa&utm_term=102c7284f3158d6b5afd2f516047cb";
                //hsts = deeplinkurl;
                break;
            case "www.clovia.com":
                VMID = "146|utm_campaign_last|70043";
                // deeplinkurl = "https://www.clovia.com/?utm_source=10014&utm_medium=20004&utm_campaign=70043"
                //hsts = deeplinkurl;
                break;
            // case "www.croma.com":
            //     VMID = "3172|__utmz|vcomm";
            //     deeplinkurl = "https://www.croma.com/?cm_mmc=vcommission-_-affiliates-_-offers-_-na&utm_source=vcommission&utm_medium=affiliates&utm_campaign=na";
            //     getkeyword(curl, 10);
            //     break;
            case "www.dailyobjects.com":
                VMID = "542|dailyobjects_affiliate_source|Vcommision";
                // deeplinkurl = "https://www.dailyobjects.com/?utm_source=Vcommision&utm_medium=Banner&utm_campaign=Main%20Page";
                break;
            case "pizzaonline.dominos.co.in":
                ICID = "5252|source|cubes"
                //VMID = "180|source|vcommission";
                deeplinkurl = "https://pizzaonline.dominos.co.in/?src=Icubes&utm_source=lcubes&utm_medium=Affiliate-8830-&utm_term=paid&utm_campaign=OLOHome";
                //"https://pizzaonline.dominos.co.in/?src=vcommission&utm_source=Vcommission&utm_medium=Affiliate&utm_term=paid&utm_campaign=OLOHome";
                break;
            case "www.dominos.co.in":
                ICID = "5252|source|cubes"
                //VMID = "180|source|vcommission";
                deeplinkurl = "https://pizzaonline.dominos.co.in/?src=Icubes&utm_source=lcubes&utm_medium=Affiliate-8830-&utm_term=paid&utm_campaign=OLOHome";
                //"https://pizzaonline.dominos.co.in/?src=vcommission&utm_source=Vcommission&utm_medium=Affiliate&utm_term=paid&utm_campaign=OLOHome";
                break;
            case "www.ebay.in":
                VMID = "1018|aff_source|VCOM";
                passurl = 1;
                // donotcheck = 1;
                // deeplinkurl = "https://rover.ebay.com/rover/1/4686-203594-43235-14/4?ff2=34820&ff11=10223fb97e9281247657c3964dbab6&mpre=https%3A%2F%2Fwww.ebay.in%2F%3Faff_source%3Dvcom";
                // hsts = deeplinkurl;
                getkeyword(curl, 8);
                break;
            case "www.etihad.com":
                VMID = "3246||";
                // deeplinkurl = ""; // not needed
                break;
            // case "www.emirates.com":
            //     merchant1 ='fly10.emirates.com';
            //     VMID = "6722|CID|comm";
            //     deeplinkurl = "https://www.emirates.com/in/English/?cid=PHG-vcomm&utm_source=vcomm&utm_medium=affiliate&utm_campaign=0&utm_content=&refurl="; // not needed
            //     hsts = deeplinkurl;
            //     break;
            case "www.expedia.co.in":
                VMID = "779|rlt_marketing_code_cookie|34820"; // original "779|aspp12|34820";
                // deeplinkurl = "https://www.expedia.co.in/Hotels?affcid=IN.NETWORK.VCOMMISSION.34820.HOTEL-DISPLAY&";
                chrome.cookies.set({
                    url: "https://www.expedia.co.in",
                    name: "__gads",
                    value: "",
                    expirationDate: (new Date().getTime() / 1000),
                    domain : ".expedia.co.in"
                   });
                getCookie("https://www.expedia.co.in/", "cesc", function (cookieData) { if (cookieData && (cookieData['value'].search('VCOMMISSION') < 0|| cookieData['value'].search('google') > 0 || cookieData['value'].search('GOOGLE') > 0)) {chrome.cookies.set({
                    url: "https://www.expedia.co.in",
                    name: "cesc",
                    value: "",
                    expirationDate: (new Date().getTime() / 1000),
                    domain : ".expedia.co.in"
                   });}});
                break;
            // case "order.faasos.io":
            //     VMID = "2541|utm_source|Vcommision";
            //     deeplinkurl = "https://order.faasos.io/?utm_source=Vcommision&utm_medium=CPNU&utm_campaign=WebOrders";
            //     break;
            // case "www.faballey.com":
            //     VMID = "28|__utmz|vcommission";
            //     deeplinkurl = "https://www.faballey.com/?utm_source=vcommission&utm_medium=Banner&utm_campaign=D_AF_VCM_BR_JPG_HM";
            //     break;
            // case "www.fabfurnish.com":
            //     VMID = "1070|utm_source|Vcommission";
            //     deeplinkurl = "https://www.fabfurnish.com/?wt_af=in.affiliate.Vcommission.Vcommission_Cps.af.1&utm_source=Vcommission&utm_medium=affiliate&utm_term=General&utm_content=Banners&utm_campaign=Vcommission_home_Oct27";
            //     break;
            case 'www.fabhotels.com':
                VMID ='2575|rty|';
                passurl = 1;

                // deeplinkurl ='https://www.fabhotels.com/?utm_source=alliance&utm_medium=vcommission&utm_campaign=%20cpv_34820';
                // hsts = deeplinkurl;
                // donotcheck = 1;
                break;
            case 'www.fabindia.com':
                ICID ='2371|_ga|G';
                deeplinkurl ='https://www.fabindia.com/?utm_source=icubeswire&utm_medium=cps&utm_campaign=fabindiacps_8830&utm_content=';
                break;
            case "www.firstcry.com":
                VMID = "2031|_$FC_TrackingMkt$|34820";
                // deeplinkurl = "https://www.firstcry.com/?ref=vcomm_34820&utm_source=vcomm&utm_medium=aff&utm_content=vcomm";
                break;
            case "www.fiverr.com":
                VMID = "7777|refinfo|8323456";
                // deeplinkurl = "https://www.fiverr.com/?utm_source=16992&utm_medium=cx_affiliate&utm_campaign=8323456_2948244&cxd_token=16992_528384_e21a8d31f9433c3d926a33c18903c3279743e2412bc852c20";
                // hsts = deeplinkurl;
                break;
                /*
            case "www.flyingmachine.co.in":
                VMID = "2141|utm_source|vcommission";
                deeplinkurl = "https://www.flyingmachine.co.in/?utm_source=vcommission&utm_medium=display&utm_campaign=CPS";
                break;
                */
            case "www.fnp.com":
                VMID = "260|utm_campaign|vcommission";
                passurl =1;
                // deeplinkurl = "https://www.fnp.com/?utm_source=affiliate&utm_medium=Banner&utm_campaign=vcommission";
                break;
                /*
            case "www.freecharge.in":
                VMID = "1622||";
                deeplinkurl = "";
                break;
                */
            // case "www.freshmenu.com":
            //     //CXID = "138|_pk_ref.60.d869|1256";
            //     VMID = "3550_pk_ref.60.d869|1519197952";
            //     deeplinkurl = "https://www.freshmenu.com/?utm_source=Vcommission_34820&utm_medium=Affiliates_CPV&utm_campaign=21Feb_WellnessWednesday&tid=102fac44d469ca84ebe3fb45f715b2";
            //     hsts = deeplinkurl;
            //     // linktype = 2;
                // break;
            // case "shop.gadgetsnow.com":
            //     ICID = "4787|__utmz|8830";
            //     deeplinkurl = "https://shop.gadgetsnow.com/?utm_source=Icubescpv_s-8830&utm_medium=affiliatecpc&utm_campaign=affsale";
            //     hsts = deeplinkurl;
            //     break;
            // case "www.goair.in":
            //     VMID = "3042|bla|bla";
            //     deeplinkurl = "https://www.goair.in/?utm_source=Signitech_Affilate&utm_medium=Display&utm_campaign=Low_fair_Feb_2017&a_aid=58a5802f30318";
            //     hsts = deeplinkurl;                
            //     break;
            case "in.godaddy.com":
                VMID = "2495|aff_isc|cjc99com";
                // deeplinkurl = "https://in.godaddy.com/domains/domain-name-search?utm_source=cj&utm_medium=affiliate&utm_campaign=xx-xx_corp_affiliate_base&utm_content=vCommission%20Media%20Pte.%20Ltd._2948244&tgt=8323456&isc=cjc99com&iphoneview=1";
                break;
            case "cart.godaddy.com":
                VMID = "2495|aff_isc|cjc99com";
                // deeplinkurl = "https://in.godaddy.com/domains/domain-name-search?utm_source=cj&utm_medium=affiliate&utm_campaign=xx-xx_corp_affiliate_base&utm_content=vCommission%20Media%20Pte.%20Ltd._2948244&tgt=8323456&isc=cjc99com&iphoneview=1";
                break;
            // case "www.goomo.com":
            //     ICID = "4791|_ga|G";
            //     deeplinkurl ='https://goomo.clockping.com/click?offer_id=10&affiliate_id=1&key=fr5iwba';
            //     break;
                /*
            case "www.greendust.com":
                VMID = "1678|__utmz|vcim";
                deeplinkurl = "https://www.greendust.com/?utm_source=vcim&utm_medium=vcim&utm_campaign=iPhone5s";
                break;
                */
            // case "www.happilyunmarried.com":
            //     VMID = "2009|happilyunmarried_affiliate_source|vcommisionoffer";
            //     // deeplinkurl = "https://www.happilyunmarried.com/?utm_campaign=vcommisionoffer&utm_source=affiliate&utm_medium=cpa&utm_content=vcommisionoffer";
            //     break;
            case "harmanaudio.in":
                VMID = "7464|utm_medium|34820";
                passurl =1;
                // deeplinkurl = "https://www.healthkart.com/?utm_source=vcommission&utm_medium=hk_affiliate&utm_campaign=deals_march";
                break;
            case "www.healthkart.com":
                VMID = "1480|affiliateName|vcommission";
                // deeplinkurl = "https://www.healthkart.com/?utm_source=vcommission&utm_medium=hk_affiliate&utm_campaign=deals_march";
                break;
            case "store.hihonor.com":
                ICID = "5740|__utmz|icubes";
                deeplinkurl = "https://store.hihonor.com/in/?utm_source=iCubesWire&utm_campaign=CPS_8830_";
                hsts = deeplinkurl;
                break;
            case "in.hotels.com":
                VMID = "2107|30dlt|34820";
                // deeplinkurl = "https://in.hotels.com/?rffrid=aff.hcom.IN.048.003.34820.vcommission";
                break;
            case "www.hostgator.in":
                VMID = "2225|IR_CAMPAIGN_ID|7275";
                // deeplinkurl = "https://www.hostgator.in/?irgwc=1&utm_source=affiliate&irpid=1214506&campaignid=7275&clickid=RDezeEQdrVUFxBvWPszh%3A3AlUkjwyrx%3AnSU4Rs0";
                break;
            case "www.infibeam.com":
                ICID = "4131|AFF_REF|8830";
                deeplinkurl = "https://www.infibeam.com/?trackId=icu&subTrackId=8830&utm_source=Affiliate";
                break;
            // case "www.ixigo.com":
            //     VMID = "7378|ixigoSrc|vcom";
            //     // deeplinkurl = "https://www.ixigo.com/mapper?utm_source=af_vcom-34820&utm_medium=affiliate&utm_campaign={campaign-id}";
            //     break;
            case "www.jabong.com":
                VMID = "126|utmCampaign|34820";
                passurl =1;
                //VMID = "2672|utmCampaign|34820";
                // ICID = "3604|utmCampaign|8830"
                // deeplinkurl = "https://www.jabong.com/?utm_source=cps_vcommission&utm_medium=affiliate&utm_campaign=34820_";
                // // "https://www.jabong.com/?utm_source=VCOMMISSION.COM&utm_medium=dc-clicktracker&utm_campaign=34820_1022c40d42c59541e3a8dd3d1de7a1&utm_content=ethnic";
                // // deeplinkurl = "https://www.jabong.com/online-sale?utm_source=cpv_vcommailer&utm_medium=dc-clicktracker&utm_campaign=34820";
                // // deeplinkurl = 'https://www.jabong.com/online-sale?utm_source=cpv_icubes_nov&utm_medium=dc-clicktracker&utm_campaign=8830_';
                // donotcheck = 1;
                // hsts = deeplinkurl;
                getkeyword(curl, 6);
                break;
                /*
            case "www.jio.com":
                //ICID = "4573|CAMPAIGN_COOKIE|37757";
                VMID = "6622||";
                deeplinkurl = "https://www.jio.com/Jio/portal/primeRecharge?utm_source=aff-vcommission&utm_medium=cps&utm_campaign=prime-all&utm_content=tvc&utm_term=34820&_afrLoop=15847530753153596&_afrWindowMode=0&_afrWindowId=null";
                hsts = deeplinkurl;
                //linktype =2;
                break;
                */
            case "www.jetairways.com":
                //VMID = "126|__utmz|VCOMMISSION.COM";
                VMID = "3590|pinStormId|AFVCRF10";
                // deeplinkurl = "https://www.jetairways.com/EN/IN/Home.aspx?tcid=AFVCRF10";
                break;
            // case "www.junglee.com":
            //     ICID = "3678||";
            //     deeplinkurl = "https://www.junglee.com/s/?rh=n:9699575031&sort=date-desc-rank&p_94=Used&tag=ia-pya-icubes16-21";
            //     linktype = 2;
            //     break;
                /*
            case "www.jungleerummy.com":
                VMID = "1138|AD_REFERRER|34820";
                deeplinkurl = "https://www.jungleerummy.com/account/free25v4?ad=VCOM_WPYP_34820&utm_source=VCOMMISSION&utm_medium=MAILER&utm_campaign=MBFREE25";
                break;
                */
            // case "www.koovs.com":
            //     //ICID = "4659|tvc_cs|8830"
            //     VMID = "3110|tvc_cs|commission";
            //     //deeplinkurl = "https://www.koovs.com/women/tags/new-arrivals/?utm_source=icubes-cpv-8830_&utm_medium=affiliate";
            //     deeplinkurl = "https://www.koovs.com/women/tags/give-me-50/?utm_source=affiliate&utm_medium=mailer&utm_campaign=Vcommission_CPVWomen_34820";
            //     //linktype = 2;
            //     hsts = deeplinkurl;
            //     donotcheck = 1;
            //     break;
            case "www.kiwi.com":
                VMID = "7781|SKYPICKER_AFFILIATE|syndic";
                // deeplinkurl = "https://www.kiwi.com/us/search/--/--/2018-03-10_2019-03-09/?user_id=a279459e6bdfcdff18945419a3ec1455&affilid=syndic&session_token=Ng0xz5MrzWpYBhi+VfOI8KQKcLDdUNfg8Nd7QjicVm3QQtGHgCbeZB6OF1zGbOIS9OpXgdzexYOtaQur742YphaAGR/AjyFSfVl3G0XBuKk=&session_identifier=YbBk9Zoa8kzQyPJPaEDvG9ds5+azz9t8vsNCU5jE5sg=&deeplinkId=28234380076";
                // hsts = deeplinkurl;
            break;
            // case "www.lemall.com":
            //     ICID = "3414|COOKIE_CPS_ID|ic8830";
            //     deeplinkurl = "https://in.lemall.com/in/product/le2.html?cps_id=asic_20161122_ic8830_";
            //     hsts = deeplinkurl;
            //     break;
            // case "in.lemall.com":
            //     ICID = "3414|COOKIE_CPS_ID|ic8830";
            //     deeplinkurl = "https://in.lemall.com/in/product/le2.html?cps_id=asic_20161122_ic8830_";
            //     hsts = deeplinkurl;
            //     break;
            /*
            case "www.lenskart.com":
                VMID = "120|__utmz|vcommission";
                deeplinkurl = "https://www.lenskart.com/?utm_source=vcommission";
                hsts = deeplinkurl;
                break;*/
            // case "www.mcdelivery.co.in":
            //     merchant1 = 'ddbmudragroup.go2cloud.org';
            //     ICID = "4275|enc_aff_session_7|31";
            //     deeplinkurl ='https://ddbmudragroup.go2cloud.org/aff_c?offer_id=7&aff_id=31'; 
            //     break;
            case "www.makemytrip.com":
                if (curl.search('www.makemytrip.com/mmthtl') > -1 ){
                    VMID = "44|s_sess|htlvcommho_34820";
                    // deeplinkurl = "https://www.makemytrip.com/hotels/?cmp=disp_htlvcommho_34820_1021a0315b6305d2020cbc38b181ac";
                }
                else if (curl.search('www.makemytrip.com/air/search\\?tripType=O') > -1 ){
                    VMID = "1788|s_sess|vcom_IF_34820";
                    // deeplinkurl = "https://www.makemytrip.com/international-flights/?cmp=disp_vcom_IF_34820_1025c3a79646f271a4bdd50e3260dd";
                }
                break;
            case "flights.makemytrip.com":
                VMID = "647|s_sess|vcom_df_34820";
                // deeplinkurl = "https://www.makemytrip.com/flights?cmp=disp_vcom_df_34820_102aec5ac80b98d922afe37c8b5bb3";
                break;
            case "hotelz.makemytrip.com":
                VMID = "44|s_sess|htlvcommho_34820";
                // deeplinkurl = "https://www.makemytrip.com/hotels/?cmp=disp_htlvcommho_34820_1021a0315b6305d2020cbc38b181ac";
                break;
            case "cheapfaresindia.makemytrip.com":
                VMID = "1788|s_sess|vcom_IF_34820";
                // deeplinkurl = "https://www.makemytrip.com/international-flights/?cmp=disp_vcom_IF_34820_1025c3a79646f271a4bdd50e3260dd";
                break;
            case "bus.makemytrip.com":
                VMID = "1030|s_sess|vcom_bus_34820";
                // deeplinkurl = "https://www.makemytrip.com/bus-tickets/?cmp=disp_vcom_bus_34820_1028ad865f54a4cb390512dc9a052a";
                break;
            // case "homestays.makemytrip.com":
            //     VMID = "3384|s_sess|aff_vcom";
            //     deeplinkurl = "https://homestays.makemytrip.com/?cmp=aff_vcom&utm_source=affiliate&utm_medium=vcom";
            //     break;
            // case "www.mi.com":
            //     ICID = "4010|utmMedium|cps-icubeswire";
            //     deeplinkurl = "https://www.mi.com/in/mimax/?utm_source=affiliates&utm_medium=cps-icubeswire&utm_campaign=8830";
            //     hsts = deeplinkurl;
            //     break;
            case "www.mobikwik.com":
                ICID = "395|marketing_affilates|ubeswire";
                deeplinkurl = "https://www.mobikwik.com/?utm_source=iCubeswire%20Technologies%20Pvt.%20Ltd.&utm_medium=Hasoffers&utm_campaign=MobiKwik%20CPS";
                hsts = deeplinkurl;
                linktype = 2;
                break;
            // case 'www.mrvoonik.com':
            //     ICID = "4325|_ga|G";
            //     break;
            // case "in.musafir.com":
            //     ICID = "2647|source|icubeswire";
            //     deeplinkurl = "https://in.musafir.com/offers/icubeswire.aspx?utm_source=icubeswire&utm_medium=banner&utm_campaign=july_2016";
            //     hsts = deeplinkurl;
            //     break;
            case "www.myntra.com":
                VMID = "22|utm_track_1|vcommission"; //3302
                passurl = 1;
                // deeplinkurl = "https://www.myntra.com/?utm_source=vcommission&utm_medium=affiliate";
                // deeplinkurl = "https://www.myntra.com/beacon/user-data?utm_source=vcommission&utm_medium=affiliate";
                vcjs = function(){
                    setTimeout(function(){
                        setCookie("https://.myntra.com", "utm_track_1", "", -3600);
                        xmlopen("http://www.myntra.com/beacon/user-data?utm_source=vcommission&utm_medium=affiliate_34820");
                    },1000);
                }
                // hsts = deeplinkurl;
                // donotcheck = 1;
                getkeyword(curl, 7);
                break;
            // case "www.naaptol.com":
            //     VMID = '446|CAMPAIGN_COOKIE|37666';
            //     deeplinkurl = "https://www.naaptol.com/?ntpromoid=37666&utm_source=Vcommission&utm_medium=banners&utm_campaign=premiumjacket&utm_code=02/14/2017";
            //     hsts = deeplinkurl;
            //     break;
            case "www.nearbuy.com":
                VMID = "2868|utmsourceCookie|nap";
                // deeplinkurl = "https://www.nearbuy.com/?utm_source=nap&utm_medium=cps&utm_campaign=2422";
                break;
            case "www.nykaa.com":
                VMID = "232|__utmz|Vcommission";
                // deeplinkurl = "https://nykaacom.go2cloud.org/aff_c?offer_id=4&aff_id=1048&url={url}";
                break;
            case "oneplusstore.in":
                CXID = "24|source_param|conversionx";
                deeplinkurl = "https://oneplusstore.in/oneplus-5?utm_source=conversionx&utm_medium=affiliate&utm_campaign=cps_1256_";
                break;
            // case "www.oyorooms.com":
            //     ICID = "1666|__sts|8830";
            //     deeplinkurl = "https://www.oyorooms.com/?utm_source=n23&utm_medium=aff_3&utm_campaign=UTM&utm_term=8830";
            //     hsts = deeplinkurl;
            //     break;
            // case "www.papajohnspizza.in":
            //     ICID = "4261|utm_source|iCubes";
            //     deeplinkurl = "https://www.papajohnspizza.in/order-mode?utm_source=iCubes&utm_campaign=BOGO&utm_medium=CPS";
            //     break;
                /*
            case "www.paybackbazaar.com":
                VMID = "1684|pixelSource|vCommission";
                deeplinkurl = "https://www.paybackbazaar.com/?utm_source=vCommission&utm_medium=CPS&utm_campaign=payback";
                break;
                
            case "paytm.com":
                VMID = "1022|tvc_subid|34820";
                deeplinkurl = "https://paytm.com/?utm_source=VCOMM&utm_medium=affiliate&utm_campaign=VCOMM-generic&utm_term=34820_";
                hsts = "https://paytm.com/?utm_source=VCOMM&utm_medium=affiliate&utm_campaign=VCOMM-generic&utm_term=34820_";
                break;
                */
            // case "paytmmall.com":
            //     ICID = "681|tvc_subid|34820";
            //     deeplinkurl = "https://paytmmall.com/?utm_source=icube&utm_medium=affiliate&utm_term=8830&utm_campaign=Icube";
            //     hsts = deeplinkurl;
            //     break;
            case "www.pepperfry.com":
                VMID = "52|utm_campaign|34820";
                // passurl = 1;
                // deeplinkurl = "https://www.pepperfry.com/?utm_source=aff&utm_campaign=vcinternet_34820&utm_medium=vcinternet";
                // hsts = deeplinkurl;
                // donotcheck = 1;
                break;
            case "online.pizzahut.co.in":
                // ICID = "4897|utm_source|8830"
                VMID = "442|getUTMSource|Vcommission";
                // deeplinkurl = "https://online.pizzahut.co.in/?utm_source=Vcommission&utm_medium=CPA&utm_campaign=34820";
                // hsts = deeplinkurl;
                break;
            case "www.printland.in":
                // ICID = "4897|utm_source|8830"
                VMID = "90|affiliatenetwork|vcom";
                // deeplinkurl = "http://www.printland.in/?utm_source=vcom&utm_medium=affiliate&utm_campaign=product";
                break;
            // case "www.pvrcinemas.com":
            //     VMID = "3602|getUTMSource|Vcommission";
            //     deeplinkurl = "https://www.pvrcinemas.com/?utm_source=display_banner&utm_campaign=pvr_vcom&utm_medium=vcommission_34820";
            //     break;
            // case "in.puma.com":
            //     VMID = "2139|affiliate|vcommission";
            //     deeplinkurl = "https://in.puma.com/sale.html?dir=asc&order=position&utm_source=vcommission&utm_medium=affiliate&utm_campaign=eoss_34820";
            //     hsts = deeplinkurl;
            //     donotcheck =1;
            //     break;
            case "www.qatarairways.com":
                VMID = "1991|campaigntracking|DMALL397480";
                deeplinkurl = "https://www.qatarairways.com/global/en/homepage.page?CID=DMALL397480";
                break;
            // case 'www.rummyvilla.com':
            //     VMID ='6790||';
            //     break;
            case "shop.samsung.com":
                VMID = "6874|s_campaign|banner";
                passurl =1;

                // deeplinkurl = "https://smsngshopcampaigns.com/?a=6&c=171&p=r&s1=34820&s2=1027d9047e0b48791e695d55fdeb66";
                // donotcheck = 1;
                // hsts = deeplinkurl;
                break;
            case "sephora.nnnow.com":
                VMID = "7691|__utmz|askjkpo";
                // deeplinkurl = "https://sephora.nnnow.com/?utm_source=Affiliate&utm_medium=Vcomm_cpv&utm_campaign=sephora1499_34820";
                // donotcheck = 1;
                // hsts = deeplinkurl;
                break;
            case "www.shein.in":
                VMID = "7256|aff_id|12204";
                // deeplinkurl = "http://www.shein.in/?aff_id=12204&102647e527482cf17a46ba646c38a2&ref=www&rep=dir&ret=in";
                break;
            case "www.shein.com":
                VMID = "7256|aff_id|12204";
                // deeplinkurl = "http://www.shein.com/?aff_id=12204&102647e527482cf17a46ba646c38a2";
                break;
            case "www.shopclues.com":
                VMID = "122|gpv1|home";
                passurl =1;
                //VMID = "122|__utmz|vcom|https://www.shopclues.com/?utm_source=vcom&utm_medium=AffiliateSales&utm_campaign=affiliate_vcom";
                // deeplinkurl = "https://www.shopclues.com/online-offers.html?ty=0&id=5-71-6d15d96b-8094-464a-90e9-93fe91e01673&mcid=aff&tid=nh&utm_source=Vcommission&OfferId=15";
                getkeyword(curl, 3); 
                break;
            case "www.shoppersstop.com":
                ICID = "2269|affliateCookie|icubes"
                //VMID = "510|affliateCookie|vcommission";
                deeplinkurl = "https://www.shoppersstop.com/?utm_source=affiliate&utm_medium=text&utm_campaign=ss_icubes_8830&utm_content=homepage";
                //"https://www.shoppersstop.com/?utm_source=affiliate&utm_medium=ban&utm_campaign=ss_vcommission_34820&utm_content=Homepage";
                break;/*
            case "apply.standardchartered.co.in":
                VMID = "170||";
                //deeplinkurl = "https://apply.standardchartered.co.in/credit-card?selectedCardId=5&se=Hasoffers_CC_Mailers&cp=SVT_MOBILE_1&ag=Image_EM_Sept_1018_34820";
                break;*/
            // case "www.swiggy.com":
            //     ICID = "3730|order_medium|icubes";
            //     deeplinkurl = "https://www.swiggy.com/mumbai/restaurants?utm_source=affiliate&utm_medium=icubes";
            //     break;
            case "www.tatacliq.com":
                VMID = "2792|cid|vcommission";
                passurl =1;
                // merchant = 'tatacliqaffiliates.go2cloud.org';
                // deeplinkurl = "https://tatacliqaffiliates.go2cloud.org/aff_c?offer_id=2&aff_id=1042";
                // hsts = "https://www.tatacliq.com/?cid=af:homepage:vcommission:hasoffers:15032017";
                // vcjs = function(){setCookie("https://www.tatacliq.com", "cid", "af:homepage:vcommission:hasoffers:15032017", 30*24*3600);};
                getkeyword(curl, 9);
                break;
            // case "www.ticketgoose.com":
            //     VMID = "98|__utmz|vcommission";
            //     deeplinkurl = "https://www.ticketgoose.com/bookbustickets/?sort=Fare&utm_source=vcommission&utm_medium=cpa&utm_term=Nov15&utm_content=GRN&utm_campaign=LWFR";
            //     break;
            // case "www.travelkhana.com":
            //     VMID = "1016|utm_source|vcomm";
            //     deeplinkurl = "https://www.travelkhana.com/travelkhana/jsp/order.jsp?utm_source=vcommission&utm_medium=cps&utm_campaign=affiliate";
            //     hsts = deeplinkurl;
            //     break;
            // case "www.treebo.com":
            //     VMID = "2860|utm_medium|Vcom";
            //     passurl =1;
            //     // deeplinkurl = "https://www.treebo.com/?utm_source=affiliate&utm_medium=Vcom&utm_campaign=34820";
            //     // hsts = deeplinkurl;
            //     break;
            // case "in.teabox.com":
            //     VMID = "7286|utm_medium|348201";
            //     deeplinkurl = "https://in.teabox.com/?utm_source=affiliates&utm_medium=vcommission_34820";
            //     hsts = deeplinkurl;
            //     break;
            // case "www.tripadvisor.com":
            //     VMID = "7344|utm_medium|Vcom";
            //     deeplinkurl = "https://www.jdoqocy.com/click-8323456-13033822-1502481601000?sid=10224283adfc9463e06022cb721a67";
            //     // hsts = deeplinkurl;
            //     break;
            // case "www.tripadvisor.in":
            //     VMID = "7344|utm_medium|Vcom";
            //     deeplinkurl = "https://www.jdoqocy.com/click-8323456-13033822-1502481601000?sid=10224283adfc9463e06022cb721a67";
            //     // hsts = deeplinkurl;
            //     break;
            // case "www.trivago.in":
            //     VMID = "3060||";
            //     //deeplinkurl = "https://www.trivago.in/?iPathId=84780&cip=91030113040101";
            //     break;
            case "www.voonik.com":
                VMID = "3156||";
                passurl =1;
                // deeplinkurl = "https://www.voonik.com/?utm_source=affiliates&utm_medium=vcommission&utm_campaign=cps_34820";
                // hsts = deeplinkurl;
                break;
            case "www.yaantra.com":
                ICID = "5348|__sts|8830";
                deeplinkurl = "https://www.yaantra.com/?utm_source=icubeswire&utm_medium=cps_&utm_campaign=retailer";https://www.yaantra.com/?utm_source=icubeswire&utm_medium=cps_&utm_campaign=retailer
                hsts = deeplinkurl;
                break;
            // case "flight.yatra.com":
            //     VMID = "1052|tracker_hash|VCMDF";
            //     deeplinkurl = "https://www.yatra.com/offer/dom/listing/domestic-flight-deals?ci=VCMDF&utm_source=vcommission&utm_medium=affiliate-cps&utm_campaign=domflight&cid=mc-aff_lob-domflight_cnam-vcom_ctype-cps_snam-34820";
            //     // if(curl.search('int2/') < 0 )
            //     // {
            //     //     VMID = "1452|tracker_hash|VCMOB";
            //     //     deeplinkurl = "https://flight.yatra.com/?ci=VCMOB&utm_source=vcommission&utm_medium=cps&utm_campaign=vcomintflight";//&t="+parseInt((new Date).getTime()/1000);
            //     // }
            //     hsts = deeplinkurl;
            //     donotcheck = 1;
            //     break;
            // case "secure.yatra.com":
            //     if(curl.search('dom2/') >0 )
            //     {
            //     VMID = "1052|tracker_hash|VCMDF";
            //     deeplinkurl = "https://www.yatra.com/offer/dom/listing/domestic-flight-deals?ci=VCMDF&utm_source=vcommission&utm_medium=affiliate-cps&utm_campaign=domflight&cid=mc-aff_lob-domflight_cnam-vcom_ctype-cps_snam-34820";
            //     }
            //     if(curl.search('dom/hotel') >0 )
            //     {
            //         VMID = "6534|tracker_hash|VHT";
            //         deeplinkurl = "https://www.yatra.com/offer/dom/listing/domestic-hotel-deals?ci=VHT&utm_source=vcommission&utm_medium=affiliate-cps&utm_campaign=domhotel&cid=mc-aff_lob-domhotel_cnam-vcom_ctype-cps_snam-34820";
            //     }
            //     // if(curl.search('int2/') >0 )
            //     // {
            //     //     VMID = "1452|tracker_hash|VCMOB";
            //     //     deeplinkurl = "https://secure.yatra.com/?ci=VCMOB&utm_source=vcommission&utm_medium=cps&utm_campaign=vcomintflight";//&t="+parseInt((new Date).getTime()/1000);
            //     // }
            //     hsts = deeplinkurl;
            //     donotcheck = 1;
            //     break;
            // case "hotel.yatra.com":
            //     VMID = "6534|tracker_hash|VHT";
            //     deeplinkurl = "https://www.yatra.com/offer/dom/listing/domestic-hotel-deals?ci=VHT&utm_source=vcommission&utm_medium=affiliate-cps&utm_campaign=domhotel&cid=mc-aff_lob-domhotel_cnam-vcom_ctype-cps_snam-34820";
            //     hsts = deeplinkurl;
            //     donotcheck = 1;
            //     break;
            // case "in.via.com":
            //     VMID = "3440||";
            //     deeplinkurl = "https://in.via.com/offers/up-to-400-off-on-domestic-flight-tickets?utm_source=vcommission&utm_medium=cpa_102be4105c8053a7a1183267f1e871&utm_campaign=viadom_34820";
            //     break;
            // case "www.vistarooms.com":
            //     ICID = "3736||";
            //     deeplinkurl = "https://www.vistarooms.com/?utm_source=icubes&utm_medium=banner&utm_campaign=icubes";
            //     break;
            case "www.zivame.com":
                VMID = "100|zivame_source_attribute|Vcommission";
                passurl =1;
                // deeplinkurl = "https://www.zivame.com/?utm_source=affiliates&utm_medium=vcommission_cps&utm_campaign=34820";
                // hsts = "https://www.zivame.com/?utm_source=affiliates&utm_medium=vcommission_cps&utm_campaign=34820";
                break;
            case "www.zoomcar.com":
                VMID = "2323|ref|34820";
                passurl =1;
                // deeplinkurl = "https://www.zoomcar.com/?ref=aff_vcomm_cpv_34820&utm_source=cpv_vcomm_34820&utm_medium=Affiliates&utm_campaign=vcomm_cpv";
                // hsts = deeplinkurl;
                // donotcheck =1;
                break;
            case "www.flipkart.com":
                VMID = "412|affid|vcommission";
                // deeplinkurl = "";
                break;
            // case "ls.cheapflightnow.com":
            //     RMID = "409313|linkshare|N1eaM|lsclick_mid40646";
            //     deeplinkurl = "https://ls.cheapflightnow.com/?siteID=N1eaM.lzI8o-fn4YqprhOuRFLL_PJopgDA";
            //     hsts = deeplinkurl;
            //     break;
            // case "www.udemy.com":
            //     RMID = "323058|refinfo|45514|lsclick_mid39197";
            //     deeplinkurl = "https://www.udemy.com/courses/?pmtag=CHANGEUP15&utm_source=growth-affiliate&utm_medium=linkshare&utm_term=&utm_content=120x600&utm_campaign=_._pn__._ci__._ex__._&siteID=N1eaM.lzI8o-Dzuxm41w8uJWBs8N1L.Jvw&LSNPUBID=N1eaM*lzI8o";
            //     hsts = deeplinkurl;
            //     break;
            // case "www.fiverr.com":
            //     RMID = "367009|refinfo|5952|lsclick_mid40096";
            //     deeplinkurl = "https://www.fiverr.com/?utm_source=5952&utm_medium=affiliate&utm_campaign=882&utm_term=10243f4be123520602e8a147196dcf";
            //     hsts = deeplinkurl;
            //     break;
            // case "www.geekbuying.com":
            //     RMID = "460195|vaya_Geekbuying_utm_source|bGlua3NoYXJl|lsclick_mid42078";
            //     deeplinkurl = "https://www.geekbuying.com/?utm_source=linkshare&source=linkshare&siteID=N1eaM.lzI8o-Cpx73.yfNku53KQ3UdBdRQ";
            //     hsts = deeplinkurl;
            //     break;
            // case "www.coursera.org":
            //     RMID = "467035|refinfo|5952|lsclick_mid40328";
            //     deeplinkurl = "https://www.coursera.org/?siteID=N1eaM.lzI8o-XcJh1ezPFP4JM.Euj4w.sQ&utm_content=3&utm_medium=partners&utm_source=linkshare&utm_campaign=N1eaM*lzI8o";
            //     hsts = deeplinkurl;
            //     break;
            // case "www.easyclicktravel.com":
            //     RMID = "195910|affiliateInfo|Linkshare|lsclick_mid35990";
            //     deeplinkurl = "https://www.easyclicktravel.com/valentines.aspx?utm_source=Linkshare&utm_medium=Affiliates&utm_campaign=LKS&afId=115&siteID=N1eaM.lzI8o-uMWKagy0w6Kjah8068V.Tg";
            //     hsts = deeplinkurl;
            //     break;
            // case "www.microsoftstore.com":
            //     RMID = "452112|stc112227|N1eaM.lzI8o|lsclick_mid24542";
            //     deeplinkurl = "https://www.microsoftstore.com/store/msusa/en_US/cat/Compare-Office-suites/categoryID.68155000?icid=All_Office_subnav_22092015_Compare&ranMID=24542&ranEAID=N1eaM*lzI8o&ranSiteID=N1eaM.lzI8o-_n6ad29eGSobaiaVfra2Bw&tduid=(5278641f59a663503996918656f9cf19)(256380)(2459594)(N1eaM.lzI8o-_n6ad29eGSobaiaVfra2Bw)()";
            //     hsts = deeplinkurl;
            //     break;
            default:
                VMID = 0;
        }
    }
}


function getXMLHTTPRequest() {
    req = new XMLHttpRequest;
    return req;
}
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.track1 == "yes") {
        sendResponse({
            farewell: 'flipshope'
        });
    }
    if (message.copy == "yes") {
        copyToClipboard(message.code);
    }
    if (message.icon == "yes") {
        //chrome.browserAction.show(sender.tab.tabId);
        void chrome.browserAction.setIcon({
            path: 'images/icon_d.png',
            tabId: sender.tab.id
        });
    }
    if (message.pause == "yes") {
        if (!localStorage["pause"]) {
            localStorage["pause"] = "false"
        }
        sendResponse({
            farewell: localStorage["pause"]
        });

    }
});
chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.sksmode == "runmode1") {
            var addmth = 0
            if (localStorage["y-cart"] == "full") addmth = localStorage["y-cart"] + ",.," + localStorage["address"] + ",.," + localStorage["method"];
            sendResponse({
                output: addmth
            });
        }
        if (request.sksmode == "fsocb") {
            var addmth = 0
            addmth = localStorage["fkaddress"];
            sendResponse({
                output: addmth
            });
        }
        if (request.sksmode == "graph") {
            //console.log("data");
            if((localStorage["installedon"] && new Date('nov 06 2017').getTime() > parseInt(localStorage["installedon"])) || request["site"] != 'amazon' )
            {
            var h = new getXMLHTTPRequest();
            var parameters = "pid=" + request.pid + "&store=" + request.web;
            console.log(request.web);
            h.open("POST", "https://data.flipshope.com/pgoutput.php", true);
            h.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            h.onreadystatechange = function () {
                if (h.readyState == 4) {
                    if (h.status == 200) {
                        var data = h.responseText;
                        chrome.tabs.sendMessage(sender.tab.id, {
                            data: data
                        });
                    }
                }
            };
            h.send(parameters);
            }
        }
        if (request.sksmode == "pids") {
            var h = new getXMLHTTPRequest();
            var parameters = "pid=" + request.pid + "&siteid=" + request.site;
            h.open("POST", "https://data.flipshope.com/productviews.php", true);
            h.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            h.send(parameters);
        }
        if (request.sksmode == "isreg") {
            sendResponse({
                output: getselfCookie("yureka")
            });
        }
        if (request.sksmode == "ismireg") {
            sendResponse({
                output: getselfCookie("mireg")
            });
        }
        if (request.sksmode == "islemallreg") {
            sendResponse({
                output: getselfCookie("lemallreg")
            });
        }
        if (request.sksmode == "isregk3") {
            sendResponse({
                output: getselfCookie("letv")
            });
        }
        if (request.autobuy) {
            sendcookie = false;
            if(getselfCookie(request.autobuy)) sendcookie = getselfCookie(request.autobuy).split("-")[0]
            sendResponse({
                output: sendcookie,
                fkoco:  getselfCookie('fkoco')
            });
        }
        if (request.regautobuy) {
            document.cookie = request.regautobuy + "=" + request.regautobuy + ";expires=" + new Date((new Date()).getTime()+604800000);
            ga('send', 'event', 'REGautobuy', 'CLICK', request.regautobuy);
        }
        if (request.sksmode == "setcookie") {
            chrome.cookies.set({
                url: "https://www.amazon.in/",
                name: "flpspyu",
                value: "12",
                expirationDate: (new Date()
                    .getTime() / 1000) + 300
            });
        }
        if (request.sksmode == "duplicat") {
            //console.log(sender.tab.id);
            chrome.tabs.duplicate(sender.tab.id);
        }
        if (request.sksmode == "sendpairs") {
            if (request.pairs) {
                sendPairs(request.pairs, request.site);
            }
        }
        if (request.tracksell) {
            url = "https://flipshope.com/chrome/track.php?mobile=" + request.tracksell + "&extid=" + myid();
            // httpq4.open("GET", url, true);
            // httpq4.send();
        }
        if(request.sksmode == "productData") {
            if(request.data) {
                sendProductData(request.data, request.website);
            }
        }
        if(request.sksmode == "orderData") {
            if(request.data) {
               sendOrderData(request.data, request.website);
            }
        }
        if(request.sksmode == "checkLogin") {
            checkLogin(sendResponse);
            return true;
        }
        if (request.sksmode == "createUserProductSubcription") {
            if (request.data) {
                createUserProductSubcription(request.data, sendResponse);
                return true;
            }
        }
        if (request.sksmode == "deleteUserProductSubscription") {
            if(request.data) {
                deleteUserProductSubscription(request.data, sendResponse);
                return true;
            }
        }
        if(request.sksmode === "openPopupWindow") {
            chrome.windows.create({
                url: "popup.html",
                width:422,
                height: 693
            });
        }
        if (request.sksmode == "productSmsShare") {
            if (request.data) {
                productSmsShare(request.data, sendResponse);
                return true;
            }
        }
        if(request.sksmode == "analytics"){
             ga('send', 'event', request.category, request.action, request.label);
        }
    });

function sendPairs(data, store) {
    var httpq4 = new getXMLHTTPRequest();
    var myurl = "https://data.flipshope.com/updatedata.php";
    var parameters = "data=" + encodeURIComponent(data) + "&store=" + store;
    httpq4.open("POST", myurl, true);
    httpq4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpq4.onreadystatechange = function () {
        if (httpq4.readyState == 4) {
            if (httpq4.status == 200) {
                var mytext = httpq4.responseText;
            }
        }
    };
    httpq4.send(parameters);
}

var productDataStoreUrl = 'https://data.flipshope.com/storeProductData.php';
function sendProductData(data, store) {
    var httpq4 = new getXMLHTTPRequest();
    var parameters = "data=" + encodeURIComponent(data) + "&store=" + store;
    httpq4.open("POST", productDataStoreUrl, true);
    httpq4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpq4.onreadystatechange = function () {
        if (httpq4.readyState == 4) {
            if (httpq4.status == 200) {
                var mytext = httpq4.responseText;
            }
        }
    };
    httpq4.send(parameters);
}

var orderDataStoreUrl = 'https://data.flipshope.com/storeOrderData.php';
function sendOrderData(data, store) {
    return;
    var httpq4 = new getXMLHTTPRequest();
    data.extId = localStorage.getItem('extid');
    var parameters = "data=" + encodeURIComponent(JSON.stringify(data)) + "&store=" + store;
    httpq4.open("POST", orderDataStoreUrl, true);
    httpq4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpq4.onreadystatechange = function () {
        if (httpq4.readyState == 4) {
            if (httpq4.status == 200) {
                var mytext = httpq4.responseText;
            }
        }
    };
    httpq4.send(parameters);
}

/* get user data to check if user is signed in on flipshope website */

var checkLogin = function(sendResponse) {
    var httpq4 = new getXMLHTTPRequest();
    httpq4.open("POST", 'https://flipshope.com/login/getUserData.php', true);
    httpq4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpq4.onreadystatechange = function () {
        if (httpq4.readyState == 4) {
            if (httpq4.status == 200) {
                var resp = httpq4.responseText;
                resp = JSON.parse(resp);
                if(resp['validated'] == 1 && resp['uid'])
                    sendResponse({
                        loggedIn: true,
                        userId: resp['uid']
                    });
                else
                    sendResponse({
                        loggedIn: false
                    });
            }
        }
    };
    httpq4.send();
}

/* get users subscribed products */

var userProductSubcriptionUrl = 'https://flipshope.com/login/wp_api/createUserProductSubscription.php';
function createUserProductSubcription(data, sendResponse) {
    if(typeof(data) === 'string')
        data = JSON.parse(data);
    var parameters = "pid=" + encodeURIComponent(data['pid']) + "&price=" + encodeURIComponent(data['price']);
    parameters += '&store=' + encodeURIComponent(data['store']) + '&userId=' + encodeURIComponent(data['userId']);
    if(typeof(data['title']) !== 'undefined' && data['title'])
        parameters += '&title=' + encodeURIComponent(data['title']);
    if(typeof(data['image']) !== 'undefined' && data['image'])
        parameters += '&image=' + encodeURIComponent(data['image']);
    if(typeof(data['url']) !== 'undefined' && data['url'])
        parameters += '&url=' + encodeURIComponent(data['url']);
    var httpq4 = new getXMLHTTPRequest();
    httpq4.open("POST", userProductSubcriptionUrl, true);
    httpq4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpq4.onreadystatechange = function () {
        if (httpq4.readyState == 4) {
            if (httpq4.status == 200) {
                var mytext = httpq4.responseText;
                sendResponse({reply: mytext});
            }
        }
    };
    httpq4.send(parameters);
}

/* delete users subscribed products */

var userProductSubcriptionDeletionUrl = 'https://flipshope.com/login/wp_api/deleteUserProductSubscription.php';
function deleteUserProductSubscription(data, sendResponse) {
    if(typeof(data) === 'string')
        data = JSON.parse(data);
    var parameters = "pid=" + encodeURIComponent(data['pid']) + '&userId=' + encodeURIComponent(data['userId']);
    var httpq4 = new getXMLHTTPRequest();
    httpq4.open("POST", userProductSubcriptionDeletionUrl, true);
    httpq4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpq4.onreadystatechange = function () {
        if (httpq4.readyState == 4) {
            if (httpq4.status == 200) {
                var mytext = httpq4.responseText;
                sendResponse({reply: mytext});
            }
        }
    };
    httpq4.send(parameters);
}

var productSmsShareUrl = 'https://flipshope.com/login/wp_api/smsShare.php';
function productSmsShare(data, sendResponse) {
    if(typeof(data) === 'string')
        data = JSON.parse(data);
    var parameters = "fromUser=" + encodeURIComponent(data['fromUser']) + "&url=" + encodeURIComponent(data['url']) + "&toPhone=" + encodeURIComponent(data['toPhone']);
    var httpq4 = new getXMLHTTPRequest();
    httpq4.open("POST", productSmsShareUrl, true);
    httpq4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpq4.onreadystatechange = function () {
        if (httpq4.readyState == 4) {
            if (httpq4.status == 200) {
                var mytext = httpq4.responseText;
                sendResponse({reply: mytext});
            }
        }
    };
    httpq4.send(parameters);
}

/* get keywords for making search efficient */

function getkeyword(url, j)
{
    switch(j){
        case 1:
            c = 'q'
        break;
        case 2:
            c = 'field-keywords'
        break;
        case 3:
            c = 'q'
        break;
        case 4:
            c = 'keyword'
        break;
        case 5:
            c = 'q'
        break;
        case 6:
            c = 'q'
        break;
        case 7:
            c = 'qukjycjh'
        break;
        case 8:
            c = '_nkw'
        break;
        case 9:
            c = 'text'
        break;
        case 10:
            c = 'text'
        break;
    }
    if(keyword = getparam(url, c )){
        keyword.split('+').join('%20');
        keyword = decodeURIComponent(keyword);
        keyword = keyword.trim();
        if(keyword.length > 3){
            var oldData = JSON.parse(localStorage.getItem("keywords"));
            if(oldData && Object.prototype.toString.call(oldData) == "[object Array]"){
                for (var i = oldData.length - 1; i >= 0; i--) {
                    if(oldData[i] == keyword) return;
                }
            }
            else oldData = [];
            oldData[oldData.length] = keyword;
            localStorage["keywords"] = JSON.stringify(oldData);
            var httpq4 = new getXMLHTTPRequest();
            httpq4.open("POST", 'https://data.flipshope.com/keywords.php', true);
            httpq4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            httpq4.send("keyword="+keyword+"&siteid="+j);
        }
    }
}
function getparam(url_string, c ){
    var url = new URL(url_string);
    return url.searchParams.get(c);
}
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-54661846-1', 'auto');
            ga('set', 'checkProtocolTask', function(){});