export class ListaMascotas {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  agregar(mascota) {
    const nodo = { 
      prev: null, 
      data: mascota, 
      next: null 
    };

    if (!this.head) {
      this.head = nodo;
      this.tail = nodo;
    } else {
      nodo.prev = this.tail;
      this.tail.next = nodo;
      this.tail = nodo;
    }
  }
}