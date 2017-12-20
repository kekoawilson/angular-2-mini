angular.module('myApp').service('productsSrvc', function($http) {
    this.getShoeData = () => $http.get('https://practiceapi.devmountain.com/products?category=shoes')

    this.getSockData = () => $http.get(`https://practiceapi.devmountain.com/products?category=socks`)
});
