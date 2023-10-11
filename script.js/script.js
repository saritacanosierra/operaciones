document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("ejercicios");

    formulario.addEventListener("change", function (event) {
        const opcionSeleccionada = document.querySelector('input[name="opcion"]:checked');

        if (opcionSeleccionada) {
            const valorOpcion = opcionSeleccionada.value;
            abrirVentanaEmergente(valorOpcion);
        }
    });

    function abrirVentanaEmergente(opcion) {
        let url = "";

        
        switch (opcion) {
            case "opcion1":
                url = "./act1.html";
                break;
            case "opcion2":
                url = "./act2.html";
                break;
            case "opcion3":
                url = "./act3.html";
                break;
                case "opcion4":
                url = "./act4.html";
                break;
                case "opcion5":
                url = "./act5.html";
                break;
                case "opcion6":
                url = "./act6.html";
                break;
                case "opcion7":
                url = "./act7.html";
                break;
                case "opcion8":
                url = "./act8.html";
                break;
                case "opcion9":
                url = "./act9.html";
                break;
                case "opcion10":
                url = "./act10.html";
                break;
                case "opcion11":
                url = "./act11.html";
                break;
                case "opcion12":
                url = "./act12.html";
                break;
                case "opcion13":
                url = "./act13.html";
                break;
               
            default:
                break;
        }

        // Abre la ventana emergente
        if (url) {
            window.open(url, "_blank", "width=600,height=470");
        }
    }
});











/*Contador de Números Pares e Impares: Diseña un programa que solicite al usuario un
número y luego muestre la cantidad de números pares e impares dentro del rango desde 1
hasta ese número.*/


// contador_numeros={
//     while: true, 
//     cont_impar:0,
//     cont_par:0
// numero
    
// if
    
// }