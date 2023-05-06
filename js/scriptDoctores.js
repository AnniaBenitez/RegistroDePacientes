const ACCESS_TOKEN =
'ya29.a0AWY7Ckm1ATmfKnueeqjKyKitrRvqYzUUu5k6ZhCg6h9tVO7XpW3ArDLnlGDLL9sN5XEDkAR56Zs6zJN8lqm9Bga1qbLXcmn7CoSmxEJ8XeRn7hGkumPBXL2s5oJqKZB__woP9Lj52YqXSdhmE7XS_A8xvxVL0P0aCgYKAdwSARESFQG1tDrpuFVgNQweVR8JB4203StRGQ0166'
 
const SHEET_ID = '1Se6P1VkG8IlgK2N6TzphvumLt13yNMOBjEITNfKToko';

fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/1Se6P1VkG8IlgK2N6TzphvumLt13yNMOBjEITNfKToko/values/doctores`,
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
        const lista = document.getElementById("doctores");
        const alerta = document.getElementById('alerta');
        alerta.style.display = 'none';
    
    
        for (var i = 1; i < values.length; i++) {

            const doctor = document.createElement("div");
            doctor.className =  "doctor-item";

            // Nombre del doctor en lista
            const doctorName = document.createElement("li");
            doctorName.className = "nombre doc";
            doctorName.innerHTML = values[i][0]; 
    
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
            doctor.appendChild(doctorName);
            doctor.appendChild(fechaDisp);
            doctor.appendChild(horario);
            doctor.appendChild(especialidad);

            // Agregamos el producto a la lista
            lista.appendChild(doctor);
        }
    });
});
 
