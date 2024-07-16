import "@/styles/globals.css";
import Header from '@/src/components/Header/Header';
import MainContainer from '@/src/components/MainContainer/MainContainer';
import type { AppProps } from 'next/app'
import { FC, useState } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <>
    <MainContainer>
      <Header />
      <Component {...pageProps} />
    </MainContainer>
  </>;
}

export default App;