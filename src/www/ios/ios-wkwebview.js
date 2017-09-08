var exec = require('cordova/exec');

var WkWebKit = {
    allowsBackForwardNavigationGestures: function (allow) {
        exec(null, null, 'CDVWKWebViewEngine', 'allowsBackForwardNavigationGestures', [allow]);
		},
		clearHistory: function () {
			exec(null, null, 'CDVWKWebViewEngine', 'clearHistory', []);
	}
};

module.exports = WkWebKit;
