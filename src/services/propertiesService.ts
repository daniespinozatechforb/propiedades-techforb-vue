import type { Propiedad } from '@/models/interfaces/Propiedad.model'

export const searchProperties = async (params: Record<string, string>) => {
  const baseUrl = 'https://propiedades-techforb-nestjs-production.up.railway.app/propiedades'

  const queryParams = new URLSearchParams(
    Object.entries(params).reduce(
      (acc, [key, value]) => {
        if (value?.trim()) acc[key] = value.trim()
        return acc
      },
      {} as Record<string, string>,
    ),
  )

  const url = `${baseUrl}?${queryParams.toString()}`

  console.log(url)

  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`Error en la solicitud: ${response.status}`)
    return await response.json()
  } catch (error) {
    console.error('❌ Error al buscar propiedades:', error)
    throw error
  }
}

export const getAllProperties = async (): Promise<Propiedad[]> => {
  const url = 'https://propiedades-techforb-nestjs-production.up.railway.app/propiedades'

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('❌ Error al obtener todas las propiedades:', error)
    throw error
  }
}
