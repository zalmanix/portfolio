import Head from "next/head";

import { Header } from "../components/Header";
import { About } from "../components/About";
import { Funny } from "../components/Funny";

export default function Home() {
  return (
    <div className="min-w-[1200px] min-h-screen mx-auto h-[300vh] bg-background-50">
      <Head>
        <title>Maksymilian Skórnóg</title>
        <meta
          name="description"
          content="Portfolio website of web developer - Maksymilian Skórnóg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full h-full">
        <Header />

        <About />
        <Funny />
      </main>

      {/* <footer className={styles.footer}>
        TODO: FOOTER
      </footer> */}
    </div>
  );
}
