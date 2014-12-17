var myApp = angular.module('myApp', [])

.factory('Data', function () {
  return { message: "I'm data from a service" };
})

.controller('WidgetController', function($scope){
    $scope.parentData = [];
    $scope.src = [{"item" : {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}}];
    $scope.parentData.push($scope.src);
    console.log($scope.parentData);
})

//It does not work in 1.3
//function FirstCtrl($scope, Data) {
//  $scope.data = Data;
//}

//It does not work in 1.3
//function SecondCtrl($scope, Data) {
//  $scope.data = Data;
//}

.controller( 'FirstCtrl', function ($scope,Data){
    $scope.src = [{"item":{firstName:"Adam", lastName:"Biro", age:18, eyeColor:"green"}}];
    $scope.data = Data;
    $scope.user = $scope.$parent.parentData;
    console.log('first-log-point',$scope.user);
    $scope.user.push($scope.src);
    console.log('secons-log-point',$scope.user);
})

.directive("firstitem", function(){
	return{
		restrict: "E",
		template: "<div>{{user}}}</div>",//print out the parent data
	}
})

.controller( 'SecondCtrl', function($scope,Data){
    $scope.src = [{"item":{firstName:"Laszlo", lastName:"Biro", age:11, eyeColor:"grey"}}];
    $scope.data = Data;
    $scope.user2 = $scope.$parent.parentData;
    console.log('first-log-point',$scope.user2);
    $scope.user2.push($scope.src);
    console.log('second-log-point',$scope.user2);
})

.directive("seconditem", function(){
	return{
		restrict: "E",
		template: "<div>{{user2}}}</div>",//print out the parent data
	}
})

.controller( 'ThirdController', function($scope,Data){
    $scope.data = Data;
})
