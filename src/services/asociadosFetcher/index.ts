import type { Asociado } from "../../types/asociado"
import type { AsociadoFilter } from "../../types/filter"

const API_URL = "https://raw.githubusercontent.com/managerrojo/COAVANCOL-Prueba-T-cnica-/refs/heads/main/IndexAsociados"

export const getAsociados = async (): Promise<Asociado[]> => {
  const response = await fetch(API_URL)
  return response.json() as Promise<Asociado[]>

}

export const getAsociadosByFilter = async (filter: AsociadoFilter): Promise<Asociado[]> => {
  const allAsociados = await getAsociados()
  if (filter.value == "Todos") {
    return allAsociados
  }

  return allAsociados.filter(value =>
    value[filter.property] == filter.value
  )
}
