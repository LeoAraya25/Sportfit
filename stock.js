const productos = {
    "Pelota de Futbol": { precio: 1500 },
    "Pelota de Basquet": { precio: 2000 },
    "Palo de Hockey": { precio: 3500 },
    "Bocha de Hockey": { precio: 800 },
    "Botines de Futbol": { precio: 2500 },
  };
  

  function obtenerProductos() {
    return productos;
  }
  
  module.exports = {
    obtenerProductos,
  };
  