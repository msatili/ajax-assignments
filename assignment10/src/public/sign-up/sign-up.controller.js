(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService', 'MenuService'];
function SignUpController(SignUpService, MenuService) {
  var $ctrl = this;

  $ctrl.first_name = SignUpService.firstName;
  $ctrl.last_name = SignUpService.lastName;
  $ctrl.email = SignUpService.email;
  $ctrl.phone = SignUpService.phone;
  $ctrl.favorite = SignUpService.favorite;
  $ctrl.completed = SignUpService.completed;

  $ctrl.submit = function() {
  	$ctrl.completed = true;
  	SignUpService.submit($ctrl.first_name, $ctrl.last_name, $ctrl.email, $ctrl.phone, $ctrl.favorite);
  }

  $ctrl.validate = function() {
    MenuService.getMenuItem($ctrl.favorite)
      .then(function () {
        $ctrl.invalid = false;
      })
      .catch(function() {
        $ctrl.invalid = true;
      });
  }

}

})();
