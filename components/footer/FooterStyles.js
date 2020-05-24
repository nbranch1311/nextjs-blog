import { useMemo } from "react";

export const buildStyle = () => {
  return {
    wrapper: {
      base: {
        zIndex: 3,
        display: "flex",
        padding: "1.5rem 2.5rem",
        borderTop: "1px solid black",
        height: "4.8125rem",
        justifyContent: "center",
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

// footer a {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   a {
//     color: inherit;
//     text-decoration: none;
//   }

export default useStyle;
