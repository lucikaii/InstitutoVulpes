'use strict'

import { getComunicados } from './url/comunicado.js'

const userId = localStorage.getItem('userId')

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('container')

  preencherContainer(container)
})

async function preencherContainer (container) {
  const comunicados = await getComunicados()

  comunicados.forEach(comunicado => {

    if (userId == comunicado.id_responsavel) {

      const dateParagraph = document.createElement('p')
      dateParagraph.className = 'date'
      dateParagraph.textContent = formatarData(comunicado.data_publicacao)

      const comunicadoDiv = document.createElement('div')
      comunicadoDiv.className = 'comunicado'

      const comunicadoTitle = document.createElement('h5')
      comunicadoTitle.className = 'comunicado-title'
      comunicadoTitle.textContent = comunicado.titulo

      const comunicadoBody = document.createElement('p')
      comunicadoBody.className = 'comunicado-body'
      comunicadoBody.textContent = comunicado.conteudo

      const contactText = document.createElement('p')
      contactText.className = 'contact-text'
      contactText.textContent =
        'Alguma dúvida? Entre em contato com a nossa gestão.'

      comunicadoDiv.appendChild(comunicadoTitle)
      comunicadoDiv.appendChild(comunicadoBody)
      comunicadoDiv.appendChild(contactText)

      container.appendChild(dateParagraph)
      container.appendChild(comunicadoDiv)

    }

  });
  
}

function formatarData (dataString) {
  const data = new Date(dataString)
  const dia = data.getDate().toString().padStart(2, '0')
  const mes = (data.getMonth() + 1).toString().padStart(2, '0')
  const ano = data.getFullYear()

  return `${dia}/${mes}/${ano}`
}
