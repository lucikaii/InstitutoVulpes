'use strict';

import { getProfessores } from '../js/url/professores.js'

document.addEventListener('DOMContentLoaded', async () => {
  const professorList = document.getElementById('professor-list')
  professorList.innerHTML = ''

  const professores = await getProfessores()

  professores.forEach(professor => {
    const professorCard = document.createElement('div')
    professorCard.className = 'professor-card bg-warning text-dark p-3 m-2 rounded d-flex align-items-center justify-content-between'

    const professorName = document.createElement('h5')
    professorName.textContent = professor.nome

    const disciplinaButton = document.createElement('button')
    disciplinaButton.className = 'btn btn-warning'
    disciplinaButton.textContent = 'Disciplina'
    disciplinaButton.style.backgroundColor = '#FF9E00' 

    professorCard.appendChild(professorName)
    professorCard.appendChild(disciplinaButton)

    professorList.appendChild(professorCard)
  })
})




