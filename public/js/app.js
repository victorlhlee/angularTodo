angular
  .module('TodoApp', [])
  //dependency injection
  .controller('TodoController', ['$scope', 'TodoService',function($scope, TodoService){

    // $scope.todos = TodoService.list(); //promise

    TodoService.list().then(function (response){
      $scope.todos = response.data;
    });

    $scope.save_todo = function (new_title ){

      var new_todo = {
        title : new_title,
        completed : false
      };
      $scope.todos.push(new_todo);
      $scope.todo_title_input = ""; //clear the input

    //save to db
      TodoService.create({ title : new_title }).then(function(response){
        new_todo._id = response.data._id;
      });
    };



    $scope.enter_saves = function($event){
      if( $event.keyCode == 13){ //keycode for [enter key]
        $scope.save_todo( $scope.todo_title_input);
      }
    };

    $scope.check_changed = function ( $event, todo_id ){
      if ($event.srcElement.checked){
        TodoService.complete(todo_id);
      }else{
        TodoService.incomplete(todo_id);
      }
    };

    //on button click
    $scope.delete = function (todo){
      $scope.todos.splice( $scope.todos.indexOf(todo), 1);
      TodoService.delete(todo._id);
    };
  }]);

