import { useMemo } from "react";

export const buildStyle = () => {
  return {
    wrapper: {
      base: {
        container: {
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        },
        header: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
        headerImage: {
          width: "6rem",
          height: "6rem",
          margin: "3rem 0",
        },
        headerHomeImage: {
          width: "8rem",
          height: "8rem",
          margin: "3rem 0",
        },
        content: {
          flex: "1 0 auto",
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
