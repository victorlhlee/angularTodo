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

    //put complete updates a new todo
    this.complete = function (todo_id){
      return $http.put('/api/'+todo_id+'/complete');
    };


    //put incomplete udpates a new todo
    this.incomplete = function (todo_id){
      return $http.put('/api/'+todo_id+'/incomplete');
    };
    
  }]);

