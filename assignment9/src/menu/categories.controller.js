(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService', 'items'];
function CategoriesController(CategoriesController, items) {
  var categoryList = this;
  categoryList.items = items.data;
}

})();
