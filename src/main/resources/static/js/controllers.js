var artistControllers = angular.module('artistControllers', ['ngAnimate']);



artistControllers.controller('ListController', ['$scope', '$http' ,function($scope, $http){
$http.get('http://localhost:8080/getAllArtist').success(function(data){
$scope.artists =data;
$scope.artistOrder = 'fullName';
})

}]);

artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams' ,function($scope, $http, $routeParams){
$http.get('http://localhost:8080/getAllArtist').success(function(data){
$scope.artists =data;
$scope.whichItem = $routeParams.itemId;

if($routeParams.itemId > 0){
$scope.prevItem = Number($routeParams.itemId) - 1;
}else{
$scope.prevItem = $scope.artists.length-1;
}

if($routeParams.itemId < $scope.artists.length-1){
$scope.nextItem = Number($routeParams.itemId) + 1;
}else{
$scope.nextItem = 0;
}
})
 
}]);
