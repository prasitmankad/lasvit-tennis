import React, { Fragment } from "react";
import { Header } from "../composites/header";

function RenderHeader(props) {
  return (
    <Fragment>
      <Header data={props.data} />
    </Fragment>
  );
}

export default RenderHeader;
