var app = angular.module("app",[]).
controller('final', ['$scope', function($scope) {
      $scope.submit = function() {
        if ($scope.graphType) {
          alert($scope.graphType);
        }
      };
      }
    ]);


app.directive('graph', function () {
    return {
        templateUrl: 'View/graph.html',
        restrict:'E'
    }
});