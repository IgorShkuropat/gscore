import type { NextPage } from 'next';
import Head from 'next/head';
import { Button, Input, Checkbox, Accordion, Header } from 'components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <main>
        <Button UIType="primary">Get Gscore</Button>
        <Input placeholder="Placeholder" />
        <Checkbox label="GARIK TREVOGA" status="hold" />
        <Accordion title="Drip component" />
      </main>

      <footer></footer>
    </>
  );
};

export default Home;
