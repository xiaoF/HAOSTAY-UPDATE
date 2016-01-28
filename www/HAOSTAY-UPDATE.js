// JavaScript Document
var exec = require('cordova/exec');

var HAOSTAY-UPDATE = {
	update: function(successCallback, errorCallback){
		cordova.exec(successCallback,errorCallback, "HAOSTAY-UPDATE","checkVersion", []);
	}
}

module.exports =  HAOSTAY-UPDATE;
