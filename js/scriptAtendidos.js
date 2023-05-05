const ACCESS_TOKEN =
  "ya29.a0AWY7CkmYpC-KjYcnd6uWCNLeOelt7JgBPms1xUwspodUAgBlTHImg_Cs5DvSl-CgZbvMHHy_JX3zB-3givdT1VkOcQpHMG8BZDd0i7LtmthtZHLu2RbxPNBINX5WTWSyG5LFYPHxbX9OiHCRR88LB_8KKE8ssBAaCgYKASYSARESFQG1tDrpmYKJbl1ECONjBpXcI4sznw0166";
 
const SHEET_ID = '1Se6P1VkG8IlgK2N6TzphvumLt13yNMOBjEITNfKToko';

fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/1Se6P1VkG8IlgK2N6TzphvumLt13yNMOBjEITNfKToko/values/consultas`,
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
        const alerta = document.getElementById('alerta');
        alerta.style.display = 'none';
    
    
        for (var i = 1; i < values.length; i++) {
            if(values[i][6] == 'TRUE'){
                const atendido = document.createElement("div");
                atendido.className =  "paciente-atendido";

                // Nombre del doctor en lista
                const name = document.createElement("li");
                name.className = "nombre";
                name.innerHTML = 'Nombre del Paciente: ' + values[i][1] + ' ' + values[i][2]; 
                console.log(values[i][0]);
        
                // otros datos del doc tipo p
                const fechaDisp = document.createElement("p");
                fechaDisp.className = "fecha";
                fechaDisp.innerHTML = 'Fecha de Consulta: ' + values[i][3] /*+ ', Hora: ' + values[i][3]*/;

                const doctor = document.createElement('p');
                doctor.className='doctor';
                doctor.innerHTML = 'Atendido por: ' + values[i][4];
        
                const obs = document.createElement('p');
                obs.className='observacion';
                obs.innerHTML = 'Observación: ' + values[i][5];

                // Agregamos todos los elementos al div de producto
                atendido.appendChild(name);
                atendido.appendChild(fechaDisp);
                atendido.appendChild(doctor);
                atendido.appendChild(obs);

                // Agregamos el producto a la lista
                lista.appendChild(atendido);
            }            
        }
    });
});
 
