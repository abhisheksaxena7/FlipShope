$s = jQuery.noConflict();
var myid = chrome.runtime.id;
function getXMLHTTPRequest() {
    req = new XMLHttpRequest();
    return req;
}

var xx = window.location.href;
var ll = document.createElement("a");
ll.href = xx;
var site = ll.hostname;
var proto = ll.protocol;
var PID = 0;
var siteid = 0;
var currentPrice = 0;
var iii = 0;
OLDPID ='';
a = window.location.href.split('?')[0];
function fkartgraph(){
    PID1 = window.location.href;
    if(PID1.indexOf("pid=")>0)
    {
        PID = PID1.split("pid=")[1].split("&")[0];
        if(OLDPID == PID) return 0;
        OLDPID=PID;
        setTimeout(function(){if($s("div[class^='_1vC4OE']").length) {currentPrice = $s("div[class^='_1vC4OE']").first().text().replace(/[^\d.]/g, '').replace(/^\./, '');senddraw();} 
            else if(!iii) window.onload = function() { iii =1; currentPrice = parseInt($s('div[class^="_1vC4OE"]').first().text().replace(/[^\d.]/g, '').replace(/^\./, '')); senddraw();};},2500);
    }
}
var graph_data = '<div class="fs_background for_fs_graph"><fsall id="fs_all_graph"><div class="fs_side_container fs_graph fs_closed"> <div class="fs_side_button"> <div class="fs_icon"> <img src="chrome-extension://' + myid + '/images/graph_icon.png"> </div> <div class="fs_icon_desc"> Graph </div></div><div class="fs_sider"> <div class="fs_header"> Price Graph </div> <div class="fs_body"><div id="fs_container"></div></div> <div class="fs_footer"> © Powerd by Flipshope.com </div> </div></div></fsall></div>';
switch (site) {
case "www.amazon.in":
    store = "amazon";
    siteid =2;
    PID = window.location.href;
    PID = PID.split(".in/")[1];
    PID = PID.split("?")[0];
    PID = PID.split("/ref=")[0];
    PID = PID.split("/");
    PID2 = PID[PID.length - 1];
    PID1 = PID[PID.length - 2];
    if (PID2 == "" ) {
        PID = PID1;
    } else {
        PID = PID2;
    }
    currentPrice = $s("#priceblock_ourprice").text().trim().replace(",","").split(".")[0];
    if(!currentPrice) currentPrice = $s("#priceblock_saleprice").text().trim().replace(",","").split(".")[0];
    if(!currentPrice) currentPrice = $s("#priceblock_dealprice").text().trim().replace(",","").split(".")[0];
    if(!currentPrice) currentPrice = $s(".a-color-price").text().trim().replace(",","").split(".")[0];
    //if(PID.length == 10)  senddraw();
    break;
case "www.flipkart.com":
    store = "flipkart";
    siteid =1;
    fkartgraph();
    setInterval(function(){if(a!=window.location.href.split('?')[0]){
    a = window.location.href.split('?')[0]; 
    iii=0;
    removegraph();
    fkartgraph();}},3000);
    break;
case "www.jabong.com":
    store = "jabong";
    siteid =6;
    HID = window.location.href;
    if(HID.search(".html")>0)
    {
    PID = HID.split(".html")[0];
    PID = PID.split("-");
    PID = PID[PID.length - 1];
    PID = parseFloat(PID);
    if($s(".actual-price").attr("content")) currentPrice =$s(".actual-price").attr("content");
    else if($s("#before_price span").text().split(".")[1]) currentPrice = $s("#before_price span").text().split(".")[1].trim();
    senddraw();
    }
    break;
case "www.snapdeal.com":
    store = "snapdeal";
    siteid =4;
    PID = window.location.href;
    PID = PID.split("?")[0];
    PID = PID.split("#")[0];
    PID = PID.split("/");
    PID = PID[PID.length - 1];
    PID = parseFloat(PID);
    currentPrice = $s(".payBlkBig").text().replace(",","").trim();
    senddraw();
    break;
case "www.shopclues.com":
    store = "shopclues";
    siteid =3;
    if($s('.product-details')[0])
    {
    PID = window.location.href.split(".com/")[1].split(".html")[0]+".html";
    PID = PID.split("?")[0];
    }
    if($s(".product-pricing .price")[0]) currentPrice = $s(".product-pricing .price").text().split(".")[1].replace(",","").trim();
    senddraw();
    break;
case "www.myntra.com":
    siteid =7;
    store = 'myntra';
    PID =  returnMnPID1(window.location.href);
    senddraw();
    a = window.location.href.split('?')[0];
    setInterval(function(){if(PID != returnMnPID1(window.location.href)){
    PID = returnMnPID1(window.location.href);
    removegraph();
    senddraw();}},3000);
    break;
// case "www.croma.com":
//     siteid =10;
//     PID =  returnMnPID1(window.location.href);
//     break;
// case "www.tatacliq.com":
//     siteid =9;
//     PID =  returnMnPID1(window.location.href);
//     break;
// case "www.ebay.in":
//     siteid =8;
//     PID =  returnMnPID1(window.location.href);
//     break;
case "paytmmall.com":
    siteid =5;
    PID =  returnpyPID(window.location.href);
    break;
default:
    store = "";
}
if (PID.length>4 && siteid) {
  chrome.runtime.sendMessage({
    sksmode : "pids",
    pid : PID,
    site : siteid
  });
}
function senddraw()
{
    if (PID.length>4) {
      chrome.runtime.sendMessage({
        sksmode : "graph",
        pid : PID,
        web : store
      });
    }
}
chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.data) {
        try {draw(JSON.parse(request.data));}
        catch (e) { console.log(e);}
  }
  if(request.newurl)
  {
    if(request.newurl == 'flipkart')
    {
    if(a!=window.location.href.split('?')[0]){
    a = window.location.href.split('?')[0]; 
    iii=0;
    removegraph();
    fkartgraph();}
    }
    
  }
});
function draw(dataString) {
    $s("#fs_all_container").append(graph_data);
    if (parseInt(currentPrice)){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; 
        if(mm<10){ mm = '0'+mm;}
        var yyyy = today.getFullYear();
        dataString.push([yyyy+'-'+mm+'-'+dd, parseInt(currentPrice)]);
    }
    $s(function() {
        $s('#fs_container')
            .highcharts({
                chart: {
                    zoomType: 'x'
                },
                credits: {
                    enabled: true,
                    href: "https://flipshope.com",
                    text: "flipshope.com"
                },
                title: {
                    text: 'Date wise Price graph'
                },
                data: {
                    rows: dataString
                },
                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: { // don't display the dummy year
                        month: '%e. %b',
                        year: '%b'
                    }
                },
                yAxis: {
                    title: {
                        text: 'Price (Rs.)'
                    },
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, Highcharts.getOptions().colors[0]],
                                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                            ]
                        },
                        marker: {
                            radius: 2
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },
                tooltip: {
                    formatter: function() {
                        return '<b>' + this.series.name + '</b><br/>' +
                            Highcharts.dateFormat('%e. %b', this.x) + ': Rs.' + this.y;
                    }
                },
                series: [{
                    //step: 'left',
                    type: 'area',
                    name: ' Price'
                }],
                navigation: {
                    buttonOptions: {
                        theme: {
                            // Good old text links
                            style: {
                                color: '#ff0000',
                                textDecoration: 'underline'
                            }
                        }
                    }
                },
                exporting: {
                    buttons: {
                        contextButton: {
                            enabled: false
                        },
                        exportButton: {
                            text: 'Download',
                            // Use only the download related menu items from the default context button
                            menuItems: Highcharts.getOptions()
                                .exporting.buttons.contextButton.menuItems.splice(2)
                        },
                        printButton: {
                            text: 'Print',
                            onclick: function() {
                                this.print();
                            }
                        }
                    }
                }
            });
        var length2 = $s('tspan')
            .length;
        length2 = length2 - 1;
    });
}

function removegraph(){
    if($s('.for_fs_graph').length) $s('.for_fs_graph').remove();
}
function returnMnPID1(link) {
    if(!link) return;
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
function returnpyPID(link) {
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
}