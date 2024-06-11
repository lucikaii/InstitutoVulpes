'use strict'

// IMPORTS
import { getAlunos } from '../js/url/alunos.js'

document.addEventListener('DOMContentLoaded', () =>{
    const main = document.querySelector('main')
    preencherCardAlunos(main)
})

const preencherCardAlunos = async function(main){

    const alunos = await getAlunos()

    alunos.forEach( aluno => {
        
        const card = document.createElement('div')
        card.classList.add('student-box')

        const img = document.createElement('img')
        img.src = '../img/noimage.png'
        img.alt = 'no-image'

        const leftColumn = document.createElement('div')
        leftColumn.classList.add('left-column')
        const name = document.createElement('span')
        name.textContent = `${aluno.nome}`
        const turma = document.createElement('span')
        turma.textContent = `3°B do Ensino Médio`
        leftColumn.appendChild(name)
        leftColumn.appendChild(turma)

        const rightColumn = document.createElement('div')
        rightColumn.classList.add('right-column')
        const rowFirst = document.createElement('div')
        const rowLast = document.createElement('div')
        rowFirst.classList.add('row')
        rowLast.classList.add('row')
        rightColumn.appendChild(rowFirst)
        rightColumn.appendChild(rowLast)

        const dataNascTitle = document.createElement('span')
        dataNascTitle.textContent = `Data de nascimento:`
        const dataNasc = document.createElement('span')
        dataNasc.textContent = formatarData(aluno.data_nascimento)
        rowFirst.appendChild(dataNascTitle)
        rowFirst.appendChild(dataNasc)

        const numMatriculaTitle = document.createElement('span')
        numMatriculaTitle.textContent = `Número de Matrícula:`
        const numMatricula = document.createElement('span')
        numMatricula.textContent = `${aluno.numero_matricula}`
        
        rowLast.appendChild(numMatriculaTitle)
        rowLast.appendChild(numMatricula)

        card.appendChild(img)
        card.appendChild(leftColumn)
        card.appendChild(rightColumn)
        main.appendChild(card)

    })
}

function formatarData(dataString) {
    const data = new Date(dataString);
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
}
var btn = document.querySelector(".new-class-button");
var modal = document.getElementById("myModal");

btn.onclick = function() {
  modal.style.display = "block";
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}