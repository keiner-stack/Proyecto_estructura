// js/mascotas.js
import { ListaMascotas } from './estructuras/ListaMascotas.js';
import { PilaHistorial } from './estructuras/PilaHistorial.js';

export const listaMascotas = new ListaMascotas();

// Ejemplo de uso integrado
export function agregarMascota(nombre, dueño) {
  const nuevaMascota = {
    id: Date.now(),
    nombre,
    dueño,
    historial: new PilaHistorial() // Usamos la Pila aquí
  };
  
  listaMascotas.agregar(nuevaMascota);
  return nuevaMascota;
}