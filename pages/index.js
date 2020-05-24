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
        <main>
          <h1 className="title">
            Let's{" "}
            <Link href="/posts/FirstPost">
              <a>dive right in!</a>
            </Link>
          </h1>
          <div className="grid">
            <Card
              href="https://github.com/nbranch1311/nicks-portfolio"
              header="Github Repo"
              description="See what's going on behind the scene and how I built this site."
            />
            <Card
              href="https://trello.com/b/NNsObWky/portfolio-site"
              header="Trello Board"
              description="I have to stay active, organized, and goal oriented. Checkout what I'm up to."
            />
            <Card
              href="https://storybook.js.org/"
              header="Storybook Library"
              description="Sometimes just seeing code isn't enough. I'm a visual learner."
            />
            <Card
              href="https://docs.google.com/document/d/113i6Ai9rDQf8JIXx5cvwaEGfl1jXqhBD8lRoOvRPfqo/edit?usp=sharing"
              header="Resume"
              description="If you are looking to hire me you might want to see I am the real deal."
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
            display: flex;
            flex-direction: column;
            height: 100vh;
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
