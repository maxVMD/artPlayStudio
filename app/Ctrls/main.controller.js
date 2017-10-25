(function(){

	'use strict';

	angular.module('artPlayApp').controller("mainCtrl", mainCtrl);

	mainCtrl.$inject = ['$scope', 'categorysService', '$rootScope', 'mainService'];

	function mainCtrl($scope, categorysService, $rootScope, mainService) {

	 	var vm = this;

		getCategories();

		vm.showBtn = true;

		vm.categorys = [];

		vm.submitForm = submitForm;

		function submitForm(name, email, phone, category){

			if($scope.recordForm.$valid){
				console.log(name, email, document.recordForm.phone.value, category.id);
				return mainService.sendForm(name, email, document.recordForm.phone.value, category.id).then(function(res){	

					if(res == '"success"'){
						console.log(res);
						vm.succes = true;
						vm.showBtn = false;
						vm.error = null;
					}
				},function(error){
					
						vm.error = error;
					
					console.error(error);
				});
				
			}
			else{

			}	
	    };

	    function getCategories(){
				return categorysService.getAllCatgorys().then(function(res){
				vm.categorys = res.arr;
				$rootScope.cat_id = 1;
				
			});


	    };



	}

})()


