const ACCESS_TOKEN =
  "ya29.a0AWY7Cklx-ypK1rWo3CQEeEMPujpfR6chhxMqF13c2DSE1AqnbycGm5TTRjy25pKIMFtPYYuNb-6IgIz6jnlaSvc8A_uCh0jXjzlw-DvpnBvwnmLiND4ZdwXX9n7CqOGbBXS5_AWkW6WcXrKxomWUgFipct1NaCgYKAVISARESFQG1tDrpbnvMany_FE6gskNTSF-i5g0163";
 
const SHEET_ID = '1Se6P1VkG8IlgK2N6TzphvumLt13yNMOBjEITNfKToko';

document.getElementById('fecha').valueAsDate = new Date();

function onRegistrarDato(){

    //Se obtienen los datos
    const NOMBRE = document.getElementById('nombre').value;
    const APELLIDO = document.getElementById('apellido').value;
    const DOCTOR = document.getElementById('doctor').value;
    const FECHA = document.getElementById('fecha').value;
    const HORARIOS = document.getElementById('horarios').value;
    const OBS = document.getElementById('obs').value;

    if(NOMBRE == null || APELLIDO == null || DOCTOR == 'Seleccionar' || FECHA == 'Seleccionar' || OBS == null){
        alert('Debe completar todos los datos!!');
        return;
    }
    else{
        let data = {};
        let values = [];
        let fila = [NOMBRE, APELLIDO, FECHA, HORARIOS, DOCTOR, OBS, false];
        
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
        
            });
        });
        window.location.reload();
    }

    
}