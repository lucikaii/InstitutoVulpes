'use strict'

export async function getAlunos(){
    const url = 'https://vulpes-back.onrender.com/v1/Vulpes/Alunos'
    const respose = await fetch(url)
    const data = await respose.json()
    return data.alunos
}

export async function getAlunosId(id){
    const url = `https://vulpes-back.onrender.com/v1/Vulpes/Alunos/${id}`
    const respose = await fetch(url)
    const data = await respose.json()
    if (data.alunos && data.alunos.length > 0) {
        return data.alunos[0];
    } else {
        throw new Error('Aluno não encontrado');
    }
}

export async function getAlunosNome (){
    const url = `https://vulpes-back.onrender.com/v1/Vulpes/Alunos/nome`
    const respose = await fetch(url)
    const data = await respose.json()
    return data.alunos
}

export async function postAlunos(alunos) {

    const url = 'https://vulpes-back.onrender.com/v1/Vulpes/Inserir/Alunos' 
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(alunos),

    }

    const response = await fetch (url, options)

    return response.ok
}   

export async function putAlunos(id) {

    const url = `https://vulpes-back.onrender.com/v1/Vulpes/atualiza/Alunos/${id}`
    
    const options = {
        method: 'PUT',
        body: JSON.stringify(_data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
        mode: 'cors',
        redirect: 'follow',
        cache: 'default'
    };

    const response = await fetch (url, options)

    return response.ok
}   

export async function deleteAlunos(id){
    const url = `https://vulpes-back.onrender.com/v1/Vulpes/Alunos/${id}`

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