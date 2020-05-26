/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useContext } from "react";
import PropTypes from "prop-types";
import { LayoutContext } from "./LayoutContext";

const FooterLayout = ({ children }) => {
  const complexity = useContext(LayoutContext);

  return <div css={complexity.FooterStyle}>{children}</div>;
};

FooterLayout.propTypes = {
  /** React elements to be rendered */
  children: PropTypes.node,
};

export default FooterLayout;
