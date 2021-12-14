let fs = require("fs")

module.exports = moduloTareas = {
    leerJson: () => {
        let listadoTareas = fs.readFileSync("./tareas.json", "utf-8")
        return JSON.parse(listadoTareas)
    },
    escribirJSON: (titulo) => {
        let newTask = {
            titulo: titulo,
            estado: "Pendiente"
        }
        let oldTask = moduloTareas.leerJson()
        oldTask.push(newTask)
        moduloTareas.guardarJSON(oldTask)
        console.log("Se ha añadido un elemento a la lista de tareas");
    },
    deshacerJSON: () => {
        let task = moduloTareas.leerJson()
        task.pop()
        moduloTareas.guardarJSON(task)
        console.log("Se ha eliminado el último elemento de la lista de tareas")
    },

    guardarJSON: (info) =>{
        let newJSON = JSON.stringify(info)
        fs.writeFileSync("./tareas.json", newJSON, "utf-8")
    },
    fitrarJSON: (estado) => {
        let tasks = moduloTareas.leerJson();
        let taskFilter = tasks.filter(tarea =>{
            return tarea.estado.toLowerCase() === estado.toLowerCase()
        })
        return taskFilter
    }
}