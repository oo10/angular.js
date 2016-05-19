var appCtrls = angular.module('appCtrls', []);

appCtrls.controller('HelloCtrl', ['$scope','$http',
    function($scope) {
        $scope.boxs = [{
            title: '去食堂吃饭'
        },{
            title: '吃外卖'
        },{
            title: '去吃黄焖鸡'
        }];

        //$http.get('http://localhost:63342/nhpop.cn/angular.js/exp/app/boxs.json').success(function(data){
        //    $scope.boxs = data.boxs;
        //    console.log(data.boxs);
        //}).error(function(){
        //    alert("an unexpected error ocurred!");
        //});
        localStorage.setItem("test1","去食堂吃饭");
        localStorage.setItem("test2","吃外卖");
        localStorage.setItem("test3","去吃黄焖鸡");
        var test = localStorage.test1;
        console.log(test);



        $scope.pageClass="hello";

        $scope.alert = function(){
            $scope.showDialog = "translateY(-50%) scale(1)";
        };

        $scope.del = function(idx){
            $scope.boxs.splice(idx,1);
        };
        var i = 3;
        $scope.add = function(idx) {
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
            localStorage.setItem("test"+(i),$scope.addtitle);
            $scope.boxs.push({"title" : $scope.addtitle});
            console.log($scope.boxs);
            console.log(i+":"+localStorage.getItem("test"+(i)));
            //localStorage.removeItem(key) 删除
            for(var a = 0, len = localStorage.length;a<len;a++){
                var getKey=localStorage.key(i);
                if(getKey.substring(0,4)=="test"){
                    //从0开始，长度为4的子字符串是否为test
                    //然后这里再取出值
                    console.log($scope.boxs);
                }
            }

            $scope.showDialog = "translateY(-50%) scale(0)";
        };

        $scope.cancel = function(){
            $scope.showDialog = "translateY(-50%) scale(0)";
        };

        var randomNumber = Math.floor((Math.random()*$scope.boxs.length));
        $scope.boxTitleRodon = $scope.boxs[randomNumber].title;    //result
        console.log($scope.boxs);

        $scope.refresh = function(){
            console.log($scope.boxs);
            alert("0k");
            $scope.boxTitleRodon = $scope.boxs[0].title;    //result
        };
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
