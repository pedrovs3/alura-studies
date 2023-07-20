import { Children, createContext, useContext, useState } from "react";

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

interface IUsersContext {
  users?: IUsers[]
  setUsers?: () => void
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
  const { users, setUsers } = useContext(UsersContext)

  return {
    users,
    setUsers
  }
}