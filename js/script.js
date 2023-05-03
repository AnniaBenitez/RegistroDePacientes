//CONSTANTES Y VARIABLES
const SHEET_ID = "1Se6P1VkG8IlgK2N6TzphvumLt13yNMOBjEITNfKToko";
const ACCESS_TOKEN =
  "ya29.a0AWY7Ckn2dofq0t8XH_y8DPsmnYpMsdskvhzQq2H9bOtavhBtIE8m1-Ax2OSxLc11Ql3lPNcoZ_2p5lFAE8ULjrCiRbKMdo1pDfSrcV1UET8RhTJyFzcvIH6fXD3Qa77N5Pxc-T5ZANoJ2XtUJKiGP0ecroaAaCgYKAQgSARESFQG1tDrpQdgi2j6muqtxP-uKYzUWWg0163";


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
