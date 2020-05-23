/** @jsx jsx */
import { jsx } from "@emotion/core";
import Head from "next/head";
import Layout from "../../components/Layout";
import content from "./FirstPageConst";

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>{content.intro}</title>
      </Head>
      <p>{content.intro}</p>
    </Layout>
  );
};

export default FirstPost;
