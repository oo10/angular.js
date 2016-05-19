var app = angular.module('app', [
    'ngRoute', 'ngAnimate', 'appCtrls','appDirectives','bookStoreFilters','bookStoreServices'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/hello', {
        templateUrl: 'tpls/hello.html',
        controller: 'HelloCtrl'
    }).when('/list', {
        templateUrl: 'tpls/bookList.html',
        controller: 'BookListCtrl'
    }).when('/', {
        templateUrl: 'tpls/index.html',
        controller: 'IndexCtrl'
    }).otherwise({
        redirectTo: '/',
    })
});

//bookStoreApp.run(['$rootScope', '$location', function($rootScope, $location) {
//    $rootScope.$on('$routeChangeSuccess', function(newV) {
//        $rootScope.path = $location.path();
//        console.log($location.path());
//        console.log($rootScope.path);
//        console.log($rootScope.path=='/');
//    });
//}]);
