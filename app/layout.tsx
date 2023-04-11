"use client";
import './globals.css';
import Navbar from "./src/views/Navbar";
import { AuthProvider } from './src/GAuth';
// the module you created above
import AuthStatus from './src/components/auth-status';



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const AuthStatusDiv = await AuthStatus();
  return (
   
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
     <AuthProvider >
        <Navbar/>
        {AuthStatusDiv}
        {children}
        </AuthProvider >
        </body>

    </html>
  )
}
