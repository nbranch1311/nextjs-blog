import { useMemo } from "react";

export const buildStyle = () => {
  return {
    wrapper: {
      base: {
        header: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
        headerImage: {
          width: "6rem",
          height: "6rem",
          margin: "3rem auto",
        },
        headerHomeImage: {
          width: "8rem",
          height: "8rem",
          margin: "3rem auto",
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
