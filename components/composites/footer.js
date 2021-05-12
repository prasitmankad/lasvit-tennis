// https://tailwindui.com/components/marketing/sections/footers#component-36e2a0eb52bc8006c006cae948ce6516

import { urlFor } from "../../utils/sanity";
import Link from "next/link";
import { useLanguage } from "../../hooks/useLanguage";

export default function footer(props) {
  const { l } = useLanguage();
  const navigation = {
    social: [
      {
        name: "Facebook",
        href: props.data.siteSettings.facebook,
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: "Instagram",
        href: props.data.siteSettings.instagram,
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  };

  return (
    <footer className="bg-gray-100" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only custom_heading2">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href={props.data.siteSettings.homepage.slug.current}>
              <a className="flex title-font font-medium items-center text-black-900 mb-4 md:mb-0 cursor-pointer">
                <img
                  src={urlFor(props.data.branding.companyLogo)
                    .auto("format")
                    .width(120)
                    // .height(400)
                    .fit("crop")
                    .quality(80)}
                  alt={props.data.branding.companyLogo?.alt || ``}
                />
              </a>
            </Link>
            <p className="text-gray-500 text-base">
              {props.data.businessInfo.tagline}
            </p>
            <p className="text-gray-500 text-base">
              {props.data.businessInfo.contact.streetNo}{" "}
              {props.data.businessInfo.contact.street}
              <br />
              {props.data.businessInfo.contact.city},{" "}
              {props.data.businessInfo.contact.country}{" "}
              {props.data.businessInfo.contact.zip}
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link href={`/${item.href}`} key={item.title + item.href}>
                  <a className="text-gray-700 hover:text-white-500">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading4 text-gray-700 uppercase">
                  {props.data.footer.columns[0].heading}
                </h4>
                <ul className="mt-4 space-y-4">
                  {props.data.footer.columns[0].links.map((item) => (
                    <li
                      key={
                        props.data.footer.columns[0].heading + item.slug.current
                      }
                    >
                      <Link href={`/${item.slug.current}`}>
                        <a
                          className={
                            "text-base text-" +
                            props.data.branding.primaryTextColor.title +
                            " hover:text-" +
                            props.data.branding.primaryAccentColor.title
                          }
                        >
                          {l(item.title)}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading4 text-gray-700 uppercase">
                  {props.data.footer.columns[1].heading}
                </h4>
                <ul className="mt-4 space-y-4">
                  {props.data.footer.columns[1].links.map((item) => {
                    return (
                      <li key={item.slug.current}>
                        <Link href={`/${item.slug.current}`}>
                          <a
                            className={
                              "text-base text-" +
                              props.data.branding.primaryTextColor.title +
                              " hover:text-" +
                              props.data.branding.primaryAccentColor.title
                            }
                          >
                            {l(item.title)}
                          </a>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading4 text-gray-700 uppercase">
                  {props.data.footer.columns[2].heading}
                </h4>
                <ul className="mt-4 space-y-4">
                  {props.data.footer.columns[2].links.map((item) => (
                    <li key={item.slug.current}>
                      <Link href={`/${item.slug.current}`}>
                        <a
                          className={
                            "text-base text-" +
                            props.data.branding.primaryTextColor.title +
                            " hover:text-" +
                            props.data.branding.primaryAccentColor.title
                          }
                        >
                          {l(item.title)}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading4 text-gray-700 uppercase">
                  {props.data.footer.columns[3].heading}
                </h4>
                <ul className="mt-4 space-y-4">
                  {props.data.footer.columns[3].links.map((item) => (
                    <li
                      key={
                        props.data.footer.columns[3].heading + item.slug.current
                      }
                    >
                      <Link href={`/${item.slug.current}`}>
                        <a
                          className={
                            "text-base text-" +
                            props.data.branding.primaryTextColor.title +
                            " hover:text-" +
                            props.data.branding.primaryAccentColor.title
                          }
                        >
                          {l(item.title)}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-700 xl:text-center">
            &copy; 2021 {props.data.businessInfo.title}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
