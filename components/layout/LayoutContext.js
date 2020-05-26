/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { createContext } from "react";
import { useStyle } from "./LayoutContextStyles";

const LayoutContext = createContext();

const LayoutProvider = ({ children, complexity }) => {
  const { wrapper } = useStyle(complexity);

  return (
    <LayoutContext.Provider value={wrapper[complexity]}>
      <div css={wrapper}>{children}</div>
    </LayoutContext.Provider>
  );
};

LayoutProvider.propTypes = {
  /** React elements to be rendered (will have access to this context) */
  children: PropTypes.node,
  /** String to determine style context */
  complexity: PropTypes.string,
};

export { LayoutContext, LayoutProvider };
