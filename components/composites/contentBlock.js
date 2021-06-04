import { PortableText } from "../../utils/sanity";
import { useLanguage } from "../../hooks/useLanguage";

export default function contentBlock(props) {
  const { l } = useLanguage()
  console.log("contentBlock // ", props)
  const contents = props.sectionData.content
  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto pb-20 px-4 sm:pb-20 sm:px-6 lg:px-8 lg:pb-20 lg:flex lg:justify-between">
          {/* {l(contents).map(content => (
            <PortableText blocks={content} />
          ))} */}
        </div>
      </div>
    </>
  );
}
