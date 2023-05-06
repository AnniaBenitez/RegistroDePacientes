//Carga toda la lista de doctores en el select
window.addEventListener('load', cargarDocs());
async function cargarDocs(){
    try{
        const respuesta = await fetch('https://sheet.best/api/sheets/de6788c9-d9d2-4fb4-aa1b-01c0e5f9a0b1');
        const contenido = await respuesta.json();
        // Obtenemos el elemento del dom
        const lista = document.getElementById("doctores");
        const alerta = document.getElementById('alerta');    
        for (var i = 0; i < contenido.length; i++) {
            const doctor = document.createElement("div");
            doctor.className =  "doctor-item";

            // Nombre del doctor en lista
            const doctorName = document.createElement("li");
            doctorName.className = "nombre doc";
            doctorName.innerHTML = contenido[i]['Nombre']; 
    
            // otros datos del doc tipo p
            const fechaDisp = document.createElement("p");
            fechaDisp.className = "fecha";
            fechaDisp.innerHTML = 'Los días: ' + contenido[i]['Days'];

            const horario = document.createElement('p');
            horario.className='horas';
            horario.innerHTML = 'De ' + contenido[i]['Horario'];
    
            const especialidad = document.createElement('p');
            especialidad.className='esp';
            especialidad.innerHTML = 'Especialidad: ' + contenido[i]['Especialidad'];

            // Agregamos todos los elementos al div de producto
            doctor.appendChild(doctorName);
            doctor.appendChild(fechaDisp);
            doctor.appendChild(horario);
            doctor.appendChild(especialidad);

            // Agregamos el producto a la lista
            lista.appendChild(doctor);            
        }   
        alerta.style.display = 'none';
    }catch(error){
    console.log(error);
    }  
}

        
       
 
