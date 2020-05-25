import { useMemo } from "react";

export const buildStyle = () => {
  return {
    wrapper: {
      base: {
        margin: "1rem",
        flexBasis: "45%",
        padding: "1.5rem",
        textAlign: "left",
        color: "inherit",
        textDecoration: "none",
        boxShadow: "0 0 6px grey",
        borderRadius: "10px",
        transition: "color 0.15s ease, border-color 0.15s ease",
        "&:hover": {
          color: "#0070f3",
          borderColor: "#0070f3",
        },
        "&:focus": {
          color: "#0070f3",
          borderColor: "#0070f3",
        },
        "&:active": {
          color: "#0070f3",
          borderColor: "#0070f3",
        },
        "& h3": {
          margin: "0 0 1rem 0",
          fontSize: "1.5rem",
        },
        "& p": {
          margin: 0,
          fontSize: "1.25rem",
          lineHeight: 1.5,
        },
        "& a": {
          color: "inherit",
          textDecoration: "none",
        },
      },
    },
  };
};

const useStyle = () => {
  //const theme = useContext(ThemeContext);

  const { wrapper } = useMemo(() => buildStyle(), []);
  return {
    wrapper: {
      ...wrapper.base,
    },
  };
};

export default useStyle;
