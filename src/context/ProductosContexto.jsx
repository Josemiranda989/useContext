/* eslint-disable react/prop-types */
// ProductosContexto.js
import { createContext, useState } from "react";

const ProductosContexto = createContext();

const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Producto 1", precio: 10 },
    { id: 2, nombre: "Producto 2", precio: 20 },
    { id: 3, nombre: "Producto 3", precio: 30 },
  ]);

  return (
    <ProductosContexto.Provider value={{ productos, setProductos }}>
      {children}
    </ProductosContexto.Provider>
  );
};

export { ProductosContexto, ProductosProvider };
