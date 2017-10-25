(function() {
	'use strict';
	 angular.module('artPlayApp').factory('teamService', function ($http) {
		
		return {
			
			getAllTeam: function () {
				return $http.get('http://ap.unisite.by/actions.php?t=team').then(
				function (res) {
					return res.data;
				}, function (res) {
					console.error(res);
					return res.data;
				});

			}
	        
		}
	})
})()