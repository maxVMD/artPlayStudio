/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var app = __webpack_require__(1);
var main = __webpack_require__(2);
var resize = __webpack_require__(3);

var articles_controller = __webpack_require__(4);
var gymnastic_controller = __webpack_require__(5);
var mission_controller = __webpack_require__(6);
var baletCtrl = __webpack_require__(7);
var teamCtrl = __webpack_require__(8);
var atmosn_controller = __webpack_require__(9);
var main_controller = __webpack_require__(10);

var mainService = __webpack_require__(11);
var gymnService = __webpack_require__(12);
var imagesService = __webpack_require__(13);
var teamService = __webpack_require__(14);
var articlesService = __webpack_require__(15);
var categorysService = __webpack_require__(16);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('artPlayApp', ['ui.bootstrap', 'ngTouch', 'ngAnimate']);

angular.module('artPlayApp').config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

$(function () {

  var height = $(window).height();
  $(".main").css("height", height);
  $(window).resize(function () {
    var height = $(window).height();
    $(".main").css("height", height);
  });

  $(".girl1").animate({ "opacity": "1", "margin-top": "0" }, 1500);
  $(".jacson").animate({ "opacity": "1", "margin-top": "0" }, 2000);

  $("#block1").animate({ "opacity": "1", "margin-top": "0" }, 600, function () {
    $("#block2").animate({ "opacity": "1", "margin-top": "0" }, 600, function () {
      $("#block3").animate({ "opacity": "1", "margin-top": "0" }, 600);
    });
  });

  function carouselsInit() {

    $('#mission').owlCarousel({
      loop: true,
      items: 1,
      nav: true,
      autoplayHoverPause: true,
      dots: false,
      navText: ["", ""],
      autoplay: true
    });

    $('.mission-thubs').owlCarousel({
      loop: true,
      items: 5,
      nav: false,
      autoplayHoverPause: true,
      dots: false,
      navText: ["", ""],
      autoplay: true
    });

    $('#slider').owlCarousel({
      loop: true,
      items: 4,
      nav: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        569: {
          items: 2
        },
        600: {
          items: 3
        },
        767: {
          items: 4
        },
        1200: {
          items: 5
        }
      },
      dots: false,
      navText: ["", ""],
      autoplay: true

    });

    $('#slider-team').owlCarousel({
      loop: true,
      items: 4,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        569: {
          items: 2
        },
        600: {
          items: 3
        },
        767: {
          items: 4
        }
      },
      nav: true,
      dots: false,
      navText: ["", ""],
      autoplay: true
    });
  }

  window.setTimeout(function () {
    carouselsInit();
  }, 350);

  var missionOwn = $('#mission');

  var owl = $('.mission-thubs');

  owl.on('changed.owl.carousel', function (event) {
    missionOwn.trigger('next.owl.carousel');
  });

  $(".teacher").hover(function () {
    $(this).children("#card").flip('toggle');
  });

  $(".teacher").each(function () {
    $(this).children("#card").flip({ trigger: 'manual' });
  });

  MaskedInput({
    elm: document.getElementById('phone'), // select only by id
    format: '(__) ___-__-__',
    separator: ' ()-'
  });
});

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map('map', {
    center: [53.9395787, 27.4765814],
    zoom: 14
  }, {
    searchControlProvider: 'yandex#search'
  });
  var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Наш адрес',
    balloonContent: ' г. Минск, пр-т Победителей 106'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/pin.png',
    iconImageSize: [61, 52]
  });
  myMap.geoObjects.add(myPlacemark);
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

(function ($) {
  function equalizeHeights(selector) {
    var heights = new Array();

    // Loop to get all element heights
    $(selector).each(function () {

      // Need to let sizes be whatever they want so no overflow on resize
      $(this).css('min-height', '0');
      $(this).css('max-height', 'none');
      $(this).css('height', 'auto');

      // Then add size (no units) to array
      heights.push($(this).height());
    });

    // Find max height of all elements
    var max = Math.max.apply(Math, heights);

    // Set all heights to max height
    $(selector).each(function () {
      $(this).css('height', max + 'px');
    });
  }

  $(window).on('load', function () {
    console.log('loaded');
    setTimeout(function () {
      equalizeHeights('.specialize');

      equalizeHeights('.t_fio');
    }, 1000);

    // Fix heights on page load


    // Fix heights on window resize
    var iv = null;
    $(window).on('resize', function () {
      console.log('resize');
      if (iv !== null) {
        window.clearTimeout(iv);
      }

      // Needs to be a timeout function so it doesn't fire every ms of resize
      iv = setTimeout(function () {
        equalizeHeights('.specialize');
        equalizeHeights('.t_fio');
      }, 200);
    });
  });
})(jQuery);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

