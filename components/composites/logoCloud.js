// https://tailwindui.com/components/marketing/sections/logo-clouds#component-fd820f87009f8bfcba4533c929686aad
import { urlFor } from "../../utils/sanity";
import Link from "next/link";

export default function logoCloud(props) {
  //console.log("logoCloud // ", props);

  return (
    <div className="bg-white justify-center ">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 justify-center ">
        <div className="grid grid-cols-2 gap-8 justify-center md:grid-cols-6 lg:grid-cols-5">
          {props.sectionData.logos.map((item) => (
            <div key={item.logoImage.asset._ref}
            className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <Link href={item?.externalLink || "#"}>
                <a className="flex title-font font-medium justify-center text-black-900 mb-4 md:mb-0 cursor-pointer">
                  <img
                    className="h-12"
                    src={urlFor(item.logoImage)
                      .auto("format")
                      .width(120)
                      // .height(400)
                      .fit("crop")
                      .quality(80)}
                    alt={item.logoImage?.alt || ``}
                  />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
