import React from "react";
import { storiesOf } from "@storybook/react";

import ResultBoard from '../src/components/ResultBoard';

storiesOf("ResultBoard", module)
  .add("default", () => (
    <ResultBoard
      style={{
        background: "#111",
        color: "#fff"
      }}
      html="3²"
    />
  ))
  .add("compressed", () => (
    <ResultBoard
      style={{
        margin: "0 200px",
        background: "#111",
        color: "#fff"
      }}
    />
  ))
  .add("compressed and styled", () => (
    <ResultBoard
      style={{
        margin: "0 200px",
        background: "#535c68",
        color: "#fff"
      }}
    />
  ));