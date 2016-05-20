var appCtrls = angular.module('appCtrls', []);
var bgUrl = [
    'http://wanteat.coding.io/img/test1.jpg',
    'http://wanteat.coding.io/img/test3.jpg',
    'http://wanteat.coding.io/img/test4.jpg',
    'http://wanteat.coding.io/img/test5.jpg',
    'http://wanteat.coding.io/img/test7.jpg',
    'http://wanteat.coding.io/img/test8.jpg',
    'http://wanteat.coding.io/img/test10.jpg'
];
var localData = JSON.stringify([{
    title: '默认选项:海鲜大餐'
}]);

if(localData != localStorage['names']){
    if(localStorage['names']==undefined){
        localStorage['names'] = localData;
    }
}
console.log(localStorage['names']==undefined);

appCtrls.controller('HelloCtrl', ['$scope',
    function ($scope) {
        $scope.pageClass = "hello";    //添加page class

        if(localData != localStorage['names']){
            if(localStorage['names']==undefined){
                localStorage['names'] = localData;
            }
        }

        $scope.boxs = JSON.parse(localStorage['names']);
        var names = $scope.boxs;
        //localStorage.setItem("test1", "去食堂吃饭");
        //localStorage.setItem("test2", "吃外卖");
        //localStorage.setItem("test3", "去吃黄焖鸡");

        localStorage['names'] = JSON.stringify(names);
        $scope.boxs = JSON.parse(localStorage['names']);


        //从JSON文件中读数据
        //$http.get('http://localhost:63342/nhpop.cn/angular.js/exp/app/boxs.json').success(function(data){
        //    $scope.boxs = data.boxs;
        //    console.log(data.boxs);
        //}).error(function(){
        //    alert("an unexpected error ocurred!");
        //});

        $scope.alert = function () {
            $scope.showDialog = "translateY(-50%) scale(1)";
        };

        $scope.del = function (idx) {
            $scope.boxs.splice(idx, 1);
            localStorage.removeItem("test" + (idx + 1));
            localStorage['names'] = JSON.stringify($scope.boxs);
        };

        $scope.add = function () {
            $scope.boxs.push({"title": $scope.addtitle});
            localStorage['names'] = JSON.stringify($scope.boxs);
            $scope.showDialog = "translateY(-50%) scale(0)";
            console.log("boxs" + $scope.boxs);
        };

        $scope.cancel = function () {
            $scope.showDialog = "translateY(-50%) scale(0)";
        };
    }
]);


appCtrls.controller('IndexCtrl', ['$scope',
    function ($scope) {
        $scope.pageClass = "index";
    }
]);

appCtrls.controller('ListCtrl', ['$scope',
    function ($scope) {
        $scope.pageClass = "list";
        var resultBoxs = JSON.parse(localStorage['names']);
        var randomNumber = Math.floor((Math.random() * (resultBoxs.length)));
        if(resultBoxs.length==0){
            $scope.boxTitleRodon = "至少添加一个选项,你可以返回添加";
            $scope.changeBg = {
                "background-image": "url('" + bgUrl[Math.floor((Math.random() * bgUrl.length))] + "')"
            };
        }
        else if(resultBoxs.length==1&&(resultBoxs[0].title=="默认选项:海鲜大餐")){
            $scope.boxTitleRodon = "只能是[海鲜大餐]了,你可以返回编辑";
            $scope.changeBg = {
                "background-image": "url('" + bgUrl[Math.floor((Math.random() * bgUrl.length))] + "')"
            };
        }
        else if(resultBoxs.length==1&&(resultBoxs[0].title!="默认选项:海鲜大餐")){
            $scope.boxTitleRodon = "就一个选项只能是"+resultBoxs[0].title+"了";
            $scope.changeBg = {
                "background-image": "url('" + bgUrl[Math.floor((Math.random() * bgUrl.length))] + "')"
            };
        }
        else
        {
            $scope.boxTitleRodon = resultBoxs[randomNumber].title;   //result
            $scope.changeBg = {
                "background-image": "url('" + bgUrl[Math.floor((Math.random() * bgUrl.length))] + "')"
            };
            $scope.refresh = function () {
                console.log(resultBoxs);
                var randomNumber2 = Math.floor((Math.random() * (resultBoxs.length)));
                $scope.boxTitleRodon = resultBoxs[randomNumber2].title;   //result
                $scope.changeBg = {
                    "background-image": "url('" + bgUrl[Math.floor((Math.random() * bgUrl.length))] + "')"
                };
            }
        }
    }
]);

appCtrls.controller("mymymy", function ($scope, $location) {

    $scope.myObj = {
        "background-image": "url('" + bgUrl[Math.floor((Math.random() * bgUrl.length))] + "')",
    };
    $scope.goBtn = function () {
        //console.log(window.location.href);
        $location.path('/hello');
    }
});


/**
 * 这里接着往下写，如果控制器的数量非常多，需要分给多个开发者，可以借助于grunt来合并代码
 */
