'use strict'

import { getAvisos } from './url/aviso.js'

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('comunicados-id')

  preencherContainer(container)
})

async function preencherContainer (container) {
  const avisos = await getAvisos()

  avisos.forEach(aviso => {

    const comunicadoDiv = document.createElement('div')
    comunicadoDiv.className = 'comunicado'

    const comunicadoBodyDiv = document.createElement('div')
    comunicadoBodyDiv.className = 'comunicado-body'

    const comunicadoTitle = document.createElement('h5')
    comunicadoTitle.className = 'comunicado-title'
    comunicadoTitle.textContent = aviso.titulo

    const comunicadoText = document.createElement('p')
    comunicadoText.textContent = aviso.conteudo

    const checkboxContainerDiv = document.createElement('div')
    checkboxContainerDiv.className = 'checkbox-container'

    const vistoCheckbox = document.createElement('input')
    vistoCheckbox.type = 'checkbox'
    vistoCheckbox.id = 'visto-checkbox'
    vistoCheckbox.onchange = function () {
      toggleCheckbox(this)
    }

    const vistoLabel = document.createElement('label')
    vistoLabel.htmlFor = 'visto-checkbox'
    vistoLabel.textContent = 'Não Visto'

    const dateBoxDiv = document.createElement('div')
    dateBoxDiv.className = 'date-box'
    dateBoxDiv.textContent = formatarData(aviso.data_publicacao)

    comunicadoBodyDiv.appendChild(comunicadoTitle)
    comunicadoBodyDiv.appendChild(comunicadoText)

    checkboxContainerDiv.appendChild(vistoCheckbox)
    checkboxContainerDiv.appendChild(vistoLabel)

    comunicadoDiv.appendChild(comunicadoBodyDiv)
    comunicadoDiv.appendChild(checkboxContainerDiv)
    comunicadoDiv.appendChild(dateBoxDiv)

    container.appendChild(comunicadoDiv)

  })
}

function formatarData (dataString) {
    const data = new Date(dataString)
    const dia = data.getDate().toString().padStart(2, '0')
    const mes = (data.getMonth() + 1).toString().padStart(2, '0')
    const ano = data.getFullYear()
  
    return `${dia}/${mes}/${ano}`
  }
  