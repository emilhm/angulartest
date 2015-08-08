
app.controller('buycontroler', function($scope, $http, $cookies) {

	$scope.compra = JSON.parse($cookies.buy);

    $scope.formato = function (numero){
      return formato_numero(numero,2,',','.');

    }

  	$scope.precio = function (){
		      var precio = 0;
		      angular.forEach($scope.compra, function(result) {
		      	precio += parseFloat(result.price);
		      });
		      return precio;
		    };
});