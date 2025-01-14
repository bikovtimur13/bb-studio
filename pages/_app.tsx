import "@/styles/globals.css";
import Header from '@/src/components/Header/Header';
import Layout from '@/src/components/Layout/Layout';
import type { AppProps } from 'next/app'
import { FC, useState } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <>
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
  </>;
}

export default App;