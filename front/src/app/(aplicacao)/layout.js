import '../globals.css';
import {Inter} from 'next/font/google';
import Menu from '../../components/Menu';

const inter = Inter ({ subsets: ['latin']});

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
      <Menu/>
        {children}</body>
    </html>
  )
}