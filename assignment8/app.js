(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;

  menu.searchTerm = "";

  menu.removeItem = function (itemIndex) {
    menu.found.splice(itemIndex, 1);
  };

  menu.getMatchedMenuItems = function () {
    var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

    promise.then(function (response) {
      menu.found = response;
    })
    .catch(function (error) {
      console.log("Whoops! Something went wrong!");
    });
  }
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    })
    .then(function (result) {
      // process result and only keep items that match
      var foundItems = [];

      var menuItems = result.data.menu_items;

      for (var i = 0; i < menuItems.length; i++) {
        var description = menuItems[i].description;
        if (description.toLowerCase().indexOf(searchTerm) !== -1) {
          foundItems.push(menuItems[i]);
        }
      }

      // return processed items
      return foundItems;
    });
  };
}

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'narrow',
    bindToController: true
  };
  return ddo;
}

})();