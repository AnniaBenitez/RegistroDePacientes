const ACCESS_TOKEN =
  "ya29.a0AWY7CklUub8Pv_NCas0_jee35X6PcB4HrQNN-Ih1czs1wRZx2h1K7qX-25F8HkdR14AfbxVFxnlB2GUocPJ3RSbc2aTndw6J7KSDQyNEAsr_MOyIe5pgR5VRatQmJm5R_WN_t9FzH1VxjdvISUm_K7gpL7t1HccaCgYKAUcSARESFQG1tDrpgOJNl9s0lKwFE56hYB1vtQ0166";
 
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
        for(var i=0; i<values.length; i++){
          
        }

        for (var i = 1; i < values.length; i++) {

            const consulta = document.createElement("div");
            consulta.className =  "consulta-item";

            // Nombre del doctor en lista
            const name = document.createElement("div");
            name.className = "casilla";
            doctorName.innerHTML = 'Paciente: NOMBRE APELLIDO - FECHA HORA'; 
    
            // otros datos del doc tipo p
            const fechaDisp = document.createElement("p");
            fechaDisp.className = "fecha";
            fechaDisp.innerHTML = 'Los días: ' + values[i][2];

            const horario = document.createElement('p');
            horario.className='horas';
            horario.innerHTML = 'De ' + values[i][1];
    
            const especialidad = document.createElement('p');
            especialidad.className='esp';
            especialidad.innerHTML = 'Especialidad: ' + values[i][3];

            // Agregamos todos los elementos al div de producto
            consulta.appendChild(doctorName);
            consulta.appendChild(fechaDisp);
            consulta.appendChild(horario);
            consulta.appendChild(especialidad);

            // Agregamos el producto a la lista
            lista.appendChild(consulta);
        }
    });
});
 
