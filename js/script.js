//CONSTANTES Y VARIABLES
const SHEET_ID = "1Se6P1VkG8IlgK2N6TzphvumLt13yNMOBjEITNfKToko";
const ACCESS_TOKEN =
  "ya29.a0AWY7Cknx3scZNxJrXPT_TBsaIMMgre6BiomVv-V70xIOJ0eTorU4TAF-AMLc72gAY2nLEbHza3EucvSHLwwVHsHaVlgPf-sPN8akQt6JhY_7E0qrgCghH4BP8aGkych3z27FLc5nKiO4gI16Zqj4EF-2HMX0aCgYKAWMSARESFQG1tDrpK-_YNqpTsYyiiYjzVn9KTA0163";


//Se obtiene la API del listado de pacientes que pidieron consulta
fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/enEspera`,
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
    console.log(values);
    
    });
});
