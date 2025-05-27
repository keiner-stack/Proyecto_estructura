import { ListaMascotas } from './ListaMascotas.js';
import { ColaTurnos } from './ColaTurnos.js';
import { crearMascota } from './mascotas.js';

// Instancias globales
const lista = new ListaMascotas();
const cola = new ColaTurnos();

// Ejemplo de uso
const nuevaMascota = crearMascota("Firulais", "Juan");
lista.agregar(nuevaMascota);
cola.agregar({ mascotaId: nuevaMascota.id, hora: "10:00 AM" });

console.log("¡Estructuras cargadas!");