// ListaProductos.js
import { useContext } from "react";
import { ProductosContexto } from "../context/ProductosContexto";

const ListaProductos = () => {
  const { productos, setProductos } = useContext(ProductosContexto);

  const eliminarProducto = (id) => {
    const nuevosProductos = productos.filter((producto) => producto.id !== id);
    setProductos(nuevosProductos);
  };

  return (
    <div>
      <h2>Lista de Productos</h2>
      {productos.map((producto) => (
        <div key={producto.id}>
          <p>Nombre: {producto.nombre}</p>
          <p>Precio: ${producto.precio}</p>
          <button onClick={() => eliminarProducto(producto.id)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListaProductos;
