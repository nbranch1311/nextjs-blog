/** @jsx jsx */
import { jsx } from "@emotion/core";
import { radios } from "@storybook/addon-knobs";
import { LayoutProvider } from "./LayoutContext";
import HeaderLayout from "./HeaderLayout";
import NavigationLayout from "./NavigationLayout";
import ContentLayout from "./ContentLayout";
import FooterLayout from "./FooterLayout";

export default {
  title: "LayoutContext",
  component: LayoutProvider,
};

const options = {
  Low: "Low",
  Medium: "Medium",
  High: "High",
};

// Header with heading and button
export const LayoutProviderStory = () => {
  // These are just example blocks
  /* eslint-disable-next-line react/prop-types */
  const ColorBlock = ({ text }) => (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        color: "black",
        border: "1px solid blue",
        borderRadius: ".5rem",
      }}
    >
      {text}
    </div>
  );

  const complexity = radios("Complexity", options, "Medium", "GROUP-ID1");

  return (
    <div style={{ margin: "1rem" }}>
      <LayoutProvider complexity={complexity}>
        <HeaderLayout>
          <ColorBlock text="Header" />
        </HeaderLayout>
        <NavigationLayout>
          <ColorBlock text="Navigation" />
        </NavigationLayout>
        <ContentLayout>
          <ColorBlock text="Content Area" />
        </ContentLayout>
        <FooterLayout>
          <ColorBlock text="Action Bar" />
        </FooterLayout>
      </LayoutProvider>
    </div>
  );
};
