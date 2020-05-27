import React from "react";
import Avatar from "./Avatar";
// import { boolean } from "@storybook/addon-knobs";

export default {
  title: "Avatar",
  component: Avatar,
};

export const AvatarStory = () => {
  return (
    <div style={{ marginTop: "1rem" }}>
      <Avatar />
    </div>
  );
};
