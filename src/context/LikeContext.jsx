// MiContexto.js
import { createContext, useState } from 'react';

const MiContexto = createContext();

const MiContextoProvider = ({ children }) => {
  const [valor, setValor] = useState(0);

  return (
    <MiContexto.Provider value={{ valor, setValor }}>
      {children}
    </MiContexto.Provider>
  );
};

export { MiContexto, MiContextoProvider };  
