const ACCESS_TOKEN =
  "ya29.a0AWY7CknmjK-i6ULnzFtvbqm4NE3UHnsHMue9hC_tBKwYTymuIB-Bu_cGeK0K0YuiHmCLpEoNhnOiKcnHTurcBb-FzdrpVPSRu_UCtD2c4uF6kTIHFY6kq36w6Qv9U8RI4U6IhartSjsEAWWiVkDsZFQTIWOPaCgYKAc8SARESFQG1tDrpBWJsVQpqmkwJJoQHaCxipQ0163";
 
const SHEET_ID = '1Se6P1VkG8IlgK2N6TzphvumLt13yNMOBjEITNfKToko';

const datos = document.getElementById('infoConsulta');
const boton = document.getElementById('boton');
boton.style.display = 'none';

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

        //Si se obtienen consultas, se borra esto:
        const alerta = document.getElementById('botones');
        alerta.style.display = 'none';
    
      //Se ordenan los elementos por fecha y hora 
        //for(var i=0; i<values.length; i++){          
        //}

        //Se imprimen los pacientes actuales que esperan consulta
        for (var i = 1; i < values.length; i++) {

            const consulta = document.createElement("div");
            const texto = document.createElement("p");
            const posicion = document.createElement('p');

            consulta.className =  "consulta-item";
            posicion.className = 'posicion-item';
            texto.className = 'texto';

            posicion.innerHTML = i;
            texto.innerHTML = '<b>Paciente:</b> ' + values[i][0] + ' ' + values[i][1] + '  | <b>Horario:</b> ' + values[i][2] + ' - ' + values[i][3];
            
            // Agregamos el producto a la lista
            consulta.appendChild(texto);
            consulta.appendChild(posicion);
            posicion.style.display = 'none';
            lista.appendChild(consulta);
            consulta.setAttribute('onclick', 'imprimirDetalles()');
        }
    });
});

function imprimirDetalles(){

    const informacion = document.getElementById('info');
    const alerta = document.getElementById('infoVacia');

    datos.innerHTML = '';
    alerta.style.display = 'none';

    datos.innerHTML = '<b>Paciente:</b> ' + 'pacienteConsutla[0]' + ' ' + 'pacienteConsutla[1]' + '<br><b>Horario:</b> ' + 'pacienteConsutla[2]' + ' - ' + 'pacienteConsutla[3]' + '<br><b>Doctor:</b> ' + 'pacienteConsutla[4]' + '<br><b>Detalles:</b> ' + 'pacienteConsutla[5]';
    boton.style.display = 'block';
}
 
