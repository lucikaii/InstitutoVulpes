// 'use strict'



export async function getProfessores() {
  const url = 'https://vulpes-back.onrender.com/v1/Vulpes/Professor'
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const contentType = response.headers.get("content-type")
    if (contentType && contentType.indexOf("application/json") !== -1) {
      const data = await response.json()
      console.log('Dados recebidos da API:', data)
      if (data && Array.isArray(data.professor)) {
        return data.professor 
      } else {
        console.error('Estrutura dos dados inesperada:', data)
        return []
      }
    } else {
      throw new Error('Resposta não é JSON')
    }
  } catch (error) {
    console.error('Erro ao buscar os dados da API:', error)
    return []
  }
}



export async function getProfessoresId(id){
    const url = `https://vulpes-back.onrender.com/v1/Vulpes/Professor/${id}`
    const respose = await fetch(url)
    const data = await respose.json()
    if (data.professores && data.professores.length > 0) {
        return data.professores[0]
    } else {
        throw new Error('Professor não encontrado')
    }
}