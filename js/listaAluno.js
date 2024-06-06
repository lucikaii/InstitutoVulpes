import { getAlunos } from '../js/url/aluno.js'

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const alunos = await getAlunos()
        const tbody = document.querySelector('table tbody')
        tbody.innerHTML = ''

        alunos.forEach(aluno => {
            const tr = document.createElement('tr')
            const tdNome = document.createElement('td')
            const tdMatricula = document.createElement('td')
            const tdNota = document.createElement('td') 

            tdNome.textContent = aluno.nome
            tdMatricula.textContent = aluno.numero_matricula

            const inputNota = document.createElement('input')
            inputNota.type = 'number'
            inputNota.classList.add('form-control', 'form-control-sm', 'input-square') 
            tdNota.appendChild(inputNota)

            tr.appendChild(tdNome)
            tr.appendChild(tdMatricula)
            tr.appendChild(tdNota) 

            tbody.appendChild(tr)
        })
    } catch (error) {
        console.error('Erro ao obter alunos:', error)
    }
})

