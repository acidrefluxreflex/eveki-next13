import './globals.css';
import Navbar from "./src/views/Navbar";
import { AuthProvider } from '../lib/Firebase/context/GAuth';
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
        <AuthProvider >
        <Navbar/>
        {children}
        </AuthProvider>
        </body>

    </html>
  )
}
