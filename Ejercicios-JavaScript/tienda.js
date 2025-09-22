const productos = [
  {
    nombre: "Cabezal Sparring",
    description: "Cabezal de Sparring.",
    categoria: "Protectores",
    marca: "Gran Marc",
    talle: ["1", "2", "3"],
    precio: 35000,
    web: "https://www.granmarctiendaonline.com.ar/productos/cabezal-cerrado/",
    imagen: "cabezal-cerrado.webp",
  },
  {
    nombre: "Dobok Dan",
    description: "Bobok aprobado para torneos internacionales.",
    categoria: "Dobok",
    marca: "Daedo",
    talle: ["1", "2", "3", "4", "5", "6", "7", "8"],
    precio: 115000,
    web: "https://www.daedo.com/products/taitf-10813",
    imagen: "dobok.webp",
  },
  {
    nombre: "Escudo de Potencia",
    description: "Escudo de potencia para entrenamientos.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 51700,
    web: "https://www.granmarctiendaonline.com.ar/productos/escudo-de-potencia-grande/",
    imagen: "escudo-potencia.webp",
  },
  {
    nombre: "Par de focos redondos",
    description: "Par de focos de 25cm x 25cm para hacer entrenamiento.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 15000,
    web: "https://www.granmarctiendaonline.com.ar/productos/foco-con-dedos/",
    imagen: "foco-con-dedos.webp",
  },
  {
    nombre: "Guantes 10 onzas",
    description:
      "Guantes de Sparring de 10 onzas habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["s/talle"],
    precio: 35000,
    web: "https://www.daedo.com/products/pritf-2020",
    imagen: "protectores-manos.webp",
  },
  {
    nombre: "Protectores Pie",
    description: "Protectores de Pie habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["XXS", "XS", "S", "M", "L", "XL"],
    precio: 35000,
    web: "https://www.daedo.com/collections/collection-itf-gloves/products/pritf-2022",
    imagen: "protectores-pie.webp",
  },
];

let mostrarDetalle = (id) => {
  const dialog = document.getElementById("detalle");
  document.getElementById("titulo-prod").innerText = productos[id].nombre;
  document.getElementById("descrp-prod").innerText = productos[id].description;
  document.getElementById("precio-prod").innerText = productos[id].precio;
  dialog.showModal();
};

let cerrarModal = () => {
  document.getElementById("detalle").close();
};

let mostrarCatalogo = (prod = productos) => {
  let contenido = "";
  prod.forEach((producto, id) => {
    contenido += `<div>
      <img src="images/${producto.imagen}" alt="${producto.nombre}"/>
      <h3>${producto.nombre}</h3>
      <h3>${formatPrice(producto.precio)}</h3>
      <button type="button" onclick="mostrarDetalle(${id})">Ver Detalle</button>
      <button type="button" onclick="agregarAlCarrito(${id})">Agregar al Carrito</button>
    </div>`;
  });
  document.getElementById("catalogo").innerHTML = contenido;
};

let agregarAlCarrito = (id) => {
  let listadoProductos;
  const listaInicial = JSON.parse(localStorage.getItem("carrito"));
  if (listaInicial == null) {
    listadoProductos = [];
  } else {
    listadoProductos = listaInicial;
  }
  listadoProductos.push(id);
  localStorage.setItem("carrito", JSON.stringify(listadoProductos));
  contarProductos();
};

let mostrarCarrito = () => {
  let contenido = "";
  let total = 0;
  const carrito = JSON.parse(localStorage.getItem("carrito"));
  if (carrito != null) {
    const listProd=[];
    const listCant=[];

    carrito.forEach((num) => {
      if (!listProd.includes(num)) {
        listProd.push(num);
        listCant.push(1);
      } else {
        const inx = listProd.indexOf(num);
        listCant[inx] += 1; 
      }
    });

    listProd.forEach((num, id) => {
      contenido += `<div>
        <h3>${productos[num].nombre}</h3>
        <p>${formatPrice(productos[num].precio)}</p>
        <p>Cantidad: ${listCant[id]}</p>
        <button type="button" onclick="eliminarProducto(${id})">Eliminar Producto</button>
      </div>`;
      total += productos[num].precio*listCant[id];
    });

    contenido += `<p>Total: ${formatPrice(total)}</p>`;
    contenido += `<button type="button" onclick="vaciarCarrito()">Vaciar Carrito</button>`;
  } else {
    contenido = "<p>El carrito está vacío.</p>";
  }
  document.getElementById("carrito").innerHTML = contenido;
};

let vaciarCarrito = () => {
  localStorage.removeItem("carrito");
  window.location.reload();
};

let eliminarProducto = (id) => {
  const carrito = JSON.parse(localStorage.getItem("carrito"));
  carrito.splice(id, 1);
  if (carrito.length > 0) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  } else {
    localStorage.removeItem("carrito");
  }
  window.location.reload();
};

let filtrarProducto = () => {
  let searchWord = document.getElementById("busqueda").value;
  let min = parseInt(document.getElementById("price-min").value) || 0;
  let max = parseInt(document.getElementById("price-max").value) || 1000000;
  let prot = document.getElementById("protectores").checked;
  let dobok = document.getElementById("dobok").checked;
  let entr = document.getElementById("entrenamiento").checked;
  let marca = document.getElementById("marca").value;

  let newLista = productos;

  // Filtro por búsqueda
  if (searchWord) {
    newLista = newLista.filter(
      (prod) =>
        prod.nombre.toLowerCase().includes(searchWord.toLowerCase()) ||
        prod.description.toLowerCase().includes(searchWord.toLowerCase())
    );
  }
  // Filtro por precio mínimo
  newLista = newLista.filter((prod) => prod.precio >= min);
  // Filtro por precio máximo
  newLista = newLista.filter((prod) => prod.precio <= max);

  // Filtro por categorías
  let category = [];
  if (prot) category.push("Protectores");
  if (dobok) category.push("Dobok");
  if (entr) category.push("Entrenamiento");
  if (category.length > 0) {
    newLista = newLista.filter((prod) => category.includes(prod.categoria));
  }

  // Filtro por marca
  if (marca !== "todas") {
    newLista = newLista.filter((prod) => prod.marca === marca);
  }

  mostrarCatalogo(newLista);
};

 let formatPrice = (price) => {
  const numberFormat = new Intl.NumberFormat('es-AR', {  currency: 'ARS', style: 'currency' });
  return numberFormat.format(price);
};


let contarProductos = () => {
  const getCart = JSON.parse(localStorage.getItem("carrito"));

  if(getCart.length != null){
    document.getElementById("cant-prod").innerText = JSON.parse(getCart.length);
  } 
};

let ordenarCatalogo = (order) => {
  let newProducts;
  switch (order) {
    case "menor":
      newProducts = productos.sort((a, b) => a.precio - b.precio);
      break;
    case "mayor":
      newProducts = productos.sort((a, b) => b.precio - a.precio);
      break;
    case "a-z":
      newProducts = productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
      break;
    case "z-a":
      newProducts = productos.sort((a, b) => b.nombre.localeCompare(a.nombre));
      break;
    default:
      newProducts = productos;
  }
  mostrarCatalogo(newProducts);
};
