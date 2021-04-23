import React, { Fragment } from "react";
import FooterSection from "../composites/footer";

function RenderHeader(props) {
  return (
    <Fragment>
      <FooterSection data={props.data} />
    </Fragment>
  );
}

export default RenderHeader;
