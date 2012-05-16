var activityWindow = Ti.UI.currentWindow,
		Config = activityWindow.Config,
		Geoloqi = activityWindow.Geoloqi;

url = "../../activity-feed/index.html#/" + Geoloqi.session.getAccessToken();

Ti.API.info(url);

var webview = Titanium.UI.createWebView({
  url: url
});

var refresh = Ti.UI.createButton({
  systemButton: Ti.UI.iPhone.SystemButton.REFRESH
});

var loading = Ti.UI.createButton({
  systemButton: Ti.UI.iPhone.SystemButton.ACTIVITY
});

webview.addEventListener("load", function(){
	activityWindow.setLeftNavButton(null);
});

refresh.addEventListener("click", function(e){
  activityWindow.setLeftNavButton(loading);
  webview.reload();
});

activityWindow.setLeftNavButton(loading);
activityWindow.setRightNavButton(refresh);
Titanium.UI.currentWindow.add(webview);