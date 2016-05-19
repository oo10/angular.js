var bookStoreDirectives = angular.module('bookStoreDirectives', []);

bookStoreDirectives.directive('pBtn', function() {
        return {
            restrict: "AEC",
            template : "<p>选择困难症患者福利</p>"
        };
});

bookStoreDirectives.directive('menuBtn', function() {
        return {
                restrict: "AEC",
                template : "<p>选择困难症患者福利</p>",
        };
});


bookStoreDirectives.directive('bookStoreDirective_1', ['$scope',
    function($scope) {
        return {
            restrict: "AEC",
            template : "<p>选择困难症患者福利</p>",
        };
    }
]);

//bookStoreDirectives.directive("vgGo", function () {
//        return {
//                restrict: "A", link: function () {
//                                return window.location.href = d.vgGo
//                }
//        }
//});