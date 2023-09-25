import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header';
import Footer from '@/components/footer';

//const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
          <header>
              <Header />
          </header>
          <main>
              {children}
          </main>
          <Footer />
      </body>
    </html>
  )
}
