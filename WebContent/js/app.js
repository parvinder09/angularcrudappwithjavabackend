'use strict';

/**
 * @ngdoc overview
 * @name moviesappApp
 * @description
 * # moviesappApp
 *
 * Main module of the application.
 */
 //'ngCookies',
 //'ngSanitize',
 //'ngTouch'
angular
  .module('moviesappApp', [
	'ui.router',
    'ngResource',
    'ngRoute'
  ])
 .config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
      .state('app', {
				url: '/',
				views: {
					'header': {
						templateUrl: 'views/header.html',
					},
					'content': {
						templateUrl: 'views/allmovies.html',
						controller: 'AllmoviesController'
					}
				}

			})
		.state('app.movie-view',{
		url:'movies/:id',
		views:{
			
		'content@':{
			templateUrl:'views/movie-view.html',
			controller:'ViewMovieController'
			}
		}
		})
		.state('app.addnewmovie',{
		url:'movies',
		views:{
		'content@':{
			templateUrl:'views/addnewmovie.html',
			controller:'AddNewMovieController',
			}
		}
		})
		.state('app.editmovie',{
		url:'movies/:id',
		views:{
		'content@':{
			templateUrl:'views/editmovie.html',
			controller:'EditMovieController',
			}
		}
		});
     $urlRouterProvider.otherwise('/');
  });
