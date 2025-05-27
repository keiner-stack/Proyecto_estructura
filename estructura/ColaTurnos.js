// js/estructuras/ColaTurnos.js
export class ColaTurnos {
  constructor() {
    this.turnos = [];
  }

  enqueue(turno) {
    this.turnos.push(turno);
  }

  dequeue() {
    return this.turnos.shift();
  }

  get length() {
    return this.turnos.length;
  }
}