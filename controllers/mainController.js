
	barHrApp.controller('mainController', function($scope, $filter, $location) {
		$scope.showSecondInput = true;
			if($location.$$url == '/') {
				$scope.showSecondInput = true;
			} else {
				$scope.showSecondInput = false;
			}
		$scope.countries = [{
			country: "United Kingdom",
			division: 
				["Barclays UK",
				"Barclays International",
				"COO & Functions",
				"Barclays non-core",
				"Head office"]
			
		}]
		$scope.policies = [{
			name: "Annual Leave",
			tags: ["Time Off", "Holidays"],
			caption: "Every employee is entitled to at least 25 days of holiday every year to unwind and recharge",
			country: "United Kingdom",
			division: "Barclays UK"
			},
			{
			name: "Paternity Leave",
			tags: ["Time Off", "Holidays"],
			caption: "Every employee is entitled to at least 25 days of holiday every year to unwind and recharge",
			country: "United Kingdom",
			division:"Barclays UK"
			},
			{
			name: "Career development and learning leave",
			tags: ["Time Off", "Holidays"],
			caption: "Every employee is entitled to at least 25 days of holiday every year to unwind and recharge",
			country: "United Kingdom",
			division:"Barclays UK"
			},
			{
			name: "Holiday calculator",
			tags: ["Time Off", "Holidays"],
			caption: "Every employee is entitled to at least 25 days of holiday every year to unwind and recharge",
			country: "United Kingdom",
			division:"Barclays UK"
			},
			{
			name: "Compasionate leave",
			tags: ["Time Off", "Holidays"],
			caption: "Every employee is entitled to at least 25 days of holiday every year to unwind and recharge",
			country: "United Kingdom",
			division:"Barclays UK"
			},
			{
			name: "Unused holiday",
			tags: ["Time Off", "Holidays"],
			caption: "Every employee is entitled to at least 25 days of holiday every year to unwind and recharge",
			country: "United Kingdom",
			division:"Barclays UK"
			},
			{
			name: "Study leave learning",
			tags: ["Time Off", "Holidays"],
			caption: "Every employee is entitled to at least 25 days of holiday every year to unwind and recharge",
			country: "United Kingdom",
			division:"Barclays UK"
			}]
		// create a message to display in our view
			 //   $scope.search=function(){
		  
    //     $scope.searchQuery = angular.copy($scope.searchText);
    //     $scope.policiesToFilter=$scope.policies;
    //     $scope.searchResult=true;


    // }

    $scope.go = function (path) {
    	
  		$location.path(path);
    	if(path == ('/search')) {
    		$scope.showSecondInput = false;
    	} else {
    		$scope.showSecondInput = true;
    	}

	};


    $scope.items2 = $scope.policies;
    
    $scope.$watch('searchQuery', function(val){ 
        $scope.policies = $filter('filter')($scope.items2, val);
    });

    // $scope.search();

    $scope.vis = {'visibility': 'hidden'};

    $scope.searching = function() {

    	if($scope.policies) {
    		$scope.vis = {'visibility': 'visible'};  		
    	} else {
    		$scope.vis={'visibility': 'hidden'};
    	}
    }

		$scope.message = 'Everyone come and see how good I look!';
	})

	barHrApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	barHrApp.controller('contactController', function($scope) {
		
		$scope.message = 'Contact us! JK. This is just a demo.';
	});

	barHrApp.controller('maternityController', function($scope) {
		
		$scope.message = 'Contact us! JK. This is just a demo.';
	});

	barHrApp.controller('searchController', function($scope) {

	
	
		$scope.policies = $scope.$parent.policies;

console.log($scope.policies)

		 // $scope.$parent.search()



	});



    


           




