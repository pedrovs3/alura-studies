import { Children, createContext, useState } from "react";

const users = [
  {
    firstName: '',
    lastName: '',
    email: ''
  }
]

interface UsersProviderProps {
  children?: React.ReactNode
}

interface IUsers {
  firstName: '',
  lastName: '',
  email: ''
}

export const UsersContext = createContext(users);

export default function UserProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState<IUsers[] | null>(null);

  return (
    <UsersContext.Provider value={{ users, useState }}>
      {children}
    </UsersContext.Provider>
  )
}

export const useUsersContext = () => {
  
}