var appDirectives = angular.module('appDirectives', []);

appDirectives.directive('pBtn', function() {
        return {
            restrict: "AEC",
            template : "<p>选择困难症患者福利</p>"
        };
});



appDirectives.directive('diHref', ['$location', '$route',
         function($location, $route) {
                return function(scope, element, attrs) {
                    scope.$watch('diHref', function() {
                                 if(attrs.diHref) {
                                         element.attr('href', attrs.diHref);
                                         element.bind('click', function(event) {
                                                 scope.$apply(function(){
                                                         if($location.path() == attrs.diHref) $route.reload();
                                                     });
                                             });
                                     }
                             });
                     }
            }]);
//bookStoreDirectives.directive("vgGo", function () {
//        return {
//                restrict: "A", link: function () {
//                                return window.location.href = d.vgGo
//                }
//        }
//});