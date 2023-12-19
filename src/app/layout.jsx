import { UIProviders } from '@/components/UIProviders';
import './globals.css';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children,modal }) {

  return (

    <html lang="en" className="light">
    <body>
    <UIProviders>
      {children}
      {modal}
    </UIProviders>
    </body>
    </html>

  );
}
