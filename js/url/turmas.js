'use strict'


export async function getTurmas(){
   
    const url = 'https://vulpes-back.onrender.com/v1/Vulpes/Turma'
    const response = await fetch(url)
    const data = await response.json()
    return data.turma
}


export async function getTurmaAlunos(id){


    const url = `https://vulpes-back.onrender.com/v1/Vulpes/Alunos/Turma/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}
