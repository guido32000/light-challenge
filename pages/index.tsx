import Head from 'next/head';

const Home = () => (
  <div>
    <Head>
      <title>Light-it Challenge</title>
      <meta name="description" content="Light-it Challenge - WEB APP" />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <main />
  </div>
);

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: '/home',
      permanent: false,
    },
  };
};

export default Home;
