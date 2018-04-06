var sdate = new Date("3 9 2016 14:00:00").getTime();
function getnextdate() {
    var cdate = new Date().getTime();
    while (cdate > sdate) sdate = sdate + 7 * 24 * 60 * 60000;
    return sdate;
}

// Saves options to localStorage.
function save_options() {
        document.getElementById("error").innerHTML = "";
        var a = [" ", " ", " "];
        if (document.getElementsByName("paymtd")[0].checked == 1) a[0] = document.getElementsByName("paymtd")[0].value;
        else a[0] = document.getElementsByName("paymtd")[1].value;
        localStorage["yureka"] = a[0];
        if (a[0] == "Yes") {
            var t = getnextdate() - 270 * 60000;
            document.cookie = "yureka=Yes;expires=" + new Date(t);

            var ch = document.getElementsByName('cart');
            if (ch[1].checked == 1) a[1] = ch[1].value;
            else if (ch[0].checked == 1) a[1] = ch[0].value;
            else return document.getElementById("error").innerHTML = "*please select one option";
            localStorage["y-cart"] = a[1];
            if (a[1] == "full") {
                var b = [];
                b[0] = document.getElementById("enterAddressFullName").value;
                if (b[0].length < 3) return document.getElementById("error").innerHTML = "*please enter a valid Name ";

                b[1] = document.getElementById("enterAddressAddressLine1").value;
                if (b[1].length < 3) return document.getElementById("error").innerHTML = "*please enter a valid Address Line 1";

                b[2] = document.getElementById("enterAddressAddressLine2").value;

                b[3] = document.getElementById("enterAddressCity").value;
                if (b[3].length < 3) return document.getElementById("error").innerHTML = "*please enter a valid City";

                b[4] = document.getElementById("enterAddressStateOrRegion").value;
                if (b[4].length < 3) return document.getElementById("error").innerHTML = "*please enter a valid State";

                b[5] = document.getElementById("enterAddressPostalCode").value;
                var pinc = /^\d{6}$/;
                if (!b[5].match(pinc)) return document.getElementById("error").innerHTML = "*please enter a valid Pincode";

                b[6] = document.getElementById("enterAddressPhoneNumber").value;
                var phoneno = /^\d{10}$/;
                if (!b[6].match(phoneno)) return document.getElementById("error").innerHTML = "*please enter a valid 10 digit mobile number";

                b[7] = document.getElementById("Landmark").value;
                if (b[7].length < 3) return document.getElementById("error").innerHTML = "*please enter a valid Landmark";

                b[8] = document.getElementById("AddressType").value;
                if (b[8] == "OTH") return document.getElementById("error").innerHTML = "*please select Address Type";

                b[9] = convert_It(document.getElementById("password").value);

                var mtd = document.getElementsByName("paymtd1");
                if (mtd[1].checked == 1) var method = mtd[1].value;
                else if (mtd[0].checked == 1) var method = mtd[0].value;
                else return document.getElementById("error").innerHTML = "*please select your prefered payment method";
                var address = b[0] + ",.," + b[1] + ",.," + b[2] + ",.," + b[3] + ",.," + b[4] + ",.," + b[5] + ",.," + b[6] + ",.," + b[7] + ",.," + b[8]+ ",.," + b[9];

                localStorage["method"] = method;
                localStorage["address"] = address;
            }
        }
        alert("You have registered successfully, be ready with your laptop at the time of sale");
        return document.getElementById("sucess").innerHTML = "You have registered successfully, be ready with your laptop at the time of sale";
    }
    // Restores select box state to saved value from localStorage.
function getCookie(cvalue) {
    var name = cvalue + "=";
    var ca = document.cookie.split('; ');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        if (c.indexOf(name) == 0) return c.split("=")[1];
    }
    return 0;
}

function restore_options() {
    setTimeout(function() {
        if (getCookie("yureka") == "Yes") {
            document.getElementsByName("paymtd")[0].click();
            if (localStorage["y-cart"] == "full") {
                document.getElementsByName("cart")[1].click();

                if (localStorage["method"]) {
                    if (localStorage["method"] == "cod") document.getElementsByName("paymtd1")[1].click();
                    else document.getElementsByName("paymtd1")[0].click();
                }
            }
        }
        if (localStorage["address"]) {
            var x = localStorage["address"].split(",.,")

            document.getElementById("enterAddressFullName").value = x[0];
            document.getElementById("enterAddressAddressLine1").value = x[1];
            document.getElementById("enterAddressAddressLine2").value = x[2];
            document.getElementById("enterAddressCity").value = x[3];
            document.getElementById("enterAddressStateOrRegion").value = x[4];
            document.getElementById("enterAddressPostalCode").value = x[5];
            document.getElementById("enterAddressPhoneNumber").value = x[6];
            document.getElementById("Landmark").value = x[7];
            document.getElementById("AddressType").value = x[8];
        }
    }, 300);
}

function reset() {
    localStorage.removeItem("yureka");
    localStorage.removeItem("y-cart");
    document.cookie = "yureka=No";

}
function convert_It(form) {
var a = escape(form); <!-- Get textbox1 string -->
var b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890%@#$^&*()-_=+.:"; 
var c = "yWDwx*PVH+OX3ph4FeM_(nA)z2YtSi$EG1ZN85R:I@#&QkfKuUqbdml-Br=csL6.avJj9%^TC7go0"; 
var d;
var h;
var i;
var j = "";

var f = a.length; 
var e = 0; 
var g = 1;

while (e != f) {  
    d = a.substring(e,g); 
    h = b.indexOf(d); 
    i = c.charAt(h); 
    e++; 
    g++; 
    if(!i) i=d;
    j += i;
    }
    return j; 
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);
document.querySelector('#reset').addEventListener('click', reset);
document.getElementById("Yes1").addEventListener('click', function(){ document.getElementById("opt-in").style.display = 'block';});
document.getElementById("No1").addEventListener('click', function(){ document.getElementById("opt-in").style.display = 'none';});
document.getElementById("full1").addEventListener('click', function(){ document.getElementById("full").style.display = 'block';});
document.getElementById("cart-only1").addEventListener('click', function(){ document.getElementById("full").style.display = 'none';});