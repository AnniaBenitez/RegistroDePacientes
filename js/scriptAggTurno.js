const ACCESS_TOKEN =  "ya29.a0AWY7CklGHXHYtXrD7vjI8W-wU602ZYXAi7MvJySZV6L7UdlrIVfmDsM2r9gPuUpP_HocFBDH2MOSH32ZVddf5kgLz6Il6FMiQsAxOAqEIVXGBosd0Uj30S-O98BBzWEmOAdindkfK7SQYoFMPJJOdhMN8BFWrLIaCgYKAXMSARESFQG1tDrp0jh8fXhVvdhzHgr-BUFRdg0166";
 
const SHEET_ID = '1Se6P1VkG8IlgK2N6TzphvumLt13yNMOBjEITNfKToko';

document.getElementById('fecha').valueAsDate = new Date();

//Cuando se presiona el boton para registrar datos:
function onRegistrarDato(){

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
        let data = {};
        let values = [];
        let fila = [ID, NOMBRE, APELLIDO, FECHA, DOCTOR, OBS, false];
        
        values.push(fila);
        data.range = "consultas";
        data.majorDimension = "ROWS";
        data.values = values;

        //Hace la peticion a la api
        fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/consultas:append?valueInputOption=USER_ENTERED`,
            {
            method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${ACCESS_TOKEN}`,
                },
            body: JSON.stringify(data)
            }
        ).then(function (response) {
            response.json().then(function (data) {
                window.location.reload();
            });
        });
        
    }
    
}

//Se rellena el select con los nombres de los doctores 
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
        const lista = document.getElementById("doctor");   
    
        for (var i = 1; i < values.length; i++) {
            const doctor = document.createElement("option");            
            doctor.className =  "opcionDoc";
            doctor.innerHTML = values[i][0]; 
            lista.appendChild(doctor);
        }        
    });
});

