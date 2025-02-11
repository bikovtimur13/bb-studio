import React from "react";
import Head from "next/head";

import Hero from "@/src/components/Hero/Hero";
import ClientsSection from "@/src/components/ClientsSection/ClientsSection";
// import OurTeam from "@/src/components/OurTeam/OurTeam";


export default function Home() {
  return (
    <>
      <Head>
        <title>Дело Быкова</title>
        <meta name="description" content="Дело Быкова" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <ClientsSection />
        {/* <OurTeam /> */}
      </main>
    </>
  );
}
