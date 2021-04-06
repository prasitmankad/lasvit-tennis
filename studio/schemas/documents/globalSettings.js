// TODO: Google Analytics ID
// TODO: Header / Footer config
// TODO: Contact Info (address, phone, socials - see contactInfo object)

import { RiListSettingsLine as icoSettings } from "react-icons/ri";
//import socials from "../objects/socials"

export default {
  name: "globalSettings",
  type: "document",
  title: "Global Settings",
  icon: icoSettings,
  fieldsets: [
    {
      name: "company",
      title: "Company Info",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
    },
    {
      name: "brand",
      title: "Branding",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
    },
    {
      name: "site",
      title: "Site Settings",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 2, // Defines a grid for the fields and how many columns it should have
      },
    },
    { name: "header", title: "Header Config" },
    { name: "footer", title: "Footer Config" },
  ],
  fields: [
    // Company Info
    {
      name: "title",
      type: "string",
      title: "Company Name",
      fieldset: "company",
      validation: (Rule) =>
        Rule.warning("Please fill out the field.").required(),
    },
    {
      name: "tagline",
      type: "string",
      title: "Tagline",
      fieldset: "company",
      description:
        "1 sentence slogan or tagline used in head and hero section.",
      validation: (Rule) =>
        Rule.warning("Please fill out the field.").required(),
    },
    {
      name: "siteDescription",
      type: "text",
      title: "Site Description",
      fieldset: "company",
      description:
        "A short description of the website, used in page head and hero sections.",
      validation: (Rule) =>
        Rule.warning("Please fill out the field.").required(),
    },
    {
      title: "Contact",
      name: "contact",
      type: "object",
      fieldset: "company",
      description: "Address and other contact info.",
      // validation: (Rule) =>
      //   Rule.warning("Please fill out the field.").required(),
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 2, // Defines a grid for the fields and how many columns it should have
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

    {
      name: "team",
      type: "array",
      title: "Team Members",
      fieldset: "company",
      description:
        "Core team members of the company. Used on teams / about pages.",
      validation: (Rule) =>
        Rule.warning("Please fill out the field.").required(),
      of: [
        {
          type: "reference",
          to: [{ type: "teamMember" }],
        },
      ],
    },

    // Brand Info
    {
      name: "companyLogo",
      type: "image",
      title: "Logo",
      fieldset: "brand",
      description: "Used across the site wherever a company logo is required.",
      validation: (Rule) =>
        Rule.warning("Please fill out the field.").required(),
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
            Rule.warning("Please fill out the field.").required(),
        },
      ],
    },
    {
      name: "primaryTextColor",
      type: "colorlist", // required
      title: "Primary Text Color",
      fieldset: "brand",
      description: "Used as primary text color across the site.",
      validation: (Rule) =>
        Rule.warning("Please fill out the field.").required(),
      options: {
        borderradius: {
          outer: "100%",
          inner: "100%",
        },
        list: [
          { title: "White", value: "#ffffff" },

          { title: "Pink", value: "#FF6A64" },
          { title: "Orange", value: "#F15926" },
          { title: "Light Teal", value: "#31E2E8" },
          { title: "Light Teal", value: "#20C0D9" },
          { title: "Dark Teal", value: "#01ADCA" },
          { title: "Yellow", value: "#FFDE4E" },
          { title: "Mid Grey", value: "#464343" },
        ],
      },
    },
    {
      name: "primaryAccentColor",
      type: "colorlist", // required
      title: "Primary Accent Color",
      fieldset: "brand",
      description:
        "Used as primary accent color across the site. Used for buttons, hyperlinks, line accents etc.",
      validation: (Rule) =>
        Rule.warning("Please fill out the field.").required(),
      options: {
        borderradius: {
          outer: "100%",
          inner: "100%",
        },
        list: [
          { title: "White", value: "#ffffff" },

          { title: "Pink", value: "#FF6A64" },
          { title: "Orange", value: "#F15926" },
          { title: "Light Teal", value: "#31E2E8" },
          { title: "Light Teal", value: "#20C0D9" },
          { title: "Dark Teal", value: "#01ADCA" },
          { title: "Yellow", value: "#FFDE4E" },
          { title: "Mid Grey", value: "#464343" },
        ],
      },
    },
    {
      name: "secondaryAccentColor",
      type: "colorlist", // required
      title: "Secondary Accent Color",
      fieldset: "brand",
      description: "Used as secondary accent color across the site.",
      validation: (Rule) =>
        Rule.warning("Please fill out the field.").required(),
      options: {
        borderradius: {
          outer: "100%",
          inner: "100%",
        },
        list: [
          { title: "Pink", value: "#FF6A64" },
          { title: "Orange", value: "#F15926" },
          { title: "Light Teal", value: "#31E2E8" },
          { title: "Light Teal", value: "#20C0D9" },
          { title: "Dark Teal", value: "#01ADCA" },
          { title: "Yellow", value: "#FFDE4E" },
          { title: "Mid Grey", value: "#464343" },
        ],
      },
    },
    // Site Settings
    {
      name: "url",
      type: "url",
      title: "Site Address",
      fieldset: "site",
      description:
        "The main site url to create canonical url links to other pages",
      validation: (Rule) =>
        Rule.warning("Please fill out the field.").required(),
    },
    {
      name: "frontpage",
      type: "reference",
      title: "Home Page",
      fieldset: "site",
      description: "Choose the page to be the home page of the site.",
      validation: (Rule) =>
        Rule.warning("Please fill out the field.").required(),
      to: { type: "page" },
    },
    {
      title: "Instagram",
      name: "instagram",
      type: "string",
      fieldset: "site",
    },
    {
      title: "Facebook",
      name: "facebook",
      type: "string",
      fieldset: "site",
    },

    // Footer

    // Left Menu Column
    // Logo Image
    // Company Tagline
    // Social[s]
    // Icon
    // Link (to externals)
    // Menu Column[s] – max 4
    // Heading Text (e.g. Company, Legal, Support etc.)
    // Link
    // Link Text
    // Link Route (to existing page)
    // Newsletter
    // Heading
    // Message
    // Button Icon
    // Button Text
    // Button Link (to Mailerlite API, add to list)
    // Submit success message (hidden div)
    // Submit fail message (hidden div)
    {
      title: "Footer",
      name: "footer",
      type: "object",
      description: "Footer details. Included at the bottom of every page.",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
      fields: [
        {
          name: "column1",
          type: "object",
          title: "Column 1 Content",
          fields: [
            { name: "logo", type: "image", title: "Footer Logo" },
            // Taglne automagically added from busness info
            // { name: "tagline", type: "string", title: "Tagline" },
            {
              name: "links",
              type: "array",
              title: "Links",
              of: [
                {
                  type: "reference",
                  to: [{ type: "page" }, { type: "post" }],
                },
              ],
            },
          ],
        },
        {
          name: "column2",
          type: "object",
          title: "Column 2 Content",
          fields: [
            { name: "heading", type: "string", title: "Column Heading" },
            {
              name: "links",
              type: "array",
              title: "Links",
              of: [
                {
                  type: "reference",
                  to: [{ type: "page" }, { type: "post" }],
                },
              ],
            },
          ],
        },
        {
          name: "column3",
          type: "object",
          title: "Column 3 Content",
          fields: [
            { name: "heading", type: "string", title: "Column Heading" },
            {
              name: "links",
              type: "array",
              title: "Links",
              of: [
                {
                  type: "reference",
                  to: [{ type: "page" }, { type: "post" }],
                },
              ],
            },
          ],
        },
        {
          name: "column4",
          type: "object",
          title: "Column 4 Content",
          fields: [
            { name: "heading", type: "string", title: "Column Heading" },
            {
              name: "links",
              type: "array",
              title: "Links",
              of: [
                {
                  type: "reference",
                  to: [{ type: "page" }, { type: "post" }],
                },
              ],
            },
          ],
        },
        {
          name: "column5",
          type: "object",
          title: "Column 5 Content",
          fields: [
            { name: "heading", type: "string", title: "Column Heading" },
            {
              name: "links",
              type: "array",
              title: "Links",
              of: [
                {
                  type: "reference",
                  to: [{ type: "page" }, { type: "post" }],
                },
              ],
            },
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
