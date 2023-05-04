const ACCESS_TOKEN =
  "ya29.a0AWY7Cklx-ypK1rWo3CQEeEMPujpfR6chhxMqF13c2DSE1AqnbycGm5TTRjy25pKIMFtPYYuNb-6IgIz6jnlaSvc8A_uCh0jXjzlw-DvpnBvwnmLiND4ZdwXX9n7CqOGbBXS5_AWkW6WcXrKxomWUgFipct1NaCgYKAVISARESFQG1tDrpbnvMany_FE6gskNTSF-i5g0163";
 
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
                console.log('prueba');
            });
            // Agregamos el producto a la lista
            consulta.appendChild(texto);
            lista.appendChild(consulta);
        }
    });
});
 
