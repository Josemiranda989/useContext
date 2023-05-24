import { useState, useContext } from "react";
import { MiContexto } from "../context/LikeContext";
function Form() {
  const { valor } = useContext(MiContexto);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del formulario
    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
  };

  return (
    <>
      <h2>Formulario useState()</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </label>
        <br />
        <br />

        <label>
          Apellido:{" "}
          <input
            type="text"
            value={apellido}
            onChange={(event) => setApellido(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>

        <p>Likes globales {valor}</p>
      </form>
    </>
  );
}

export default Form;
