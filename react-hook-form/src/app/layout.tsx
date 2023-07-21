import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import UsersProvider from '@/common/context/Users'

const inter = Inter({ subsets: ['latin'] })

export interface IUsers {
  firstName: '',
  lastName: '',
  email: ''
}

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <UsersProvider>
          {children}
        </UsersProvider>
      </body>
    </html>
  )
}
