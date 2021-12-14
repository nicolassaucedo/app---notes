let moduloTareas = require("./tareas")
let process = require("process")
let command = process.argv[2] ? process.argv[2].toLowerCase(): undefined

switch(command){
    case "listar":
        let tareas = moduloTareas.leerJson()
        if (tareas.length === 0) {
            console.log("La lista de tareas esta vacía")
        } else {
            console.log("-------------")
            console.log("Tus tareas son las siguientes:")
            console.log("-------------")
            tareas.forEach((tarea, index) => {
                console.log("En la posición del array " + index + " se encuentra la siguiente tarea; Título: " + tarea.titulo + " - estado: " + tarea.estado)
            });
        }
        break;
    case "agregar":
        let titulo = process.argv[3]
        moduloTareas.escribirJSON(titulo)
        break
    
    case "deshacer":
        moduloTareas.deshacerJSON()
        break;
    
    case "filtrar":
        let state = process.argv[3]
        let tareasFiltradas = moduloTareas.fitrarJSON(state)
        if (tareasFiltradas.length===0){
            console.log("La lista de tareas esta vacía")
        } else{
            console.log("---------")
            console.log("Sus tareas son las siguientes:");
            console.log("---------");
            tareasFiltradas.forEach((tarea)=>{
                console.log("En la posición del array " + index + "Título: " + tarea.titulo + " - estado: " + tarea.estado)
            })
        }
        break;
    
    case undefined:
        console.log("Atención, ingrese una acción válida")
        break;
    default:
        console.log("No entiendo las instrucciones, intente nuevamente")
        break;
}