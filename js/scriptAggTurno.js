const ACCESS_TOKEN =
  "ya29.a0AWY7CkmYpC-KjYcnd6uWCNLeOelt7JgBPms1xUwspodUAgBlTHImg_Cs5DvSl-CgZbvMHHy_JX3zB-3givdT1VkOcQpHMG8BZDd0i7LtmthtZHLu2RbxPNBINX5WTWSyG5LFYPHxbX9OiHCRR88LB_8KKE8ssBAaCgYKASYSARESFQG1tDrpmYKJbl1ECONjBpXcI4sznw0166";
 
const SHEET_ID = '1Se6P1VkG8IlgK2N6TzphvumLt13yNMOBjEITNfKToko';

document.getElementById('fecha').valueAsDate = new Date();

function onRegistrarDato(){

    //Se obtienen los datos
    let NOMBRE = document.getElementById('nombre').value;
    let APELLIDO = document.getElementById('apellido').value;
    let DOCTOR = document.getElementById('doctor').value;
    let FECHA = document.getElementById('fecha').value;
    //let HORARIOS = document.getElementById('horarios').value;
    let OBS = document.getElementById('obs').value;

    if(NOMBRE == null || APELLIDO == null || DOCTOR == 'Seleccionar' || FECHA == 'Seleccionar' || OBS == null){
        alert('Debe completar todos los datos!!');
        return;
    }
    else{
        let data = {};
        let values = [];
        let fila = [NOMBRE, APELLIDO, FECHA, /*HORARIOS,*/ DOCTOR, OBS, false];
        
        values.push(fila);
        data.range = "enEspera";
        data.majorDimension = "ROWS";
        data.values = values;

        fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/enEspera:append?valueInputOption=USER_ENTERED`,
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
        //const lista2 = document.getElementById('horarios');  
    
        for (var i = 1; i < values.length; i++) {

            const doctor = document.createElement("option");            
            doctor.className =  "opcionDoc";
            doctor.innerHTML = 'Dr. ' + values[i][0]; 
            lista.appendChild(doctor);
        }        
    });
});

