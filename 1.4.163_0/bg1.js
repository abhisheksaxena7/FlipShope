chrome.extension.onMessage.addListener( function(request, sender, sendResponse) {
  if (!localStorage["pause"]) {
    localStorage["pause"] = "false";
  }
  if (request["sksmode"] == "coupon" && localStorage["pause"] == "false" && ((localStorage["installedon"] && new Date('jul 06 2017').getTime() > parseInt(localStorage["installedon"])) || request["site"] != 'amazon' ) ) {
    void chrome.browserAction.setIcon({
      path : "images/icon_d.png",
      tabId : sender.tab.id
    });
    var http4 = new getXMLHTTPRequest;
    var site = request["site"];
    var id = "flipshope";
    if (localStorage["extid"]) id = localStorage["extid"];
    http4.open("POST", "https://data.flipshope.com/api/coupon.php", true);
    http4.timeout = 3000;
    http4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http4.onreadystatechange = function () {
        if (http4.readyState == 4) {
            if (http4.status == 200) {
                var data = http4.responseText;
                chrome.tabs.sendMessage(sender.tab.id, {
                    coupondata : data,
                    id : id,
                    coupon : 1
                });
            }
        }
    };
    http4.send("store="+site);
  }
});
chrome.gcm.onMessage.addListener(messageReceived);

function getNotificationId() {
    var id = Math.floor(Math.random() * 9007199254740992) + 1;
    return id.toString();
}
function messageReceived(message) {
    var msgReceived = message.data.message;
   // console.log("I was called after push" + msgReceived);
    msgReceived = JSON.parse(msgReceived);
    image = msgReceived[0].image;
    fsnotification(msgReceived[0].title, msgReceived[0].desc, msgReceived[0].link, image);
}
var allnotif = [];
function fsnotification(title, detail, link, image) {
  type = "basic";
  if(image) type = "image";
    var opt = {
        type: type,
        title: title,
        imageUrl: image,
        message: detail,
        iconUrl: "https://flipshope.com/chrome/images/pushlogo.jpg",
        priority: 100
    }
    var linkPass = link;
    var curID = getNotificationId();
    if(localStorage.nofid && localStorage.nofid == curID) return;
    localStorage.nofid = curID;
    chrome.notifications.create(curID, opt, function(id) {
        allnotif.push({
            notfID: id,
            URL: link
        });
    });    
    ga('send', 'event', 'push notification', 'shown', curID+" "+localStorage.pushToken);
}
function notClicked(notID) {
    for (i = 0; i < allnotif.length; i++) {
        if (allnotif[i].notfID == notID) {
            window.open(allnotif[i].URL);
        }
    }   
    ga('send', 'event', 'push notification', 'click', localStorage.pushToken, 1);
}
chrome.notifications.onClicked.addListener(notClicked);
var PROJECT_ID = ["480470426975"];
var countCh = PROJECT_ID.length;
if ((countCh != localStorage.noID || localStorage.pushToken == undefined || localStorage.pushToken == "" || typeof(localStorage.pushToken) ==
    "undefined") && localStorage.extid) {
    chrome.gcm.register(PROJECT_ID, registerCallback);
    localStorage.noID = countCh;
}else {
    //sendToServer(localStorage.pushToken);
} 
function registerCallback(pushToken) {
    sendToServer(pushToken);
}

function sendToServer(pushToken) {
    var httpq4 = new getXMLHTTPRequest();
    var myurl = "https://data.flipshope.com/gcm/register.php";
    if (pushToken != "") {
        var parameters = "extid=" + localStorage.extid+ "&gcmid=" + pushToken;
        httpq4.open("POST", myurl, true);
        httpq4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        httpq4.onreadystatechange = function() {
            if (httpq4.readyState == 4) {
                if (httpq4.status == 200) {
                    localStorage.pushToken = pushToken;
                }
            }
        };
        httpq4.send(parameters);
    }
    ga('send', 'event', 'push notification', 'registration', pushToken);
}
// chrome.webRequest.onBeforeRequest.addListener(
//     function(details) {
//         var hostname = function(href) {
//             var l = document.createElement("a");
//             l.href = href;
//             return l.hostname;
//         };
//         chrome.tabs.sendMessage(details.tabId, {
//             suurl: hostname(details.url)
//         });
//     }, {
//         urls: [
//         "*://*.airbnb.co.in/signup_login*",
// 		"*://*.airbnb.co.in/signup_modal.json*",
// 		"*://*.airbnb.co.in/tracking/*/logging*"]
// });
