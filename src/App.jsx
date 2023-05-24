import "./App.css";
import Form from "./components/Form";

import { MiContextoProvider } from "./context/LikeContext";
import Likes from "./components/Likes";
import { ProductosProvider } from "./context/ProductosContexto";
import ListaProductos from "./components/ListaDeProductos";

function App() {
  return (
    <>
      <ProductosProvider>
        <MiContextoProvider>
          <Likes />
          <hr />
          <Form />
          <hr />
          <ListaProductos />
        </MiContextoProvider>
      </ProductosProvider>
    </>
  );
}

export default App;
