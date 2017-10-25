(function () {
	'use strict';
 angular.module('artPlayApp').factory('gymnService', function ($http) {
	
	return {

		getAll: function (id) {
			return $http.get('http://ap.unisite.by/actions.php?t=k&a=' +id).then(
			function (res) {
				//console.log(res.data);
				return res.data;
			}, function (res) {
				console.error(res);
				return res.data;
			});

		},

		getAllBalet: function (id) {
			return $http.get('http://ap.unisite.by/actions.php?t=o&a=' +id).then(
			function (res) {
				//console.log(res.data);
				return res.data;
			}, function (res) {
				console.error(res);
				return res.data;
			});

		}

   
	}
	
});
})()