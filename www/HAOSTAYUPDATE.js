// JavaScript Document
var exec = require('cordova/exec');

var HAOSTAYUPDATE = {
	update: function(successCallback, errorCallback){
		cordova.exec(successCallback,errorCallback, "HAOSTAYUPDATE","checkVersion", []);
	}
}

module.exports =  HAOSTAYUPDATE;
