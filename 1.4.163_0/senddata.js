$s = jQuery.noConflict();

var xx = window.location.href;
var ll = document.createElement("a");
ll.href = xx;
var site = ll.hostname;
iii =0;
ij =1;
arrayToSendold = '';
abh = window.location.href.split('?')[0];
switch (site) {
case "www.flipkart.com":
    window.setTimeout(sendPairsFk, 2000);
    // window.setTimeout(flipkartScraper, 5000);
    break;
case "www.snapdeal.com":
    window.setTimeout(sendPairsSnap, 2000);
    break;
case "www.jabong.com":
    window.setTimeout(sendPairsJb, 2000);
    break;
case "www.shopclues.com":
    window.setTimeout(sendPairsSc, 2000);
    break;
case "www.amazon.in":
    window.setTimeout(sendPairsAz, 2000);
    break;
case "www.myntra.com":
    window.setTimeout(sendPairsMn, 2000);
    break;
}
chrome.runtime.onMessage.addListener(function(request, sender) {
  if(request.newurl)
  {
    if(request.newurl == 'flipkart')
    {
    if(abh!=window.location.href.split('?')[0]){
    abh = window.location.href.split('?')[0]; 
    iii=0;
    window.setTimeout(sendPairsFk, 3000);}
    }
  }
});

