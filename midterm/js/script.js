var app = angular.module('todo', []);
app.controller('todoCTRL', function ($scope) {
  $scope.tasks = [];
  $scope.saved = JSON.parse(localStorage.getItem('tasksItems'));
  $scope.tasks = (Array.isArray($scope.saved)) ? $scope.saved : [];
  console.log($scope.tasks)
  $scope.addTask = {
    header: ''
    , date: (new Date())
    , finished: false
  }
  $scope.add = function () {
    $scope.tasks.push($scope.addTask)
    $scope.addTask = {
      header: ''
      , date: (new Date())
      , finished: false
    }
    localStorage.setItem('tasksItems', JSON.stringify($scope.tasks));
  };
  $scope.delete = function () {
    $scope.tasks.splice(this.$index, 1);
    localStorage.setItem('tasksItems', JSON.stringify($scope.tasks));
  };
  $scope.save = function () {
    localStorage.setItem('tasksItems', JSON.stringify($scope.tasks));
  }
});