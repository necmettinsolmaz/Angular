//angular.js
var myApp=angular
.module("myModule",[])
.controller("myController",function($scope){
    $scope.degisken=0;
    $scope.diziler=[{adi:"Osman", soyadi:"solmaz", tel:"555 123 45 66"},
            {adi:"Murathan", soyadi:"solmaz", tel:"540 118 80 80"},  
            {adi:"Fatma", soyadi:"solmaz", tel:"123 456 78 90"},
            {adi: "Kübra", soyadi:"solmaz", tel:"595 155 00 01"},
            {adi:"Necmettin", soyadi:"solmaz", tel:"594 118 18 18"}];

        
    //$scope.diziler=diziler;
    //$scope.mesaj=degisken;
    $scope.gonder=function(){
        $scope.degisken=$scope.degisken+1;
        //alert("kaydedildi");
    };
})
