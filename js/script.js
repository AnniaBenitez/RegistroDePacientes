const ACCESS_TOKEN =
  "ya29.a0AWY7CknmBFy9tD-sMPfcmlZ0FRLw9e1nSgWaK0VF-59yHq0luZO4UZlf2MgyjJ8NOq8gw8gCRWGkdBd8qSDCgKznmi-qnoxs791LYCxseU8SgFEEW6XFKC-YBCLXRDQh1h5_n3jFPr9ywA5AiQF80arToT381RUaCgYKAcgSARESFQG1tDrp8B7wwI9xlurXJ1vUcPjptQ0166";
 
const SHEET_ID = '1Se6P1VkG8IlgK2N6TzphvumLt13yNMOBjEITNfKToko';






const fatForm = document.getElementById('formulario')
const fatInfo = document.getElementById('info')



const url = `https://sheets.googleapis.com/v4/spreadsheets/1Se6P1VkG8IlgK2N6TzphvumLt13yNMOBjEITNfKToko/values/consultas`
//const url2 = 'https://jsonplaceholder.typicode.com/users'

// Función que se ejecuta después de obtener los datos de la API
function procesarDatos(data) {
  let datt = data


  //para agregar que si asistio o no el paciente
  function pacAsistio() {
    
  }

  function showData(event) {
    const obtBott = event.target.innerText;
    const getPaciente = obtBott.split(" ")[1];
    for(let i=0; i< datt.length; i++){
      if(datt[i][1] == getPaciente){
//        console.log('en el for'+datt[i][1])
        const infoDoc = document.getElementById('doc')
        infoDoc.innerHTML = `<b>Doctor: </b> ${datt[i][4]}`
        const infoHora = document.getElementById('hora')
        infoHora.innerHTML = `<b>Fecha: </b> ${datt[i][3]}`
        const infoObs = document.getElementById('obs')
        infoObs.innerHTML = `<b>Observacion:</b> ${datt[i][5]}`
      }
    }  
  }

  for(let i=0; i< data.length; i++){

    // console.log('en el for ya'+data[i][0])

    const consulta = document.createElement('div');
    consulta.className = "buttonTwo";
    consulta.onclick = showData
    fatForm.appendChild(consulta);
    consulta.innerHTML = `<b>Paciente:</b> ${data[i][1]} ${data[i][2]} | <b>Fecha:</b> ${data[i][3]}`
    //consulta.innerHTML = ` <p id='texto'>${data[i].name}</p>`
  }

}

fetch(url,{
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${ACCESS_TOKEN}`,
          },    
      }
  )
  .then(response => response.json()) 
  .then(data => {

    // for(let i=0; i< data.values.length; i++){
    //   console.log('paso')
    //   console.log(data.values[i][0])
    // }


    procesarDatos(data.values)
  })
  .catch(error => console.error(error)); 


  