/** @jsx jsx */
import { jsx } from "@emotion/core";
// import PropTypes from "prop-types";
import useStyle from "./FooterStyles";

const Footer = () => {
  const { wrapper } = useStyle();
  return (
    <div css={wrapper}>
      <footer>
        {`Created using Next.js, Styled using Emotion.js, Put together by yours
        truly`}
      </footer>
    </div>
  );
};

export default Footer;
