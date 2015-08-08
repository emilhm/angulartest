/**
 * AngularJS Rokk3r Labs Test
 * @author 
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('testAngularWebApp', [
  'ngRoute','ngCookies'
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

function formato_numero(numero, decimales, separador_decimal, separador_miles){ // v2007-08-06
    numero=parseFloat(numero);
    if(isNaN(numero)){
        return "";
    }

    if(decimales!==undefined){
        // Redondeamos
        numero=numero.toFixed(decimales);
    }

    // Convertimos el punto en separador_decimal
    numero=numero.toString().replace(".", separador_decimal!==undefined ? separador_decimal : ",");

    if(separador_miles){
        // Añadimos los separadores de miles
        var miles=new RegExp("(-?[0-9]+)([0-9]{3})");
        while(miles.test(numero)) {
            numero=numero.replace(miles, "$1" + separador_miles + "$2");
        }
    }

    return numero;
}

