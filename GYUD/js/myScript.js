//angular.js
var myApp=angular
.module("myModule",[])
.controller("myController",function($scope){
    $scope.degisken=0;
    $scope.diziler=[{adi:"Osman", soyadi:"solmaz", tel:"555 123 45 66"},
            {adi:"Murathan", soyadi:"solmaz", tel:"500 112 80 80"},  
            {adi:"Fatma", soyadi:"solmaz", tel:"123 456 78 90"},
            {adi: "Kübra", soyadi:"solmaz", tel:"500 118 80 80"},
            {adi:"Necmettin", soyadi:"solmaz", tel:"500 118 80 80"}];

        
    //$scope.diziler=diziler;
    //$scope.mesaj=degisken;
//    $scope.gonder=function(){
//        $scope.degisken++;
//        //alert("kaydedildi");
//    };
    $scope.diziyeEkle=function(){
        alert("çalıştı");
//        $scope.diziler.push({
//            adi:$scope.adi,
//            tel:$scope.tel
//        })
    };
})
