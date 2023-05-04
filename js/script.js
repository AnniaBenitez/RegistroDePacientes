const ACCESS_TOKEN =
  "ya29.a0AWY7CknDI8OoDdLyKMo21qdLKcBVCoyBKfmEps7hOUfPX1rdnDYJhSx9n2OsyGOLPePPwcyuPmmZPHKH4KdflmT-QsIxDh7GQboR2DZjfiFBRTLurAdtUkZFfqSa_4MvsmCFMr9XS1jlx1g_Xg3A3BFPCt1JXbcaCgYKAZ4SARESFQG1tDrp6-mWWDHFExfK5tsTu6T5jg0166";
 
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
            texto.className =  "texto";           
            texto.innerHTML = '<b>Paciente:</b> ' + values[i][0] + ' ' + values[i][1] + '  | <b>Horario:</b> ' + values[i][2] + ' - ' + values[i][3];

            texto.addEventListener('click', ()=>{
                const informacion = document.getElementById('info');
                const alerta = document.getElementById('alerta');
                alerta.display = 'none';

                const datos = document.createElement('p');
                const boton = document.createElement('button');

                datos.innerHTML = '<b>Paciente:</b> ' + 'values[i][0]' + ' ' + 'values[i][1]' + '<br><b>Horario:</b> ' + 'values[i][2]' + ' - ' + 'values[i][3]' + '<br><b>Doctor:</b> ' + 'values[i][4]' + '<br><b>Detalles:</b> ' + 'values[i][5]';
                //config boton

                ///const mensaje = document.getElementById('infoVacia');
                //mensaje.display = 'none';
                informacion.appendChild(datos);

            });
            // Agregamos el producto a la lista
            consulta.appendChild(texto);
            lista.appendChild(consulta);
        }
    });
});
 
