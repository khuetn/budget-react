import React from "react";
import { Header } from "semantic-ui-react";

function Mainheader({ title, type = "h1" }) {
  return <Header as={type}>{title}</Header>;
}

export default Mainheader;
