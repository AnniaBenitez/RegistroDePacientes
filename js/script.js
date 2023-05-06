const ACCESS_TOKEN =
  "ya29.a0AWY7Cknj5-S-Ai9qWYFqrB3LfjhBHuKrooUUg05IpemT8HpLCar2Xgc3FdLOv0kuh09DUWEE-xy7wBIILblksOWvibdCyGrIOWA42XcoOcM9hVvrHcUqXfj8snh-9kDjbfB3hr3iyhTR4JWXpb2JV0Ee-BXkMhgaCgYKAXYSARESFQG1tDrpSvdyanZ9KKfVpoYIwzHB_g0166";
 
const SHEET_ID = '1Se6P1VkG8IlgK2N6TzphvumLt13yNMOBjEITNfKToko';
const fatForm = document.getElementById('formulario');
const infoPaciente = document.getElementById('infoPaciente');
const fatInfo = document.getElementById('info');
const buttonAsistencia = document.getElementById('boton');

buttonAsistencia.style.display = 'none';
const aviso = document.getElementById('botones');
let cadena = [];

const url = `https://sheets.googleapis.com/v4/spreadsheets/1Se6P1VkG8IlgK2N6TzphvumLt13yNMOBjEITNfKToko/values/consultas`
//const url2 = 'https://jsonplaceholder.typicode.com/users'



  //para agregar que si asistio o no el paciente


// Función que se ejecuta después de obtener los datos de la API
function procesarDatos(data) {
  let datt = data


  // buttonAsistencia.addEventListener('click', function(){
  //   console.log(datt[])
  // })

  function showData(event) {
    
    const obtBott = event.target.innerText;
    const getPaciente = obtBott.split(" ")[1];
    let poscPaciente;
    

    for(let i=0; i< datt.length; i++){
      

      if(datt[i][0] == getPaciente){
        poscPaciente = i
        const infoDoc = document.getElementById('doc')
        infoDoc.innerHTML = `<b>Doctor: </b> ${datt[i][4]}`
        const infoHora = document.getElementById('hora')
        infoHora.innerHTML = `<b>Fecha: </b> ${datt[i][3]}`
        const infoObs = document.getElementById('obs')
        infoObs.innerHTML = `<b>Observacion:</b> ${datt[i][5]}`
        buttonAsistencia.style.display = 'block';
      }
    }
  }



    //buttonAsistencia.addEventListener('click',() => {
      //HACER QUE LA CASILLA DESAPAREZCA AL MARCARSE COMO CONSULTADA
      //obtenerBott.style.display = 'none';
      // Agregar código para actualizar el valor en la hoja de cálculo aquí
      //fetch('https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/consultas', {
      //  method : 'DELETE',
      //  headers: {
       //   "Content-Type": "application/json",
      //    Authorization: `Bearer ${ACCESS_TOKEN}`,
      //},
      //}).then(response => console.log(response.status));



    //}) 
  //}



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


  