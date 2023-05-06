const fatForm = document.getElementById('formulario');
const infoPaciente = document.getElementById('infoPaciente');
const fatInfo = document.getElementById('info');
const aviso = document.getElementById('botones');
const hoy = new Date();

// Función que se ejecuta después de obtener los datos de la API
function procesarDatos(data) {
  //para agregar al DOM los pacientes con turno
  for(let i=0; i< data.length; i++){
    if(Date.parse(data[i]['Fecha']) > hoy){
      const consulta = document.createElement('div');
      consulta.className = "buttonTwo";      
      fatForm.appendChild(consulta);
      consulta.innerHTML = `<p id='texto'><b>Paciente:</b> ${data[i]['ID']} - ${data[i]['Nombre']} ${data[i]['Apellido']} | <b>Fecha:</b> ${data[i]['Fecha']} </p>`
      consulta.addEventListener('click', (e) => {
        let textoDiv = e.target.innerText;
        const getPaciente = textoDiv.split(" ")[1];
        for(let i=0; i< data.length; i++){
          if(data[i]['ID'] == getPaciente){
            const infoDoc = document.getElementById('doc')
            infoDoc.innerHTML = `<b>Doctor: </b> ${data[i]['Doctor']}`
            const infoHora = document.getElementById('hora')
            infoHora.innerHTML = `<b>Fecha: </b> ${data[i]['Fecha']}`
            const infoObs = document.getElementById('obs')
            infoObs.innerHTML = `<b>Observacion:</b> ${data[i]['Detalle']}`
          }}

      })
    }
  }

}

//Carga toda la lista de pacientes en el formulario
window.addEventListener('load', cargar());
async function cargar(){
    try{
        const respuesta = await fetch('https://sheet.best/api/sheets/96f11b79-5f1e-4298-9f2f-5ef6135e0bc3');
        const contenido = await respuesta.json();
        procesarDatos(contenido);
        aviso.style.display = 'none';
    }catch(error){
    console.log(error);
    }  
}

  
