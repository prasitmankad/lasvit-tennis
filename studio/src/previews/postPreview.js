import React from "react";
import styles from "./IframePreview.css";
import resolveProductionUrl from "../../utils/resolveProductionUrl";

export default function postPreview(props) {
  const { displayed } = props.document;
  if (!displayed?.slug?.current) {
    return <div>The page needs a slug before it can be previewed. Click generate next to the slug field to create one and wait for this pane to refresh.</div>;
  }
  const url =
    process.env.NODE_ENV === "production"
      ? resolveProductionUrl(props.document)
      : //? `../../products/${displayed?.slug?.current}?preview`
        `http://localhost:3000//blog/${displayed?.slug?.current}?preview`;

  return (
    <div className={styles.componentWrapper}>
      <div className={styles.iframeContainer}>
        <iframe src={url} frameBorder={"0"} />
      </div>
    </div>
  );
}
