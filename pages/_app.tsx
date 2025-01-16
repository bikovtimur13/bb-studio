import "@/styles/globals.css";
import Header from '@/src/components/Header/Header';
import Layout from '@/src/components/Layout/Layout';
import type { AppProps } from 'next/app'
import { FC, useState } from 'react';
import { usePathname } from 'next/navigation';
import Footer from "@/src/components/Footer/Footer";

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const pathname = usePathname();

  return <>
    <Layout>
      <Header pathname={pathname || ''} />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  </>;
}

export default App;