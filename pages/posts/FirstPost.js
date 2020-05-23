/** @jsx jsx */
import { jsx } from "@emotion/core";
import Head from "next/head";
import Layout from "../../components/Layout";

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>{`Howdy, I'm Nick. I'm a Front End Software Engineer.`}</title>
      </Head>
      <p>{`Howdy, I'm Nick. I'm a Front End Software Engineer.`}</p>
    </Layout>
  );
};

export default FirstPost;
