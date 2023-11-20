import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Nav } from "@/app/_components/Nav";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Client App',
  description: 'Application for monitoring coins',
}

export default async function RootLayout({
    children,
    wallet,
    users,
    transactions
}: {
  children: React.ReactNode
    wallet: React.ReactNode
    users:React.ReactNode
    transactions:React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className={`${inter.className} h-full`}>
      <div className="grid grid-cols-3 grid-rows-3 gap-4 h-full">
          <div className="col-span-2">
              <Nav/>
              {children}
          </div>
          <div className="col-start-3">{wallet}</div>
          <div className="row-span-2 col-start-3 row-start-2">  {transactions}</div>
          <div className="col-span-2 row-span-2 col-start-1 row-start-2"> {users}</div>
      </div>
      </body>
    </html>
  )
}
