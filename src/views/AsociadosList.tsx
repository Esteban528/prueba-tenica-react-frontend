import { useEffect, useState } from "react";
import type { Asociado } from "../types/asociado";
import { getAsociadosByFilter } from "../services/asociadosFetcher";
import SelectFilter from "../layout/Select";


const AsociadosList = () => {
  const [asociados, setAsociados] = useState<Asociado[] | null>(null);
  const [filterKey, setFilterKey] = useState<string>("Todos");

  const options = ["Todos", "Prospecto",
    "Expediente en construcción",
    "Pendiente Jurídico",
    "Pendiente Cierre de Crédito"]


  useEffect(() => {
    getAsociadosByFilter({ property: "estado_pipeline", value: filterKey }).then(asociados => {
      setAsociados(asociados)
    })
  }, [filterKey])

  return (
    <div>
      <SelectFilter
        options={options}
        setter={setFilterKey}
      />

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Identificacion</th>
            <th>estado_pipeline</th>
          </tr>
        </thead>

        <tbody>
          {asociados?.map((asociado) => (
            <tr key={asociado.id}>
              <td>{asociado.id}</td>
              <td>{asociado.Nombre}</td>
              <td>{asociado.Identificación}</td>
              <td>{asociado.estado_pipeline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AsociadosList
