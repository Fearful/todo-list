function myTasksCtrl($scope) {

    $scope.tasks = [{
            id: 1,
            text: 'Nico',
            done: true
    },
        {
            id: 2,
            text: 'Fede',
            done: false
        },
        {
            id: 3,
            text: 'hola que tal...',
            done: true
        }
    ];

    $scope.cont = $scope.tasks.length;


    var msgAlert = function (msg, visibilidad, estado) {
        $scope.msgAlert = msg;
        $scope.msgVisible = visibilidad;
        $scope.styleAdded = estado;
    }

    $scope.remaining = function () {
        var count = 0;
        angular.forEach($scope.tasks, function (task) {
            count += task.done ? 0 : 1;
        });
        numDone();
        return count;
    };

    var numDone = function () {
        $scope.countDelete = 0;
        angular.forEach($scope.tasks, function (t) {
            $scope.countDelete += t.done ? 1 : 0;
        });
    };

    $scope.delSelectedTasksC = function () {
        if ($scope.countDelete == 0) {
            msgAlert("You must select the task to delete", true, false);
            return;
        }
        angular.forEach($scope.tasks, function (t) {
            if (t.done == true) {
                var index = $scope.tasks.indexOf(t);
                $scope.tasks.splice(index, 1);
            }
        });
        numDone();
        msgAlert("Deleted task", true, true);
    };


    // Call to blogService.create()
    $scope.addTask = function () {
        if ($scope.textNewTask == "" || $scope.textNewTask == undefined) {
            $scope.empty = true;
            msgAlert("You must enter a task", true, false);
            return;
        } else {
            $scope.tasks.push({
                text: $scope.textNewTask,
                done: false
            });
            msgAlert("Task added", true, true)
            $scope.textNewTask = '';
        }
    };

    $scope.verifyText = function () {
        if ($scope.textNewTask != "" || $scope.textNewTask != undefined) {
            msgAlert("", false, false);
            $scope.empty = false;
        }
    }
}