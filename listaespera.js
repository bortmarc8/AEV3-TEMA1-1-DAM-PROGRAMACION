// Funciones (línea 4 hasta x)

// Función de display del menú. (Retorna el numero seleccionado por el usuario)
function menu() {
    // Variables
    let rl = require('readline-sync');
    let input_menu;
    let respuesta = true;

    // Display gráfico de la lista de espera.
    console.log("\nLISTA ESPERA - Restaurante Florida's Hollywood");    
    console.log("===============================================");
    console.log("1. Agregar nuevo cliente a la lista");
    console.log("2. Siguiente cliente ocupa la mesa");
    console.log("3. Borrar cliente impaciente");
    console.log("4. Ver turno de cliente");
    console.log("5. Ver estado de la lista de espera");
    console.log("6. Guardar lista de espera");
    console.log("7. Recuperar la lista de espera");
    console.log("8. Salir del programa");


    // Pregunta para seleccionar el menú
    do {
        input_menu = rl.questionInt("Introduce opcion (1..8): ");

        if (input_menu > 0 && input_menu < 9) {
            respuesta = false;
        } else {
            console.log("\nOpción incorrecta");
        }
        
    } while (respuesta);


    // Output de la función
    return input_menu;
    
}

// Función de agrecación a la cola. (Retorna la varsión actualizada de la cola)
function agregar(lista) {
    // Variables
    let arreglo = lista;
    let rl = require('readline-sync');
    let respuesta;
    let volver;

    console.clear();

    // Agregación / creación al array y pregunta de si quiere añadir más personas a la cola.
    do {
        respuesta = rl.question("\nIntroduce el nombre: ")
        if (respuesta != '') {
            if (arreglo.lenght != []) {
                if (arreglo.indexOf(respuesta) == -1) {
                    arreglo.push(respuesta);

                } else {
                    console.log("\nYa existe una persona con el mismo nombre, operación cancelada.");

                }
            }else{
                let arreglo = new Array();
                arreglo.push(respuesta);

            }
            volver = rl.question("¿Quieres añadir a alguien mas?: (S = Si): ");

        } else {
            console.log("\nNo puedes dejar el campo vacio.");
            volver = 'S';
        }

    } while (volver.toUpperCase() == 'S');
    
    // Output de la función.
    console.log(arreglo);
    
    return arreglo;
}

// Función de paso de turno en la cola. (Retorna la varsión actualizada de la cola)
function siguiente(lista) {
    console.clear();
    let rl = require('readline-sync');
    let pregunta;
    let arreglo = lista;

    // Si el array no está vacio imprime la primera posición y eliminala.
    do {
        if (arreglo.lenght != 0 && arreglo[0] != undefined) {
            console.log("Pasa el cliente",arreglo[0],"a la mesa");
            arreglo.shift();
        
        } else {
            console.log("No hay ninguna lista creada o está vacia, para acceder a esta funcionalidad deberás crear una lista nueva o cargarla.");

        } 

        pregunta = rl.question("Pasar otro = S, salir = Otro: ");

    } while (pregunta.toUpperCase() == 'S');
    
    return arreglo;
}

// Función para borrar clientes impacientes. (Retorna la varsión actualizada de la cola)
function borrar(lista) {
    let arreglo = lista;
    let rl = require('readline-sync');
    let respuesta;
    let pregunta;

    console.clear();

    do {
        respuesta = rl.question("Introduce el nombre de la persona a borrar: ");
        if (arreglo.indexOf(respuesta) != -1) {
            arreglo.splice(arreglo.indexOf(respuesta),arreglo.indexOf(respuesta));
        
        } else {
            console.log("El cliente no está en la cola.");
                
        }
        
        pregunta = rl.question("Borrar otro = S, salir = Otro: ");

    } while (pregunta.toUpperCase() == 'S');
    
    return arreglo;

}

// Función para visualizar el array con la lista (Sin retorno)
function consulta(lista) {

    console.clear();

    arreglo = lista;
    if (arreglo != []) {
        console.log(arreglo)
    } else {
        console.log("La lista está vacia");
        
    }
}

// Procedimiento para visualizar el turno de un cliente. (Sin retorno)
function consulta_pos(lista) {
    let arreglo = lista;
    let rl = require('readline-sync');
    let respuesta;
    let pregunta;

    console.clear();

    do {
        respuesta = rl.question("Introduce el nombre de la persona para ver su turno: ");
        if (arreglo.indexOf(respuesta) != -1) {
            console.log("\n",arreglo[arreglo.indexOf(respuesta)],"está en la posición",arreglo.indexOf(respuesta)+1);
            
        } else {
             console.log("\nEsa persona no está en la lista");
                
        }
    
        pregunta = rl.question("Consultar otro = S, salir = Otro: ");

    } while (pregunta.toUpperCase() == 'S');

}

// Procedimiento para guardar la lista. (Sin retorno)
function guardar(lista) {
    // Variables
    let fs = require('fs');
    let arreglo = lista;

    console.clear();
    
    if (lista[0] != undefined) {
        // Si la lista no esta vacía abrir el fichero lista, volcar el contenido del array y cerrar el archivo
        let fd = fs.openSync('lista', 'w');
        fs.writeSync(fd, arreglo);
        fs.closeSync(fd);
    
    } else {
        console.log("La lista está vacía, es inecesario guardarla");
        
    }
}

// Función para leer la lista (Retorna la lista guardada en el archivo lista)
function leer(lista) {
    let arreglo = lista;
    let fs = require('fs');  

    arreglo = fs.openSync('lista', 'r');
    fs.closeSync(arreglo);

    return arreglo;
}

// Comienzo del programa.
console.clear();

let lista = [];
let salir;

do {
    switch (menu()) {
        case 1:
            lista = agregar(lista);
            break;
    
        case 2:
            lista = siguiente(lista);
            break;
    
        case 3: 
            lista = borrar(lista);
            break;

        case 4:
            consulta_pos(lista);
            break;

        case 5:
            consulta(lista);
            break;
        
        case 6:
            guardar(lista);
            break;

        case 7:
            lista = leer(lista);
            break;
    
        case 8:
            console.log("\nPrograma finalizado...");
            salir = true;
            break;
    }
} while (!salir);
