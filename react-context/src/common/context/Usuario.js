import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({children}) {
  const [nome, setNome ] = useState('');
  const [saldo, setSaldo] = useState(0);

  return (
    <UserContext.Provider value={{setNome, setSaldo, nome, saldo}}>
      {children}
    </UserContext.Provider>
  )
}