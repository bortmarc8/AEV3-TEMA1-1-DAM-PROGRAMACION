// Función de display del menú
function menu() {
    // Variables
    let rl = require('readline-sync');
    let input_menu;
    let respuesta = true;

    // Display gráfico de la lista de espera.
    console.log("LISTA ESPERA - Restaurante Florida's Hollywood");    
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

let lista = [];

switch (menu()) {
    case 1:
        console.clear();
        agregar(lista);
        break;

    default:
        console.log("Programa finalizado");
        
        break;
}