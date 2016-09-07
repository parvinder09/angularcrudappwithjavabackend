'use strict';
angular.module('moviesappApp')
	.factory('Movies',['$resource', function ($resource) {
		console.log("service");
		//'http://localhost:3000/movies/:id
	
		//http://localhost:8082/Movies/webapi/movies/:id
		//http://movieapp-sitepointdemos.rhcloud.com/api/movies/:id
		
	return $resource('http://localhost:8082/Movies/webapi/movies/:id',{id:'@id'}, {
    update: {
      method: 'POST'
    }
  })
  }])
  .factory('AddMovies',['$resource',function($resource){
  var movies={};
  movies.addMovies=function(){
  return $resource('http://localhost:8082/Movies/webapi/movies/:id',null, {
    'update': {
      method: 'POST'
    }
})
};
return movies;
}])
;
  //http://movieapp-sitepointdemos.rhcloud.com/api/movies/   
  /*var movies={};
  movies.getMovies= function () {
			return $resource('http://movieapp-sitepointdemos.rhcloud.com/api/movies/', {}, {'query': {method: 'GET'}});
		};
	return movies;*/
	

	/*.factory('feedbackFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
		var feedfac = {};

		feedfac.sendFeedback = function () {
			return $resource(baseURL + "feedback/:id", null, {'update': {method: 'POST'}});
		};

		return feedfac;
	}]);*/