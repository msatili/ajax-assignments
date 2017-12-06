(function () {
"use strict";

angular.module('public')
.service('MyInfoService', MyInfoService);

function MyInfoService() {
	var service = this;

	service.setItemInfo = function (itemInfo) {
		service.itemInfo = itemInfo;
	};

	service.getItemInfo = function() {
		return service.itemInfo;
	}
}

})(); 