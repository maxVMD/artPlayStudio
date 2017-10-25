(function() {
	
	'use strict';
	angular.module('artPlayApp').controller("atmosnCtrl", atmosnCtrl);

	atmosnCtrl.$inject = ['$scope', 'imagesService', '$uibModal'];

	function atmosnCtrl($scope, imagesService, $uibModal) {

		var vm = this;

		getImgs();
		
		vm.atmoImages = [];
		vm.fullsize = fullsize;

		function fullsize($index) {

			
			$scope.index = $index;
			
		
			var modalInstance = $uibModal.open({

	            animation: true,

	            templateUrl: 'app/views/fullSizePictureModal.html',

	            controller: 'atmosnCtrl',

	            controllerAs: 'vm',

	            scope: $scope,

	            size: 'fullSizePic'

	        });


	  		setTimeout(function(){ 
			    	$('#atmo-modal-slider').owlCarousel({
				      loop:true,    
				      items:1,
				      nav:true,
				      dots: false,
				      navText:["<div class=\"prev\"></div>","<div class=\"next\"></div>"],
				      autoplay: false,
				  }); 

			    },350);

	  		
		};

		

		function getImgs(){

			return imagesService.getAtmosImages().then(function(res){

				vm.atmoImages = res;

			}, function(error){

				console.log(error);

			});



		};


	}

})()