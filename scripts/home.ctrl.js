app.controller('homecontroler', function($scope, $http, $cookies) {
  $http.get("./api/buytable.json")
  .success(function (data) 
  	{
  		$scope.buytable = data.buyTable;
      $cookies.buy = angular.toJson(data.buyTable);
    	});
  
  	$scope.precio = function (){
		      var precio = 0;
		      angular.forEach($scope.buytable, function(result) {
		      	precio += parseFloat(result.price);
		      });
		      return precio;
		    };

    $scope.formato = function (numero){
      return formato_numero(numero,2,',','.');

    }

  	$scope.remove = function (index) {

  		$scope.buytable.splice(index,1);
      $cookies.buy = angular.toJson($scope.buytable);

  		
  	}

  	$scope.class = function  (index) {
  		// body...
  		if(index == 0){
  			return "class = 'item active'";
  		}
  		return "class = 'item'";
  	}
});
