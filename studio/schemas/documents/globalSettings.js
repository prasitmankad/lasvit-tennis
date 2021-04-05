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

    // {
    //   title: "Footer navigation items",
    //   name: "footerNavigation",
    //   type: "array",
    //   validation: (Rule) => [
    //     Rule.max(10).warning("Are you sure you want more than 10 items?"),
    //     Rule.unique().error("You have duplicate menu items"),
    //   ],
    //   fieldset: "footer",
    //   of: [
    //     {
    //       type: "reference",
    //       to: [{ type: "route" }],
    //     },
    //   ],
    // },
  ],
};
