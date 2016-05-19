var appCtrls = angular.module('appCtrls', []);

appCtrls.controller('HelloCtrl', ['$scope','$http',
    function($scope) {
        $scope.boxs = [{
            title: '去食堂吃饭'
        }, {
            title: '吃外卖'
        }, {
            title: '去吃黄焖鸡'
        }];
        var names = [{
            title: '去食堂吃饭111'
        }, {
            title: '吃外卖'
        }, {
            title: '去吃黄焖鸡'
        }];
        localStorage['names'] = JSON.stringify(names);
        var namess = JSON.parse(localStorage['names']);
        console.log(namess);

        var randomNumber = Math.floor((Math.random() * $scope.boxs.length));
        var randomNumber2 = Math.floor((Math.random() * localStorage.length));
        //$scope.boxTitleRodon = $scope.boxs[randomNumber].title;    //result
        $scope.titleRodon = "吃外卖";//localStorage.getItem("test" + randomNumber2);    //result
        console.log($scope.boxs);
        console.log("aa+" + randomNumber2);
        console.log("bb+" + localStorage.getItem("test" + randomNumber2));

        //$http.get('http://localhost:63342/nhpop.cn/angular.js/exp/app/boxs.json').success(function(data){
        //    $scope.boxs = data.boxs;
        //    console.log(data.boxs);
        //}).error(function(){
        //    alert("an unexpected error ocurred!");
        //});
        localStorage.setItem("test1", "去食堂吃饭");
        localStorage.setItem("test2", "吃外卖");
        localStorage.setItem("test3", "去吃黄焖鸡");
        var test = localStorage.test1;
        console.log(test);


        $scope.pageClass = "hello";

        $scope.alert = function () {
            $scope.showDialog = "translateY(-50%) scale(1)";
        };

        $scope.del = function (idx) {
            $scope.boxs.splice(idx, 1);
            localStorage.removeItem("test" + (idx + 1));
        };
        var i = 3;
        $scope.add = function (idx) {
            //var boxs = {
            //    "title": $scope.addtitle
            //};
            //console.log($scope.addtitle);
            //$http.post('http://localhost:63342/nhpop.cn/angular.js/exp/app/boxs.json', boxs).success(function(){
            //    $scope.msg = 'Data saved';
            //}).error(function(data) {
            //    alert("failure message:" + JSON.stringify({data:data}));
            //});
            i++;
            localStorage.setItem("test" + i, $scope.addtitle);
            $scope.boxs.push({"title": $scope.addtitle});
            console.log($scope.boxs);
            console.log(i + ":" + localStorage.getItem("test" + (i)));
            for (var a = 1, len = localStorage.length; a < len + 1; a++) {
                var getVal = localStorage.getItem("test" + (a));
                console.log(getVal);
            }

            $scope.showDialog = "translateY(-50%) scale(0)";
        };

        $scope.cancel = function () {
            $scope.showDialog = "translateY(-50%) scale(0)";
        };


        $scope.refresh = function () {
            console.log($scope.boxs);
            //$scope.boxTitleRodon = $scope.boxs[0].title;    //result
            var randomNumber2 = Math.ceil((Math.random() * (localStorage.length-1)));
            var result = localStorage.getItem("test" + randomNumber2);
            $scope.boxTitleRodon = result;   //result
            console.log(result);
        }
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
