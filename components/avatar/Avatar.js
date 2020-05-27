/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import useStyle from "./AvatarStyles";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";

const name = "Nicholas Branch";
export const siteTitle = "Nick's Portfolio Website";

const Avatar = ({ home }) => {
  const { wrapper } = useStyle();

  return home ? (
    <div>
      <img
        src="/images/profile.jpg"
        css={wrapper.headerHomeImage}
        className={utilStyles.borderCircle}
        alt={name}
      />
      <h1 className={utilStyles.heading2Xl}>{name}</h1>
    </div>
  ) : (
    <div>
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
    </div>
  );
};

Avatar.propTypes = {
  /** Boolean prop to adjust the size of the title and the image */
  home: PropTypes.bool,
};

export default Avatar;
