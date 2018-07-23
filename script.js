	// create the module and name it barHrApp
	var barHrApp = angular.module('barHrApp', ['ngRoute']);


	// configure our routes
	barHrApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			.when('/maternity', {
				templateUrl : 'pages/maternity.html',
				controller  : 'maternityController'
			})
			.when('/search', {
				templateUrl : 'pages/search.html',
				controller  : 'searchController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});

			


	});


	