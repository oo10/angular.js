var app = angular.module('app', [
    'ngRoute', 'ngAnimate', 'appCtrls','appDirectives','bookStoreFilters','bookStoreServices'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/list', {
        templateUrl: 'tpls/hello.html',
        controller: 'ListCtrl'
    }).when('/result', {
        templateUrl: 'tpls/bookList.html',
        controller: 'ResultCtrl'
    }).when('/', {
        templateUrl: 'tpls/index.html',
        controller: 'IndexCtrl'
    }).otherwise({
        redirectTo: '/'
    })
});

app.filter('to_trusted', ['$sce', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    };
}]);
//bookStoreApp.run(['$rootScope', '$location', function($rootScope, $location) {
//    $rootScope.$on('$routeChangeSuccess', function(newV) {
//        $rootScope.path = $location.path();
//        console.log($location.path());
//        console.log($rootScope.path);
//        console.log($rootScope.path=='/');
//    });
//}]);