(function () {
"use strict";

angular.module('public')
.directive('signupDirective', signupDirective);

function signupDirective() {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, mCtrl) {
      function myValidation(value) {
      	var menuItem = SignUpService.getMenuItem(value);

      	console.log(menuItem);

      	if(menuItem == "") {
      		mCtrl.$setValidity('signupDirective', false);
      		console.log("false");
      	} else {
      		mCtrl.$setValidity('signupDirective', true);
      		console.log("true");
      	}
        return value;
      }

      console.log(myValidation);
      mCtrl.$parsers.push(myValidation);
    }
  };
}

})();