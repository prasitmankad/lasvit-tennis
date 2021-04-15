import React, { Fragment } from "react";
import HeaderSection from "../composites/header";

function RenderHeader(props) {
  return (
    <Fragment>
      <HeaderSection data={props.data} />
    </Fragment>
  );
}

export default RenderHeader;
