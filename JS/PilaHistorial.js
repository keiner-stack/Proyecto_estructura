export class PilaHistorial {
  constructor() {
    this.registros = [];
  }

  agregar(registro) {
    this.registros.push({
      fecha: new Date().toLocaleString(),
      ...registro
    });
  }

  obtenerTodos() {
    return [...this.registros].reverse(); // Más reciente primero
  }
}