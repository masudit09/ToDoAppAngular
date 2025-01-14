angular.module('ToDoApp')
    // Creating the Angular Controller
    .controller('NavController', function ($http, $scope, AuthService, $state, $rootScope) {
        $scope.user = AuthService.getUser();
        $scope.$on('LoginSuccessful', function () {
            $scope.user = AuthService.getUser();
        });
        $scope.$on('LogoutSuccessful', function () {
            $scope.user = null;
        });
        $scope.logout = function () {
            AuthService.setUser(null);
            $rootScope.$broadcast('LogoutSuccessful');
            $state.go('login');
        };
    });