// Funciones (línea 4 hasta x)

// Función de display del menú.
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

// Función de agrecación a la cola.
function agregar(lista) {
    // Variables
    let arreglo = lista;
    let rl = require('readline-sync');
    let respuesta;
    let volver;

    // Agregación / creación al array y pregunta de si quiere añadir más personas a la cola.
    do {
        respuesta = rl.question("Introduce el nombre: ")
        if (respuesta != '') {
            if (arreglo != []) {
                if (arreglo.indexOf(respuesta) == -1) {
                    arreglo.push(respuesta);

                } else {
                    console.log("Ya existe una persona con el mismo nombre, operación cancelada.");

                }
            }else{
                let arreglo = new Array();
                arreglo = arreglo.push(respuesta);

            }
            volver = rl.question("¿Quieres añadir a alguien mas?: (S = Si): ");
            volver = volver.toUpperCase();

        } else {
            console.log("No puedes dejar el campo vacio.");
            volver = 'S';
        }

    } while (volver == 'S');
    
    // Output de la función.
    console.log(arreglo);
    
    return arreglo;
}

// Función de paso de turno en la cola.
function siguiente(lista) {
    let rl = require('readline-sync');
    let pregunta;
    let arreglo = lista;
    let salir;

    // Si el array no está vacio imprime la primera posición y eliminala.
    do {
        if (arreglo != []) {
            console.log("Pasa el cliente",arreglo[0],"a la mesa");
            arreglo = arreglo.shift();
        
        } else {
            console.log("No hay ninguna lista creada o está vacia, para acceder a esta funcionalidad deberás crear una lista nueva o cargarla.");
            salir = true;
        } 

        pregunta = rl.question("Pasar otro = S, salir = Otro: ");

    } while (pregunta.toUpperCase() == 'S');
    
    return arreglo;
}

// Función para borrar clientes impacientes.
function borrar(lista) {
    let arreglo = lista;
    let rl = require('readline-sync');
    let respuesta;
    let pregunta;

    do {
        respuesta = rl.question("Introduce el nombre de la persona a borrar: ");
        if (arreglo.indexOf(respuesta) != -1) {
            arreglo = arreglo.splice(arreglo.indexOf(respuesta),arreglo.indexOf(respuesta));
        
        } else {
            console.log("El cliente no está en la cola.");
                
        }
        
        pregunta = rl.question("Borrar otro = S, salir = Otro: ");

    } while (pregunta.toUpperCase() == 'S');
    
    return arreglo;

}

function consulta(lista) {
    arreglo = lista;
    if (arreglo != []) {
        console.log(arreglo)
    } else {
        console.log("la lista está vacia");
        
    }
}

// Procedimiento para visualizar el turno de un cliente. (Sin retorno)
function consulta_pos(lista) {
    let arreglo = lista;
    let rl = require('readline-sync');
    let respuesta;
    let pregunta;

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
    let fs = require('fs');
    let escritura = fs.createWriteStream('archivo.txt');
    let ruta = escritura.path;
    let arreglo = lista;
    
    if (lista != []) {
    
        // Escribir el dato
        arreglo.forEach(valor => escritura.write(`${valor}\n`));
    
        // Cuando esté terminado mostrar la ruta y verificación
        escritura.on('finish', () => {
        console.log(`Se ha guardado la lista en ${ruta}`);
        });
    
        // Mostrar si hay algún error
        escritura.on('error', (error) => {
        console.error(`Ha habido un error al guardar la lista en ${ruta} => ${error}`)
        });
    
        // Cerramos la comunicación
        escritura.end();

    } else {
        console.log("La lista está vacía, es inecesario guardarla");
        
    }
}

// Comienzo del programa.

let lista = [];
let salir;

do {
    switch (menu()) {
        case 1:
            console.clear();
            lista = agregar(lista);
            break;
    
        case 2:
            console.clear();
            lista = siguiente(lista);
            break;
    
        case 3: 
            console.clear();
            lista = borrar(lista);
            break;

        case 4:
            console.clear();

            break;

        case 5:
            console.clear();
            consulta_pos(lista);
            break;
        
        case 6:
            console.clear();
            guardar(lista);
            break;
    
        default:
            console.log("Programa finalizado");
            salir = true;
            break;
    }
} while (!salir);
