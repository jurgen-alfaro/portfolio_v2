import { Poppins as PoppinsFont, Montserrat } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './contexts/ThemeContext';

const poppins = PoppinsFont({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Jurgen Alfaro - Software Engineer',
  description:
    'This is my personal portfolio, where you can find my work and services I provide :)',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.className} ${montserrat.className} antialiased overflow-x-hidden bg-background dark:bg-background-dark dark:text-text-primary-dark`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
