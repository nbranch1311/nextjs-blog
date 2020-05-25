/** @jsx jsx */
import { jsx } from "@emotion/core";
import Head from "next/head";
import Layout from "../../components/layout/Layout";

const FirstPost = () => {
  const content = `Howdy, I'm Nick. I'm a Front End Software Engineer.
  I made this site in response to the impact of COVID-19. This site is still majorily underway.
  For now if you want to see my work check out my GitHub.
  If you want see what I am working on check out my Trello Board`;
  return (
    <Layout>
      <p
        css={{
          display: "flex",
          maxWidth: "20rem",
          margin: "0 auto",
        }}
      >
        {content}
      </p>
    </Layout>
  );
};

export default FirstPost;
