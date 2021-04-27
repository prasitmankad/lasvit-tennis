import React, { Fragment } from "react";
import Post from "../composites/post";

function RenderPost(props) {
  return (
    <Fragment>
      <Post data={props.data} />
    </Fragment>
  );
}

export default RenderPost;
