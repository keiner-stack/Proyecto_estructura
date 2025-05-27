// js/estructuras/PilaHistorial.js
export class PilaHistorial {
  constructor() {
    this.registros = [];
  }

  push(registro) {
    this.registros.push({
      ...registro,
      fecha: new Date().toISOString()
    });
  }

  pop() {
    return this.registros.pop();
  }

  peek() {
    return this.registros[this.registros.length - 1];
  }

  getAll() {
    return [...this.registros].reverse(); // Más reciente primero
  }
}