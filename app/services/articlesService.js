(function(){
	'use strict';
	 angular.module('artPlayApp').factory('articlesService', function ($http) {
		
		return {
			getAllArticles: function () {
				return $http.get('actions.php?t=articles').then(
				function (res) {
					console.log(res.data);
					return res.data;
				}, function (res) {
					console.error(res);
					return res.data;
				});

			}

		};
	});

	
})()

