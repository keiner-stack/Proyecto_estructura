// js/estructuras/ListaMascotas.js
export class NodoMascota {
  constructor(mascota) {
    this.mascota = mascota;
    this.next = null;
    this.prev = null;
  }
}

export class ListaMascotas {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  agregar(mascota) {
    const nuevoNodo = new NodoMascota(mascota);
    if (!this.head) {
      this.head = nuevoNodo;
    } else {
      nuevoNodo.prev = this.tail;
      this.tail.next = nuevoNodo;
    }
    this.tail = nuevoNodo;
    this.size++;
  }

  buscarPorId(id) {
    let actual = this.head;
    while (actual) {
      if (actual.mascota.id === id) return actual.mascota;
      actual = actual.next;
    }
    return null;
  }
}