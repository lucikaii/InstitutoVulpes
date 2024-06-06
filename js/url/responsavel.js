'use strict'

export async function getResponsaveis(){
    const url = 'https://vulpes-back.onrender.com/v1/Vulpes/Responsavel'
    const respose = await fetch(url)
    const data = await respose.json()
    return data.alunos
}

export async function getResponsavel(id){
    const url = `https://vulpes-back.onrender.com/v1/Vulpes/Responsavel/${id}`
    const respose = await fetch(url)
    const data = await respose.json()
    if (data.alunos && data.alunos.length > 0) {
        return data.alunos[0];
    } else {
        throw new Error('Aluno não encontrado');
    }
}

export async function getResponsavelNome (){
    const url = `https://vulpes-back.onrender.com/v1/Vulpes/Responsavel/nome`
    const respose = await fetch(url)
    const data = await respose.json()
    return data.alunos
}


export async function deleteResponsavel(id){
    const url = `https://vulpes-back.onrender.com/v1/Vulpes/Responsavel/${id}`

    const options = {
        method: 'DELETE',
        headers: { "Content-type": "application/json; charset=UTF-8" },
        mode: 'cors',
        redirect: 'follow',
        cache: 'default'
    };

    const response = await fetch (url, options)
    return response.ok
    
}