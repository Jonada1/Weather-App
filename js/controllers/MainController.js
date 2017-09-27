app.controller('MainController', ['$scope', 'forecast', function($scope, forecast){
  forecast.success(function(data) {
    $scope.fiveDays = data;
      $scope.Math = window.Math;
  });
}]);
