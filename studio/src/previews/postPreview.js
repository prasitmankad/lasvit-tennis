import React from "react";
import styles from "./IframePreview.css";

// make sure the CORS path is set up for all addresses in manage.sanity.io - nothing but the console will tell you this shite and you will have to figure it out yourself

export default function PostPreview(props) {
  const { displayed } = props.document;
  if (!displayed?.slug?.current) {
    return <div>The product needs a slug before it can be previewed.</div>;
  }
  const url =
    process.env.NODE_ENV === "production"
      ? `../../blog/${displayed?.slug?.current}?preview`
      : `http://localhost:3000/blog/${displayed?.slug?.current}?preview`;
console.log ("url -> ", url)
  return (
    <div className={styles.componentWrapper}>
      <div className={styles.iframeContainer}>
        <iframe src={url} frameBorder={"0"} />
      </div>
    </div>
  );
}
