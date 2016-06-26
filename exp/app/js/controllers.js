var appCtrls = angular.module('appCtrls', []);

var bgUrl = [
    './imgs/picture1.jpg',
    './imgs/picture2.jpg',
    './imgs/picture3.jpg',
    './imgs/picture4.jpg',
    './imgs/picture5.jpg',
    './imgs/picture6.jpg',
    './imgs/picture7.jpg',
    './imgs/picture8.jpg',
    './imgs/picture9.jpg'
];
var localData = JSON.stringify([{
    title: '默认选项:海鲜大餐',
    bgUrl: bgUrl[Math.floor((Math.random() * bgUrl.length))]
}]);

if(localData != localStorage['names']){
    if(localStorage['names']==undefined){
        localStorage['names'] = localData;
    }
}

appCtrls.controller('ListCtrl', ['$scope',
    function ($scope) {
        $scope.pageClass = "list";    //添加page class
        if(localData != localStorage['names']){
            if(localStorage['names']==undefined){
                localStorage['names'] = localData;
            }
        }
        var str = document.URL.split("#/");
        if(str[1]=="list"){
            document.getElementById('sure-btn').style.display =  'block';
            document.getElementById('back-btn').style.display =  'block';
        }


        $scope.boxs = JSON.parse(localStorage['names']);
        var names = $scope.boxs;
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
            localStorage['names'] = JSON.stringify($scope.boxs);

        };
        var o= ($scope.boxs.length);
        $scope.add = function () {
            if(o==bgUrl.length){
                o=0;
            }
            console.log("o  "+o);
            $scope.boxs.push({"title": $scope.addtitle||'Empty','bgUrl': bgUrl[o]});
            localStorage['names'] = JSON.stringify($scope.boxs);
            $scope.showDialog = "translateY(-50%) scale(0)";
            //console.log("boxs" + $scope.boxs);
            o++;
            $scope.addtitle=''; //将输入的内容置空
        };

        $scope.cancel = function () {
            $scope.showDialog = "translateY(-50%) scale(0)";
        };
    }
]);


appCtrls.controller('IndexCtrl', ['$scope','$location',
    function ($scope,$location) {
        $scope.pageClass = "index";
        var str = document.URL.split("#/");
        if(str[1]=="") {
            document.getElementById('sure-btn').style.display =  'none';
            document.getElementById('back-btn').style.display =  'none';
        }

        $scope.goBtn = function () {
            $location.path('/list');
        };
        $scope.changeBg = {
            "background-image": "url('" + bgUrl[Math.floor((Math.random() * bgUrl.length))] + "')"
        };
    }
]);

appCtrls.controller('ResultCtrl', ['$scope',
    function ($scope) {
        $scope.pageClass = "result";
        var str = document.URL.split("#/");
        if(str[1]=="result"){
            document.getElementById('sure-btn').style.display =  'none';
            document.getElementById('back-btn').style.display =  'block';
        }

        var resultBoxs = JSON.parse(localStorage['names']);
        if(resultBoxs.length==0){
            $scope.boxTitleRodon = "至少添加一个选项，你可以返回添加";
            $scope.changeBg = {
                "background-image": "url('" + bgUrl[Math.floor((Math.random() * bgUrl.length))] + "')"
            };
        }
        else if(resultBoxs.length==1&&(resultBoxs[0].title=="默认选项:海鲜大餐")){
            $scope.boxTitleRodon = "只能是<span style='text-shadow:5px 5px 5px #2C9B80; padding:0 4px'>海鲜大餐</span>了,你可以返回编辑";
            $scope.changeBg = {
                "background-image": "url('" + bgUrl[Math.floor((Math.random() * bgUrl.length))] + "')"
            };
        }
        else if(resultBoxs.length==1&&(resultBoxs[0].title!="默认选项:海鲜大餐")){
            $scope.boxTitleRodon = "就一个选项只能是<span style='text-shadow:5px 5px 5px #2C9B80; padding:0 4px'>"+resultBoxs[0].title+"</span>了";
            $scope.changeBg = {
                "background-image": "url('" + resultBoxs[0].bgUrl + "')"
            };
        }
        else
        {
            var randomNumber = Math.floor((Math.random() * (resultBoxs.length)));
            $scope.boxTitleRodon = "<span style='text-shadow:5px 5px 5px #2C9B80; padding:0 4px'>"+resultBoxs[randomNumber].title+"</span>";   //result
            $scope.changeBg = {
                "background-image": "url('" + resultBoxs[randomNumber].bgUrl + "')"
            };
            $scope.refresh = function () {
                //console.log(resultBoxs);
                var randomNumber2 = Math.floor((Math.random() * (resultBoxs.length)));
                $scope.boxTitleRodon = "<span style='text-shadow:5px 5px 5px #2C9B80; padding:0 4px'>"+resultBoxs[randomNumber2].title+"</span>";   //result
                $scope.changeBg = {
                    "background-image": "url('" + resultBoxs[randomNumber2].bgUrl + "')"
                };
            }
        }
    }
]);


/**
 * 这里接着往下写，如果控制器的数量非常多，需要分给多个开发者，可以借助于grunt来合并代码
 */
