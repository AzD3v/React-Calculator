import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "../src/components/Button";

storiesOf("Button", module)
  .add("styled", () => (
    <Button
      style={{
        fontSize: "25px",
        padding: "12px 26px",
        background: "#192a56",
        color: "#f5f6fa",
        border: "none"
      }}
      onClick={action("click")}
      label="3²"
    />
  ))
  .add("styled and rounded", () => (
    <Button
      style={{
        fontSize: "25px",
        padding: "15px 26px",
        background: "#192a56",
        color: "#f5f6fa",
        border: "none",
        borderRadius: "10px"
      }}
      onClick={action("click")}
      label="3²"
    />
  ))
  .add("styled with symbol as label", () => (
    <Button
      style={{
        fontSize: "25px",
        padding: "12px 26px",
        background: "#192a56",
        color: "#f5f6fa",
        border: "none"
      }}
      onClick={action("click")}
      label="⏎"
    />
  ));

