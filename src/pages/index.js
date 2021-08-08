import { useEffect } from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Movies from "../components/Movies";
import About from "../components/About";
import Team from "../components/Team";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bonde Filmes</title>
        <meta name="description" content="Bonde filmes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Intro />
      <Movies />
      <About />
      <Team />
      <Footer />
    </>
  );
}
