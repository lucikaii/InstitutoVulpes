'use strict'

export async function getDisciplinas(){
    const url = 'https://vulpes-back.onrender.com/v1/Vulpes/Disciplina'
    const respose = await fetch(url)
    const data = await respose.json()
    return data.disciplina
}

export async function getDisciplina(id){
    const url = `https://vulpes-back.onrender.com/v1/Vulpes/Disciplina/${id}`
    const respose = await fetch(url)
    const data = await respose.json()
    if (data.disciplina && data.disciplina.length > 0) {
        return data.disciplina[0];
    } else {
        throw new Error('Disciplina não encontrada');
    }
}

//BACK NÃO TERMINADO
export async function postDisciplina(disciplina) {

    const url = 'https://vulpes-back.onrender.com/v1/Vulpes/Disciplina/' 
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(disciplina),

    }

    const response = await fetch (url, options)

    return response.ok
}   

//BACK NÃO TERMINADO
export async function putDisciplina(id) {

    const url = `https://vulpes-back.onrender.com/v1/Vulpes/Disciplina/${id}`
    
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

export async function deleteDisciplinas(id){
    const url = `https://vulpes-back.onrender.com/v1/Vulpes/Disciplina/${id}`

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