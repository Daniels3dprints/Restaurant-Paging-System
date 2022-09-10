(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
//TODO
//Script to communicate with pagers/server and update the pagers status accordingly

pagerIPs = {
    "pager1" : ["0.0.0.0"],
    "pager2" : ["0.0.0.0"],
    "pager3" : ["0.0.0.0"],
    "pager4" : ["0.0.0.0"],
}

global.updateStatus = function(status, pagerID, pagerStatusID) {
    switch (status) {
        case "idle":
            document.getElementById(pagerStatusID).innerHTML = "Idle";
            document.getElementById(pagerID).style.backgroundColor = "orange";
            console.log(pagerID + " status: " + status);
            break;
        case "error":
            document.getElementById(pagerStatusID).innerHTML = "Error";
            document.getElementById(pagerID).style.backgroundColor = "red";
            break;
        case "active":
            document.getElementById(pagerStatusID).innerHTML = "Active";
            document.getElementById(pagerID).style.backgroundColor = "limegreen";
            break;
    }
}

function deviceTrigger(pagerID, status) {
    switch (pagerID) {
        case "pager1":
            break;
    }
    switch (status) {
        case "idle":
            break;
        case "error":
            break;
        case "active":
            break;
    }
}
}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
