const ACCESS_TOKEN =
  "ya29.a0AWY7CknmBFy9tD-sMPfcmlZ0FRLw9e1nSgWaK0VF-59yHq0luZO4UZlf2MgyjJ8NOq8gw8gCRWGkdBd8qSDCgKznmi-qnoxs791LYCxseU8SgFEEW6XFKC-YBCLXRDQh1h5_n3jFPr9ywA5AiQF80arToT381RUaCgYKAcgSARESFQG1tDrp8B7wwI9xlurXJ1vUcPjptQ0166";
 
const SHEET_ID = '1Se6P1VkG8IlgK2N6TzphvumLt13yNMOBjEITNfKToko';

// fetch(
//     `https://sheets.googleapis.com/v4/spreadsheets/1Se6P1VkG8IlgK2N6TzphvumLt13yNMOBjEITNfKToko/values/enEspera`,
//     {
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${ACCESS_TOKEN}`,
//         },    
//     }
// ).then(function (response) {
//     //esperamos el json del response para poder utilizarlo
//     response.json().then(function (data) {
//         const values = data.values;
        
    
//         // Obtenemos el elemento del dom
//         const lista = document.getElementById("formulario");
//         const alerta = document.getElementById('botones');
//         alerta.style.display = 'none';
    
//       //Se ordenan los elementos por fecha y hora 
//         for(var i=0; i<values.length; i++){
          
//         }

// // nombre 
// // Fecha


//     // let intento = document.getElementById('guess-input').value
//     // CONTENEDOR.innerHTML = ``
//     //     const GRID = document.getElementById('cuadro')
//     //     const ROW = document.createElement('div')
//     //     ROW.className = 'row'
//     //     for (let i in palabra){
//     //         const SPAN = document.createElement('span')
//     //         SPAN.className = 'letter'
//     //         SPAN.innerHTML = INTENTO[i]
//     //         if(INTENTO[i] == palabra[i]){
//     //             SPAN.style.backgroundColor = "#79b851"
//     //         }else if(palabra.includes(INTENTO[i])){
//     //             SPAN.style.backgroundColor = "yellow"
//     //         }else{
//     //             SPAN.style.backgroundColor = "gray"
//     //         }
//     //         GRID.appendChild(SPAN)
//     //     }
//     //     GRID.appendChild(ROW)

//         values.map(a => 
//             console.log(a)
            
//         )
        
//         console.log('prueba')
//         for (var i = 1; i < values.length; i++) {
            
//             const formulario = document.getElementById('formulario')
//             const consulta = document.createElement("div");
//             formulario.appendChild(consulta)
//             consulta.className =  "consulta-item";
//             consulta.innerHTML += 'Hola mundo'
            
//             // Nombre del doctor en lista
//             // const name = document.createElement("div");
//             // name.className = "casilla";
//             // doctorName.innerHTML = 'Paciente: NOMBRE APELLIDO - FECHA HORA'; 
    

//             // Agregamos todos los elementos al div de producto
//             //consulta.appendChild(name);

//             // Agregamos el producto a la lista
//             //lista.appendChild(consulta);
//         }
//     });
// });
 




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


  