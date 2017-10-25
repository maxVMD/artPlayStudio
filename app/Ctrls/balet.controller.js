
(function(){

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


        function changeIdcat(id){
            $rootScope.cat_id = id-1;
        };

       function openMenu () {
        
           vm.show = !vm.show;
        };

        


        function getArtBaletbyId(id){
            return gymnService.getAllBalet(id).then(
                function(res){
                    vm.oldArticle = res.old_arcticles;
                    vm.content = vm.oldArticle[0].text;
                }, 
                function(res){
                    console.error(res);
            });
        };


        function getArtBalet(){
            return gymnService.getAllBalet(13).then(
                function(res){
                    vm.oldArticle = res.old_arcticles;
                    vm.content = vm.oldArticle[0].text; 
                }, 
                function(res){
                    console.error(res);
            });
        };



    }




})()
