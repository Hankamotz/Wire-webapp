// ==UserScript==
// @name         Wire Messenger nicer on Ubuntu Touch
// @namespace     http://userstyles.org
// @description	  Simple CSS that hides left toolbar from new Wire Messenger 
// @author        Hankamotz
// @homepage      https://userstyles.org/styles/112567
// @include       https://app.wire.com/*
// @include       http://app.wire.com/*
// @run-at        document-start
// @version       0.1
// ==/UserScript==
(function() {var css = [ "* {\nfont-family: \"Ubuntu\" !important;\nfont-size: 12pt !important; \nline-height: 1 !important}", 
        " ",
        ".app {",
	"  min-width: 80px !important;",
	"}",
        " ",
        ".left {",	
	"  width: 200px !important;",
	"}",
        " ",
        ".left-list-header {",	
        "  left: 100px !important;",
	"}",
        " ",
        ".start-ui-header {",	
        "  margin-left: 124px !important;",
	"}",
        " ",
        ".start-ui-list {",	
        "  padding-left: 124px !important;",
	"}",
        " ",
        ".start-ui-import {",	
        "  margin-left: 124px !important;",
	"}",
        " ",
        ".left-list-items {",	
        "  left: 100px !important;",
	"}",
        " ",
        ".conversations-footer {",	
        "  justify-content: center !important;",
	"}",
        " ",
        ".left-list-header {",
        "  justify-content: center !important;",	
        "  left: 40px !important;",
	"}",
        " ",
        ".left-list-header-close-button {",	
        "  left: 220px !important;",
	"}",
        " ",
        ".right {",	 	
	"  left: 200px !important;",
	"}",
        


].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();

