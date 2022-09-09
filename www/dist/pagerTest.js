(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//TODO
//Script to communicate with all pagers and test lights and sounds.\
const pagerAmount = 4;

var config = readConfig();
var devModeEnabled = config.devMode;

function testPagers() {
    if (devModeEnabled) {
        console.log('Dev mode enabled');
        for (let i = 0; i < pagerAmount + 1; i++) {
            deviceTrigger();
        }
    }
    if (devModeEnabled == false) {
        alert('Sorry! This feature hasn\'t been implemented yet!');
    }
    else {
        console.log('Unknown server mode found in config.json: ' + devModeEnabled);
    }
}


},{}]},{},[1]);
