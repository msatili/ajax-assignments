(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['MenuDataService', 'items'];
function ItemsController(ItemsController, items) {
  var itemList = this;
  itemList.items = items.data.menu_items;

  console.log(items.data.menu_items);
}

})();