import "@/styles/globals.css";
import Header from '@/src/components/Header/Header';
import type { AppProps } from 'next/app'
import { FC, useState } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <>
    <Header />
    <Component {...pageProps} />
  </>;
}

export default App;