describe('SignUpController', function() {
	// 'use strict';

  var SignUpController;
  var ApiPath;
  var $httpBackend;
  var MenuService;
  var MyInfoService;

  var invalidFavorite = "1A";
  var validFavorite = "A1";

  var mockItemJson = {
    "id": 1,
    "short_name": "A1",
    "name": "Won Ton Soup with Chicken",
    "description": "chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions",
    "price_small": 2.55,
    "price_large": 5.0,
    "small_portion_name": "pint",
    "large_portion_name": "quart",
    "created_at": "2017-12-05T02:09:18.121Z",
    "updated_at": "2017-12-05T02:09:18.121Z",
    "category_short_name": "A",
    "image_present": true
  };


  beforeEach(function() {
    module('restaurant');

    inject(function ($injector) {
      $controller = $injector.get('$controller');
      ApiPath = $injector.get('ApiPath');
      $httpBackend = $injector.get('$httpBackend');
      MenuService = $injector.get('MenuService');
      MyInfoService = $injector.get('MyInfoService');
      SignUpController = $controller('SignUpController', {
        MyInfoService: MyInfoService, 
        MenuService: MenuService
      });
    });
  });
  

  it('should be invalid if favorite is invalid', function() {
    SignUpController.userInfo.favorite = invalidFavorite;
    $httpBackend.expectGET(ApiPath + "/menu_items/" + invalidFavorite + ".json").respond(500, '');
    SignUpController.validate();
    $httpBackend.flush();
    expect(SignUpController.invalid).toBe(true);
  });

  it('should be valid if favorite is valid', function() {
    SignUpController.userInfo.favorite = validFavorite;
    $httpBackend.expectGET(ApiPath + "/menu_items/" + validFavorite + ".json").respond(mockItemJson);
    SignUpController.validate();
    $httpBackend.flush();
    expect(SignUpController.invalid).toBe(false);
  });

});


//   var $httpBackend;
//   var ApiPath;
//   var MenuService;
//   var MyInfoService;
//   var SignUpController;


//   beforeEach(function() {
//     module('restaurant');

//     inject(function ($injector) {
//       $httpBackend = $injector.get('$httpBackend');
//       ApiPath = $injector.get('ApiPath');

//       var $controller = $injector.get('$controller');
//       var MenuService = $injector.get('MenuService');
//       var MyInfoService = $injector.get('MyInfoService');

//       SignUpController = $controller('SignUpController', {
//         MenuService: MenuService,
//         MyInfoService: MyInfoService
//       });

//       $httpBackend.whenGET('src/public/public.html').respond('');
//       $httpBackend.whenGET('src/public/home/home.html').respond('');
//     });

//   });

//   it('should show error message if the item number is invalid', function() {
//     expect(SignUpController.invalid).not.toBeDefined();
//     var shortName = "L1";
//     SignUpController.userInfo = {
//       'favorite': shortName
//     }
//     $httpBackend.expectGET(ApiPath + "/menu_items/" + shortName + ".json").respond(500, '');

//     SignUpController.validate(shortName);

//     $httpBackend.flush();

//     expect(SignUpController.invalid).toBe(true);
//   });

//   it('should show error message if the item number is valid', function() {
//     expect(SignUpController.invalid).not.toBeDefined();
//     var shortName = "L1";
//     SignUpController.userInfo = {
//       'favorite': shortName
//     }
//     $httpBackend.expectGET(ApiPath + "/menu_items/" + shortName + ".json").respond(menuItem);

//     SignUpController.validate(shortName);

//     $httpBackend.flush();

//     expect(SignUpController.invalid).toBe(false);
//   });

// });


//	var initValue;

// 	beforeEach(function() {
// 		initValue = "someVal";
// 	});

// 	it("Should not return true", function() {
// 		var result = someFunc(initValue);
// 		expect(result).not.toBe(true);
// 	})
// });