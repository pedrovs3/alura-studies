'use client'
import { createContext, useContext, useState } from "react";

export const UsersContext = createContext(null);
UsersContext.displayName = `Usuários`

export default function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  )
}

export const useUsersContext = () => {
  const { users, setUsers } = useContext(UsersContext)

  return {
    users,
    setUsers
  }
}