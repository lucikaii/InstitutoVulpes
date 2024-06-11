'use strict'

export async function getAvisos(){
    const url = 'https://vulpes-back.onrender.com/v1/Vulpes/Aviso'
    const respose = await fetch(url)
    const data = await respose.json()
    return data.aviso
}
