var app = angular.module("app", []);
app.controller('ctrl', ['$scope', function ($scope) {

        $scope.user1 = {
            name: 'michael',
            age: 27,
            gender: 'm',
            address: {
                street: 'liverpool street',
                city: 'sydney',
                country: 'Australia'
            },
            friends: [
           "lida", "jack", "brad"
       ]

        }
        $scope.user2 = {
            name: 'Jenny',
            age: 27,
            gender: 'm',
            address: {
                street: 'liverpool street',
                city: 'sydney',
                country: 'Australia'
            },
            friends: [
           "lida", "jack", "brad"
       ]}
        
}
]);


app.directive('userInfoCard', function () {
    return {
        templateUrl: 'View/userInfoCard.html',
        restrict: 'E',
        scope: {
            user: "="
        },
        controller: function ($scope) {
            $scope.collapsed = false;
            $scope.getRank = function (user) {
                user.rank = "99";
            }
            $scope.collapse = function () {
                $scope.collapsed = !$scope.collapsed;
            }
            $scope.removeFriend = function(friend){
                var idx = $scope.user.friends.indexOf(friend);
                if(idx>-1){
                    $scope.user.friends.splice(idx,1);
                }
                
            }

        }
    }
});



app.directive('address', function () {
    return {
        templateUrl: 'View/address.html',
        restrict: 'E',
        scope: true,
        controller: function ($scope) {
            $scope.collapsed = true;
            $scope.expandAddress = function () {
                $scope.collapsed = true;
            }
            $scope.collapseAddress = function () {

                $scope.collapsed = false;
            }

        }
    }
});


app.directive('removeFriend',function(){
    return{
        templateUrl: 'View/removeFriend.html',
        restrict: 'E',
        scope:{
            notifyParent :"&method"
        },
        controller: function($scope){
            $scope.removing = false;
            $scope.cancelRemoving = function(){
                 $scope.removing = false;
            }
            $scope.confirmRemoving = function(){
                 $scope.notifyParent();
            }
            $scope.startRemoving = function(){
                $scope.removing = true;
            }
            
        }
        
    }
})