'use strict';
 angular.module('artPlayApp').factory('imagesService', function ($http) {
	
	return {
		
		getMissionImages: function () {
			return $http.get('http://ap.unisite.by/actions.php?t=mission' ).then(
			function (res) {
				console.log(res);
				return res.data;
			}, function (res) {
				console.error(res);
				return res.data;
			});

		},

		getAtmosImages: function () {
			return $http.get('http://ap.unisite.by/actions.php?t=atmos').then(
			function (res) {
				console.log(res);
				return res.data;
			}, function (res) {
				console.error(res);
				return res.data;
			});

		}

		
		


        
	};
});