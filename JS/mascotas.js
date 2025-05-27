import { PilaHistorial } from './PilaHistorial.js';

export function crearMascota(nombre, dueño) {
  return {
    id: Date.now(),
    nombre,
    dueño,
    historial: new PilaHistorial()
  };
}