var xx = window.location.href;
$s = jQuery.noConflict();
var ti = 0;
var count = 0;

leautobuy("lemall2", "Le 2 ", "6 28 2016 12:00:00", "/Le20620.html");
leautobuy("lemallmax2", "Le Max 2 ", "6 28 2016 14:00:00", "/Lemax20620.html");
leautobuy("lemall2", "Le 2 ", "6 28 2016 12:00:00", "/le2.html");
leautobuy("lemallmax2", "Le Max 2 ", "6 28 2016 14:00:00", "/lemax2.html");
function leautobuy(cookie, mobile, date, stri)
{
    date = getnextdate(new Date(date).getTime());
if(xx.search(stri)> -1)
{
     chrome.extension.sendMessage({
            autobuy: cookie
        }, function(response) {
           if(response.output == "Yes") buylemall(date,mobile);
        });
}
}
function buylemall(date, mobile) {
	var ele = document.getElementById("fyureka"); 
	if(!ele)
	{
		var elemDiv = document.createElement('div');
		elemDiv.id = "fyureka";
		elemDiv.style.cssText = 'width: 450px; height: 100px; position: fixed; bottom: 20px; right: 20px; z-index: 99999; border: green; border-radius: 10px;box-shadow: 4px 4px 20px green;background: aliceblue;';
		document.body.appendChild(elemDiv);
		document.getElementById("fyureka").innerHTML = '<img src="'+chrome.extension.getURL('images/icon_a.png')+'" style="width: 80px;height: 80px;padding: 10px;box-sizing: initial;float: left;"/><div style="width: 350px;float: right;display: table;height: 100px;"><p id="fmsg" style="display: table-cell;vertical-align: middle;padding: 20px;font-family: Helvetica, Arial,sans-serif;font-size: 15px;color: #c60;margin: 0;font-weight: 900;"></h1></div>';
		var ele = document.getElementById("fyureka");
	}
    cdate = new Date().getTime();
    var tymleft = date - cdate;
    //console.log(tymleft);
    if (tymleft > 60 * 60000 && tymleft < 601200000) 
    	{document.getElementById("fmsg").innerHTML = "You are registered for automatic add to cart for the sale"; setTimeout(function() {buylemall(date, mobile)}, tymleft - 59 * 60000);}
        else if (tymleft < 3600000 && tymleft > 120000) { // var timeleft = document.getElementsByClassName("timeleft-large");
    ele.style.background = "gold";
    document.getElementById("fmsg").innerHTML = "Click refresh if I do not turn green before 2 minutes of sale";
        setTimeout(function() {buylemall(date, mobile)}, tymleft - 120000);
    }

    else if (tymleft < 120000 && tymleft > -10000000) {
    	ele.style.background = "springgreen";
    	document.getElementById("fmsg").innerHTML = "we have tried to click it for you "+ti+" times";
    	setTimeout(function() {
            
            if ($s("#qg_button_buy .qg_ok:visible").length) {
                document.getElementById("qg_button_buy").getElementsByClassName("qg_ok")[0].click();
            }else if (ti < 4800) {
                ti++;
                buylemall(date, mobile);
            }
        }, 100);
    }
    else if (tymleft < -1000000)
    {
    	ele.remove();
    }

}
function getnextdate(sd) {
    var cdate = new Date().getTime();
    while (cdate > sd) sd = sd + 7 * 24 * 60 * 60000;
    return sd;
}