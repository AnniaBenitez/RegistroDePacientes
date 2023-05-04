const ACCESS_TOKEN =
  "ya29.a0AWY7CkkuewPUd_fpGxyFASeD2EeXlzKFLk9GoIY3quPQdeff1MlkWJPT5cAgtwmLGIy1rfkF0XFxmK0CQL7CxjQUf3c767H7FdLBdco72irDYz-YJ_PFaybpUUjG-tZu4tvxGvCqoSjW-q_yAm4saIy4_V9saCgYKAecSARESFQG1tDrpVJJIZSytxB9DNQwNcKmAFg0163";
 
const SHEET_ID = '1Se6P1VkG8IlgK2N6TzphvumLt13yNMOBjEITNfKToko';

fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/1Se6P1VkG8IlgK2N6TzphvumLt13yNMOBjEITNfKToko/values/enEspera`,
    {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ACCESS_TOKEN}`,
        },    
    }
).then(function (response) {
    //esperamos el json del response para poder utilizarlo
    response.json().then(function (data) {
        const values = data.values;
    
        // Obtenemos el elemento del dom
        const lista = document.getElementById("formulario");
        const alerta = document.getElementById('botones');
        alerta.style.display = 'none';
    
      //Se ordenan los elementos por fecha y hora 
        //for(var i=0; i<values.length; i++){
          
        //}

        //Se imprimen los pacientes actuales que esperan consulta
        for (var i = 1; i < values.length; i++) {

            const consulta = document.createElement("div");
            const texto = document.createElement("p");
            consulta.className =  "consulta-item";

//Funcion que, al hacer click, debe imprimir todos los detalles AUN NO ANDA

            //consulta.addEventListener('click', imprimirDetalles());
            texto.className =  "texto";           
            texto.innerHTML = '<b>Paciente:</b> ' + values[i][0] + ' ' + values[i][1] + '  | <b>Horario:</b> ' + values[i][2] + ' - ' + values[i][3];

            
            // Agregamos el producto a la lista
            consulta.appendChild(texto);
            lista.appendChild(consulta);
        }
    });
});

//

function imprimirDetalles(pacienteConsulta){
    const informacion = document.getElementById('info');
    const alerta = document.getElementById('infoVacia');
    alerta.display = 'none';

    const datos = document.createElement('p');
    const boton = document.createElement('button');

    datos.innerHTML = '<b>Paciente:</b> ' + pacienteConsutla[0] + ' ' + pacienteConsutla[1] + '<br><b>Horario:</b> ' + pacienteConsutla[2] + ' - ' + pacienteConsutla[3] + '<br><b>Doctor:</b> ' + pacienteConsutla[4] + '<br><b>Detalles:</b> ' + pacienteConsutla[5];
    //config boton

    ///const mensaje = document.getElementById('infoVacia');
    //mensaje.display = 'none';
    informacion.appendChild(datos);
}
 
