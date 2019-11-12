//Función de display del menú
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
        input_menu = rl.questionInt("Introduce opción (1..8): ");

        if (input_menu > 0 && input_menu < 9) {
            respuesta = false;
        } else {
            console.log("\nOpción incorrecta");
        }
        
    } while (respuesta);


    //Salida de la función
    return input_menu;
    
}


 