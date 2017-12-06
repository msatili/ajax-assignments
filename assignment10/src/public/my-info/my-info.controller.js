(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignUpService', 'ApiPath', 'item'];
function MyInfoController(SignUpService, ApiPath, item) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
  $ctrl.userInfo = SignUpService.getInfo();

  // $ctrl.itemInfo = SignUpService.getMenuItem($ctrl.userInfo.favorite);

  $ctrl.itemInfo = item;

  // $ctrl.getInfo = function () {
  // 	return SignUpService.getInfo();
  // }

}

})();

// (function () {
// "use strict";

// angular.module('public')
// .controller('MyInfoController', MyInfoController);

// MyInfoController.$inject = ['ApiPath', 'regInfo'];
// function MyInfoController(ApiPath, regInfo) {
//   var $ctrl = this;
//   $ctrl.info = regInfo;
//   $ctrl.basePath = ApiPath;
// }

// })();
