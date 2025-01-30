import "@/styles/globals.css";
import Header from '@/src/components/Header/Header';
import Layout from '@/src/components/Layout/Layout';
import type { AppProps } from 'next/app'
import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import Footer from "@/src/components/Footer/Footer";
import FeedbackForm from "@/src/components/FeedbackForm/FeedbackForm";

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  // const pathname = usePathname();
  const router = useRouter();
  const [pathname, setPathname] = useState<string>('');

  useEffect(() => {
    setPathname(router.pathname);
  }, [router.pathname]);

  const is404Page = pathname === '/404';

  return <>
    <Layout>
      <Header pathname={pathname || ''} />
      <Component {...pageProps} />
      {!is404Page && <FeedbackForm />}
      <Footer />
    </Layout>
  </>;
}

export default App;