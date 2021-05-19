import { RiListSettingsLine as icoSettings } from "react-icons/ri";
//import socials from "../objects/socials"
import { i18n_options, baseLanguage } from "../../../translations/config";

export default {
  name: "globalSettings",
  type: "document",
  title: "Global Settings",
  icon: icoSettings,
  fieldsets: [
    {
      name: "brand",
      title: "Branding",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
    },
    {
      name: "site",
      title: "Site Settings",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 2,
      },
    },
    { name: "header", title: "Header Config" },
    { name: "footer", title: "Footer Config" },
  ],
  fields: [
    // Company Info
    {
      title: "Company Info",
      name: "businessInfo",
      type: "object",
      description:
        "Basic business information that's reused in multiple locations through the site.",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 2,
      },
      fields: [
        {
          name: "title",
          type: "string",
          title: "Company Name",
          validation: (Rule) =>
            Rule.required().error("This field is required."),
        },
        {
          name: "tagline",
          type: "string",
          title: "Tagline",
          description:
            "1 sentence slogan or tagline used in head and hero section.",
          validation: (Rule) =>
            Rule.required().error("This field is required."),
        },
        {
          name: "siteDescription",
          type: "text",
          title: "Site Description",
          description:
            "A short description of the website, used in page head and hero sections.",
          validation: (Rule) =>
            Rule.required().error("This field is required."),
        },
        {
          title: "Contact",
          name: "contact",
          type: "object",
          description: "Address and other contact info.",
          // validation: (Rule) =>
          //   Rule.required().error("This field is required."),
          options: {
            collapsible: true,
            collapsed: false,
            columns: 1,
          },
          fields: [
            { name: "streetNo", type: "string", title: "Street number" },
            { name: "street", type: "string", title: "Street name" },
            { name: "city", type: "string", title: "City" },
            { name: "zip", type: "string", title: "Zip Code" },
            { name: "country", type: "string", title: "Country" },
            { name: "geolocation", type: "geopoint", title: "GPS Coordinates" },
          ],
        },
      ],
    },

    // Brand Info
    {
      title: "Branding",
      name: "branding",
      type: "object",
      description: "Logo and branding settigns that apply throughout the site.",
      options: {
        collapsible: true,
        collapsed: false,
        columns: 1,
      },
      fields: [
        {
          name: "companyLogo",
          type: "image",
          title: "Logo",
          description:
            "Used across the site wherever a company logo is required.",
          validation: (Rule) =>
            Rule.required().error("This field is required."),
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
              description: "Shown to robots and if images can't be loaded.",
              options: {
                isHighlighted: true,
              },
              validation: (Rule) =>
                Rule.required().error("This field is required."),
            },
          ],
        },
        {
          name: "primaryTextColor",
          type: "colorlist", // required
          title: "Primary Text Color",
          description:
            "Used as primary text color across the site. Default is White #ffffff",
          validation: (Rule) =>
            Rule.required().error("This field is required."),
          options: {
            borderradius: {
              outer: "100%",
              inner: "100%",
            },
            list: [
              { title: "white", value: "#ffffff" },
              { title: "gray", value: "#c0ccda" },
              { title: "gray-dark", value: "#3c4858" },
              { title: "gray-darkest", value: "#1f2d3d" },
              { title: "pink", value: "#FF6A64" },
              { title: "orange", value: "#F15926" },
              { title: "teal-light", value: "#31E2E8" },
              { title: "teal", value: "#20C0D9" },
              { title: "teal-dark", value: "#01ADCA" },
              { title: "yellow", value: "#FFDE4E" },
            ],
          },
        },
        {
          name: "primaryAccentColor",
          type: "colorlist", // required
          title: "Primary Accent Color",
          description:
            "Used as primary accent color across the site. Used for buttons, hyperlinks, line accents etc.",
          validation: (Rule) =>
            Rule.required().error("This field is required."),
          options: {
            borderradius: {
              outer: "100%",
              inner: "100%",
            },
            list: [
              { title: "white", value: "#ffffff" },
              { title: "gray", value: "#c0ccda" },
              { title: "gray-dark", value: "#3c4858" },
              { title: "gray-darkest", value: "#1f2d3d" },
              { title: "pink", value: "#FF6A64" },
              { title: "orange", value: "#F15926" },
              { title: "teal-light", value: "#31E2E8" },
              { title: "teal", value: "#20C0D9" },
              { title: "teal-dark", value: "#01ADCA" },
              { title: "yellow", value: "#FFDE4E" },
            ],
          },
        },
        {
          name: "secondaryAccentColor",
          type: "colorlist", // required
          title: "Secondary Accent Color",
          description: "Used as secondary accent color across the site.",
          validation: (Rule) =>
            Rule.required().error("This field is required."),
          options: {
            borderradius: {
              outer: "100%",
              inner: "100%",
            },
            list: [
              { title: "white", value: "#ffffff" },
              { title: "gray", value: "#c0ccda" },
              { title: "gray-dark", value: "#3c4858" },
              { title: "gray-darkest", value: "#1f2d3d" },
              { title: "pink", value: "#FF6A64" },
              { title: "orange", value: "#F15926" },
              { title: "teal-light", value: "#31E2E8" },
              { title: "teal", value: "#20C0D9" },
              { title: "teal-dark", value: "#01ADCA" },
              { title: "yellow", value: "#FFDE4E" },
            ],
          },
        },
      ],
    },

    // Site Settings
    {
      title: "Site Settings",
      name: "siteSettings",
      type: "object",
      description: "General Site Settings.",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 2,
      },
      fields: [
        {
          name: "url",
          type: "url",
          title: "Site Address",
          description:
            "The main site url to create canonical url links to other pages",
          validation: (Rule) =>
            Rule.required().error("This field is required."),
        },
        {
          name: "homepage",
          type: "reference",
          title: "Home Page",
          description: "Choose the page to be the home page of the site.",
          //weak: true,
          to: { type: "page" },
        },
        {
          title: "Instagram",
          name: "instagram",
          type: "string",
        },
        {
          title: "Facebook",
          name: "facebook",
          type: "string",
        },
        {
          title: "Error 404 Page Message",
          name: "error404",
          type: "string",
          description: "Message to show on any Error 404 Pages.",
        },
      ],
    },
    {
      title: "Header",
      name: "header",
      type: "object",
      description:
        "Header details. Included at the bottom of every page. Logo and business information is pulled from the previous fields and does not need to be provided again.",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
      fields: [
        // Column 0 automagically added from busness info
        {
          name: "menu",
          type: "array",
          title: "Menu",
          description: "Define your menu items here. Keep # small.",
          of: [
            {
              name: "items",
              type: "object",
              title: "Items",
              fields: [
                {
                  name: "button",
                  type: "boolean",
                  title: "Make Button",
                  description:
                    "Select this to make the link into a button. All buttons are placed AFTER links.",
                },
                {
                  name: "highlight",
                  type: "boolean",
                  title: "Highlight Button",
                  description: "Select this to highlight the button.",
                },
                {
                  name: "text",
                  type: "object",
                  options: i18n_options,
                  fields: [
                    {
                      name: "text",
                      type: "string",
                      title: "Text",
                      description: "Text on the link (or button).",
                    },
                  ],
                },
                {
                  name: "link",
                  type: "reference",
                  title: "Link",
                  weak: true,
                  type: "reference",
                  to: [{ type: "page" }, { type: "course" }, { type: "post" }],
                },
              ],
              preview: {
                select: {
                  title: "text",
                  //title: 'caption'
                },
                prepare({ title }) {
                  //console.log("[obj]", title);
                  return {
                    title:
                      title && typeof title === "object"
                        ? title[baseLanguage].text
                        : title,
                  };
                },
              },
            },
          ],
        },
      ],
    },

    {
      title: "Footer",
      name: "footer",
      type: "object",
      description:
        "Footer details. Included at the bottom of every page. Logo and business information is pulled from the previous fields and does not need to be provided again.",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
      fields: [
        // Column 0 automagically added from busness info
        {
          name: "columns",
          type: "array",
          title: "Columns",
          description:
            "Define your columns and their content here. Keep # of columns to max 4.",
          of: [
            {
              name: "items",
              type: "object",
              title: "Items",
              fields: [
                { name: "heading", type: "string", title: "Column Heading" },
                {
                  name: "links",
                  type: "array",
                  title: "Links",
                  of: [
                    {
                      type: "reference",
                      to: [
                        { type: "page" },
                        { type: "course" },
                        { type: "post" },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          validation: (Rule) => [
            // Rule.required().error("This field is required."),
            Rule.required()
              .max(4)
              .min(4)
              .error("Columns are required. Min 4 / Max 4 Columns."),
          ],
        },
        {
          name: "signup",
          type: "object",
          title: "Newsletter Signup",
          description:
            "Content for the newsletter signup section in the Footer.",
          fields: [
            {
              name: "heading",
              type: "string",
              title: "Subscribe Heading Text",
            },
            { name: "message", type: "string", title: "Subscribe Message" },
          ],
        },
        // Copyright Message automagically added to frontpage based on current year and existing business info
        // { name: "copyright", type: "string", title: "Copyright Message" },
      ],
    },
  ],
};
