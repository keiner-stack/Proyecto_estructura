export class ColaTurnos {
  constructor() {
    this.turnos = [];
  }

  agregar(turno) {
    this.turnos.push(turno);
  }

  siguiente() {
    return this.turnos.shift();
  }

  mostrar() {
    return [...this.turnos]; // Copia para no modificar original
  }
}