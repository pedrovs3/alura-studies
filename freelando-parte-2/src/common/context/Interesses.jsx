import { createContext, useContext, useState } from "react";

export const InteressesContext = createContext();
InteressesContext.displayName = 'Interesses'

export default function InteressesProvider({ children }) {
  const [opcao, setOpcao] = useState();

  return (
    <InteressesContext.Provider value={{ opcao, setOpcao }}>
      {children}
    </InteressesContext.Provider>
  )
}

export function useInteressesContext() {
  const { opcao, setOpcao } = useContext(InteressesContext)

  return {
    opcao,
    setOpcao
  }
}