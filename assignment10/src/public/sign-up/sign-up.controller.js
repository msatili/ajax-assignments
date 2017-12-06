(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MyInfoService', 'MenuService'];
function SignUpController(MyInfoService, MenuService) {
  var $ctrl = this;
  $ctrl.userInfo = {};
  $ctrl.userInfo.completed = false;

  $ctrl.submit = function() {
    MenuService.getMenuItem($ctrl.userInfo.favorite).then(function(response) {
      $ctrl.invalid = false;
      $ctrl.userInfo.completed = true;
      $ctrl.userInfo.favoriteData = response;
      MyInfoService.setItemInfo($ctrl.userInfo);
    })
  }

  $ctrl.validate = function() {
    MenuService.getMenuItem($ctrl.userInfo.favorite)
      .then(function () {
        $ctrl.invalid = false;
      })
      .catch(function() {
        $ctrl.invalid = true;
      });
  }

}

})();
