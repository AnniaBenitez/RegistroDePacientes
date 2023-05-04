const ACCESS_TOKEN =
  "ya29.a0AWY7CklZwRjMPMw7WZhgEc9ROkRWoBja8MkIoPazZSKiaHoMkKM1J2s-QXZFcF70HrrNOgGyUUUuU5IBBoXciCCrdKm_cpg6ZOfhZcBTbW3vT-tRiZJwqBGz0wr4tqx_oAqxc0JIlAsGRSemKVyMkxjHSbTJ7EgaCgYKAS0SARESFQG1tDrp86ExCfAXKLdQjnIrZK6M7w0166";
 
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
 





let date
// let imageUrl

const url = `https://sheets.googleapis.com/v4/spreadsheets/1Se6P1VkG8IlgK2N6TzphvumLt13yNMOBjEITNfKToko/values/enEspera`
//const url2 = 'https://jsonplaceholder.typicode.com/todos/1'
const getApi = async () => {
  const resp = await fetch(url
    ,{
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
    },    
})
    const respuesta = await resp.json()
 // return respuesta
    date = respuesta.Nombre
//   imageUrl = respuesta.url
    console.log('dfhghg')
}

getApi().then(() => {
  const dateElement = document.getElementById('h1')
  //const imageUrlElement = document.getElementById('imagenUrl')
  dateElement.innerHTML += 
  console.log(date)
  //imageUrlElement.src = imageUrl
})

