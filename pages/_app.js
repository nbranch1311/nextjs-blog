/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import "../styles/global.css";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default App;
