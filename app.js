// js/app.js
import { listaMascotas } from './mascotas.js';
import { ColaTurnos } from './estructuras/ColaTurnos.js';

const colaTurnos = new ColaTurnos();

// Registrar mascota
const mascota = agregarMascota("Firulais", "Juan");
mascota.historial.push({ diagnostico: "Vacuna antirrábica" });

// Agregar a cola de turnos
colaTurnos.enqueue({
  mascotaId: mascota.id,
  hora: "10:00 AM"
});