'use strict'




// IMPORTS
import { getAlunos } from '../js/url/aluno.js'
import { formatarCep, formatarData } from './formatacoes.js'




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
        const rowMiddle = document.createElement('div')
        rowFirst.classList.add('row')
        rowLast.classList.add('row')
        rowMiddle.classList.add('row')
        rightColumn.appendChild(rowFirst)
        rightColumn.appendChild(rowMiddle)
        rightColumn.appendChild(rowLast)




        const dataNascTitle = document.createElement('span')
        dataNascTitle.textContent = `Data de nascimento:`
        const dataNasc = document.createElement('span')
        dataNasc.textContent = formatarData(aluno.data_nascimento)
        rowFirst.appendChild(dataNascTitle)
        rowFirst.appendChild(dataNasc)




        const cepTitle = document.createElement('span')
        cepTitle.textContent = `Cep:`
        const cep = document.createElement('span')
        cep.textContent = formatarCep(aluno.cep)
        rowMiddle.appendChild(cepTitle)
        rowMiddle.appendChild(cep)




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
        card.addEventListener('click', () => {
            alert('funciona')
        })




    })
}
