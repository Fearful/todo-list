function myTasksCtrl($scope) {

    $scope.tareas = [{
            id: 1,
            texto: 'Nico',
            hecho: true
    },
        {
            id: 2,
            texto: 'Fede',
            hecho: false
        },
        {
            id: 3,
            texto: 'hola que tal...',
            hecho: true
        }
    ];

    $scope.cont = $scope.tareas.length;


    var msgAlert = function (msg, visibilidad, estado) {
        $scope.msgAlerta = msg;
        $scope.msgVisible = visibilidad;
        $scope.styleAgregado = estado;
    }

    $scope.restantes = function () {
        var cuenta = 0;
        angular.forEach($scope.tareas, function (tarea) {
            cuenta += tarea.hecho ? 0 : 1;
        });
        numEliminar();
        return cuenta;
    };

    var numEliminar = function () {
        $scope.cuentaEliminar = 0;
        angular.forEach($scope.tareas, function (t) {
            $scope.cuentaEliminar += t.hecho ? 1 : 0;
        });
    };

    $scope.delSelectedTasksC = function () {
        if ($scope.cuentaEliminar == 0) {
            msgAlert("Debe seleccionar la tarea a elminar", true, false);
            return;
        }
        debugger;
        angular.forEach($scope.tareas, function (t) {
            if (t.hecho == true) {
                var index = $scope.tareas.indexOf(t);
                $scope.tareas.splice(index, 1);
            }
        });
        numEliminar();
        msgAlert("Tarea eliminada", true, true);
    }


    // Call to blogService.create()
    $scope.addTask = function () {

        //debugger;
        if ($scope.textoNuevaTarea == "" || $scope.textoNuevaTarea == undefined) {
            $scope.vacio = true;
            msgAlert("Debe ingresar la tarea", true, false);
            return;
        } else {
            $scope.tareas.push({
                id: ++cont,
                texto: $scope.textoNuevaTarea,
                hecho: false
            });
            $scope.newTask = '';
        }
    };

    $scope.verificaTexto = function () {
        if ($scope.textoNuevaTarea != "" || $scope.textoNuevaTarea != undefined) {
            msgAlert("", false, false);
            $scope.vacio = false;
        }
    }
}