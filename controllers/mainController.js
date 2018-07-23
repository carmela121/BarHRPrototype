	

	barHrApp.controller('mainController', function($scope) {

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
			   $scope.search=function(){
		  
        $scope.searchQuery = angular.copy($scope.searchText);
        $scope.policiesToFilter=$scope.policies;
        $scope.searchResult=true;
    }



    $scope.vis = {'visibility': 'hidden'};

    $scope.searching = function() {
    	if($scope.searchText.length > 0) {
    		$scope.vis = {'visibility': 'visible'};  		
    	} else {
    		$scope.vis={'visibility': 'hidden'};
    	}
    }


		$scope.message = 'Everyone come and see how good I look!';
	});

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

		   $scope.$parent.search();



	});



    		

           




