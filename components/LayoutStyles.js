import { useMemo } from "react";

export const buildStyle = () => {
  return {
    wrapper: {
      base: {
        container: {
          maxWidth: "36rem",
          padding: "0 1rem",
          margin: "3rem auto 6rem",
        },
        header: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
        headerImage: {
          width: "6rem",
          height: "6rem",
        },
        headerHomeImage: {
          width: "8rem",
          height: "8rem",
        },
        backToHome: {
          margin: "3rem 0 0",
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
