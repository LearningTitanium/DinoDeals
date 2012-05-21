var activityWindow = Ti.UI.currentWindow,
		Config = activityWindow.Config,
		Geoloqi = activityWindow.Geoloqi;

// Create a webview for the deals tab
var url = "../webviews/activity.html#/"+Geoloqi.session.getAccessToken();
var webview = Titanium.UI.createWebView({
	url: url,
	backgroundColor:'transparent'
});
activityWindow.add(webview);

// Platform specific refresh button
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

