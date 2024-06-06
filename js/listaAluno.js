import { getAlunos } from './alunos.js'

        document.addEventListener('DOMContentLoaded', async () => {
            try {
                const alunos = await getAlunos();
                const tbody = document.querySelector('table tbody')
                tbody.innerHTML = ''

                alunos.forEach(aluno => {
                    const tr = document.createElement('tr')
                    const tdNome = document.createElement('td')
                    const tdMatricula = document.createElement('td')

                    tdNome.textContent = aluno.nome
                    tdMatricula.textContent = aluno.matricula

                    tr.appendChild(tdNome)
                    tr.appendChild(tdMatricula)

                    tbody.appendChild(tr)
                })
            } catch (error) {
                console.error('Erro ao obter alunos:', error)
            }
        })