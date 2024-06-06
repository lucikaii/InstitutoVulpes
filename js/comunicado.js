'use strict'

import { getComunicados } from "./url/comunicado";

document.addEventListener('DOMContentLoaded', function(){

    const container = document.getElementById('container-boletim');

    preencherContainer(container);
    
})


async function preencherContainer(container){

    const disciplinas = await getDisciplinas();
    const frequencia = await getFrequencias();

    disciplinas.forEach(disciplina => {
        
        let cardBoletim = document.createElement('tr')

        let disciplinaCard = document.createElement('td')
        disciplinaCard.dataset.id = disciplina.id
        disciplinaCard.textContent = disciplina.nome

        let notaCard = document.createElement('td')
        notaCard.textContent = 0

        let frequenciaCard = document.createElement('td')
        frequenciaCard.dataset.id = frequencia.id
        frequenciaCard.textContent = frequencia.dia_letivo

        let resultadoFinalCard = document.createElement('td')

        if(notaCard.textContent > 7){
            resultadoFinalCard.textContent = 'Aprovado'
            resultadoFinalCard.classList.add('verde')
        } else{
            resultadoFinalCard.textContent = 'Reprovado'
            resultadoFinalCard.classList.add('vermelho')
        }

        cardBoletim.appendChild(disciplinaCard);
        cardBoletim.appendChild(notaCard);
        cardBoletim.appendChild(frequenciaCard);
        cardBoletim.appendChild(resultadoFinalCard);

        container.appendChild(cardBoletim)

    });
}