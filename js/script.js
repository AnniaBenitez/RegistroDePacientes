const ACCESS_TOKEN =
  "ya29.a0AWY7CkmFiqGL73csD7m6TMrDnPp6UOgnwojyuN8NbuXbI_i0s0u-d8zkz55nlBotxIwIVrB9XiwKs0FrBtUjeSKUWzAm_vRCKHQFI4iAzodFOFtEpeLfWbRJwBQI3mNwGwsRlijYU2Jg-19ehK5J2S4Uuh0asysaCgYKAY8SARESFQG1tDrp0iVddpi1aJMFpNZ9uFHiaw0166";
 
const SHEET_ID = '1Se6P1VkG8IlgK2N6TzphvumLt13yNMOBjEITNfKToko';
const fatForm = document.getElementById('formulario');
const infoPaciente = document.getElementById('infoPaciente');
const fatInfo = document.getElementById('info');
const aviso = document.getElementById('botones');

const url = `https://sheets.googleapis.com/v4/spreadsheets/1Se6P1VkG8IlgK2N6TzphvumLt13yNMOBjEITNfKToko/values/consultas`

// Función que se ejecuta después de obtener los datos de la API
function procesarDatos(data) {
  let datt = data
//para obtener los datos de los pacientes
  function showData(event) {
    const obtBott = event.target.innerText;
    const getPaciente = obtBott.split(" ")[1];
    //mostrar los datos mas especificos de cada paciente
    for(let i=0; i< datt.length; i++){
      if(datt[i][0] == getPaciente){
        const infoDoc = document.getElementById('doc')
        infoDoc.innerHTML = `<b>Doctor: </b> ${datt[i][4]}`
        const infoHora = document.getElementById('hora')
        infoHora.innerHTML = `<b>Fecha: </b> ${datt[i][3]}`
        const infoObs = document.getElementById('obs')
        infoObs.innerHTML = `<b>Observacion:</b> ${datt[i][5]}`
      }
    }
  }
  //para agregar al DOM los pacientes con turno
  for(let i=1; i< data.length; i++){
    if(data[i][6] == 'FALSE'){
      const consulta = document.createElement('div');
      consulta.className = "buttonTwo";
      consulta.onclick = showData
      fatForm.appendChild(consulta);
      consulta.innerHTML = `<p id='texto'><b>Paciente:</b> ${data[i][0]} - ${data[i][1]} ${data[i][2]} | <b>Fecha:</b> ${data[i][3]} </p>`
    }
  }

}
//peticion de los datos a la api
fetch(url,{
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${ACCESS_TOKEN}`,
          },    
      }
  )
  .then(response => response.json()) 
  .then(data => {
    procesarDatos(data.values);
    aviso.style.display = 'none';
  })
  .catch(error => console.error(error)); 


  