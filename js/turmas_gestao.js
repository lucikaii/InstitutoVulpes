'use script'


import { getTurmas, getTurmaAlunos } from '../js/url/turmas.js'
import { formatarData } from './formatacoes.js'


document.addEventListener('DOMContentLoaded', () =>{

  const main = document.querySelector('main')
  preencherCardTurmas(main)
})

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




const preencherCardTurmas = async function(main){


  const turmas = await getTurmas()


  turmas.forEach( async turma => {


    const idTurma = turma.id
    console.log(idTurma)


    const quantidadeTurma = await getTurmaAlunos(idTurma)
   
    const card = document.createElement('div')
    card.classList.add('class-box')


    const rowTop = document.createElement('row')
    rowTop.classList.add('row')


    const classInfo = document.createElement('div')
    classInfo.classList.add('class-info')
    const classTitle = document.createElement('span')
    classTitle.textContent = `Turma:`
    const classValue = document.createElement('span')
    classValue.textContent = `${turma.nome}`
    classInfo.appendChild(classTitle)
    classInfo.appendChild(classValue)
    rowTop.appendChild(classInfo)


    const studentQttInfo = document.createElement('div')
    studentQttInfo.classList.add('class-info')
    const studentQttTitle = document.createElement('span')
    studentQttTitle.textContent = `Quantidade de alunos:`
    const studentQttValue = document.createElement('span')
    if(quantidadeTurma.quantidade == null || quantidadeTurma == undefined){
      studentQttValue.textContent = `0`
    } else{
      studentQttValue.textContent = `${quantidadeTurma.quantidade}`
    }
    studentQttInfo.appendChild(studentQttTitle)
    studentQttInfo.appendChild(studentQttValue)
    rowTop.appendChild(studentQttInfo)
   
    const rowBottom = document.createElement('row')
    rowBottom.classList.add('row')






    const inicialDateInfo = document.createElement('div')
    inicialDateInfo.classList.add('class-info')
    const inicialDateTitle = document.createElement('span')
    inicialDateTitle.textContent = `Data de início:`
    const inicialDateValue = document.createElement('span')
    inicialDateValue.textContent = formatarData(turma.data_inicio)
    inicialDateInfo.appendChild(inicialDateTitle)
    inicialDateInfo.appendChild(inicialDateValue)
    rowBottom.appendChild(inicialDateInfo)


    const finalDateInfo = document.createElement('div')
    finalDateInfo.classList.add('class-info')
    const finalDateTitle = document.createElement('span')
    finalDateTitle.textContent = `Data final:`
    const finalDateValue = document.createElement('span')
    finalDateValue.textContent = formatarData(turma.data_conclusao)
    finalDateInfo.appendChild(finalDateTitle)
    finalDateInfo.appendChild(finalDateValue)
    rowBottom.appendChild(finalDateInfo)


    card.appendChild(rowTop)
    card.appendChild(rowBottom)


    card.addEventListener('click', async () =>{
      alert(idTurma)

      modal.style.display = "block";
      document.getElementById('modal-title').textContent = `${turma.nome}`

      const thead = document.getElementById('tabela')
      const students = await getTurmaAlunos(idTurma)
      console.log(students)

      document.getElementById('qtt-students').textContent = `${students.quantidade}`

      students.aluno.forEach( aluno => {

        const tr = document.createElement('tr')
        const nome = document.createElement('th')
        nome.textContent = `${aluno.nome}`
        const nChamada = document.createElement('th')
        nChamada.textContent = `1`
        const nMatricula = document.createElement('th')
        nMatricula.textContent = `${aluno.numero_matricula}`
        const dataNasc = document.createElement('th')
        dataNasc.textContent = formatarData(aluno.data_nascimento)
       
       console.log(nome);
       console.log(nMatricula);
        tr.appendChild(nome)
        tr.appendChild(nChamada)
        tr.appendChild(nMatricula)
        tr.appendChild(dataNasc)
        thead.appendChild(tr)
      })
    })
    main.appendChild(card)


  })
}
