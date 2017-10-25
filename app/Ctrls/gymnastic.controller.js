
(function(){

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


        function changeIdcat(id){
            $rootScope.cat_id = id-1;
        };

       function openMenu () {
            console.log("click");
           vm.show = !vm.show;
        };

        function changeIdcat(id){
            $rootScope.cat_id = id-1;
        };

       function openMenu () {
            console.log("click");
           vm.show = !vm.show;
        };


        function getArtGym (id){
            return gymnService.getAll(id).then(
                function(res){
                    vm.kidArticle = res.kid_arcticles;
                    vm.content = vm.kidArticle[0].text;
                }, 
                 function(res){
                    console.error(res);
            });
        };
     

        function getArt(){
            return gymnService.getAll(18).then(
                function(res){
                    vm.kidArticle = res.kid_arcticles; 
                    vm.content = vm.kidArticle[0].text;
                    
                }, 
                function(res){
                    console.error(res);
            });
        };



    }




})()
