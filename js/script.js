const ACCESS_TOKEN =
  "ya29.a0AWY7CknUTlzgH87R8TK7pcd45WfCU4b4FYPyct5xXL15g78CXFpVDWgGzEDWm7bQ0YSvW_8y9Ic6dPFWg_QkwTW3jJCLKUuR40x8e5pPZf-S_gO1RZB8wlZfWdc_LETxqYOae0dw7MWo5gVPOQvXwYXdEFZ9aCgYKAeQSARESFQG1tDrp2C0cUX0TC8mUC3eic-lqYw0163";
 
const SHEET_ID = '1Se6P1VkG8IlgK2N6TzphvumLt13yNMOBjEITNfKToko';
const fatForm = document.getElementById('formulario')
const infoPaciente = document.getElementById('infoPaciente')
const fatInfo = document.getElementById('info')
const buttonAsistencia = document.getElementById('boton')

const url = `https://sheets.googleapis.com/v4/spreadsheets/1Se6P1VkG8IlgK2N6TzphvumLt13yNMOBjEITNfKToko/values/consultas`
//const url2 = 'https://jsonplaceholder.typicode.com/users'



  //para agregar que si asistio o no el paciente


// Función que se ejecuta después de obtener los datos de la API
function procesarDatos(data) {
  let datt = data
  if(datt[0] == undefined){

    infoPaciente.style.display = 'none'
    console.log('no funciona')
  }

  // buttonAsistencia.addEventListener('click', function(){
  //   console.log(datt[])
  // })

  function showData(event) {
    
    const obtBott = event.target.innerText;
    const getPaciente = obtBott.split(" ")[1];
    let poscPaciente
    for(let i=0; i< datt.length; i++){
      

      if(datt[i][0] == getPaciente){
        poscPaciente = i
        console.log('el i es'+i)
//        console.log('en el for'+datt[i][1])
        const infoDoc = document.getElementById('doc')
        infoDoc.innerHTML = `<b>Doctor: </b> ${datt[i][4]}`
        const infoHora = document.getElementById('hora')
        infoHora.innerHTML = `<b>Fecha: </b> ${datt[i][3]}`
        const infoObs = document.getElementById('obs')
        infoObs.innerHTML = `<b>Observacion:</b> ${datt[i][5]}`

      }
    }
    buttonAsistencia.addEventListener('click',() => {
      console.log(poscPaciente)
      console.log(datt[poscPaciente][6])
      console.log(`ahora es ${datt[poscPaciente][6]}`)
      datt[poscPaciente][6] = true
      console.log(`se cambio a ${datt[poscPaciente][6]}`)
      // Agregar código para actualizar el valor en la hoja de cálculo aquí
    }) 
  }

  for(let i=0; i< data.length; i++){

    const consulta = document.createElement('div');
    consulta.className = "buttonTwo";
    consulta.onclick = showData
    fatForm.appendChild(consulta);
    consulta.innerHTML = `<p id='texto'><b>Paciente:</b> ${data[i][0]}  ${data[i][1]} ${data[i][2]} | <b>Fecha:</b> ${data[i][3]} </p>`

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
    procesarDatos(data.values)
  })
  .catch(error => console.error(error)); 


  