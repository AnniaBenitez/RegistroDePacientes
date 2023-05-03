const ACCESS_TOKEN =
  "ya29.a0AWY7CkmsnvUPfayj0lUL83vBtTiY-RJxm52lpecj24EauYKDDVwxTQWgn9J5MbLEfxXTy23n7_-NH_Um0dq8VCHrvNUe2awC4wzwuVWVLruH_MC7jIiqfg0S_nQ1XePVF4PGQWC_35x37quQvNWPiWL_19u7aCgYKAR4SARESFQG1tDrp0TzW6QG5VRAxkQLrGdtdRw0163";
 
const SHEET_ID = '1Se6P1VkG8IlgK2N6TzphvumLt13yNMOBjEITNfKToko';

function onRegistrarDato(){

    //Se obtienen los datos
    const NOMBRE = document.getElementById('nombre').value;
    const APELLIDO = document.getElementById('apellido').value;
    const DOCTOR = document.getElementById('doctor').value;
    const FECHA = document.getElementById('fecha').value;
    const HORARIOS = document.getElementById('horarios').value;
    const OBS = document.getElementById('obs').value;

    let data = {};
    let values = [];
    let fila = [NOMBRE, APELLIDO, FECHA, HORARIOS, DOCTOR, OBS, false];
    
    values.push(fila);
    data.range = "enEspera";
    data.majorDimension = "ROWS";
    data.values = values;

    fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/1Se6P1VkG8IlgK2N6TzphvumLt13yNMOBjEITNfKToko/values/enEspera!A1:Z1000`,
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
            console.log('la api responde');
        });
    });

    window.location.reload();
}