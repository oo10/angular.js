var bookStoreApp = angular.module('bookStoreApp', [
    'ngRoute', 'ngAnimate', 'bookStoreCtrls','bookStoreDirectives','bookStoreFilters','bookStoreServices'
]);

bookStoreApp.config(function($routeProvider) {
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

bookStoreApp.run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on('$routeChangeSuccess', function(newV) {
        $rootScope.path = $location.path();
        console.log($location.path());
        console.log($rootScope.path);
        console.log($rootScope.path=='/');
    });
}]);
