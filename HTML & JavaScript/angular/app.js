
var module = angular.module('listApp', []);
var controller = module.controller('listController', initController);
function initController($scope) {
    $scope.items = ['1st item'];
    $scope.addItem = function(){
        if($scope.newItem){
            $scope.items.push($scope.newItem);
            $scope.newItem = undefined;
        }
    }
}