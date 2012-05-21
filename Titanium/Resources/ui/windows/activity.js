var activityWindow = Ti.UI.currentWindow,
		Config = activityWindow.Config,
		Geoloqi = activityWindow.Geoloqi;

//access_token = (Geoloqi.session) ? Geoloqi.session.getAccessToken() : null;
//var url = "../webviews/activity.html#/" + access_token;
var url = "../webviews/activity.html#/";
var webview = Titanium.UI.createWebView({
	url: url,
	backgroundColor:'transparent'
});
activityWindow.add(webview);	

if(Ti.Platform.osname === "iphone"){
	var refresh = Ti.UI.createButton({
		systemButton: Ti.UI.iPhone.SystemButton.REFRESH
	});

	refresh.addEventListener("click", function(e){
		webview.evalJS("window.location.reload();");
	});
	
	activityWindow.setRightNavButton(refresh);
} else {
	var activity = activityWindow.activity;

	activity.onCreateOptionsMenu = function(e){
  	var menu = e.menu;
  	var menuItem = menu.add({ title: "Refresh" });
  	menuItem.addEventListener("click", function(e) {
    	webview.evalJS("window.location.reload();");
  	});
	};
}

