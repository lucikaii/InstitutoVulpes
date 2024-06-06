'use strict'

export async function getAlunos(){

    const url = 'https://vulpes-back.onrender.com/v1/Vulpes/Alunos'
    const response = await fetch(url)
    const data = await response.json()
    return data.alunos
}