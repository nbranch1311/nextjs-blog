/** @jsx jsx */
import { jsx } from "@emotion/core";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import Card from "../components/card/Card";

const Home = () => {
  return (
    <Layout home>
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="title">
            Read{" "}
            <Link href="/posts/FirstPost">
              <a>this page!</a>
            </Link>
          </h1>
          <div className="grid">
            <Card
              href="https://nextjs.org/docs"
              header="Documentation"
              description="Find in-depth information about Next.js features and API."
            />
            <Card
              href="https://nextjs.org/learn"
              header="Learn"
              description="Learn about Next.js in an interactive course with quizzes!"
            />
            <Card
              href="https://github.com/zeit/next.js/tree/master/examples"
              header="Examples"
              description="Discover and deploy boilerplate example Next.js projects."
            />
            <Card
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              header="Deploy"
              description="Instantly deploy your Next.js site to a public URL with Vercel."
            />
          </div>
        </main>

        <style jsx>{`
          .container {
            padding: 0 0.5rem;
            display: flex;
            flex: 1 0 auto;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 2rem;
            line-height: 1.15;
            font-size: 4rem;
          }

          .title,
          .description {
            text-align: center;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 2rem;
            flex-wrap: wrap;
            max-width: 800px;
          }

          .logo {
            height: 1em;
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Home;
