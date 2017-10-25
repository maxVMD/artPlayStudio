'use strict';

 angular.module('artPlayApp').factory('mainService', function ($http) {

	return {

		sendForm: function (name, email, phone, category) {
		
			var data = {
				name: name,
				email: email,
				phone: phone,
				category: category
			};

			return $http({
				method: 'POST',
				url: 'http://ap.unisite.by/mail.php',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'				
				},
				data: data
			}).then(function (res) {	
				console.log(res);		
				return res.data;
			}, function (res) {
				console.error(res);
				reject(new Error("error send form"));
			});

		}     

	};

});