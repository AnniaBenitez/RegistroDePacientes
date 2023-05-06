document.getElementById('fecha').valueAsDate = new Date();

//Cuando se presiona el boton para registrar datos:
async function onRegistrarDato(){

    //Se obtienen los datos
    let NOMBRE = document.getElementById('nombre').value;
    let APELLIDO = document.getElementById('apellido').value;
    let DOCTOR = document.getElementById('doctor').value;
    let FECHA = document.getElementById('fecha').value;
    let OBS = document.getElementById('obs').value;
    let ID = document.getElementById('ID').value;

    //Se verifica que todas las casillas esten completas
    if(NOMBRE == null || APELLIDO == null || DOCTOR == 'Seleccionar' || FECHA == 'Seleccionar' || OBS == null || ID == null){
        alert('Debe completar todos los datos!!');
        return;
    }
    else{
        //si todo esta completo, se hace un array de los datos ingresados
        //y se pasa el array al api
        //Hace la peticion a la api
        try{
            await fetch('https://sheet.best/api/sheets/96f11b79-5f1e-4298-9f2f-5ef6135e0bc3',{
                method : 'POST',
                mode : 'cors',
                headers: {
                    "Content-Type": "application/json",
                },    
                body: JSON.stringify({
                    'ID' : ID,
                    'Nombre' : NOMBRE,
                    'Apellido' : APELLIDO,
                    'Fecha': FECHA,
                    'Doctor': DOCTOR,
                    'Detalle': OBS
                })
            });
         window.location.reload();
    }catch(error){
        console.log(error);
    }

    }
    
}

//Carga toda la lista de doctores en el select
window.addEventListener('load', cargarDocs());
async function cargarDocs(){
    try{
        const respuesta = await fetch('https://sheet.best/api/sheets/de6788c9-d9d2-4fb4-aa1b-01c0e5f9a0b1');
        const contenido = await respuesta.json();
        // Obtenemos el elemento del dom
        const lista = document.getElementById("doctor");      
        for (var i = 0; i < contenido.length; i++) {
            const doctor = document.createElement("option");            
            doctor.className =  "opcionDoc";
            doctor.innerHTML = contenido[i]['Nombre']; 
            lista.appendChild(doctor);
        }   
    }catch(error){
    console.log(error);
    }  
}