function sendPairsFk() {
    var arrayToSend = [];    
    if ($s('*[class^="_2kSfQ4"]')
        .length > 0) {
        var slider = $s('*[class^="_2kSfQ4"]');
        var sliderLength = slider.length;
        var link;
        var price = 0;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('*[class^="_2kSfQ4"]')[i].querySelectorAll("a")
                .length > 0) {
                link = $s('*[class^="_2kSfQ4"]')[i].querySelectorAll("a")[0].getAttribute("href");
                if (link.split("/p/")
                    .length < 2) {
                    link = "";
                }

                if (link != "") {
                    PID = returnPID(link);
                } else {
                    PID = "";
                }
            }
            if (PID != "") {
                //price
                if ($s('*[class^="_2kSfQ4"]')[i].querySelectorAll('*[class^="_1vC4OE"]')
                    .length > 0) {
                    price = $s('*[class^="_2kSfQ4"]')[i].querySelectorAll('*[class^="_1vC4OE"]')[0].innerText.trim();
                    price = price.split(",")
                        .join("")
                        .trim();
                    price = filter_price(price);

                }
                if (PID != "" && price != "" && price != 0) {
                    arrayToSend.push([PID, price]);
                }

            } // for ends

        }
    }
    if ($s('*[class^="_1UoZ"]')
        .length > 0) {
        var slider = $s('*[class^="_1UoZ"]');
        var sliderLength = slider.length;
        var link;
        var price = 0;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            link = "";
            if ($s('*[class^="_1UoZ"]')
                .length > 0) {
                link = $s('*[class^="_1UoZ"]')[i].getAttribute("href");
                if (link.split("/p/")
                    .length < 2) {
                    link = "";
                }

                if (link != "") {
                    PID = returnPID(link);
                } else {
                    PID = "";
                }
            }
            if (PID != "") {
                //price
                if ($s('*[class^="_1UoZ"]')[i].querySelectorAll('*[class^="_1vC4OE"]')
                    .length > 0) {
                    price = $s('*[class^="_1UoZ"]')[i].querySelectorAll('*[class^="_1vC4OE"]')[0].innerText.trim();
                    price = price.split(",")
                        .join("")
                        .trim();
                    price = filter_price(price);

                }
                if ($s('*[class^="_1UoZ"]')[i].querySelectorAll('*[class^="_3wU53"]')
                    .length > 0) {
                    prod = $s('*[class^="_1UoZ"]')[i].querySelectorAll('*[class^="_3wU53"]')[0].innerText.trim();
                }

               
                if (PID != "" && price != "" && price != 0) {
                    arrayToSend.push([PID, price]);
                }

            } // for ends

        }
    }
    if ($s('.zZCdz4')
        .length > 0) {
        var slider = $s('.zZCdz4');
        var sliderLength = slider.length;
        var link;
        var price = 0;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            link = "";
            PID = "";
            if ($s('.zZCdz4:eq(' + i + ') a')
                .length > 0) {
                link = $s('.zZCdz4:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link.split("/p/")
                    .length < 2) {
                    link = "";
                }

                if (link != "") {
                    PID = returnPID(link);
                } else {
                    PID = "";
                }
            }
            if (PID != "") {
                //price
                if ($s('.zZCdz4:eq(' + i + ')')
                    .find('._2EOB0J')
                    .length > 0 && $s('.zZCdz4:eq(' + i + ')')
                    .find('._2EOB0J ._3RTCM2')
                    .length > 0) {
                    price = $s('.zZCdz4:eq(' + i + ')')
                        .find('._2EOB0J ._3RTCM2:eq(0)')
                        .text()
                        .trim();
                    price = price.split(",")
                        .join("")
                        .trim();
                    price = filter_price(price);

                } else if ($s('.zZCdz4:eq(' + i + ')')
                    .find('._1vC4OE')
                    .length > 0) {
                    price = $s('.zZCdz4:eq(' + i + ')')
                        .find('._1vC4OE:eq(0)')
                        .text()
                        .trim();
                    price = price.split(",")
                        .join("")
                        .trim();
                    price = filter_price(price);

                }
                if (PID != "" && price != "" && price != 0) {
                    arrayToSend.push([PID, price]);
                }

            } // for ends

        }
    }
    if ($s('._2kSfQ4')
        .length > 0) {
        var slider = $s('._2kSfQ4');
        var sliderLength = slider.length;
        var link;
        var price = 0;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            link = "";
            if ($s('._2kSfQ4:eq(' + i + ') a')
                .length > 0) {
                link = $s('._2kSfQ4:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link.split("/p/")
                    .length < 2) {
                    link = "";
                }

                if (link != "") {
                    PID = returnPID(link);
                } else {
                    PID = "";
                }
            }
            if (PID != "") {
                //price
                if ($s('._2kSfQ4:eq(' + i + ')')
                    .find('._2EOB0J')
                    .length > 0 && $s('._2kSfQ4:eq(' + i + ')')
                    .find('._2EOB0J ._3RTCM2')
                    .length > 0) {
                    price = $s('._2kSfQ4:eq(' + i + ')')
                        .find('._2EOB0J ._3RTCM2:eq(0)')
                        .text()
                        .trim();
                    price = price.split(",")
                        .join("")
                        .trim();
                    price = filter_price(price);

                } else if ($s('._2kSfQ4:eq(' + i + ')')
                    .find('._1vC4OE')
                    .length > 0) {
                    price = $s('._2kSfQ4:eq(' + i + ')')
                        .find('._1vC4OE:eq(0)')
                        .text()
                        .trim();
                    price = price.split(",")
                        .join("")
                        .trim();
                    price = filter_price(price);

                }
                
                if (PID != "" && price != "" && price != 0) {
                    arrayToSend.push([PID, price]);
                }

            } // for ends

        }
    }
    if ($s('._3liAhj')
        .length > 0) {
        var slider = $s('._3liAhj');
        var sliderLength = slider.length;
        var link;
        var price = 0;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            link = "";
            if ($s('._3liAhj:eq(' + i + ')')
                .length > 0 && $s('._3liAhj:eq(' + i + ') a')
                .length > 0) {
                link = $s('._3liAhj:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link.split("/p/")
                    .length < 2) {
                    link = "";
                }

                if (link != "") {
                    PID = returnPID(link);
                } else {
                    PID = "";
                }
            }
            if (PID != "") {
                //price
                if ($s('._3liAhj:eq(' + i + ')')
                    .find('._1vC4OE')
                    .length > 0) {
                    price = $s('._3liAhj:eq(' + i + ')')
                        .find('._1vC4OE:eq(0)')
                        .text()
                        .trim();
                    price = price.split(",")
                        .join("")
                        .trim();
                    price = filter_price(price);

                }
                if (PID != "" && price != "" && price != 0) {
                    arrayToSend.push([PID, price]);
                }

            } // for ends

        }
    }
    var slider = $s('.product-unit');
    var sliderLength = slider.length;
    var link;
    var price;
    PID = window.location.href;
    if (PID.split("pid=")[1]) {
        PID = PID.split("pid=")[1].split("&")[0];
        currentPrice = $s(".selling-price")
            .attr("data-evar48");
        if (currentPrice) arrayToSend.push([PID, currentPrice]);
    }
    for(i=0; i<$s('._3liAhj._2Vsm67').length; i++)
        { 
            try{
            PID = $s('._3liAhj._2Vsm67:eq('+i+') ._2cLu-l').attr('href').split('&')[0].split('pid=')[1];
            price =$s('._3liAhj._2Vsm67:eq('+i+') ._1vC4OE').text().replace(/[^\d.]/g, '').replace(/^\./, '');
            if(PID && price) arrayToSend.push([PID, price]);
            }
            catch(e)
            { 
                //console.log(e);
            }
        }
    for(i=0; i<$s('._2kSfQ4').length; i++)
        { 
            try{
            if($s('._2kSfQ4:eq('+i+') .K6IBc-').length)
            PID = $s('._2kSfQ4:eq('+i+') .K6IBc-').attr('href').split('&')[0].split('pid=')[1];
            else PID =$s('._2kSfQ4:eq('+i+') ._1oegQN').attr('href').split('&')[0].split('pid=')[1];
            if($s('._2kSfQ4:eq('+i+') .M_qL-C').length)
            price =$s('._2kSfQ4:eq('+i+') .M_qL-C').text().replace(/[^\d.]/g, '').replace(/^\./, '');
            else price =$s('._2kSfQ4:eq('+i+') ._3RTCM2').text().replace(/[^\d.]/g, '').replace(/^\./, '');
            if(PID && price) arrayToSend.push([PID, price]);
            }
            catch(e)
            { 
                //console.log(e);
            }
        }        
    for(i=0; i<$s('._1UoZlX').length; i++)
        {
            try{            
            PID = $s('._1UoZlX:eq('+i+')').attr('href').split('&')[0].split('pid=')[1];
            price =$s('._1UoZlX:eq('+i+') ._1vC4OE._2rQ-NK').text().replace(/[^\d.]/g, '').replace(/^\./, '');
            if(PID && price) arrayToSend.push([PID, price]);
            }
           catch(e)
            { 
                //console.log(e);
            }
        }
    for(i=0; i<$s('.K6IBc-').length; i++)
        {
            try{            
            PID = $s('.K6IBc-:eq('+i+')').attr('href').split('&')[0].split('pid=')[1];
            price =$s('.K6IBc-:eq('+i+') .M_qL-C').text().replace(/[^\d.]/g, '').replace(/^\./, '');
            if(PID && price) arrayToSend.push([PID, price]);
            }
           catch(e)
            { 
                //console.log(e);
            }
        }
    for (i = 0; i < sliderLength; i++) {
        price = "";
        PID = "";
        var link = $s('.product-unit:eq(' + i + ')')
            .find('a:eq(0)')
            .attr("href");
        if (link != undefined) {
            link = link.split("pid=")[1];
            if (link != undefined) {
                PID = link.split("&")[0];
                if ($s('.product-unit:eq(' + i + ')')
                    .find('.more-listing-options .fk-bold')
                    .length > 0) {
                    price = $s('.product-unit:eq(' + i + ')')
                        .find('.more-listing-options .fk-bold:eq(0)')
                        .text()
                        .trim();
                    if (price.split("Rs.")
                        .length > 1) {
                        price = price.split("Rs.")[1];
                    }
                    if (price.split("Rs")
                        .length > 1) {
                        price = price.split("Rs")[1];
                    }
                    price = price.split(",")
                        .join("")
                        .trim();
                } else if ($s('.product-unit:eq(' + i + ')')
                    .find('.pu-final')
                    .length > 0) {
                    price = $s('.product-unit:eq(' + i + ')')
                        .find('.pu-final')
                        .text()
                        .split(",")
                        .join("")
                        .trim();
                    if (price.split("Rs.")
                        .length > 1) {
                        price = price.split("Rs.")[1];
                    } else if (price.split("Rs")
                        .length > 1) {
                        price = price.split("Rs")[1];
                    }
                } else {
                    price = "";
                }

                price = parseFloat(price);
                arrayToSend.push([PID, price]);
            }
        }
    }
    var slider = $s('.fk-large-item-carousel');
    var sliderLength = slider.length;
    var link;
    var price;
    for (i = 0; i < sliderLength; i++) {
        price = "";
        PID = "";
        var link = $s('.fk-large-item-carousel:eq(' + i + ')')
            .find('a:eq(0)')
            .attr("href");
        link = link.split("pid=")[1];
        if (link != undefined) {
            PID = link.split("&")[0];
            var price = $s('.fk-large-item-carousel:eq(' + i + ')')
                .find('.final-price')
                .text()
                .split(",")
                .join("");
            price = price.split("Rs.");
            if (price.length > 1) {
                price = price[1];
            } else {
                price = price[0];
            }
            price = price.split("Rs");
            if (price.length > 1) {
                price = price[1];
            } else {
                price = price[0];
            }
            price = parseFloat(price);
            arrayToSend.push([PID, price]);
        }
    }
    if ($s('.DOTDHpWidget')
        .length > 0) {
        var slider = $s('.DOTDHpWidget li');
        var sliderLength = $s('.DOTDHpWidget li')
            .length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            if ($s('.DOTDHpWidget li:eq(' + i + ')')
                .find('a')
                .length > 0) {
                link = $s('.DOTDHpWidget li:eq(' + i + ')')
                    .find('a')
                    .attr('href');
                if (link.split('?pid=')
                    .length > 1) {
                    link = link.split("?pid=")[1];
                    PID = link.split("&")[0];
                } else if (link.split('&pid=')
                    .length > 1) {
                    link = link.split("&pid=")[1];
                    PID = link.split("&")[0];
                } else {
                    link = "";
                    PID = "";
                }
            } else {
                link = "";
                PID = "";
            }
            if (PID != "") {
                if (PID != PID.toUpperCase()) {
                    PID = "";
                }
            }
            if (PID != "") {
                if ($s('.DOTDHpWidget li:eq(' + i + ')')
                    .find('.newPrice')
                    .length > 0) {
                    price = $s('.DOTDHpWidget li:eq(' + i + ')')
                        .find('.newPrice')
                        .text();
                    if (price.split("Rs.")
                        .length > 1) {
                        price = price.split("Rs.")[1];
                    }
                    if (price.split("Rs")
                        .length > 1) {
                        price = price.split("Rs")[1];
                    }
                    price = price.split(",")
                        .join("");
                }
            } else {
                price = "";
            }
            if (PID != "" && price != "") {
                arrayToSend.push([PID, price]);
            }
        }
    }
    if ($s('.mprod-similar-prod-table')
        .length > 0) {
        var slider = $s('.mprod-similar-prod-table a');
        var sliderLength = $s('.mprod-similar-prod-table a')
            .length;
        var PID;
        var link;
        var price;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            link = $s('.mprod-similar-prod-table a:eq(' + i + ')')
                .attr('href');
            if (link != "") {
                if (link.split('?pid=')
                    .length > 1) {
                    link = link.split("?pid=")[1];
                    PID = link.split("&")[0];
                } else if (link.split('&pid=')
                    .length > 1) {
                    link = link.split("&pid=")[1];
                    PID = link.split("&")[0];
                } else {
                    link = "";
                    PID = "";
                }
            }
            if (PID != "") {
                if (PID != PID.toUpperCase()) {
                    PID = "";
                }
            }
            if (PID != "") {
                if ($s('.mprod-similar-prod-table')
                    .find('.sim-price-td:eq(' + i + ')')
                    .length > 0) {
                    price = $s('.mprod-similar-prod-table')
                        .find('.sim-price-td:eq(' + i + ')')
                        .text();
                    if (price.split("Rs.")
                        .length > 1) {
                        price = price.split("Rs.")[1];
                    }
                    if (price.split("Rs")
                        .length > 1) {
                        price = price.split("Rs")[1];
                    }
                    if (price.split("/-")
                        .length > 1) {
                        price = price.split("/-")[0];
                    }
                    price = price.split(",")
                        .join("")
                        .trim();
                } else {
                    price = "";
                }
            }
            if (PID != "" && price != "") {
                arrayToSend.push([PID, price]);
            }
        }
    }
    if ($s('.productModule')
        .length > 0) {
        var slider = $s('.productModule');
        var sliderLength = $s('.productModule')
            .length;
        var PID;
        var link;
        var price;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('.productModule:eq(' + i + ')')
                .find('a')
                .length > 0) {
                link = $s('.productModule:eq(' + i + ')')
                    .find('a:eq(0)')
                    .attr('href');
                if (link != "") {
                    if (link.split('?pid=')
                        .length > 1) {
                        link = link.split("?pid=")[1];
                        PID = link.split("&")[0];
                    } else if (link.split('&pid=')
                        .length > 1) {
                        link = link.split("&pid=")[1];
                        PID = link.split("&")[0];
                    } else {
                        link = "";
                        PID = "";
                    }
                }
            } else {
                link = "";
                PID = "";
            }
            if (PID != "") {
                if (PID != PID.toUpperCase()) {
                    PID = "";
                }
            }
            if (PID != "") {
                if ($s('.productModule:eq(' + i + ')')
                    .find('.beforeDiscount')
                    .length > 0) {
                    if ($s('.productModule:eq(' + i + ')')
                        .find('.price:eq(1)')
                        .length > 0) {
                        price = $s('.productModule:eq(' + i + ')')
                            .find('.price:eq(1)')
                            .text();
                        if (price.split("Rs.")
                            .length > 1) {
                            price = price.split("Rs.");
                            price = price[1];
                        }
                        if (price.split("Rs")
                            .length > 1) {
                            price = price.split("Rs")[1];
                        }
                    }
                } else if ($s('.productModule:eq(' + i + ')')
                    .find('.price')
                    .length > 0) {
                    price = $s('.productModule:eq(' + i + ')')
                        .find('.price:eq(0)')
                        .text();
                    if (price.split("Rs.")
                        .length > 1) {
                        price = price.split("Rs.");
                        price = price[1];
                    }
                }
                price = price.split(",")
                    .join("")
                    .trim();
            } else {
                price = "";
            }
            if (PID != "" && price != "") {
                arrayToSend.push([PID, price]);
            }
        }
    }
    if ($s('.dotdProductModuleNew')
        .length > 0) {
        var slider = $s('.dotdProductModuleNew');
        var sliderLength = $s('.dotdProductModuleNew')
            .length;
        var PID;
        var link;
        var price;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('.dotdProductModuleNew:eq(' + i + ') a')
                .length > 0) {
                link = $s('.dotdProductModuleNew:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link != "") {
                    if (link.split('?pid=')
                        .length > 1) {
                        link = link.split("?pid=")[1];
                        PID = link.split("&")[0];
                    } else if (link.split('&pid=')
                        .length > 1) {
                        link = link.split("&pid=")[1];
                        PID = link.split("&")[0];
                    } else {
                        link = "";
                        PID = "";
                    }
                } else {
                    link = "";
                    PID = "";
                }
            }
            if (PID != "") {
                if (PID != PID.toUpperCase()) {
                    PID = "";
                }
            }
            if (PID != "") {
                if ($s('.dotdProductModuleNew:eq(' + i + ')')
                    .find('.old')
                    .length > 0) {
                    if ($s('.dotdProductModuleNew:eq(' + i + ')')
                        .find('.price')
                        .length > 0) {
                        price = $s('.dotdProductModuleNew:eq(' + i + ')')
                            .find('.price:eq(1)')
                            .text();
                        if (price.split("Rs.")
                            .length > 1) {
                            price = price.split("Rs.");
                            price = price[1];
                        }
                        if (price.split("Rs")
                            .length > 1) {
                            price = price.split("Rs")[1];
                        }
                    }
                } else if ($s('.dotdProductModuleNew:eq(' + i + ')')
                    .find('.price')
                    .length > 0) {
                    price = $s('.dotdProductModuleNew:eq(' + i + ')')
                        .find('.price:eq(0)')
                        .text();
                    if (price.split("Rs.")
                        .length > 1) {
                        price = price.split("Rs.");
                        price = price[1];
                    }
                }
                price = price.split(",")
                    .join("")
                    .trim();
            } else {
                price = "";
            }
            if (PID != "" && price != "") {
                arrayToSend.push([PID, price]);
            }
        }
    }
    if ($s('.singleProductModule')
        .length > 0) {
        var slider = $s('.singleProductModule');
        var sliderLength = $s('.singleProductModule')
            .length;
        var PID;
        var link;
        var price;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('.singleProductModule:eq(' + i + ')')
                .find('.priceInfo')
                .length > 0) {
                link = $s('.singleProductModule:eq(' + i + ')')
                    .find('.priceInfo a:eq(2)')
                    .attr('href');
                if (link != "") {
                    if (link.split('?pid=')
                        .length > 1) {
                        link = link.split("?pid=")[1];
                        PID = link.split("&")[0];
                    } else if (link.split('&pid=')
                        .length > 1) {
                        link = link.split("&pid=")[1];
                        PID = link.split("&")[0];
                    } else {
                        link = "";
                        PID = "";
                    }
                }
            } else {
                link = "";
                PID = "";
            }
            if (PID != "") {
                if (PID != PID.toUpperCase()) {
                    PID = "";
                }
            }
            if (PID != "") {
                if ($s('.singleProductModule:eq(' + i + ')')
                    .find('.beforeDiscount')
                    .length > 0) {
                    if ($s('.singleProductModule:eq(' + i + ')')
                        .find('.price')
                        .length > 0) {
                        price = $s('.singleProductModule:eq(' + i + ')')
                            .find('.price')
                            .text();
                        if (price.split("Rs.")
                            .length > 1) {
                            price = price.split("Rs.");
                            price = price[1];
                        }
                        if (price.split("Rs")
                            .length > 1) {
                            price = price.split("Rs")[1];
                        }
                    }
                } else if ($s('.singleProductModule:eq(' + i + ')')
                    .find('.price')
                    .length > 0) {
                    price = $s('.singleProductModule:eq(' + i + ')')
                        .find('.price')
                        .text();
                    if (price.split("Rs.")
                        .length > 1) {
                        price = price.split("Rs.");
                        price = price[1];
                    }
                }
                price = price.split(",")
                    .join("")
                    .trim();
            } else {
                price = "";
            }
            if (PID != "" && price != "") {
                arrayToSend.push([PID, price]);
            }
        }
    }
    if ($s('.list-unit')
        .length > 0) {
        var slider = $s('.list-unit');
        var sliderLength = slider.length;
        var PID;
        var link;
        var price;

        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('.list-unit:eq(' + i + ') a')
                .length > 0) {
                link = $s('.list-unit:eq(' + i + ') a')
                    .attr('href');
                if (link != "") {
                    if (link.split('?pid=')
                        .length > 1) {
                        link = link.split("?pid=")[1];
                        PID = link.split("&")[0];
                    } else if (link.split('&pid=')
                        .length > 1) {
                        link = link.split("&pid=")[1];
                        PID = link.split("&")[0];
                    } else {
                        link = "";
                        PID = "";
                    }
                } else {
                    link = "";
                    PID = "";
                }
                if (PID != "") {
                    if (PID != PID.toUpperCase()) {
                        PID = "";
                    }

                }
                if (PID != "") {
                    if ($s('.list-unit:eq(' + i + ')')
                        .find('.more-listing-options .fk-bold')
                        .length > 0) {
                        price = $s('.list-unit:eq(' + i + ')')
                            .find('.more-listing-options .fk-bold:eq(0)')
                            .text()
                            .trim();
                        if (price.split("Rs.")
                            .length > 1) {
                            price = price.split("Rs.")[1];
                        }
                        if (price.split("Rs")
                            .length > 1) {
                            price = price.split("Rs")[1];
                        }
                        price = price.split(",")
                            .join("")
                            .trim();
                    } else if ($s('.list-unit:eq(' + i + ')')
                        .find('.pu-final')
                        .length > 0) {
                        price = $s('.list-unit:eq(' + i + ')')
                            .find('.pu-final')
                            .text();
                        if (price.split("Rs.")
                            .length > 1) {
                            price = price.split("Rs.");
                            price = price[1];
                        }
                        if (price.split("Rs")
                            .length > 1) {
                            price = price.split("Rs")[1];
                        }
                    }
                    price = price.split(",")
                        .join("")
                        .trim();
                }
            } else {
                price = "";
            }
            if (PID != "" && price != "") {
                arrayToSend.push([PID, price]);
            }
        }
    }
    if ($s('.brand-products-section li')
        .length > 0) {
        var slider = $s('.brand-products-section li');
        var sliderLength = slider.length;
        var PID;
        var link;
        var price;

        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('.brand-products-section li:eq(' + i + ')')
                .find('a')
                .length > 0) {
                link = $s('.brand-products-section li:eq(' + i + ')')
                    .find('a')
                    .attr('href');
                if (link != "") {
                    if (link.split('?pid=')
                        .length > 1) {
                        link = link.split("?pid=")[1];
                        PID = link.split("&")[0];
                    } else if (link.split('&pid=')
                        .length > 1) {
                        link = link.split("&pid=")[1];
                        PID = link.split("&")[0];
                    } else {
                        link = "";
                        PID = "";
                    }
                } else {
                    link = "";
                    PID = "";
                }
                if (PID != "") {
                    if (PID != PID.toUpperCase()) {
                        PID = "";
                    }

                }
                if (PID != "") {
                    if ($s('.brand-products-section li:eq(' + i + ') a')
                        .length > 0) {
                        price = $s('.brand-products-section li:eq(' + i + ') a')
                            .text();
                        if (price.split("Rs")
                            .length > 1) {
                            price = price.split("Rs")[1];
                        }
                        if (price.split("Rs.")
                            .length > 1) {
                            price = price.split("Rs.");
                            price = price[1];
                            price = price.split(",")
                                .join("")
                                .trim();
                        }
                        if (price.split("Price:")
                            .length > 1) {
                            price = price.split("Price:");
                            price = price[1];
                            price = price.split(",")
                                .join("")
                                .trim();
                        }
                    }
                }
            } else {
                price = "";
            }
            if (PID != "" && price != "") {
                arrayToSend.push([PID, price]);
            }
        }
    }
    if ($s('.combo-unit')
        .length > 0) {
        var slider = $s('.combo-unit');
        var sliderLength = slider.length;
        var PID;
        var link;
        var price;

        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('.combo-unit a')
                .length > 0) {
                link = $s('.combo-unit:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link != "") {
                    if (link.split('?pid=')
                        .length > 1) {
                        link = link.split("?pid=")[1];
                        PID = link.split("&")[0];
                    } else if (link.split('&pid=')
                        .length > 1) {
                        link = link.split("&pid=")[1];
                        PID = link.split("&")[0];
                    } else {
                        link = "";
                        PID = "";
                    }
                } else {
                    link = "";
                    PID = "";
                }
                if (PID != "") {
                    if (PID != PID.toUpperCase()) {
                        PID = "";
                    }

                }
                if (PID != "") {
                    if ($s('.combo-unit:eq(' + i + ')')
                        .find('label')
                        .length > 0) {
                        price = $s('.combo-unit:eq(' + i + ')')
                            .find('label span:eq(1)')
                            .text();
                        if (price.split("Rs.")
                            .length > 1) {
                            price = price.split("Rs.");
                            price = price[1];
                        }
                        if (price.split("Rs")
                            .length > 1) {
                            price = price.split("Rs")[1];
                        }
                    }
                    price = price.split(",")
                        .join("")
                        .trim();
                }
            } else {
                price = "";
            }
            if (PID != "" && price != "") {
                arrayToSend.push([PID, price]);
            }
        }
    }
    if ($s('#accessory-carousel')
        .length > 0) {
        var slider = $s('#accessory-carousel li');
        var sliderLength = slider.length;
        var PID;
        var link;
        var price;

        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('#accessory-carousel li:eq(' + i + ')')
                .length > 0) {
                link = $s('#accessory-carousel li:eq(' + i + ')')
                    .find('a')
                    .attr('href');
                if (link != "") {
                    if (link.split('?pid=')
                        .length > 1) {
                        link = link.split("?pid=")[1];
                        PID = link.split("&")[0];
                    } else if (link.split('&pid=')
                        .length > 1) {
                        link = link.split("&pid=")[1];
                        PID = link.split("&")[0];
                    } else {
                        link = "";
                        PID = "";
                    }
                } else {
                    link = "";
                    PID = "";
                }
                if (PID != "") {
                    if (PID != PID.toUpperCase()) {
                        PID = "";
                    }

                }
                if (PID != "") {
                    if ($s('#accessory-carousel li:eq(' + i + ')')
                        .find('.history_our_price')
                        .length > 0) {
                        price = $s('#accessory-carousel li:eq(' + i + ')')
                            .find('.history_our_price')
                            .text();
                        if (price.split("Rs.")
                            .length > 1) {
                            price = price.split("Rs.");
                            price = price[1];
                        }
                        if (price.split("Rs")
                            .length > 1) {
                            price = price.split("Rs")[1];
                        }
                    } else if ($s('#accessory-carousel li:eq(' + i + ')')
                        .find('.history_list_price')
                        .length > 0) {
                        price = $s('#accessory-carousel li:eq(' + i + ')')
                            .find('.history_list_price')
                            .text();
                        if (price.split("Rs.")
                            .length > 1) {
                            price = price.split("Rs.");
                            price = price[1];
                        }
                        if (price.split("Rs")
                            .length > 1) {
                            price = price.split("Rs")[1];
                        }
                    }
                    price = price.split(",")
                        .join("")
                        .trim();
                }
            } else {
                price = "";
            }
            if (PID != "" && price != "") {
                arrayToSend.push([PID, price]);
            }
        }
    }
    //if (arrayToSend.length == 0){ if(iii) return 0; else iii=1; return window.onload =  sendPairsFk;}
    if(ij < 5) setTimeout(sendPairsFk,ij*ij*4000);
    sendnow(arrayToSend,'flipkart');
}
function sendPairsSnap() {
    arrayToSend = [];
    if ($s('li.ceeProd')
        .length > 0) {
        var slider = $s('li.ceeProd');
        var sliderLength = slider.length;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            PID = $s('li.ceeProd:eq(' + i + ')')
                .attr('data-pogid');
            price = parseInt($s('li.ceeProd:eq(' + i + ') .recentPrice')
                .text()
                .replace(/[^\d.]/g, '')
                .replace(/^\./, ''));
            if (PID && price) {
                PID = PID.trim();
                if (PID != "" && price > 0) {
                    arrayToSend.push([PID, price]);
                }
            }
        } //for loop ends
    } //1st if ends
    if ($s('div.cardProd')
        .length > 0) {
        var slider = $s('div.cardProd');
        var sliderLength = slider.length;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            PID = "";
            price = "";
            PID = $s('div.cardProd:eq(' + i + ') .eventTuple')
                .attr('pogid');
            price = parseInt($s('div.cardProd:eq(' + i + ') .cardProd_price_actl')
                .text()
                .replace(/[^\d.]/g, '')
                .replace(/^\./, ''));
            if (PID && price) {
                PID = PID.trim();
                if (PID != "" && price > 0) {
                    arrayToSend.push([PID, price]);
                }
            }
        } //for loop ends
    } //1st if ends
    if ($s('div.product-tuple-listing')
        .length > 0) {
        var slider = $s('div.product-tuple-listing');
        var sliderLength = slider.length;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            PID = "";
            price = "";
            PID = $s('div.product-tuple-listing:eq(' + i + ')')
                .attr('id');
            price = parseInt($s('div.product-tuple-listing:eq(' + i + ') .product-price')
                .text()
                .replace(/[^\d.]/g, '')
                .replace(/^\./, ''));
            if (PID && price) {
                PID = PID.trim();
                if (PID != "" && price > 0) {
                    arrayToSend.push([PID, price]);
                }
            }
        } //for loop ends
    } //1st if ends 
    if ($s('li.recent-viewed-product')
        .length > 0) {
        var slider = $s('li.recent-viewed-product');
        var sliderLength = slider.length;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            PID = $s('li.recent-viewed-product:eq(' + i + ') input')
                .attr('value');
            price = parseInt($s('li.recent-viewed-product:eq(' + i + ') .recentPrice')
                .text()
                .replace(/[^\d.]/g, '')
                .replace(/^\./, ''));
            if (PID && price) {
                PID = PID.trim();
                if (PID != "" && price > 0) {
                    arrayToSend.push([PID, price]);
                }
            }
        } //for loop ends
    }
    if ($s('li.OffersContentBoxLi')
        .length > 0) {
        var slider = $s('li.OffersContentBoxLi');
        var sliderLength = slider.length;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            PID = $s('li.OffersContentBoxLi:eq(' + i + ')')
                .attr('id');
            price = parseInt($s('li.OffersContentBoxLi:eq(' + i + ') .OfferPrice_Price')
                .text()
                .replace(/[^\d.]/g, '')
                .replace(/^\./, ''));
            if (PID && price) {
                PID = PID.trim();
                if (PID != "" && price > 0) {
                    arrayToSend.push([PID, price]);
                }
            }
        } //for loop ends
    }
    if ($s('div.product-tuple-listing')
        .length > 0) {
        var slider = $s('div.product-tuple-listing');
        var sliderLength = slider.length;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            PID = parseInt(($s('div.product-tuple-listing:eq(' + i + ') a')
                    .attr('href'))
                .split("?")[0].split("#")[0].split("/")
                .slice(-1)[0]);
            price = parseInt($s('div.product-tuple-listing:eq(' + i + ') .product-price')
                .text()
                .replace(/[^\d.]/g, '')
                .replace(/^\./, ''));
            if (PID && price) {
                if (PID > 0 && price > 0) {
                    arrayToSend.push([PID, price]);
                }
            }
        } //for loop ends
    } //1st if ends
   //console.log(arrayToSend.length);

    //if (arrayToSend.length == 0){ if(iii) return 0; else iii=1; return window.setTimeout(sendPairsSnap, 5000);}    
    if(ij < 5) setTimeout(sendPairsSnap,ij*ij*4000);
    sendnow(arrayToSend,'snapdeal');
}
function sendPairsJb() {
    arrayToSend = [];
    HID = window.location.href;
    if (HID.search(".html") > 0) {
        PID = HID.split(".html")[0];
        PID = PID.split("-");
        PID = PID[PID.length - 1];
        PID = parseFloat(PID);
        if ($s(".actual-price")
            .attr("content")) currentPrice = $s(".actual-price")
            .attr("content");
        else if ($s("#before_price span")
            .text()
            .split(".")[1]) currentPrice = $s("#before_price span")
            .text()
            .split(".")[1].trim();
        if (currentPrice) arrayToSend.push([PID, currentPrice]);
    }
    if ($s(".search-product")
        .length > 0) {
        var slider = $s(".search-product .product-tile");
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('.search-product .product-tile a:eq(' + i + ')')
                .length > 0) {
                link = $s('.search-product .product-tile a:eq(' + i + ')')
                    .attr('href');
                if (link != "") {
                    if (link.split(".html")
                        .length > 1) {
                        link = link.split(".html")[0];
                        if (link.split("-")
                            .length > 1) {
                            link = link.split("-");
                            PID = link[link.length - 1];
                        }
                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }
            }
            if (PID != "") {
                if ($s('.search-product .product-tile a:eq(' + i + ')')
                    .find('.price')
                    .length > 0) {
                    price = $s('.search-product .product-tile a:eq(' + i + ')')
                        .find('.standard-price:last')
                        .html();
                    if (price.split("Rs.")
                        .length > 1) {
                        price = price.split("Rs.");
                        price = price[1];
                    }
                    price = price.split(",")
                        .join("")
                        .trim();
                }
            }
            if (PID != "" && price != "") {
                arrayToSend.push([PID, price]);
            }
        }
    }
    if ($s("#recentlyViewed")
        .length > 0) {
        var slider = $s("#recentlyViewed .product-tile");
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('#recentlyViewed .product-tile a:eq(' + i + ')')
                .length > 0) {
                link = $s('#recentlyViewed .product-tile a:eq(' + i + ')')
                    .attr('href');
                if (link != "") {
                    if (link.split(".html")
                        .length > 1) {
                        link = link.split(".html")[0];
                        if (link.split("-")
                            .length > 1) {
                            link = link.split("-");
                            PID = link[link.length - 1];
                        }
                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }
            }
            if (PID != "") {
                if ($s('#recentlyViewed .product-tile a:eq(' + i + ')')
                    .find('.price')
                    .length > 0) {
                    price = $s('#recentlyViewed .product-tile a:eq(' + i + ')')
                        .find('.product-price')
                        .text();
                    if (price) price = price.split(" ")[1];
                    if (price) {
                        if (price.split("Rs.")
                            .length > 1) {
                            price = price.split("Rs.");
                            price = price[1];
                        }
                        price = price.split(",")
                            .join("")
                            .trim();
                    }
                }
            }
            if (PID != "" && price != "") {
                arrayToSend.push([PID, price]);
            }
        }
    }



    if ($s('#new-recomm-slider-segment li')
        .length > 0) {
        var slider = $s('#new-recomm-slider-segment li');
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('#new-recomm-slider-segment li:eq(' + i + ') a')
                .length > 0) {
                link = $s('#new-recomm-slider-segment li:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link != "") {
                    if (link.split(".html")
                        .length > 1) {
                        link = link.split(".html")[0];
                        if (link.split("-")
                            .length > 1) {
                            link = link.split("-");
                            PID = link[link.length - 1];
                        }
                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }
            }
            if (PID != "") {
                if ($s('#new-recomm-slider-segment li:eq(' + i + ')')
                    .find('.price')
                    .length > 0) {
                    price = $s('#new-recomm-slider-segment li:eq(' + i + ')')
                        .find('.price')
                        .html();
                    if (price.split("</strike>")
                        .length > 1) {
                        price = price.split("</strike>");
                        price = price[1];
                        if (price.split("</strong>")
                            .length > 1) {
                            price = price.split("</strong>");
                            price = price[0];
                        }
                        if (price.split("Rs.")
                            .length > 1) {
                            price = price.split("Rs.");
                            price = price[1];
                        }
                    } else {
                        price = $s('#new-recomm-slider-segment li:eq(' + i + ')')
                            .find('.price')
                            .text();

                        if (price.split("Rs.")
                            .length > 1) {
                            price = price.split("Rs.");
                            price = price[1];
                        }
                    }
                    price = price.split(",")
                        .join("")
                        .trim();
                }
            } else {
                price = "";
            }
            if (PID != "" && price != "") {
                arrayToSend.push([PID, price]);
            }

        } // for ends

    }

    if ($s('#new-mostPopular li')
        .length > 0) {
        var slider = $s('#new-mostPopular li');
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('#new-mostPopular li:eq(' + i + ') a')
                .length > 0) {
                link = $s('#new-mostPopular li:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link != "") {
                    if (link.split(".html")
                        .length > 1) {
                        link = link.split(".html")[0];
                        if (link.split("-")
                            .length > 1) {
                            link = link.split("-");
                            PID = link[link.length - 1];
                        }
                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }
            }
            if (PID != "") {
                if ($s('#new-mostPopular li:eq(' + i + ')')
                    .find('.price')
                    .length > 0) {
                    price = $s('#new-mostPopular li:eq(' + i + ')')
                        .find('.price')
                        .html();
                    if (price.split("</strike>")
                        .length > 1) {
                        price = price.split("</strike>");
                        price = price[1];
                        if (price.split("</strong>")
                            .length > 1) {
                            price = price.split("</strong>");
                            price = price[0];
                        }
                        if (price.split("Rs.")
                            .length > 1) {
                            price = price.split("Rs.");
                            price = price[1];
                        }
                    } else {
                        price = $s('#new-mostPopular li:eq(' + i + ')')
                            .find('.price')
                            .text();

                        if (price.split("Rs.")
                            .length > 1) {
                            price = price.split("Rs.");
                            price = price[1];
                        }
                    }
                    price = price.split(",")
                        .join("")
                        .trim();
                }
            } else {
                price = "";
            }
            if (PID != "" && price != "") {
                arrayToSend.push([PID, price]);
            }

        } // for ends

    }

    if ($s('#productsCatalog li')
        .length > 0) {
        var slider = $s('#productsCatalog li');
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        var flag;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            flag = 0;
            if ($s('#productsCatalog li:eq(' + i + ') a')
                .length > 0) {
                link = $s('#productsCatalog li:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link != "") {
                    if (link.split(".html")
                        .length > 1) {
                        link = link.split(".html")[0];
                        if (link.split("-")
                            .length > 1) {
                            link = link.split("-");
                            PID = link[link.length - 1];
                        }
                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }
            }
            if (PID != "") {
                if ($s('#productsCatalog li:eq(' + i + ')')
                    .find('.price')
                    .length > 0) {
                    price = $s('#productsCatalog li:eq(' + i + ')')
                        .find('.price')
                        .html();
                    if (price.split("</strike>")
                        .length > 1) {
                        ////console.log("iamhere");
                        price = price.split("</strike>");
                        price = price[1];
                        flag = 1;
                        if (price.split("</strong>")
                            .length > 1) {
                            price = price.split("</strong>");
                            price = price[0];
                        }
                        if (price.split("Rs.")
                            .length > 1) {
                            price = price.split("Rs.");
                            price = price[1];
                        }
                    }
                    if ($s('#productsCatalog li:eq(' + i + ')')
                        .find('.price')
                        .find('.discount')
                        .length > 0) {
                        price = price.split("</span>")[0];
                        flag = 1;
                    }
                    if (flag == 0) {
                        price = $s('#productsCatalog li:eq(' + i + ')')
                            .find('.price')
                            .text();

                        if (price.split("Rs.")
                            .length > 1) {
                            price = price.split("Rs.");
                            price = price[1];
                        }
                    }
                    price = price.split(",")
                        .join("")
                        .trim();

                }
            } else {
                price = "";
            }
            if (PID != "" && price != "") {
                arrayToSend.push([PID, price]);
            }

        } // for ends

    }

    if ($s('.video-link-box')
        .length > 0) {
        var slider = $s('.video-link-box');
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('.video-link-box:eq(' + i + ') a')
                .length > 0) {
                link = $s('.video-link-box:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link != "") {
                    if (link.split(".html")
                        .length > 1) {
                        link = link.split(".html")[0];
                        if (link.split("-")
                            .length > 1) {
                            link = link.split("-");
                            PID = link[link.length - 1];
                        }
                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }
            }
            if (PID != "") {
                if ($s('.video-link-box:eq(' + i + ')')
                    .find('p')
                    .length > 0) {
                    price = $s('.video-link-box:eq(' + i + ')')
                        .find('p')
                        .text();


                    if (price.split("Rs.")
                        .length > 1) {
                        price = price.split("Rs.");
                        price = price[1];
                        price = price.split(",")
                            .join("")
                            .trim();
                    } else {
                        price = "";
                    }
                }
            } else {
                price = "";
            }
            if (PID != "" && price != "") {
                arrayToSend.push([PID, price]);
            }

        } // for ends

    }

    if ($s('.verti-slider li')
        .length > 0) {
        var slider = $s('.verti-slider li');
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('.verti-slider li:eq(' + i + ') a')
                .length > 0) {
                link = $s('.verti-slider li:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link == "javascript:void(0);" || link == "") {
                    link = $s('.verti-slider li:eq(' + i + ') a:eq(1)')
                        .attr('href');
                }
                if (link == "javascript:void(0);" || link == "") {
                    link = $s('.verti-slider li:eq(' + i + ') a:eq(2)')
                        .attr('href');
                }
                if (link != "") {
                    if (link.split(".html")
                        .length > 1) {
                        link = link.split(".html")[0];
                        if (link.split("-")
                            .length > 1) {
                            link = link.split("-");
                            PID = link[link.length - 1];
                        }
                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }
            }
            if (PID != "") {
                if ($s('.verti-slider li:eq(' + i + ')')
                    .find('.fs15')
                    .length > 0) {
                    price = $s('.verti-slider li:eq(' + i + ')')
                        .find('.fs15')
                        .text();
                    price = filter_price(price);
                }
            } else {
                price = "";
            }
            if (PID != "" && price != "") {
                arrayToSend.push([PID, price]);
            }

        } // for ends

    }

    //if (arrayToSend.length == 0) { if(iii) return 0; else iii=1; return window.setTimeout(sendPairsJb, 5000);}
    if(ij < 5) setTimeout(sendPairsJb,ij*ij*4000);
    sendnow(arrayToSend,'jabong');
}
function sendPairsAz() {
    var arrayToSend = [];
    PID = window.location.href;
    PID = PID.split("?")[0];
    PID = PID.split("/ref=")[0];
    PID = PID.split("/");
    PID2 = PID[PID.length - 1];
    PID1 = PID[PID.length - 2];
    if (PID2 == "") {
        PID = PID1;
    } else {
        PID = PID2;
    }
    currentPrice = $s("#priceblock_ourprice")
        .text()
        .trim()
        .replace(",", "")
        .split(".")[0];
    if (!currentPrice) currentPrice = $s("#priceblock_saleprice")
        .text()
        .trim()
        .replace(",", "")
        .split(".")[0];
    if (!currentPrice) currentPrice = $s(".a-color-price")
        .text()
        .trim()
        .replace(",", "")
        .split(".")[0];
    if (currentPrice) arrayToSend.push([PID, currentPrice]);
    for (k = 0; k < $s('script')
        .length; k++) {
        hm_pg_len = $s('script:eq(' + k + ')')
            .html()
            .split('P.when("gw-productdb")')
            .length;
        // hm_pg = $s('body').split('P.when("gw-productdb")')[1];
        for (i = 1; i < hm_pg_len; i++) {
            PID = "";
            price = "";
            price1 = "";
            hm_pg = $s('script:eq(' + k + ')')
                .html();
            hm_pg = hm_pg.split('P.when("gw-productdb")')[i];
            hm_pg = hm_pg.split('}]});')[0];
            for (j = 1; j < hm_pg.split('nodeId')
                .length; j++) {
                hm_pg1 = hm_pg.split('"images"')[j];
                hm_pg1 = hm_pg1.split('asin')[1];
                PID = hm_pg1.split('"')[2];
                price1 = hm_pg1.split('gwCurrencyINR')[1];
                price = price1.split('"')[1];
                price = price.split('<span>')[1];
                price = price.split('</span>')[0];
                price = price.split(",")
                    .join("");
                if (PID != "" && price != "") {
                    price = parseFloat(price);
                    if(PID.length == 10) arrayToSend.push([PID, price]);
                }
                //console.log("PID: " + PID + " Price: " + price );
            }
        }
    }

    if ($s('.RIGHT-COL-SDL')
        .length > 0) {

        var link;
        var price;
        var PID;

        link = $s('.RIGHT-COL-SDL a:eq(0)')
            .attr('href');
        if (link != "") {
            if (link.split("/dp/")
                .length > 1) {
                link = link.split("/dp/")[1];
                if (link.split("/")
                    .length > 1) {
                    link = link.split("/");
                    PID = link[0];
                } else {
                    PID = link;
                }
                if (PID.split("?")
                    .length > 1) {
                    PID = PID.split("?");
                    PID = PID[0];
                }
                if (PID.split("#")
                    .length > 1) {
                    PID = PID.split("#");
                    PID = PID[0];
                }

            } else if (link.split("/product/")
                .length > 1) {
                link = link.split("/product/")[1];
                if (link.split("/")
                    .length > 1) {
                    link = link.split("/");
                    PID = link[0];
                } else {
                    PID = link;
                }
                if (PID.split("?")
                    .length > 1) {
                    PID = PID.split("?");
                    PID = PID[0];
                }
                if (PID.split("#")
                    .length > 1) {
                    PID = PID.split("#");
                    PID = PID[0];
                }

            } else {
                PID = "";
            }
        } else {
            PID = "";
        }
    }
    if (PID != "") {
        price = $s('.RIGHT-COL-SDL')
            .find('.gbDealPrice:eq(0)')
            .text();
        if (price.split("Rs.")
            .length > 1) {
            price = price.split("Rs.");
            price = price[1];
        }
        if (price.split("₹")
            .length > 1) {
            price = price.split("₹");
            price = price[1];
        }
        price = price.split(",")
            .join("")
            .trim();

        price = parseFloat(price);
        if (isNaN(price) == true) {
            price = "";
        }
        if (PID != "" && price != "") {
            if(PID.length == 10) arrayToSend.push([PID, price]);
        }


    }

    if ($s('.s-result-item')
        .find('.a-color-price')
        .length > 0) {

        var link;
        var price;
        var count = 0;
        var PID;

        for (j = 0; j < ($s('.s-result-item')
                .length); j++) {
            var slider = $s('.s-result-item:eq(' + j + ')')
                .find('.a-color-price');
            var sliderLength = slider.length;
            for (i = 0; i < sliderLength; i++) {
                price = "";
                PID = "";
                if ($s('.s-result-item:eq(' + j + ')')
                    .find('.a-color-price:eq(' + i + ')')
                    .length > 0) {
                    link = $s('.s-result-item:eq(' + j + ')')
                        .find('.a-color-price:eq(' + i + ')')
                        .parent()
                        .attr('href');

                    if (link != "" && link != undefined) {
                        if (link.split("/offer-listing/")
                            .length > 1) {
                            link = link.split("/offer-listing/")[1];
                            if (link.split("/")
                                .length > 1) {
                                link = link.split("/");
                                PID = link[0];
                            } else {
                                PID = link;
                            }
                            if (PID.split("?")
                                .length > 1) {
                                PID = PID.split("?");
                                PID = PID[0];
                            }
                            if (PID.split("#")
                                .length > 1) {
                                PID = PID.split("#");
                                PID = PID[0];
                            }

                        } else if (link.split("/dp/")
                            .length > 1) {
                            link = link.split("/dp/")[1];
                            if (link.split("/")
                                .length > 1) {
                                link = link.split("/");
                                PID = link[0];
                            } else {
                                PID = link;
                            }
                            if (PID.split("?")
                                .length > 1) {
                                PID = PID.split("?");
                                PID = PID[0];
                            }
                            if (PID.split("#")
                                .length > 1) {
                                PID = PID.split("#");
                                PID = PID[0];
                            }

                        } else if (link.split("/product/")
                            .length > 1) {
                            link = link.split("/product/")[1];
                            if (link.split("/")
                                .length > 1) {
                                link = link.split("/");
                                PID = link[0];
                            } else {
                                PID = link;
                            }
                            if (PID.split("?")
                                .length > 1) {
                                PID = PID.split("?");
                                PID = PID[0];
                            }
                            if (PID.split("#")
                                .length > 1) {
                                PID = PID.split("#");
                                PID = PID[0];
                            }

                        } else {
                            PID = "";
                        }
                    } else {
                        PID = "";
                    }
                }
                if (PID != "" && PID != undefined) {

                    if ($s('.s-result-item:eq(' + j + ')')
                        .find('.a-color-price:eq(' + i + ')')
                        .length > 0) {
                        price = $s('.s-result-item:eq(' + j + ')')
                            .find('.a-color-price:eq(' + i + ')')
                            .text();
                        if (price.split("from")
                            .length > 1) {
                            price = price.split("from");
                            price = price[1].trim();
                        }
                        if (price.split("Rs.")
                            .length > 1) {
                            price = price.split("Rs.");
                            price = price[1];
                        }
                        if (price.split("₹")
                            .length > 1) {
                            price = price.split("₹");
                            price = price[1];
                        }
                        price = price.split(",")
                            .join("")
                            .trim();
                    }
                } else {
                    price = "";
                }
                price = parseFloat(price);
                if (isNaN(price) == true) {
                    price = "";
                }


                // if(count != 0 && (arrayToSend[count - 1][0] == PID) ){
                if (PID != "" && price != "" && PID != undefined && price != undefined) {
                    if (count != 0 && (arrayToSend[count - 1][0] == PID)) {
                        if (price < arrayToSend[count - 1][1]) {
                            arrayToSend[count - 1][1] = price;
                        }
                    } else {
                        if(PID.length == 10) arrayToSend.push([PID, price]);
                        count = count + 1;
                    }
                }
                // }

                // //////console.log("count: "+count);
                // //////console.log("array: "+arrayToSend[count-1]);


            } // for ends
        }
        //////console.log(arrayToSend);

    }

    if ($s('.gbwshoveler-button-wrapper li')
        .length > 0) {
        var slider = $s('.gbwshoveler-button-wrapper li');
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('.gbwshoveler-button-wrapper li:eq(' + i + ') a')
                .length > 0) {
                link = $s('.gbwshoveler-button-wrapper li:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link != "") {
                    if (link.split("/dp/")
                        .length > 1) {
                        link = link.split("/dp/")[1];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[0];
                        } else {
                            PID = link;
                        }
                        if (PID.split("?")
                            .length > 1) {
                            PID = PID.split("?");
                            PID = PID[0];
                        }
                        if (PID.split("#")
                            .length > 1) {
                            PID = PID.split("#");
                            PID = PID[0];
                        }

                    } else if (link.split("/product/")
                        .length > 1) {
                        link = link.split("/product/")[1];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[0];
                        } else {
                            PID = link;
                        }
                        if (PID.split("?")
                            .length > 1) {
                            PID = PID.split("?");
                            PID = PID[0];
                        }
                        if (PID.split("#")
                            .length > 1) {
                            PID = PID.split("#");
                            PID = PID[0];
                        }

                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }
            }
            if (PID != "") {
                if ($s('.gbwshoveler-button-wrapper li:eq(' + i + ')')
                    .find('#dealPriceBlock #dealDealPrice')
                    .length > 0) {
                    price = $s('.gbwshoveler-button-wrapper li:eq(' + i + ')')
                        .find('#dealPriceBlock #dealDealPrice:eq(0)')
                        .text();
                    if (price.split("Rs.")
                        .length > 1) {
                        price = price.split("Rs.");
                        price = price[1];
                    }
                    if (price.split("₹")
                        .length > 1) {
                        price = price.split("₹");
                        price = price[1];
                    }
                    price = price.split(",")
                        .join("")
                        .trim();
                }
            } else {
                price = "";
            }
            price = parseFloat(price);
            if (isNaN(price) == true) {
                price = "";
            }
            if (PID != "" && price != "") {
                if(PID.length == 10) arrayToSend.push([PID, price]);
            }

        } // for ends

    }

    if ($s('#rhfShovelerWrapper .a-carousel-row-inner li')
        .length > 0) {
        var slider = $s('#rhfShovelerWrapper .a-carousel-row-inner li');
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('#rhfShovelerWrapper .a-carousel-row-inner li:eq(' + i + ') a')
                .length > 0) {
                link = $s('#rhfShovelerWrapper .a-carousel-row-inner li:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link != "") {
                    if (link.split("/dp/")
                        .length > 1) {
                        link = link.split("/dp/")[1];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[0];
                        } else {
                            PID = link;
                        }
                        if (PID.split("?")
                            .length > 1) {
                            PID = PID.split("?");
                            PID = PID[0];
                        }
                        if (PID.split("#")
                            .length > 1) {
                            PID = PID.split("#");
                            PID = PID[0];
                        }

                    } else if (link.split("/product/")
                        .length > 1) {
                        link = link.split("/product/")[1];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[0];
                        } else {
                            PID = link;
                        }
                        if (PID.split("?")
                            .length > 1) {
                            PID = PID.split("?");
                            PID = PID[0];
                        }
                        if (PID.split("#")
                            .length > 1) {
                            PID = PID.split("#");
                            PID = PID[0];
                        }

                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }
            }
            if (PID != "") {
                if ($s('#rhfShovelerWrapper .a-carousel-row-inner li:eq(' + i + ')')
                    .find('.price')
                    .length > 0) {
                    price = $s('#rhfShovelerWrapper .a-carousel-row-inner li:eq(' + i + ')')
                        .find('.price:eq(0)')
                        .text();
                    if (price.split("Rs.")
                        .length > 1) {
                        price = price.split("Rs.");
                        price = price[1];
                    }
                    price = price.split(",")
                        .join("")
                        .trim();
                }
            } else {
                price = "";
            }
            price = parseFloat(price);
            if (isNaN(price) == true) {
                price = "";
            }
            if (PID != "" && price != "") {
                if(PID.length == 10) arrayToSend.push([PID, price]);
            }

        } // for ends

    }

    if ($s('#conditional-probability_feature_div li')
        .length > 0) {
        var slider = $s('#conditional-probability_feature_div li');
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('#conditional-probability_feature_div li:eq(' + i + ') a')
                .length > 0) {
                link = $s('#conditional-probability_feature_div li:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link != "") {
                    if (link.split("/dp/")
                        .length > 1) {
                        link = link.split("/dp/")[1];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[0];
                        } else {
                            PID = link;
                        }
                        if (PID.split("?")
                            .length > 1) {
                            PID = PID.split("?");
                            PID = PID[0];
                        }
                        if (PID.split("#")
                            .length > 1) {
                            PID = PID.split("#");
                            PID = PID[0];
                        }

                    } else if (link.split("/product/")
                        .length > 1) {
                        link = link.split("/product/")[1];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[0];
                        } else {
                            PID = link;
                        }
                        if (PID.split("?")
                            .length > 1) {
                            PID = PID.split("?");
                            PID = PID[0];
                        }
                        if (PID.split("#")
                            .length > 1) {
                            PID = PID.split("#");
                            PID = PID[0];
                        }

                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }
            }
            if (PID != "") {
                if ($s('#conditional-probability_feature_div li:eq(' + i + ')')
                    .find('.price')
                    .length > 0) {
                    price = $s('#conditional-probability_feature_div li:eq(' + i + ')')
                        .find('.price:eq(0)')
                        .text();
                    if (price.split("Rs.")
                        .length > 1) {
                        price = price.split("Rs.");
                        price = price[1];
                    }
                    price = price.split(",")
                        .join("")
                        .trim();
                }
            } else {
                price = "";
            }
            price = parseFloat(price);
            if (isNaN(price) == true) {
                price = "";
            }
            if (PID != "" && price != "") {
                if(PID.length == 10) arrayToSend.push([PID, price]);
            }

        } // for ends

    }

    if ($s('#searchResults #mainResults .prod')
        .length > 0) {
        var slider = $s('#searchResults #mainResults .prod');
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('#searchResults #mainResults .prod:eq(' + i + ') a')
                .length > 0) {
                link = $s('#searchResults #mainResults .prod:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link != "") {
                    if (link.split("/dp/")
                        .length > 1) {
                        link = link.split("/dp/")[1];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[0];
                        } else {
                            PID = link;
                        }
                        if (PID.split("?")
                            .length > 1) {
                            PID = PID.split("?");
                            PID = PID[0];
                        }
                        if (PID.split("#")
                            .length > 1) {
                            PID = PID.split("#");
                            PID = PID[0];
                        }

                    } else if (link.split("/product/")
                        .length > 1) {
                        link = link.split("/product/")[1];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[0];
                        } else {
                            PID = link;
                        }
                        if (PID.split("?")
                            .length > 1) {
                            PID = PID.split("?");
                            PID = PID[0];
                        }
                        if (PID.split("#")
                            .length > 1) {
                            PID = PID.split("#");
                            PID = PID[0];
                        }

                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }
            }
            if (PID != "") {
                if ($s('#searchResults #mainResults .prod:eq(' + i + ')')
                    .find('.rsltGridList .mkp2 .price')
                    .length > 0) {
                    price = $s('#searchResults #mainResults .prod:eq(' + i + ')')
                        .find('.rsltGridList .mkp2 .price:eq(0)')
                        .text();
                    if (price.split("Rs.")
                        .length > 1) {
                        price = price.split("Rs.");
                        price = price[1];
                    }
                    price = price.split(",")
                        .join("")
                        .trim();
                } else if ($s('#searchResults #mainResults .prod:eq(' + i + ')')
                    .find('.rsltGridList .newp .red')
                    .length > 0) {
                    price = $s('#searchResults #mainResults .prod:eq(' + i + ')')
                        .find('.rsltGridList .newp .red:eq(0)')
                        .text();
                    if (price.split("Rs.")
                        .length > 1) {
                        price = price.split("Rs.");
                        price = price[1];
                    }
                    price = price.split(",")
                        .join("")
                        .trim();
                }
            } else {
                price = "";
            }
            price = parseFloat(price);
            if (isNaN(price) == true) {
                price = "";
            }
            if (PID != "" && price != "") {
                if(PID.length == 10) arrayToSend.push([PID, price]);
            }

        } // for ends

    }

    if ($s('.zgChartBody .rankedItem')
        .length > 0) {
        var slider = $s('.zgChartBody .rankedItem');
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('.zgChartBody .rankedItem:eq(' + i + ') a')
                .length > 0) {
                link = $s('.zgChartBody .rankedItem:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link != "") {
                    if (link.split("/dp/")
                        .length > 1) {
                        link = link.split("/dp/")[1];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[0];
                        } else {
                            PID = link;
                        }
                        if (PID.split("?")
                            .length > 1) {
                            PID = PID.split("?");
                            PID = PID[0];
                        }
                        if (PID.split("#")
                            .length > 1) {
                            PID = PID.split("#");
                            PID = PID[0];
                        }

                    } else if (link.split("/product/")
                        .length > 1) {
                        link = link.split("/product/")[1];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[0];
                        } else {
                            PID = link;
                        }
                        if (PID.split("?")
                            .length > 1) {
                            PID = PID.split("?");
                            PID = PID[0];
                        }
                        if (PID.split("#")
                            .length > 1) {
                            PID = PID.split("#");
                            PID = PID[0];
                        }

                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }
            }
            if (PID != "") {
                if ($s('.zgChartBody .rankedItem:eq(' + i + ')')
                    .find('.s9Price')
                    .length > 0) {
                    price = $s('.zgChartBody .rankedItem:eq(' + i + ')')
                        .find('.s9Price')
                        .text();
                    if (price.split("Rs.")
                        .length > 1) {
                        price = price.split("Rs.");
                        price = price[1];
                    }
                    price = price.split(",")
                        .join("")
                        .trim();
                } else if ($s('.zgChartBody .rankedItem:eq(' + i + ')')
                    .find('.priceBlock .price')
                    .length > 0) {
                    price = $s('.zgChartBody .rankedItem:eq(' + i + ')')
                        .find('.priceBlock .price')
                        .text()
                        .trim();
                    if (price != "") {
                        if (price.split("Rs.")
                            .length > 1) {
                            price = price.split("Rs.");
                            price = price[1];
                        }
                        price = price.split(",")
                            .join("")
                            .trim();
                    }
                }
            } else {
                price = "";
            }
            price = parseFloat(price);
            if (isNaN(price) == true) {
                price = "";
            }
            if (PID != "" && price != "") {
                if(PID.length == 10) arrayToSend.push([PID, price]);
            }

        } // for ends

    }

    if ($s('.a-carousel')
        .length > 0) {
        var slider = $s('.a-carousel li');
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('.a-carousel li:eq(' + i + ') a')
                .length > 0) {
                link = $s('.a-carousel li:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link && link != "") {
                    //console.log(link);
                    if (link.split("/dp/")
                        .length > 1) {
                        link = link.split("/dp/")[1];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[0];
                        } else {
                            PID = link;
                        }
                        if (PID.split("?")
                            .length > 1) {
                            PID = PID.split("?");
                            PID = PID[0];
                        }
                        if (PID.split("#")
                            .length > 1) {
                            PID = PID.split("#");
                            PID = PID[0];
                        }

                    } else if (link.split("/product/")
                        .length > 1) {
                        link = link.split("/product/")[1];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[0];
                        } else {
                            PID = link;
                        }
                        if (PID.split("?")
                            .length > 1) {
                            PID = PID.split("?");
                            PID = PID[0];
                        }
                        if (PID.split("#")
                            .length > 1) {
                            PID = PID.split("#");
                            PID = PID[0];
                        }

                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }

                if (PID != "") {
                    if ($s('.a-carousel li:eq(' + i + ')')
                        .find('.price')
                        .length > 0) {
                        price = $s('.a-carousel li:eq(' + i + ')')
                            .find('.price:eq(0)')
                            .text();
                        if (price.split("Rs.")
                            .length > 1) {
                            price = price.split("Rs.");
                            price = price[1];
                        }
                        price = price.split(",")
                            .join("")
                            .trim();
                    } else if ($s('.a-carousel li:eq(' + i + ')')
                        .find('.a-color-price')
                        .length > 0) {
                        price = $s('.a-carousel li:eq(' + i + ')')
                            .find('.a-color-price:eq(0)')
                            .text();
                        if (price.split("Rs.")
                            .length > 1) {
                            price = price.split("Rs.");
                            price = price[1];
                        }
                        price = price.split(",")
                            .join("")
                            .trim();
                    }

                } else {
                    price = "";
                }
                price = parseFloat(price);

                if (isNaN(price) == true) {
                    price = "";
                }
                if (PID != "" && price != "") {
                    if(PID.length == 10) arrayToSend.push([PID, price]);
                }
            }
        } // for ends

    } //1st if ends
    if ($s('#fbt_item_details')
        .length > 0) {
        var slider = $s('#fbt_item_details li');
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('#fbt_item_details li:eq(' + i + ') a')
                .length > 0) {
                link = $s('#fbt_item_details li:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link != "") {
                    if (link.split("/dp/")
                        .length > 1) {
                        link = link.split("/dp/")[1];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[0];
                        } else {
                            PID = link;
                        }
                        if (PID.split("?")
                            .length > 1) {
                            PID = PID.split("?");
                            PID = PID[0];
                        }
                        if (PID.split("#")
                            .length > 1) {
                            PID = PID.split("#");
                            PID = PID[0];
                        }

                    } else if (link.split("/product/")
                        .length > 1) {
                        link = link.split("/product/")[1];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[0];
                        } else {
                            PID = link;
                        }
                        if (PID.split("?")
                            .length > 1) {
                            PID = PID.split("?");
                            PID = PID[0];
                        }
                        if (PID.split("#")
                            .length > 1) {
                            PID = PID.split("#");
                            PID = PID[0];
                        }

                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }
            }

            if (PID != "") {
                if ($s('#fbt_item_details li:eq(' + i + ')')
                    .find('.price')
                    .length > 0) {
                    price = $s('#fbt_item_details li:eq(' + i + ')')
                        .find('.price')
                        .text();
                    if (price.split("Rs.")
                        .length > 1) {
                        price = price.split("Rs.");
                        price = price[1];
                    }
                    price = price.split(",")
                        .join("")
                        .trim();
                }
            } else {
                price = "";
            }
            price = parseFloat(price);

            if (isNaN(price) == true) {
                price = "";
            }
            if (PID != "" && price != "") {
                if(PID.length == 10) arrayToSend.push([PID, price]);
            }

        } // for ends

    }


    if ($s('.asin')
        .length > 0) {
        var slider = $s('.asin');
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('.asin:eq(' + i + ') a')
                .length > 0) {
                link = $s('.asin:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link != "") {
                    if (link.split("/dp/")
                        .length > 1) {
                        link = link.split("/dp/")[1];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[0];
                        } else {
                            PID = link;
                        }
                        if (PID.split("?")
                            .length > 1) {
                            PID = PID.split("?");
                            PID = PID[0];
                        }
                        if (PID.split("#")
                            .length > 1) {
                            PID = PID.split("#");
                            PID = PID[0];
                        }

                    } else if (link.split("/product/")
                        .length > 1) {
                        link = link.split("/product/")[1];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[0];
                        } else {
                            PID = link;
                        }
                        if (PID.split("?")
                            .length > 1) {
                            PID = PID.split("?");
                            PID = PID[0];
                        }
                        if (PID.split("#")
                            .length > 1) {
                            PID = PID.split("#");
                            PID = PID[0];
                        }

                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }
            }
            if (PID != "") {
                if ($s('.asin:eq(' + i + ')')
                    .find('.t11:eq(2) .price')
                    .length > 0) {
                    price = $s('.asin:eq(' + i + ')')
                        .find('.t11:eq(2) .price:eq(0)')
                        .text();
                    if (price.split("Rs.")
                        .length > 1) {
                        price = price.split("Rs.");
                        price = price[1];
                    }
                    price = price.split(",")
                        .join("")
                        .trim();
                } else if ($s('.asin:eq(' + i + ')')
                    .find('.s9Price')
                    .length > 0) {
                    price = $s('.asin:eq(' + i + ')')
                        .find('.s9Price')
                        .text();
                    if (price.split("Rs.")
                        .length > 1) {
                        price = price.split("Rs.");
                        price = price[1];
                    }
                    price = price.split(",")
                        .join("")
                        .trim();
                } else if ($s('.asin:eq(' + i + ')')
                    .find('.priceBlock')
                    .length > 0) {
                    price = $s('.asin:eq(' + i + ')')
                        .find('.priceBlock')
                        .text()
                        .trim();
                    if (price != "") {
                        if (price.split("Rs.")
                            .length > 1) {
                            price = price.split("Rs.");
                            price = price[1];
                        }
                        price = price.split(",")
                            .join("")
                            .trim();
                    }
                }
            } else {
                price = "";
            }
            price = parseFloat(price);

            if (isNaN(price) == true) {
                price = "";
            }
            if (PID != "" && price != "") {
                if(PID.length == 10) arrayToSend.push([PID, price]);
            }

        } // for ends

    }

    if ($s('.cpsims li')
        .length > 0) {
        var slider = $s('.cpsims li');
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('.cpsims li:eq(' + i + ') a')
                .length > 0) {
                link = $s('.cpsims li:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link != "") {
                    if (link.split("/dp/")
                        .length > 1) {
                        link = link.split("/dp/")[1];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[0];
                        } else {
                            PID = link;
                        }
                        if (PID.split("?")
                            .length > 1) {
                            PID = PID.split("?");
                            PID = PID[0];
                        }
                        if (PID.split("#")
                            .length > 1) {
                            PID = PID.split("#");
                            PID = PID[0];
                        }

                    } else if (link.split("/product/")
                        .length > 1) {
                        link = link.split("/product/")[1];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[0];
                        } else {
                            PID = link;
                        }
                        if (PID.split("?")
                            .length > 1) {
                            PID = PID.split("?");
                            PID = PID[0];
                        }
                        if (PID.split("#")
                            .length > 1) {
                            PID = PID.split("#");
                            PID = PID[0];
                        }

                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }
            }
            if (PID != "") {
                if ($s('.cpsims li:eq(' + i + ')')
                    .find('.price')
                    .length > 0) {
                    price = $s('.cpsims li:eq(' + i + ')')
                        .find('.price')
                        .text();
                    if (price.split("Rs.")
                        .length > 1) {
                        price = price.split("Rs.");
                        price = price[1];
                    }
                    price = price.split(",")
                        .join("")
                        .trim();
                }
            } else {
                price = "";
            }
            price = parseFloat(price);

            if (isNaN(price) == true) {
                price = "";
            }
            if (PID != "" && price != "") {
                if(PID.length == 10) arrayToSend.push([PID, price]);
            }

        } // for ends

    }


    if ($s('#mainResults .celwidget')
        .length > 0) {
        var slider = $s('#mainResults .celwidget');
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength.length; i++) {
            price = "";
            PID = "";
            if ($s('#mainResults .celwidget:eq(' + i + ') a')
                .length > 0) {
                link = $s('#mainResults .celwidget:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link != "") {
                    if (link.split("/dp/")
                        .length > 1) {
                        link = link.split("/dp/")[1];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[0];
                        } else {
                            PID = link;
                        }
                        if (PID.split("?")
                            .length > 1) {
                            PID = PID.split("?");
                            PID = PID[0];
                        }
                        if (PID.split("#")
                            .length > 1) {
                            PID = PID.split("#");
                            PID = PID[0];
                        }

                    } else if (link.split("/product/")
                        .length > 1) {
                        link = link.split("/product/")[1];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[0];
                        } else {
                            PID = link;
                        }
                        if (PID.split("?")
                            .length > 1) {
                            PID = PID.split("?");
                            PID = PID[0];
                        }
                        if (PID.split("#")
                            .length > 1) {
                            PID = PID.split("#");
                            PID = PID[0];
                        }

                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }
            }
            if (PID != "") {
                if ($s('#mainResults .celwidget:eq(' + i + ')')
                    .find('.price')
                    .length > 0) {
                    price = $s('#mainResults .celwidget:eq(' + i + ')')
                        .find('.price')
                        .text();
                    if (price.split("Rs.")
                        .length > 1) {
                        price = price.split("Rs.");
                        price = price[1];
                    }
                    price = price.split(",")
                        .join("")
                        .trim();
                }
            } else {
                price = "";
            }
            price = parseFloat(price);

            if (isNaN(price) == true) {
                price = "";
            }
            if (PID != "" && price != "") {
                if(PID.length == 10) arrayToSend.push([PID, price]);
            }

        } // for ends

    }

    if ($s('.shoveler-content')
        .length > 0) {
        var slider = $s('.shoveler-content li');
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('.shoveler-content li:eq(' + i + ') a')
                .length > 0) {
                link = $s('.shoveler-content li:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link != "") {
                    if (link.split("/dp/")
                        .length > 1) {
                        link = link.split("/dp/")[1];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[0];
                        } else {
                            PID = link;
                        }
                        if (PID.split("?")
                            .length > 1) {
                            PID = PID.split("?");
                            PID = PID[0];
                        }
                        if (PID.split("#")
                            .length > 1) {
                            PID = PID.split("#");
                            PID = PID[0];
                        }

                    } else if (link.split("/product/")
                        .length > 1) {
                        link = link.split("/product/")[1];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[0];
                        } else {
                            PID = link;
                        }
                        if (PID.split("?")
                            .length > 1) {
                            PID = PID.split("?");
                            PID = PID[0];
                        }
                        if (PID.split("#")
                            .length > 1) {
                            PID = PID.split("#");
                            PID = PID[0];
                        }

                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }

                if (PID != "") {
                    if ($s('.shoveler-content li:eq(' + i + ')')
                        .find('.price')
                        .length > 0) {
                        price = $s('.shoveler-content li:eq(' + i + ')')
                            .find('.price')
                            .text();
                        if (price.split("Rs.")
                            .length > 1) {
                            price = price.split("Rs.");
                            price = price[1];
                        }
                        price = price.split(",")
                            .join("")
                            .trim();
                    }
                } else {
                    price = "";
                }
                price = parseFloat(price);
                if (isNaN(price) == true) {
                    price = "";
                }
                if (PID != "" && price != "") {
                    if(PID.length == 10) arrayToSend.push([PID, price]);
                }
            }
        } // for ends

    } //1st if ends


    if ($s('#recommendations .a-list-item')
        .length > 0) {
        var slider = $s('#recommendations .a-list-item');
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('#recommendations .a-list-item:eq(' + i + ') a')
                .length > 0) {
                link = $s('#recommendations .a-list-item:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link != "") {
                    if (link.split("/dp/")
                        .length > 1) {
                        link = link.split("/dp/")[1];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[0];
                        } else {
                            PID = link;
                        }
                        if (PID.split("?")
                            .length > 1) {
                            PID = PID.split("?");
                            PID = PID[0];
                        }
                        if (PID.split("#")
                            .length > 1) {
                            PID = PID.split("#");
                            PID = PID[0];
                        }

                    } else if (link.split("/product/")
                        .length > 1) {
                        link = link.split("/product/")[1];
                        if (link.split("/")
                            .length > 1) {
                            link = link.split("/");
                            PID = link[0];
                        } else {
                            PID = link;
                        }
                        if (PID.split("?")
                            .length > 1) {
                            PID = PID.split("?");
                            PID = PID[0];
                        }
                        if (PID.split("#")
                            .length > 1) {
                            PID = PID.split("#");
                            PID = PID[0];
                        }

                    } else {
                        PID = "";
                    }
                } else {
                    PID = "";
                }

                if (PID != "") {
                    if ($s('#recommendations .a-list-item:eq(' + i + ')')
                        .find('.item-price')
                        .length > 0) {
                        price = $s('#recommendations .a-list-item:eq(' + i + ')')
                            .find('.item-price .a-color-secondary')
                            .text();
                        if (price.split("-")
                            .length > 1) {
                            price = price.split("-");
                            price = price[0];
                        }
                        if (price.split("Rs.")
                            .length > 1) {
                            price = price.split("Rs.");
                            price = price[0];
                        }
                        price = price.split(",")
                            .join("")
                            .trim();
                    }
                } else {
                    price = "";
                }
                price = parseFloat(price);
                if (isNaN(price) == true) {
                    price = "";
                }
                if (PID != "" && price != "") {
                    if(PID.length == 10) arrayToSend.push([PID, price]);
                }
            }
        } // for ends

    } //1st if ends
    //if (arrayToSend.length == 0) { if(iii) return 0; else iii=1; return window.setTimeout(sendPairsAz, 5000);}    
    if(ij < 5) setTimeout(sendPairsAz,ij*ij*4000);
    sendnow(arrayToSend,'amazon');
}
function sendPairsSc() {
    var arrayToSend = [];
    if ($s('#product_list .column.col3')
        .length > 0) {
        var slider = $s('#product_list .column.col3');
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('#product_list .column.col3:eq(' + i + ') a')
                .length > 0) {
                link = $s('#product_list .column.col3:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link == "javascript:void(0);" && $s('#product_list .column.col3:eq(' + i + ') a')
                    .length > 1) {
                    link = $s('#product_list .column.col3:eq(' + i + ') a:eq(1)')
                        .attr('href');
                }
                if (link != "") {
                    PID = returnScPID(link);
                } else {
                    PID = "";
                }
            } else {
                PID = "";
            }
            if (PID != "") {
                if ($s('#product_list .column.col3:eq(' + i + ')')
                    .find('.prd_p_section')
                    .length > 0 && $s('#product_list .column.col3:eq(' + i + ')')
                    .find('.prd_p_section .ori_price')
                    .length > 0 && $s('#product_list .column.col3:eq(' + i + ')')
                    .find('.prd_p_section:eq(0) .ori_price:eq(0) .p_price')
                    .length > 0) {
                    price = $s('#product_list .column.col3:eq(' + i + ')')
                        .find('.prd_p_section:eq(0) .ori_price:eq(0) .p_price:eq(0)')
                        .text();
                    price = filter_price(price);
                }
            } else {
                price = "";
            }
            if (PID != "" && price != "") {
                arrayToSend.push([PID, price]);
            }

        }
    }

    if ($s('.slick-slide')
        .length > 0) {
        var slider = $s('.slick-slide');
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('.slick-slide:eq(' + i + ') a')
                .length > 0) {
                link = $s('.slick-slide:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link != "") {
                    PID = returnScPID(link);
                    // console.log("PID: "+PID);
                } else {
                    PID = "";
                }
            } else {
                PID = "";
            }
            if (PID != "") {
                if ($s('.slick-slide:eq(' + i + ')')
                    .find('p')
                    .length > 0) {
                    price = $s('.slick-slide:eq(' + i + ')')
                        .find('p:eq(0)')
                        .html();
                    if (price.split("Rs.")
                        .length > 2) {
                        price = price.split("Rs.");
                        price = price[price.length - 1];
                    }
                    price = filter_price(price);
                    // console.log("price: "+price);
                }
            } else {
                price = "";
            }

            if (PID != "" && price != "") {
                arrayToSend.push([PID, price]);
            }

        }
    }
    if ($s('.dd_section li')
        .length > 0) {
        var slider = $s('.dd_section li');
        var sliderLength = slider.length;
        var link;
        var price;
        var PID;
        for (i = 0; i < sliderLength; i++) {
            price = "";
            PID = "";
            if ($s('.dd_section li:eq(' + i + ') a')
                .length > 0) {
                link = $s('.dd_section li:eq(' + i + ') a:eq(0)')
                    .attr('href');
                if (link != "") {
                    PID = returnScPID(link);
                    // console.log("PID: "+PID);
                } else {
                    PID = "";
                }
            } else {
                PID = "";
            }
            if (PID != "") {
                if ($s('.dd_section li:eq(' + i + ')')
                    .find('p')
                    .length > 0) {
                    price = $s('.dd_section li:eq(' + i + ')')
                        .find('p:eq(0)')
                        .html();
                    if (price.split("Rs.")
                        .length > 2) {
                        price = price.split("Rs.");
                        price = price[price.length - 1];
                    }
                    price = filter_price(price);
                    // console.log("price: "+price);
                }
            } else {
                price = "";
            }

            if (PID != "" && price != "") {
                arrayToSend.push([PID, price]);
            }

        }
    }
    if(ij < 5) setTimeout(sendPairsSc,ij*ij*4000);
    sendnow(arrayToSend,'shopclues');
}
function sendPairsMn() {
    var arrayToSend = [];
    var price = "";
    var PID = "";
    var link = "";

    if (document.getElementsByClassName('product-list-list')
        .length > 0) {
        var sideLen = document.getElementsByClassName('product-list-list')[0].getElementsByTagName('li')
            .length;
        for (i = 0; i < sideLen; i++) {
            price = "";
            PID = "";
            link = document.getElementsByClassName('product-list-list')[0].getElementsByTagName('li')[i].getElementsByTagName('a')[0].getAttribute("href");
            PID = returnMnPID(link);
            price_div = $s('.product-list-list li:eq(' + i + ')')
                .find('.product-item-selling-price:eq(0)')
                .clone();
            $s(price_div)
                .find(".strike")
                .remove();
            $s(price_div)
                .find(".discount")
                .remove();
            price = $s(price_div)
                .text();
            price = filter_price(price);
            if (PID != "" && price != "") {
                arrayToSend.push([PID, price]);
            }
        }
    }
    if (document.getElementsByClassName('results')
        .length > 0) {

        var sideLen = document.getElementsByClassName('results')[0].getElementsByTagName('li')
            .length;
        for (i = 0; i < sideLen; i++) {
            price = "";
            PID = "";
            link = document.getElementsByClassName('results')[0].getElementsByTagName('li')[i].getElementsByTagName('a')[0].getAttribute("href");
            PID = returnMnPID(link);
            price_div = $s('.results:eq(0) li:eq(' + i + ')')
                .find('a:eq(0)')
                .find('.price:eq(0)')
                .clone();
            $s(price_div)
                .find(".strike")
                .remove();
            $s(price_div)
                .find(".discount")
                .remove();
            price = $s(price_div)
                .text();
            price = filter_price(price);
            if (PID != "" && price != "") {
                arrayToSend.push([PID, price]);
            }
        }
    }
    if (document.getElementsByClassName('results-base')
        .length > 0) {

        var sideLen = document.getElementsByClassName('results-base')[0].getElementsByTagName('li')
            .length;
        for (i = 0; i < sideLen; i++) {
            price = "";
            PID = "";
            link = document.getElementsByClassName('results-base')[0].getElementsByTagName('li')[i].getElementsByTagName('a')[0].getAttribute("href");
            PID = returnMnPID(link);
            price_div = $s('.results-base:eq(0) li:eq(' + i + ')')
                .find('.product-discountedPrice:eq(0)')
                .text()
                .trim();
            price = filter_price(price_div);
           if (PID != "" && price != "") {
                arrayToSend.push([PID, price]);
            }
        }
    }    
    if(ij < 5) setTimeout(sendPairsMn,ij*ij*5000);
    sendnow(arrayToSend,'myntra');
}
function filter_price(pr) {
    if (pr.split("Rs.")
        .length > 1) {
        pr = pr.split("Rs.")[1];
    }
    if (pr.split("Rs")
        .length > 1) {
        pr = pr.split("Rs")[1];
    }
    if (pr.split("INR")
        .length > 1) {
        pr = pr.split("INR")[1];
    }
    if (pr.split("Inr")
        .length > 1) {
        pr = pr.split("Inr")[1];
    }
    if (pr.split("RS.")
        .length > 1) {
        pr = pr.split("RS.")[1];
    }
    if (pr.split("RS")
        .length > 1) {
        pr = pr.split("RS")[1];
    }
    if (pr.split("R")
        .length > 1) {
        pr = pr.split("R")[1];
    }
    if (pr.split("`")
        .length > 1) {
        pr = pr.split("`")[1];
    }
    if (pr.split("MRP")
        .length > 1) {
        pr = pr.split("MRP")[1];
    }
    if (pr.split("mrp")
        .length > 1) {
        pr = pr.split("mrp")[1];
    }
    if (pr.split("/")
        .length > 1) {
        pr = pr.split("/")[0];
    }
    if (pr.split("₹")
        .length > 1) {
        pr = pr.split("₹")[1].trim();
    }
    pr = pr.split(",")
        .join("")
        .trim();
    pr = parseFloat(pr);
    return pr;
}
function returnPID(link){
  var pid = link;

  if(pid.split("#").length > 1){
    pid = pid.split("#")[0];
    pid = pid.trim();

  }

  if(pid.split("?pid=").length > 1){
    pid = pid.split("?pid=")[1];
    pid = pid.trim();

  }
  if(pid.split("&pid=").length > 1){
    pid = pid.split("&pid=")[1];
    pid = pid.trim();

  }
  if(pid.split("&").length > 1){
    pid = pid.split("&")[0];
    pid = pid.trim();

  }
  if(pid.split("ppid=").length > 1){
    pid = pid.split("ppid=")[0];
    pid = pid.trim();

  }
  if(pid.split("/").length > 1){
    pid = pid.split("/")[0];
    pid = pid.trim();

  }
  if(pid != pid.toUpperCase()){
    pid = "";
  }
  if(link == "" || link.split("/p/").length < 2){
    pid = "";
  }

  return pid;

}
function returnScPID(link){
    PID = "";
    if (link && link != "") {
        if (link.split(".html")
            .length > 1) {
            link = link.split(".html")[0];
            if (link.split("/")
                .length > 1) {
                link = link.split("/");
                PID = link[link.length - 1] + ".html";
            }
        } else if (link.split(".htm")
            .length > 1) {
            link = link.split(".htm")[0];
            if (link.split("/")
                .length > 1) {
                link = link.split("/");
                PID = link[link.length - 1] + ".htm";
            }
        }
    } 
    return PID;
}

function returnMnPID(link) {
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
function sendnow(arrayToSend,site){
    if(arrayToSendold && arrayToSend){
        var indexB = index(arrayToSendold);
        diff  = arrayToSend.filter( function( el ) {
          return !(JSON.stringify(el) in indexB);
        } );
        if(!diff.length){ij++; return;}
        ij = 1;
        //console.log('yes');
        arrayToSendold = arrayToSend;
        arrayToSend = diff;
        //console.log(2);
        //console.log(arrayToSend);
    }
    else{
        arrayToSendold = arrayToSend;
    }
    if(arrayToSend.length){
        arrayToSend = JSON.stringify(arrayToSend);
        chrome.runtime.sendMessage({
            sksmode: 'sendpairs',
            site: site,
            pairs: arrayToSend
        }, function (response) {});
    }
}
function index(arr) {
return arr.reduce(function(acc, item){
return acc[JSON.stringify(item)] = item, acc
}, {});    
}