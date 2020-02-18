import React from "react";
import { storiesOf } from "@storybook/react";
import { color, text } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

// components
import Button from "../Button";

const stories = storiesOf("Buttons", module);

stories
  .addDecorator(withInfo({ inline: true }))
  .add("Button", () => (
    <Button bg={color("bg", "gold")}>{text("children", "Hello World")}</Button>
  ));
