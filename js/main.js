/*
 * Shawn Bierman www.shawnbierman.com
 * 4/19/2014
 * main.js main script for iCloud Launcher Safari Extension
 */


(function () {
    'use strict';

    var cnt = 0,

        anchors = document.getElementsByTagName("a"),

        addNewListener = function (anchor) {

            anchor.addEventListener("click", function (e) {

                e.preventDefault();
                safari.self.hide();

                var newTab = safari.application.activeBrowserWindow.openTab();
                newTab.url = e.currentTarget.href;

            }, false);

        };

    for (cnt; cnt < anchors.length; cnt = cnt + 1) {

        addNewListener(anchors[cnt]);

    }
}());