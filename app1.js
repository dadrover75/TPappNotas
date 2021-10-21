//requerir modulos
const tareas = require('./Tareas1');


//asignar argumento en la pos 2 a una variable
const argumento = process.argv[2];

//condiciones
switch(argumento){
    case "listar":
        console.log('\nEsta es la lista de tareas\n')
        tareas.listarTodas()
        
        break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción.")
        break;
    case "crear":
        const nuevaTarea = {
            titulo: process.argv[3], 
            estado: "pendiente"
        };
        tareas.guardarJson(nuevaTarea);
        break;
    case "filtrarPorEstado":
        tareas.filtrarPorEstado(process.argv[3]);
        break;
    default:
        console.log("No entiendo qué quieres hacer.")
    }


