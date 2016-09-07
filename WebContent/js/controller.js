'use strict';

/**
 * @ngdoc function
 * @name moviesappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moviesappApp
 */
angular.module('moviesappApp')
  .controller('AllmoviesController',['$scope','$window','$stateParams','Movies', function ($scope,$window,$stateParams,Movies) {
    /*$scope.movies=[
	{moviename:'movie1'},
	{moviename:'movie2'}
	];*/
	$scope.movies=Movies.query(function(result){
    console.log(result);
	$scope.movies = result;
	
    console.log('Total movies received', result.length);
	}, function(result){
    console.log('Error while fetching users list');
	
	});
	
	$scope.deleteMovie=function(movie){
	
		movie.$delete(function(){
			$window.location.href='';
		});
		
	};
	
	//$scope.movie=Movies.get({id:$stateParams.id});
	//$scope.movies={title:'MK'};
	/*Movies.getMovies().query(function(response){
		$scope.movies=response;
	});
	*/
	
	
  }])
  .controller('ViewMovieController',['$scope','$window','$stateParams','Movies', function ($scope,$window,$stateParams,Movies) {
		$scope.movie=Movies.get({id:$stateParams.id});
   }])
  /*.controller('ViewMovieController',['scope','$stateParams','$state','Movies',function($scope,$stateParams,$state,Movies){
		$scope.movie=Movies.get({id:$stateParams.id});
  }])*/
  .controller('AddNewMovieController',['$scope','$state','Movies','AddMovies','$http',function($scope,$state,Movies,AddMovies,$http){
		/*$scope.movies=Movies.query(function(result){
			console.log(result);
			$scope.movies = result;
			
			console.log('Total movies received', result.length);
		}*/
		
		$scope.movie= new Movies();
		//var data=$scope.movie;
		$scope.addMovie=function(){
			
			console.log(angular.toJson($scope.movie));
			//$scope.movie=angular.toJson($scope.movie);
			//$scope.movie.update(function(){
			/*$scope.movie.$update(function(){
			console.log("test0");
			$state.go('app');
			});
			*/
			
			AddMovies.addMovies().save($scope.movie).$promise.then(
			function(response){
			console.log(response);
			$state.go('app');
			},
			function (response) {
			console.log("Error: " + response.status + " " + response.statusText);
			});
			
			/*
			console.log($scope.movie);
			var data={title:"movie786"};
			$http.post('http://localhost:8082/Movies/webapi/movies',data)
            .success(function (response) {
				alert(response);
				$state.go('app');
            })
            .error(function (data) {
				alert("error");
            });
			*/
			/*
			if ($scope.movie == "" || $scope.movie == "") {
                    alert("Insufficient Data! Please provide values for movie ");
                }
                else {
			
			$http({
                        method: 'POST',
                        url: 'http://localhost:8082/Movies/webapi/movies',
                        data: $scope.movie
                    }).
                            success(function (data, status, headers, config) {
                                // Into database.. ??

                                $state.go('app');
                            }).
                            error(function (data, status, headers, config) {
                                if (status == 400) {
                                    alert('404');
                                } else {
                                    alert('Unexpected server error.');
                                }

                            });
					}
			*/
		};
			
					/*

			else {
				feedbackFactory.sendFeedback().save($scope.feedback).$promise.then(
					function (response) {
						console.log('saveOK'+ response);
					},
					function (response) {
						console.log("Error: " + response.status + " " + response.statusText);
					}
				);
				$scope.invalidChannelSelection = false;
				$scope.feedback = {mychannel: "", firstName: "", lastName: "", agree: false, email: ""};
				$scope.feedback.mychannel = "";
				$scope.feedbackForm.$setPristine();
			}
		*/
		
  
  }])
  
  .controller('EditMovieController',['$scope','$stateParams','$state','Movies','AddMovies',function($scope,$stateParams,$state,Movies,AddMovies){
	
		$scope.EditMovie=function(){
			/*$scope.movie.$update(function(){
				$state.go('app');
				});
			*/
			AddMovies.addMovies().save($scope.movie).$promise.then(
					function(response){
					console.log(response);
					$state.go('app');
					},
					function (response) {
					console.log("Error: " + response.status + " " + response.statusText);
					});
		};
		$scope.loadMovie=function(){
			$scope.movie=Movies.get({id:$stateParams.id});
		};
		$scope.loadMovie();
  }]);
