/**
 * AngularJS Rokk3r Labs Test
 * @author 
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('testAngularWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {

	    $routeProvider.
	      when('/home', {
	        templateUrl: 'views/home.html',
	        controller: 'homecontroler'
	      }).
	      when('/buy', {
	        templateUrl: 'views/buy_complete.html',
	        controller: 'buycontroler'
	      }).
	      otherwise({
	        redirectTo: '/home'
	      });
	    }
]);

app.controller('homecontroler', function($scope, $http) {
  $http.get("../api/buytable.json")
  .success(function (data) 
  	{
  		$scope.buytable = data.buyTable;
  	});

  	$scope.precio = function (){
		      var precio = 0;
		      angular.forEach($scope.buytable, function(result) {
		      	precio += parseFloat(result.price);
		        console.log(result.price);
		      });
		      return precio;
		    };

  	$scope.remove = function (index) {

  		$scope.buytable.splice(index,1);
  		
  	}
});

app.controller('buycontroler', function($scope, $http) {
  $http.get("../api/buytable.json")

  	$scope.precio = function (){
		      var precio = 0;
		      angular.forEach($scope.buytable, function(result) {
		      	precio += parseFloat(result.price);
		        console.log(result.price);
		      });
		      return precio;
		    };
});
