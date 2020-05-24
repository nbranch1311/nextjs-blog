/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import useStyle from "./CardStyles";

const Card = ({ href = "/", header, description }) => {
  const { wrapper } = useStyle();

  return (
    <div css={wrapper}>
      <a href={href} target="_blank" rel="noreferrer">
        <h3>{header}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
};

Card.propTypes = {
  /** Card description text */
  description: PropTypes.string,
  /** Card header text */
  header: PropTypes.string,
  /** Card link URL */
  href: PropTypes.string,
};

export default Card;
