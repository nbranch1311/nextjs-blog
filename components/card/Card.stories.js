import React from "react";
import Card from "./Card";

export default {
  title: "Card",
  component: Card,
};

export const CardStory = () => {
  return (
    <div style={{ marginTop: "1rem" }}>
      <Card
        href="https://nicks-portfolio-pink.now.sh/"
        header="Back to Portfolio"
        description="These cards provide a good button feel."
      />
    </div>
  );
};
