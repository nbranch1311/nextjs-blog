import { useMemo } from "react";

export const buildStyle = () => {
  return {
    wrapper: {
      base: {
        height: "97vh",
        width: "100%",
        Low: {
          display: "flex",
          flexWrap: "wrap",
          alignContent: "flex-start",
          justifyContent: "center",
          HeaderStyle: {
            display: "none",
          },
          NavigationStyle: {
            width: "100%",
            height: "15%",
            margin: ".5rem auto",
          },
          ContentStyle: {
            width: "100%",
            height: "55%",
            margin: "1rem 4rem",
          },
          FooterStyle: {
            width: "100%",
            height: "10%",
            margin: "1rem auto",
          },
        },
        Medium: {
          display: "flex",
          flexDirection: "column",
          HeaderStyle: {
            margin: "0 auto .5rem",
            width: "100%",
          },
          NavigationStyle: {
            margin: ".5rem auto",
          },
          ContentStyle: {
            margin: ".5rem auto",
            flex: "auto",
          },
          FooterStyle: {
            margin: ".5rem auto 0",
            width: "100%",
          },
        },
        High: {
          display: "grid",
          gridTemplateRows: "15% 70% 15%",
          gridTemplateAreas:
            "'header header header header header header''stepper content content content content content''stepper footer footer footer footer footer'",
          HeaderStyle: {
            margin: ".5rem",
            gridArea: "header",
          },
          NavigationStyle: {
            margin: ".5rem",
            gridArea: "stepper",
          },
          ContentStyle: {
            margin: ".5rem",
            gridArea: "content",
          },
          FooterStyle: {
            margin: ".5rem",
            gridArea: "footer",
          },
        },
      },
    },
  };
};

export const useStyle = (complexity) => {
  //const theme = useContext(ThemeContext);

  const { wrapper } = useMemo(() => buildStyle(), [complexity]);

  return {
    wrapper: {
      ...wrapper.base,
      ...wrapper.base[complexity],
      ...wrapper[complexity],
    },
  };
};
