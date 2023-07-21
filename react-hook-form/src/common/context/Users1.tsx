// 'use client'
// import { Children, createContext, useContext, useState } from "react";

// const users = [
//   {
//     firstName: '',
//     lastName: '',
//     email: ''
//   }
// ]

// interface UsersProviderProps {
//   children?: React.ReactNode
// }

// export interface IUsers {
//   firstName: '',
//   lastName: '',
//   email: ''
// }

// interface IUsersContext {
//   users?: IUsers[]
//   setUsers?: () => void
// }

// export const UsersContext = createContext(null);
// UsersContext.displayName = `Usuários`

// export default function UsersProvider({ children }: { children: React.ReactNode }) {
//   const [users, setUsers] = useState<IUsers[] | null>();

//   return (
//     <UsersContext.Provider value={{ users, setUsers }}>
//       {children}
//     </UsersContext.Provider>
//   )
// }

// export const useUsersContext = () => {
//   const { users, setUsers } = useContext(UsersContext)

//   return {
//     users,
//     setUsers
//   }
// }