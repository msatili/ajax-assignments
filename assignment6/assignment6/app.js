(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.textBox = "";

  $scope.displayMessage = function () {
    var messageDisplay = calculateTooMuch($scope.textBox);
    var textColor = setTextColor(messageDisplay);

    $scope.message = messageDisplay;

    $scope.color = textColor;
    //$scope.textBox.border = textColor;
    //$scope.message.color = textColor;
  };


  function calculateTooMuch(string) {
    if(string === ""){
      return "Please enter data first";
    }
    var lunchItems = string.split(",").map(item => item.trim());
    lunchItems = lunchItems.filter(String);
    if(lunchItems.length < 4){
      return "Enjoy!";
    }
    return "Too much!";
  }

  function setTextColor(string) {
    if(string === "Please enter data first"){
      return "red";
    } else {
      return "green";
    }
  }



};


})();
