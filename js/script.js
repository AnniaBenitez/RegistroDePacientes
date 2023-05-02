//CONSTANTES Y VARIABLES
const SHEET_ID = "1Se6P1VkG8IlgK2N6TzphvumLt13yNMOBjEITNfKToko";
const ACCESS_TOKEN =
  "ya29.a0AWY7CknSjNJ_56TsZrXZ7OvB-SeTpgyu-q0g4HTyrI40Gf4eSqHpX4yhqPM9oexjHm7rV4QL6FRHgdRnxkMHcW0s2iCRuSpZy_qaJrRnIRcLC8lQYaOiAm_x626CpTDQDY3XeZ51g4MSrlROtunn-rt13uCzaCgYKAQ0SARESFQG1tDrp9UdvmRaXiJ4Esvw0Ae1iDg0163";


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
