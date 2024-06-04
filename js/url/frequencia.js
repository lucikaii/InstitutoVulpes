'use strict'

export async function getFrequencias(){
    const url = 'https://vulpes-back.onrender.com/v1/Vulpes/Frequencia'
    const respose = await fetch(url)
    const data = await respose.json()
    return data.frequencia
}

export async function getFrequencia(id){
    const url = `https://vulpes-back.onrender.com/v1/Vulpes/Frequencia/${id}`
    const respose = await fetch(url)
    const data = await respose.json()
    if (data.frequencia && data.frequencia.length > 0) {
        return data.frequencia[0];
    } else {
        throw new Error('Frequência não encontrada');
    }
}
