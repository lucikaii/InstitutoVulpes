'use strict'

export async function getComunicados(){
    const url = 'https://vulpes-back.onrender.com/v1/Vulpes/Comunicados'
    const respose = await fetch(url)
    const data = await respose.json()
    return data.alunos
}

export async function getComunicadoId(id){
    const url = `https://vulpes-back.onrender.com/v1/Vulpes/Comunicados/${id}`
    const respose = await fetch(url)
    const data = await respose.json()
    if (data.alunos && data.alunos.length > 0) {
        return data.alunos[0];
    } else {
        throw new Error('Aluno não encontrado');
    }
}

export async function getComunicadosNome (){
    const url = `https://vulpes-back.onrender.com/v1/Vulpes/Comunicados/nome`
    const respose = await fetch(url)
    const data = await respose.json()
    return data.alunos
}