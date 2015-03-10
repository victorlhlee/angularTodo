angular
  .module('TodoApp')

  //dependency injection
  .service('TodoService', ['$http', function($http){

    this.list = function () {
      return $http.get('/api'); // returns promise
    };

    this.create = function ( todo ) {
      return $http.post( '/api', todo ); // returns promise
    };
  }]);

