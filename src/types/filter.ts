import type { Asociado } from "./asociado";

export type AsociadoFilter = {
  property: keyof Asociado;
  value: string
}
