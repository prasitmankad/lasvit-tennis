import { PortableText, urlFor } from "../../utils/sanity";
import Link from "next/link";

export default function contentBlock(props) {
  // console.log("contentBlock Props // ", props);

  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto pb-20 px-4 sm:pb-20 sm:px-6 lg:px-8 lg:pb-20 lg:flex lg:justify-between">
          <PortableText blocks={props.sectionData.body} />
        </div>
      </div>
    </>
  );
}