(function () {
	'use strict';

	angular.module('artPlayApp').controller("articlesCtrl", articlesCtrl);

	articlesCtrl.$inject = ['$scope', '$uibModal', 'articlesService', '$uibModalStack'];

	function articlesCtrl($scope, $uibModal, articlesService, $uibModalStack) {

		var vm = this;

		getTeamAll();

		vm.articles = [];

		vm.openModalEvents = openModalEvents;
		vm.fullsizeWindow = fullsizeWindow;

		function openModalEvents(id, images, date, title, text) {

			$scope.id = id - 1;

			$scope.date = date;

			$scope.title = title;

			$scope.text = text;

			$scope.images = images;

			$scope.cancel = function () {

				$uibModalStack.dismissAll();
			};

			console.log($scope.images);

			setTimeout(function () {
				$('#article-slider').owlCarousel({
					loop: true,
					items: 4,
					nav: false,
					autoHeight: true,
					autoplayHoverPause: true,
					dots: true,
					responsive: {
						0: {
							items: 1
						},
						569: {
							items: 2
						},
						600: {
							items: 3
						},
						767: {
							items: 4
						}
					},
					navText: ["", ""],
					autoplay: true
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

		function fullsizeWindow($index, images) {

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

			setTimeout(function () {
				$('#article-slider-modal').owlCarousel({
					loop: true,
					items: 1,
					nav: true,
					dots: false,
					navText: ["<div class=\"prev\"></div>", "<div class=\"next\"></div>"]
				});
			}, 350);
		}

		function getTeamAll() {

			return articlesService.getAllArticles().then(function (res) {

				vm.articles = res.articles;
			}, function (error) {

				console.log(error);
			});
		};
	}
})();

/***/ }),
/* 5 */
/***/ (function(module, exports) {


(function () {

    'use strict';

    angular.module('artPlayApp').controller("gymnasticСontroller", gymnasticСontroller);

    gymnasticСontroller.$inject = ['$scope', 'gymnService', '$rootScope', '$sce'];

    function gymnasticСontroller($scope, gymnService, $rootScope, $sce) {
        var vm = this;

        getArt();

        vm.sce = $sce;
        vm.show = false;
        vm.kidArticle = [];
        vm.changeIdcat = changeIdcat;
        vm.openMenu = openMenu;
        vm.getArtGym = getArtGym;
        vm.content;

        function changeIdcat(id) {
            $rootScope.cat_id = id - 1;
        };

        function openMenu() {
            console.log("click");
            vm.show = !vm.show;
        };

        function changeIdcat(id) {
            $rootScope.cat_id = id - 1;
        };

        function openMenu() {
            console.log("click");
            vm.show = !vm.show;
        };

        function getArtGym(id) {
            return gymnService.getAll(id).then(function (res) {
                vm.kidArticle = res.kid_arcticles;
                vm.content = vm.kidArticle[0].text;
            }, function (res) {
                console.error(res);
            });
        };

        function getArt() {
            return gymnService.getAll(18).then(function (res) {
                vm.kidArticle = res.kid_arcticles;
                vm.content = vm.kidArticle[0].text;
            }, function (res) {
                console.error(res);
            });
        };
    }
})();

/***/ }),
/* 6 */
/***/ (function(module, exports) {


(function () {

	'use strict';

	angular.module('artPlayApp').controller("missionCtrl", missionCtrl);

	missionCtrl.$inject = ['$scope', 'imagesService'];

	function missionCtrl($scope, imagesService) {
		var vm = this;
	}
})();

/***/ }),
/* 7 */
/***/ (function(module, exports) {


(function () {

    'use strict';

    angular.module('artPlayApp').controller("baletСontroller", baletСontroller);

    baletСontroller.$inject = ['$scope', 'gymnService', '$rootScope', '$sce'];

    function baletСontroller($scope, gymnService, $rootScope, $sce) {
        var vm = this;

        getArtBalet();

        vm.oldArticle = [];
        vm.sce = $sce;
        vm.show = false;
        vm.changeIdcat = changeIdcat;
        vm.openMenu = openMenu;
        vm.getArtBaletbyId = getArtBaletbyId;

        vm.content;

        function changeIdcat(id) {
            $rootScope.cat_id = id - 1;
        };

        function openMenu() {

            vm.show = !vm.show;
        };

        function getArtBaletbyId(id) {
            return gymnService.getAllBalet(id).then(function (res) {
                vm.oldArticle = res.old_arcticles;
                vm.content = vm.oldArticle[0].text;
            }, function (res) {
                console.error(res);
            });
        };

        function getArtBalet() {
            return gymnService.getAllBalet(13).then(function (res) {
                vm.oldArticle = res.old_arcticles;
                vm.content = vm.oldArticle[0].text;
            }, function (res) {
                console.error(res);
            });
        };
    }
})();

/***/ }),
/* 8 */
/***/ (function(module, exports) {


(function () {

            'use strict';

            angular.module('artPlayApp').controller("teamCtrl", teamCtrl);

            teamCtrl.$inject = ['$scope', 'teamService', '$uibModal', '$uibModalStack'];

            function teamCtrl($scope, teamService, $uibModal, $uibModalStack) {

                        var vm = this;

                        getTeam();

                        vm.openModalTeam = openModalTeam;
                        vm.team = [];

                        function getTeam() {

                                    return teamService.getAllTeam().then(function (res) {

                                                vm.team = res.team;

                                                console.log(vm.team);
                                    }, function (error) {

                                                console.log(error);
                                    });
                        };

                        function openModalTeam($index, img, name, prof, skill, text) {

                                    $scope.img = img;

                                    $scope.name = name;

                                    $scope.prof = prof;

                                    $scope.skill = skill;

                                    $scope.text = text;

                                    $scope.cancel = function () {

                                                $uibModalStack.dismissAll();
                                    };

                                    var modalInstance = $uibModal.open({

                                                animation: true,

                                                templateUrl: 'app/views/fullSizeTeamModal.html',

                                                controller: 'teamCtrl',

                                                scope: $scope,

                                                size: 'mySize'

                                    });
                        };
            }
})();

/***/ }),
/* 9 */
/***/ (function(module, exports) {

(function () {

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

			setTimeout(function () {
				$('#atmo-modal-slider').owlCarousel({
					loop: true,
					items: 1,
					nav: true,
					dots: false,
					navText: ["<div class=\"prev\"></div>", "<div class=\"next\"></div>"],
					autoplay: false
				});
			}, 350);
		};

		function getImgs() {

			return imagesService.getAtmosImages().then(function (res) {

				vm.atmoImages = res;
			}, function (error) {

				console.log(error);
			});
		};
	}
})();

/***/ }),
/* 10 */
/***/ (function(module, exports) {

(function () {

	'use strict';

	angular.module('artPlayApp').controller("mainCtrl", mainCtrl);

	mainCtrl.$inject = ['$scope', 'categorysService', '$rootScope', 'mainService'];

	function mainCtrl($scope, categorysService, $rootScope, mainService) {

		var vm = this;

		getCategories();

		vm.showBtn = true;

		vm.categorys = [];

		vm.submitForm = submitForm;

		function submitForm(name, email, phone, category) {

			if ($scope.recordForm.$valid) {
				console.log(name, email, document.recordForm.phone.value, category.id);
				return mainService.sendForm(name, email, document.recordForm.phone.value, category.id).then(function (res) {

					if (res == '"success"') {
						console.log(res);
						vm.succes = true;
						vm.showBtn = false;
						vm.error = null;
					}
				}, function (error) {

					vm.error = error;

					console.error(error);
				});
			} else {}
		};

		function getCategories() {
			return categorysService.getAllCatgorys().then(function (res) {
				vm.categorys = res.arr;
				$rootScope.cat_id = 1;
			});
		};
	}
})();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 12 */
/***/ (function(module, exports) {

(function () {
	'use strict';

	angular.module('artPlayApp').factory('gymnService', function ($http) {

		return {

			getAll: function (id) {
				return $http.get('http://ap.unisite.by/actions.php?t=k&a=' + id).then(function (res) {
					//console.log(res.data);
					return res.data;
				}, function (res) {
					console.error(res);
					return res.data;
				});
			},

			getAllBalet: function (id) {
				return $http.get('http://ap.unisite.by/actions.php?t=o&a=' + id).then(function (res) {
					//console.log(res.data);
					return res.data;
				}, function (res) {
					console.error(res);
					return res.data;
				});
			}

		};
	});
})();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('artPlayApp').factory('imagesService', function ($http) {

	return {

		getMissionImages: function () {
			return $http.get('http://ap.unisite.by/actions.php?t=mission').then(function (res) {
				console.log(res);
				return res.data;
			}, function (res) {
				console.error(res);
				return res.data;
			});
		},

		getAtmosImages: function () {
			return $http.get('http://ap.unisite.by/actions.php?t=atmos').then(function (res) {
				console.log(res);
				return res.data;
			}, function (res) {
				console.error(res);
				return res.data;
			});
		}

	};
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

(function () {
	'use strict';

	angular.module('artPlayApp').factory('teamService', function ($http) {

		return {

			getAllTeam: function () {
				return $http.get('http://ap.unisite.by/actions.php?t=team').then(function (res) {
					return res.data;
				}, function (res) {
					console.error(res);
					return res.data;
				});
			}

		};
	});
})();

/***/ }),
/* 15 */
/***/ (function(module, exports) {

(function () {
	'use strict';

	angular.module('artPlayApp').factory('articlesService', function ($http) {

		return {
			getAllArticles: function () {
				return $http.get('actions.php?t=articles').then(function (res) {
					console.log(res.data);
					return res.data;
				}, function (res) {
					console.error(res);
					return res.data;
				});
			}

		};
	});
})();

/***/ }),
/* 16 */
/***/ (function(module, exports) {

(function () {

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
})();

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map