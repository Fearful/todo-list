'use strict';

function myTaskCtrl($scope) {

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
            id:3,
            texto: 'hola que tal...',
            hecho: true
        }
    ];

    var cont = myTasks.length;

    var msgAlert = function(msg, visibilidad, estado){
        $scope.msgAlerta = msg;
        $scope.msgVisible = visibilidad;
        $scope.styleAgregado = estado;
    }




    $scope.restantes = function () {
        var cuenta = 0;
        angular.forEach($scope.tareas, function (tarea) {
            cuenta += tarea.hecho ? 0 : 1;
        });
        return cuenta;
    };

    var numEliminar = function () {
        $scope.cuentaEliminar = 0;
        angular.forEach($scope.tareas, function (tarea) {
            $scope.cuentaEliminar += tarea.hecho ? 1 : 0;
        });
    };

    // Call to blogService.create()
    $scope.addTask = function() {

        //debugger;
        if($scope.textoNuevaTarea == "" || $scope.textoNuevaTarea == undefined) {
            $scope.vacio = true;
            msgAlert("Debe ingresar la tarea", true, false)
            return;
        }

        else{
            $scope.tareas.push({
                id : ++cont,
                texto : $scope.textoNuevaTarea,
                hecho : false
            });
            $scope.newTask = '';
        }
    };

//    $scope.seleccion = function(task){
//        msgAlert("", false, false);
//        todoService.seleccion(task.id)
//        .success(function () {
//                $scope.getAll();
//            })
//                .error(function(current, status, headers, config) {
//                    alert(current);
//                });
//    }
//
//    $scope.delSelectedTasksC = function(){
//        if($scope.cuentaEliminar == 0){
//            msgAlert("Debe seleccionar la tarea a elminar", true, false);
//            return;
//        }
//        todoService.delSelectedTasks()
//            .success(function(){
//                msgAlert("Tarea eliminada", true, true);
//                $scope.getAll();
//            })
//            .error(function(current){
//                alert(current)
//            });
//    }

    $scope.verificaTexto = function(){
        if($scope.textoNuevaTarea != "" || $scope.textoNuevaTarea != undefined) {
            msgAlert("", false, false);
            $scope.vacio = false;
        }
    }

    $scope.eliminarTask = function(task){
        $scope.current;

    }



    //call this method at first!
};