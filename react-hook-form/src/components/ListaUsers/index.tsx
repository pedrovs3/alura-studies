'use client'
import { useUsersContext } from "@/common/context/Users"
import styles from './ListaUsers.module.scss'
import Link from "next/link";

export default function ListaUsers() {
  const { users } = useUsersContext()

  return (
    <div className={styles.lista}>
      {users.map((user, index) => (
        <Link key={index} href={`/user/[name]`} as={`/user/${user.firstName}`}>
          <div className={styles.lista__card} key={index}>
            <h3 className={styles.lista__card__name}>{user.firstName} <span>{user.lastName}</span></h3>
            <span className={styles.email}>{user.email}</span>
          </div>
        </Link>

      ))}
    </div>
  )
}