import './globals.css';
import Navbar from "./src/views/Navbar";
import { AuthContextProvider } from '../lib/Firebase/context/Auth';
// the module you created above



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <AuthContextProvider >
        <Navbar/>
        {children}
        </AuthContextProvider>
        </body>

    </html>
  )
}
