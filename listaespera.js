// Funciones (desde la línea 4 hasta la 169)


function menu() {
    /**
    * @function menu - Muetra el menú y comprueba que no hayan bugs en el mismo.
    * @returns {int} - Retorna un número entre 0 y 8 seleccionado por el usuario
    */

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
            console.log("\nFUNCION NO PROGRAMADA");
        }
        
    } while (respuesta);


    // Output de la función
    return input_menu;
    
}

// Función de agrecación a la cola. (Retorna la varsión actualizada de la cola)
function agregar(lista) {
    /**
    * @function agregar - Añade uno o varios usuarios al array lista y hace las comprobaciones pertinentes para el correcto funcionamiento del programa.
    * @param {array} - Array con la lista (puede estar vacio)
    * @returns {array} - Retorna un array con los usuarios agregados anteriormente
    */

    // Variables
    let arreglo = lista;
    let rl = require('readline-sync');
    let respuesta;
    let volver;

    console.clear();

    // Agregación o creación del array y pregunta si quiere añadir más personas a la cola.
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
    /**
    * @function siguiente - Elimina uno o varios usuarios de la lista empezando por la primera posición (Pasan a la mesa)
    * @param {array} - Array con la lista.
    * @returns {array} - Retorna un array con los usuarios eliminados.
    */
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

    console.clear();
    
    return arreglo;
}

// Función para borrar clientes impacientes. (Retorna la varsión actualizada de la cola)
function borrar(lista) {
    /**
    * @function borrar - Dado un usuario por input lo busca en el array y lo elimina
    * @param {array} - Array con la lista (puede estar vacio)
    * @returns {array} - Retorna un array con los usuarios eliminados
    */
    // Varibles
    let arreglo = lista;
    let rl = require('readline-sync');
    let respuesta;
    let pregunta;

    console.clear();

    // Proceso de borrado
    do {
        respuesta = rl.question("Introduce el nombre de la persona a borrar: ");
        if (arreglo.indexOf(respuesta) != -1) {
            arreglo.splice(arreglo.indexOf(respuesta),arreglo.indexOf(respuesta));
            console.log("Cliente borrado de la cola.");
        
        } else {
            console.log("El cliente no está en la cola.");
                
        }
        
        pregunta = rl.question("Borrar otro = S, salir = Otro: ");

    } while (pregunta.toUpperCase() == 'S');
    
    return arreglo;

}

// Función para visualizar el array con la lista (Sin retorno)
function consulta(lista) {
    /**
    * @function consulta - Muestra gráficamente el estado de la lista.
    * @param {array} - Array con la lista (puede estar vacio.
    */
    // Importación de readline-sync
    let rl = require('readline-sync');
    console.clear();

    // Visualuzación gráfica del array
    arreglo = lista;
    if (arreglo[0] != undefined) {
        console.log("Visualizando lista...");
        console.log(arreglo);
    } else {
        console.log("La lista está vacia");
        
    }

    rl.question('\nPresiona enter para volver al menú principal...');
}

// Procedimiento para visualizar el turno de un cliente. (Sin retorno)
function consulta_pos(lista) {
    /**
    * @function consulta_pos - Dado un string consulta en que posición de la lista está, en caso de no estar muestra un mensaje.
    * @param {array} - Array con la lista (puede estar vacio)
    */
    // Variables
    let arreglo = lista;
    let rl = require('readline-sync');
    let respuesta;
    let pregunta;

    console.clear();

    // Proceso de consulta.
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
    /**
    * @function guardar - Guarda la lista en un documento
    * @param {array} - Array con la lista (puede estar vacio)
    */
    // Variables
    let fs = require('fs');
    let rl = require('readline-sync');
    let arreglo = lista;

    console.clear();
    
    // Si la lista no esta vacía abrir el fichero lista, volcar el contenido del array y cerrar el archivo
    let fd = fs.openSync('listado.txt', 'w');
    fs.writeSync(fd, arreglo);
    fs.closeSync(fd);
    rl.question("Lista guardada correctamente, pulsa enter para salir...");
    

    
}

// Función para leer la lista guardada previamente (Retorna la lista guardada en el archivo lista)
function leer() {
    /**
    * @function consulta_pos - Lee los datos de un archivo y los escribe con un formato correcto 
    * @returns {array} - Array con la lista que había en el documento.
    */
    // Variables
    let fs = require('fs');
    let rl = require('readline-sync');

    console.clear();

    // Check si existe la lista para que no pete el programa si no existe el archivo.
    if (fs.existsSync('listado.txt')) { 
        // Lee el archivo lista con cofificación utf-8 y lo pasa de string a array separandolo por comas.
        let arreglo = fs.readFileSync("listado.txt", "utf-8");
        arreglo = arreglo.split(',');
        rl.question("Cola cargada al programa, presiona enter para volver al menú principal...");
        console.clear();
        return arreglo;

      } else {
          rl.question("No hay nada guardado, guarda una lista e intentalo de nuevo...");
          console.clear();
          arreglo = [];
          return arreglo;

      }
    
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
