
function mostrarModal(mensaje, esCorrecto) {
    const modal = document.getElementById('modalNavidad');
    const modalMensaje = document.getElementById('modalMensaje');
    const modalContenido = document.querySelector('.modal-contenido');

    if (!modal) {
        alert(mensaje);
        return;
    }

    modalMensaje.textContent = mensaje;

    if (esCorrecto) {
        modalContenido.style.backgroundColor = '#27AE60';
        modalMensaje.style.color = '#FFFFFF';
    } else {
        modalContenido.style.backgroundColor = '#C0392B';
        modalMensaje.style.color = '#F7DC6F';
    }

    modal.style.display = 'block';
}

function cerrarModal() {
    const modal = document.getElementById('modalNavidad');
    if (modal) {
        modal.style.display = 'none';
    }
}


function verificarRespuesta(pregunta) {
    const opciones = document.getElementsByName('entrante');
    let seleccionada = null;

    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            seleccionada = opciones[i].value;
            break;
        }
    }

    if (seleccionada === null) {
        mostrarModal("Por favor, selecciona una respuesta antes de continuar.", false);
        return;
    }

    let img_difuminar = null;
    let difuminado = null;
    let div_aparece = null;
    let div_desaparece = null;
    let respuestaCorrecta = null; 

    switch (pregunta) {
        case "pregunta1":
            respuestaCorrecta = "respuesta2";
            img_difuminar = "img_entrantes";
            difuminado = "blur(6px)";
            div_desaparece = "div_p1";
            div_aparece = "div_p2";
            break;
        case "pregunta2":
            respuestaCorrecta = "respuesta8";
            img_difuminar = "img_entrantes";
            difuminado = "blur(3px)";
            div_desaparece = "div_p2";
            div_aparece = "div_p3";
            break;
        case "pregunta3":
            respuestaCorrecta = "respuesta11";
            img_difuminar = "img_entrantes";
            difuminado = "blur(0px)";
            div_desaparece = "div_p3";
            div_aparece = "div_continuar";
            break;
        case "pregunta4":
            respuestaCorrecta = "resp_prin2";
            img_difuminar = "img_principales";
            difuminado = "blur(6px)";
            div_desaparece = "div_p1";
            div_aparece = "div_p2";
            break;
        case "pregunta5":
            respuestaCorrecta = "resp_prin5";
            img_difuminar = "img_principales";
            difuminado = "blur(3px)";
            div_desaparece = "div_p2";
            div_aparece = "div_p3";
            break;
        case "pregunta6":
            respuestaCorrecta = "resp_prin11";
            img_difuminar = "img_principales";
            difuminado = "blur(0px)";
            div_desaparece = "div_p3";
            div_aparece = "div_continuar";
            break;
        case "pregunta7":
            respuestaCorrecta = "resp_postre3";
            img_difuminar = "img_postres";
            difuminado = "blur(5px)";
            div_desaparece = "div_p1";
            div_aparece = "div_p2";
            break;
        case "pregunta8":
            respuestaCorrecta = "resp_postre8";
            img_difuminar = "img_postres";
            difuminado = "blur(0px)";
            div_desaparece = "div_p2";
            div_aparece = "div_continuar";
            break;
        case "pregunta9":
            respuestaCorrecta = "resp_bebida4";
            img_difuminar = "img_bebidas";
            difuminado = "blur(9px)";
            div_desaparece = "div_p1";
            div_aparece = "div_p2";
            break;
        case "pregunta10":
            respuestaCorrecta = "resp_bebida7";
            img_difuminar = "img_bebidas";
            difuminado = "blur(6px)";
            div_desaparece = "div_p2";
            div_aparece = "div_p3";
            break;
        case "pregunta11":
            respuestaCorrecta = "resp_bebida10";
            img_difuminar = "img_bebidas";
            difuminado = "blur(3px)";
            div_desaparece = "div_p3";
            div_aparece = "div_p4";
            break;
        case "pregunta12":
            respuestaCorrecta = "resp_bebida13";
            img_difuminar = "img_bebidas";
            difuminado = "blur(0px)";
            div_desaparece = "div_p4";
            div_aparece = "div_continuar";
            break;
        default:
            respuestaCorrecta = "ninguna";
    }

    if (seleccionada === respuestaCorrecta) {
        mostrarModal("¡Respuesta correcta! 🔔 ¡Felices Fiestas!", true); 

        const imgElement = document.getElementById(img_difuminar);
        const divDesapareceElement = document.getElementById(div_desaparece);
        const divApareceElement = document.getElementById(div_aparece);

        if (imgElement) imgElement.style.filter = difuminado;
        if (divDesapareceElement) divDesapareceElement.style.display = "none";
        if (divApareceElement) divApareceElement.style.display = "block";
        
    } else {
        mostrarModal("¡Respuesta incorrecta! 🎁 Vuelve a intentarlo.", false); 
    }
}