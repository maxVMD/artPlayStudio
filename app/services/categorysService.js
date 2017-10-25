(function(){
	
	'use strict';

	 angular.module('artPlayApp').factory('categorysService', function ($http, $q) {

		return {
			getAllCatgorys: function () {
				return $http({
						method: 'GET',
	  					url: 'http://ap.unisite.by/actions.php?t=arr'
					}).then(fetchResponse, fetchResponse);
					function fetchResponse(response) {
			            return response.data;
			        }
			}

		};

	});

	
})()
