// Consumidor.js
import { useContext } from "react";
import { MiContexto } from "../context/LikeContext";

const Likes = () => {
  const { valor, setValor } = useContext(MiContexto);

  const incrementarValor = () => {
    setValor(valor + 1);
  };

  const decrementarValor = () => {
    setValor(valor - 1);
  };

  return (
    <div>
      <h2>Contador de Likes</h2>
      <p>Likes: {valor}</p>
      <button onClick={incrementarValor}>+1💖</button>
      <button onClick={decrementarValor}>-1💖</button>
    </div>
  );
};

export default Likes;
