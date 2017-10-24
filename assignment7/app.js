(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
.filter('angularDollars', AngularDollarsFilter);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyList = this;

  buyList.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

  buyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [
	{name: "cookies",
	 quantity: 10,
         pricePerItem: 3},
	{name: "sugary drinks",
	 quantity: 3,
         pricePerItem: 4},
	{name: "donuts",
	 quantity: 5,
         pricePerItem: 1},
	{name: "chocolates",
	 quantity: 7,
         pricePerItem: 2},
	{name: "Stroopwafels",
	 quantity: 2,
         pricePerItem: 6}];

  var boughtItems = [];

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;  
  };

  service.buyItem = function (itemIndex) {
    var item = toBuyItems[itemIndex];
    toBuyItems.splice(itemIndex, 1);
    boughtItems.push(item);
  }
}

function AngularDollarsFilter() {
  return function (input) {
    input = input || "";
    input = parseFloat(input).toFixed(2);
    input = "$$$" + input;
    return input;
  };
}

})();