angular
  .module('TodoApp', [])
  //dependency injection
  .controller('TodoController', ['$scope', 'TodoService',function($scope, TodoService){

    // $scope.todos = TodoService.list(); //promise

    TodoService.list().then(function (response){
      $scope.todos = response.data;
    });

    $scope.save_todo = function (new_title ){
      $scope. todos.push({
        title : new_title,
        completed : false
      });
      $scope.new_todo = ""; //clear the input

      TodoService.create({ title : new_title });
    };

    //save to db
   

    $scope.enter_saves = function($event){
      if( $event.keyCode == 13){
        $scope.save_todo( $scope.new_todo );
      }
    };

  }]);

