import React, { createContext, useContext, useState } from 'react';

export const TesteContext = createContext();
TesteContext.displayName = 'Teste de contexto';

// eslint-disable-next-line react/prop-types
export default function TesteProvider({ children }) {
  const [message, setMessage] = useState('');

  return (
    <TesteContext.Provider value={{ message, setMessage }}>
      {children}
    </TesteContext.Provider>
  );
}

export function useTesteContext() {
  const { message, setMessage } = useContext(TesteContext);

  return {
    message,
    setMessage,
  };
}
