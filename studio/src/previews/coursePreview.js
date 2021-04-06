import React from "react";
import styles from "./IframePreview.css";

// make sure the CORS path is set up for all addresses in manage.sanity.io - nothing but the console will tell you this shite and you will have to figure it out yourself

export default function CoursePreview(props) {
  // var routes = client.fetch(
  //   `*[(_type == "route" && page._ref==$props.document.displayed._id)]{"params": {"slug": slug.current}}`
  // );

  const { displayed } = props.document;

  // if (!displayed?.slug?.current) {
  //   return <div>The product needs a slug before it can be previewed.</div>;
  // }
  // console.log ('props ->', props.document.displayed.slug.current)

  const url =
    process.env.NODE_ENV === "production"
      ? `../../courses/${displayed?.slug?.current}?preview`
      : `http://localhost:3000/courses/${displayed?.slug?.current}?preview`;

  return (
    <>
      <div className={styles.componentWrapper}>
        <div className={styles.iframeContainer}>
          <iframe src={url} frameBorder={"0"} />
        </div>
      </div>
    </>
  );
}
