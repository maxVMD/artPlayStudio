(function(){
	'use strict';

	angular.module('artPlayApp').controller("articlesCtrl", articlesCtrl);

	articlesCtrl.$inject = ['$scope', '$uibModal', 'articlesService', '$uibModalStack'];

	function articlesCtrl($scope, $uibModal, articlesService, $uibModalStack) {

		var vm = this;

		getTeamAll();

		vm.articles = [];

		vm.openModalEvents = openModalEvents;
		vm.fullsizeWindow = fullsizeWindow;

		function openModalEvents(id , images,  date, title,  text) {

			$scope.id = id-1;

			$scope.date = date;

			$scope.title = title; 

			$scope.text = text;

			$scope.images = images;

			$scope.cancel = function(){
				
				$uibModalStack.dismissAll();
						
			}

			console.log($scope.images);

		   	setTimeout(function(){ 
				$('#article-slider').owlCarousel({
		            loop:true,    
		            items:4,
		            nav: false,
		             autoHeight:true,
		            autoplayHoverPause: true,
		            dots: true,
		            responsive:{ 
	                    0:{
	                        items:1
	                    },
	                    569:{
	                        items:2
	                    },
	                    600:{
	                        items:3
	                    },
	                    767:{
	                        items:4
	                    }
	                },
		            navText:["",""],
		            autoplay: true,
		        });  

			}, 350);

			var modalInstance = $uibModal.open({

	            animation: true,

	            templateUrl: 'app/views/fullSizeArticleModal.html',

	            controller: 'articlesCtrl',

	            controllerAs: 'vm',

	            scope: $scope,

	            size: 'mySize'

	        });

		};


		function fullsizeWindow ($index, images){

			$scope.num = $index;

			$scope.listImages = images;

			var modalInstance = $uibModal.open({

	            animation: true,

	            templateUrl: 'app/views/fullSizeArticlePictureModal.html',

	            controller: 'articlesCtrl',

	            controllerAs: 'vm',

	            scope: $scope,

	            size: 'fullSizePic'

	        });

	        setTimeout(function(){ 
				$('#article-slider-modal').owlCarousel({
		            loop:true,    
		            items:1,
		            nav: true,
		            dots: false,
		            navText:["<div class=\"prev\"></div>","<div class=\"next\"></div>"],
		        });  

			}, 350);

		}




		function getTeamAll(){

			return articlesService.getAllArticles().then(function(res){

				vm.articles = res.articles;

			}, function(error){

				console.log(error);

			});

		};




	}


})()

