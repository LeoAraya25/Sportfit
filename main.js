const productos = {
    "Pelota de Futbol": { precio: 1500 },
    "Pelota de Basquet": { precio: 2000 },
    "Palo de Hockey": { precio: 3500 },
    "Bocha de Hockey": { precio: 800 },
    "Botines de Futbol": { precio: 2500 },
  };
  

  function mostrarAlerta(mensaje) {
    alert("== Simulador de Compras ==\n\n" + mensaje);
  }
  

  function calcularTotal(precio, cantidad) {
    return precio * cantidad;
  }
  
 
  function iniciarSimulador() {
    mostrarAlerta("¡Bienvenido a Sportfit!");
  
    const nombresProductos = Object.keys(productos);
  
    let carrito = {};
  
  
    let mensajeProductos = "Lista de precios:\n";
    for (const producto in productos) {
      mensajeProductos += `${producto}: $${productos[producto].precio}\n`;
    }
  
    mostrarAlerta(mensajeProductos);
  
    // Ciclo para elegir productos
    while (true) {
      const productoSeleccionado = prompt("Ingrese el nombre del producto que desea comprar (o escriba 'fin' para terminar la compra):");
  
      if (productoSeleccionado.toLowerCase() === 'fin') {
        break;
      }
  
      if (!productos[productoSeleccionado]) {
        mostrarAlerta("Producto no válido. Por favor, elija un producto de la lista o escriba 'fin' para terminar la compra.");
        continue;
      }
  
      const cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"));
  
      if (isNaN(cantidad) || cantidad <= 0) {
        mostrarAlerta("Cantidad no válida. Por favor, ingrese una cantidad válida o escriba 'fin' para terminar la compra.");
        continue;
      }
  
      if (carrito[productoSeleccionado]) {
        carrito[productoSeleccionado] += cantidad;
      } else {
        carrito[productoSeleccionado] = cantidad;
      }
  
      mostrarAlerta(`${cantidad} unidades de ${productoSeleccionado} agregadas al carrito.`);
    }

    let totalCompra = 0;
    let mensajeFinalCompra = "Resumen de la compra:\n";
    for (const producto in carrito) {
      const cantidad = carrito[producto];
      const precioProducto = productos[producto].precio;
      const subtotal = calcularTotal(precioProducto, cantidad);
  
      totalCompra += subtotal;
      mensajeFinalCompra += `${cantidad} unidades de ${producto} - Subtotal: $${subtotal.toFixed(2)}\n`;
    }
  
    mensajeFinalCompra += `\nTotal a pagar: $${totalCompra.toFixed(2)}`;
  
    mostrarAlerta(mensajeFinalCompra);
  
    const confirmacion = confirm("¿Desea proceder con el pago?");
    
    if (confirmacion) {
      const metodoPago = prompt("Ingrese el método de pago (Efectivo, Tarjeta de Crédito o Débito):");
      mostrarAlerta(`Gracias por su compra. El pago mediante ${metodoPago} ha sido realizado con éxito.`);
    } else {
      mostrarAlerta("Compra cancelada. Gracias por utilizar el Simulador de Compras.");
    }
  }
  

  iniciarSimulador();
  