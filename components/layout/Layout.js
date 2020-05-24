/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import useStyle from "./LayoutStyles";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";

const name = "Nicholas Branch";
export const siteTitle = "Nick's Sample Website";

const Layout = ({ children, home }) => {
  const { wrapper } = useStyle();

  return (
    <div css={wrapper.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="I built this using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header css={wrapper.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              css={wrapper.headerHomeImage}
              className={utilStyles.borderCircle}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  css={wrapper.headerImage}
                  className={utilStyles.borderCircle}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={wrapper.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};

Layout.propTypes = {
  /** Elements to be rendered in Layout */
  children: PropTypes.node,
  /** Boolean prop to adjust the size of the title and the image */
  home: PropTypes.bool,
};

export default Layout;
