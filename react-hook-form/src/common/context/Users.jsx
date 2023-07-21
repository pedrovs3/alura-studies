'use client'
import { createContext, useContext, useState } from "react";

export const UsersContext = createContext(null);
UsersContext.displayName = `Usuários`

export default function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState([]);

  return (
    <UsersContext.Provider value={{ users, setUsers, userData, setUserData }}>
      {children}
    </UsersContext.Provider>
  )
}

export const useUsersContext = () => {
  const { users, setUsers, userData, setUserData } = useContext(UsersContext);

  const addUser = (data) => {
    setUsers(estadoAnterior => ([...estadoAnterior, data]))
  }

  const findUserByEmail = (email) => {
    const user = users.map((user) => {
      if (user => user.email === email.replace(`%40`, `@`)) {
        return user;
      }
    })
    return setUserData(...user)
  }

  return {
    users,
    setUsers,
    addUser,
    findUserByEmail,
    userData
  }
}
