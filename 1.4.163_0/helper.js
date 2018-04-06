var eSiteIds = {  "flipkart" : 1,
				  "amazon" : 2,
				  "paytm" : 3,
				  "freecharge" : 4,
				  "snapdeal" : 5,
				  "shopclues" : 6,
				  "ebay" : 7,
				  "makemytrip" : 8,
				  "oyorooms" : 9,
				  "zorooms" : 10,
				  "yatra" : 11,
				  "goibibo" : 12,
				  //"irctc" : 13,
				  "cleartrip" : 14,
				  "foodpanda" : 15,
				};

//modify these URLS according to requirements
//info is the url to post product information
//order is the url to post order information
var postURLS = {"info" : "http://192.168.0.20:1379/flipshopePOST.php",
				"order" : "http://192.168.0.20:1379/orderPost.php",
				"coupon" : "http://192.168.0.20:1379/flipshopePOST.php",
				"hotel_booking" : "http://192.168.0.20:1379/flipshopePOST.php",
				"order_fetch" : "http://192.168.0.20:1379/orderFetch.php"};

//modify the values in this object according to what keys are needed in the posted data
var infoPostJsonParamNames = {"pid" : "pid",
							  "ppid" : "PPID",
							  "title" : "title",
							  "url" : "link",
							  "price" : "mrp",
							  "discount" : "discount",
							  "finalPrice" : "price",
							  "availability": "availability",
							  "description" : "description",
	                          "features" : "features",
							  "services" : "services",
	                          "category" : "category",
							  "image" : "image",
							  "altImages": "altImages",
							  "site" : "site",
							  "count" : "count",
							  "data" : "data",
							  "brand" : "brand",
						      "color" : "color",
							  "amazon_fulfilled" : "amazon_fulfilled" //1 if fulfilled, 0 if not
							};
var ipjpn = infoPostJsonParamNames;


//modify the values in this object according to what keys are needed in the posted data for coupons
var couponPostJsonParamNames = {"coupon_id" : "coupon_id",
								"coupon_url" : "coupon_url",
								"coupon_tag" : "coupon_tag",
								"coupon_value" : "coupon_value",
								"coupon_price" : "coupon_price",
								"coupon_image" : "coupon_image",
								"coupon_brand" : "coupon_brand",
								"coupon_description" : "coupon_description",
								"coupon_expiry" : "coupon_expiry"
							};
var cpjpn = couponPostJsonParamNames;


// modify the values in this object according to what keys are needed
// in the posted data for hotel-bookings
var hotelBookingPostJsonParamNames = {"booking_id" : "booking_id",
									  "hotel_name" : "hotel_name",
									  "hotel_address" : "hotel_address",
									  "check_in" : "check_in",
									  "check_out" : "check_out",
									  "finalPrice" : "finalPrice",
									  "email" : "traveller_email",
									  "phone" : "traveller_phone",
									  "hotel_confirmation_number" : "hotel_confirmation_number",
									  "delivery_address" : "delivery_address"};
var hbpjpn = hotelBookingPostJsonParamNames;


// modify the values in this object according to what keys are needed
// in the posted data for hotel-bookings
var foodBookingPostJsonParamNames = {"booking_id" : "booking_id",
									  "hotel_name" : "hotel_name",
									  "hotel_address" : "hotel_address",
									  "finalPrice" : "finalPrice",
									  "email" : "customer_email",
									  "phone" : "customer_phone",
									  "hotel_confirmation_number" : "hotel_confirmation_number",
									  "delivery_address" : "delivery_address"};
var fbpjpn = foodBookingPostJsonParamNames;


//modify the values in this object according to what
//is needed to indicate availability
var availParams = {"yes" : 1, "no" : 0};


//modify the values in this object according to what keys are needed in the posted data
var orderPostJsonParamNames = {"order_id" : "order_id",
							   "seller_url" : "seller_url",
							   "seller_name" : "seller_name",
							   "order_list" : "order_list",
							   "pid" : "product_pid",
							   "url" : "product_url",
							   "title" : "product_title",
							   "price" : "price",
							   "quantity" : "quantity",
							   "scheduled_delivery" : "scheduled_delivery",
							   "phone" : "phone_for_sms_alerts",
							   "email" : "email",
							   "delivery_address" : "delivery_address",
	                           "extId": "extId"
							};
var opjpn = orderPostJsonParamNames;


function getWebsiteName(url) {
	var domain;
    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    }
    else {
        domain = url.split('/')[0];
    }

    domain = domain.split(':')[0];
    domain = domain.toLowerCase();

    for(var website in eSiteIds) {
    	if(domain.indexOf(website) > -1) {
    		return website;
    	}
    }
    return "NO_SCOPE_FOR_WEBSITE: " + domain;
}


function postDataToServer(site, DATA, type) {
	var postData = {};
    postData[ipjpn["site"]] = site;
    postData[ipjpn["count"]] = DATA.length;
    postData[ipjpn["data"]] = DATA;
    postData = JSON.stringify(postData);
    console.log("postData: " + postData);

	$.post(
		postURLS[type],
		{post: postData},
		function(data) {
			$('#message').append(data);
		}
	);
}


var getUrlFromString = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

function getParameterByName(url, name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(url.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}