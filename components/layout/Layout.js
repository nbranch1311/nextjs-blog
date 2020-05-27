/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import useStyle from "./LayoutStyles";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Footer from "../footer/Footer";
import Avatar from "../avatar/Avatar";

const name = "Nicholas Branch";
export const siteTitle = "Nick's Portfolio Website";

const Layout = ({ children, home }) => {
  const { wrapper } = useStyle();

  return (
    <div css={wrapper.container}>
      <header css={wrapper.header}>
        <Avatar home={home} />
      </header>
      <div css={wrapper.content}>{children}</div>
      <Footer />
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
