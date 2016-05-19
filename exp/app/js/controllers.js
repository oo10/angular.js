var appCtrls = angular.module('appCtrls', []);

appCtrls.controller('HelloCtrl', ['$scope',
    function($scope) {
        $scope.greeting = {
            text: 'Hello'
        };
        $scope.boxs = [{
            title: '一食堂'
        },{
            title: '二食堂'
        },{
            title: '3食堂'
        }];

        $scope.pageClass="hello";

        $scope.alert = function(){
            $scope.showDialog = "inactive";
        };

        $scope.del = function(idx){
            $scope.boxs.splice(idx,1);
        };

        $scope.add = function() {
            $scope.boxs.push({"title" : $scope.addtitle, "Label": "Item " +     $scope.boxs.length})
        };

        //$scope.alert = function () {
        //    $modal.open({
        //        templateUrl: 'tpls/index.html',
        //        scope: $scope,
        //        controller: function ($scope) {
        //            $scope.ok = function (index) {
        //                $scope.itemsList.items.splice(index, 1)
        //                $scope.$dismiss();
        //            }
        //            $scope.cancel = function () {
        //                $scope.$dismiss()
        //            }
        //        }
        //    })
        //}

    }

]);

appCtrls.controller('BookListCtrl', ['$scope',
    function($scope) {
        $scope.books = [{
            title: "《Ext江湖》",
            author: "大漠穷秋"
        }, {
            title: "《ActionScript游戏设计基础（第二版）》",
            author: "大漠穷秋"
        }, {
            title: "《用AngularJS开发下一代WEB应用》",
            author: "大漠穷秋"
        }];
        $scope.pageClass="list";
    }
]);

appCtrls.controller('IndexCtrl', ['$scope',
    function($scope) {
        $scope.pageClass="index";
    }
]);

appCtrls.controller("mymymy", function($scope,$location) {
    var bgUrl = [
        'http://wanteat.coding.io/img/test1.jpg',
        'http://wanteat.coding.io/img/test3.jpg',
        'http://wanteat.coding.io/img/test4.jpg',
        'http://wanteat.coding.io/img/test5.jpg',
        'http://wanteat.coding.io/img/test7.jpg',
        'http://wanteat.coding.io/img/test8.jpg',
        'http://wanteat.coding.io/img/test10.jpg'
    ];
    $scope.myObj = {
        "background-image": "url('" + bgUrl[Math.floor((Math.random()*bgUrl.length))] + "')",
    };
    $scope.goBtn = function () {
        //console.log(window.location.href);
        $location.path('/hello');
    }

});



/**
 * 这里接着往下写，如果控制器的数量非常多，需要分给多个开发者，可以借助于grunt来合并代码
 */
