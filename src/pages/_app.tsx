import '@/styles/globals.css';

import { ThemeProvider } from '@/components/theme/ThemeContext';

import type { AppProps } from 'next/app';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
