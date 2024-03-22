class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.shift();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    printQueue() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      return str;
    }
  }
  
  // Problema 1: Dividir la cola en dos colas, pares e impares
  function dividirColaEnDos(colores) {
    let colaPares = new Queue();
    let colaImpares = new Queue();
  
    for (let i = 0; i < colores.length; i++) {
      if (i % 2 === 0) {
        colaPares.enqueue(colores[i]);
      } else {
        colaImpares.enqueue(colores[i]);
      }
    }
  
    console.log("Cola 1 (Pares):", colaPares.printQueue());
    console.log("Cola 2 (Impares):", colaImpares.printQueue());
  }
  
  // Problema 2: Retirar de la cola los usuarios que no tienen ticket
  function retirarUsuariosSinTicket(cola) {
    let usuariosRetirados = [];
    let colaFinal = new Queue();
  
    while (!cola.isEmpty()) {
      let usuario = cola.dequeue();
      if (usuario.ticket) {
        colaFinal.enqueue(usuario);
      } else {
        usuariosRetirados.push(usuario);
      }
    }
  
    console.log("Cola inicial:", cola.printQueue());
    console.log("Usuarios retirados:", usuariosRetirados);
    console.log("Cola final:", colaFinal.printQueue());
  }
  
  // Datos para el problema 1
  let colores = ["amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"];
  
  // Datos para el problema 2
  let colaUsuarios = new Queue();
  colaUsuarios.enqueue({ user: 'User1', ticket: true });
  colaUsuarios.enqueue({ user: 'User2', ticket: true });
  colaUsuarios.enqueue({ user: 'User3', ticket: false });
  colaUsuarios.enqueue({ user: 'User4', ticket: true });
  colaUsuarios.enqueue({ user: 'User5', ticket: false });
  colaUsuarios.enqueue({ user: 'User6', ticket: false });
  colaUsuarios.enqueue({ user: 'User7', ticket: true });
  colaUsuarios.enqueue({ user: 'User8', ticket: true });
  colaUsuarios.enqueue({ user: 'User9', ticket: true });
  colaUsuarios.enqueue({ user: 'User10', ticket: false });
  colaUsuarios.enqueue({ user: 'User11', ticket: true });
  
  // Resolviendo los problemas
  console.log("Problema 1:");
  dividirColaEnDos(colores);
  
  console.log("\nProblema 2:");
  retirarUsuariosSinTicket(colaUsuarios);
  