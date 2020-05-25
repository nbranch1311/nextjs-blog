import { useMemo } from "react";

export const buildStyle = () => {
  return {
    wrapper: {
      base: {
        zIndex: 3,
        display: "flex",
        padding: "1.5rem 2.5rem",
        boxShadow: "0 0 10px grey",
        height: "4.8125rem",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
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
