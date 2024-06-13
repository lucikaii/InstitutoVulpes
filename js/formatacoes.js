'use strict'


 export function formatarData(dataString) {
    const data = new Date(dataString);
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();




    return `${dia}/${mes}/${ano}`;
}


export function formatarCep(cep){




  const cepString = cep
  const cepfirst = cepString.substr(0,5)
  const ceplast = cepString.substr(5,7)




 return `${cepfirst}-${ceplast}`  
}
