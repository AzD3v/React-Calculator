import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Touchpad from "../src/components/Touchpad";
import touchpadStyle from "../src/components/Touchpad";

storiesOf("Touchpad", module)
  .add("default", () => (
    <Touchpad
      // style={{
      //   display: "grid",
      //   gridTemplateColumns: "repeat(6, 1fr)",
      //   margin: "50px",
      // }}
    />
  ))
  .add("wide", () => (
    <Touchpad
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        margin: "50px",
      }}
    />
  ))
  .add("compressed", () => (
    <Touchpad
      style={{
        height: "200px",
        width: "400px",
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        margin: "0",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}
    />
))
