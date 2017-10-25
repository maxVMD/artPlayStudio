
(function(){

    'use strict';
    angular.module('artPlayApp').controller("teamCtrl", teamCtrl);

    teamCtrl.$inject = ['$scope', 'teamService', '$uibModal', '$uibModalStack'];

    function teamCtrl($scope, teamService, $uibModal, $uibModalStack) {

        var vm = this;


        getTeam();

        vm.openModalTeam = openModalTeam;     
        vm.team = [];





        function getTeam(){

            return teamService.getAllTeam().then(function(res){

                vm.team = res.team;

                console.log(vm.team);

            }, function(error){

                console.log(error);

            });

        };



        function openModalTeam($index,img, name, prof, skill, text) {

            $scope.img = img;

            $scope.name = name;

            $scope.prof = prof; 

            $scope.skill = skill;

            $scope.text = text;

            $scope.cancel = function(){
                
                $uibModalStack.dismissAll();
                        
            }

            

            var modalInstance = $uibModal.open({

                animation: true,

                templateUrl: 'app/views/fullSizeTeamModal.html',

                controller: 'teamCtrl',

                scope: $scope,

                size: 'mySize'

            });

        };


    }




})()
