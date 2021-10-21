//file system 
const fs = require('fs');

//variable objetos del archivo json
let tareasJson = fs.readFileSync('./tareas1.json', 'utf-8');

// leer Json toma string json y parsea

const leerJson = () => JSON.parse(tareasJson);
let tareasJs = leerJson(tareasJson);


// funcion escribir Json toma array saca un string Json

function escribirJson(tareasJs){
    fs.writeFileSync('./tareas1.json',JSON.stringify(tareasJs), 'utf-8');
}

// funciones para exportar

function guardarJson(nuevoObj){
    let arr = leerJson(tareasJson);
    arr.push(nuevoObj);
    return escribirJson(arr);    
}


function listarTodas() {
    tareasJs.forEach((tareaJs, i) => 
    console.log((i+1) + " - " + tareaJs.titulo)
);
}


const filtrarPorEstado = estado => {let filtradas = leerJson(tareasJson).filter(t => t.estado == estado);
    filtradas.forEach((filtradas, i) => 
        console.log((i+1) + " - " + filtradas.titulo))
}

// function listarTerminadas(tareas) {
//     return tareas.forEach((tarea, i) => {
//         if (tarea.estado === "terminada") {
//             console.log((i + 1) + " - " + tarea.titulo);
//         };
//     });
// }

// const listarNoTerminadas = tareas => tareas.forEach((tarea, i) => {
//     if (tarea.estado !== "terminada") {
//         console.log((i+1) + " - " + tarea.titulo);
//     }
// });
// const nuevaTarea = {
//     titulo: process.argv[2], 
//     estado: "pendiente"
// };
// guardarJson(nuevaTarea);




//exportamos modulo
module.exports = {listarTodas, guardarJson, filtrarPorEstado, tareasJson, tareasJs}

