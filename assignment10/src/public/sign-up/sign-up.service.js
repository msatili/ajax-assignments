(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);

SignUpService.$inject = ['$http', 'ApiPath'];
function SignUpService($http, ApiPath) {
	var $ctrl = this;

	$ctrl.firstName = "";
	$ctrl.lastName = "";
	$ctrl.email = "";
	$ctrl.phone = "";
	$ctrl.favorite = "";
	$ctrl.completed = false;

	$ctrl.submit = function (first_name, last_name, email, phone, favorite) {
		$ctrl.completed = true;
		$ctrl.firstName = first_name;
		$ctrl.lastName = last_name;
		$ctrl.email = email;
		$ctrl.phone = phone;
		$ctrl.favorite = favorite;
	};

	$ctrl.getInfo = function() {
		return {"firstName": $ctrl.firstName,
				"lastName": $ctrl.lastName,
				"email": $ctrl.email,
				"phone": $ctrl.phone,
				"favorite": $ctrl.favorite,
				"completed": $ctrl.completed};
	};

	$ctrl.getMenuItem = function (value) {
		if(value) {
			var item = value;
		} else {
			var item = $ctrl.favorite;
		}

	    return $http.get(ApiPath + '/menu_items/' + item + '.json').then(function (response) {
	      return response.data;
	    }).catch(function () {
	    	return "";
	    });
  	};
}

})(); 