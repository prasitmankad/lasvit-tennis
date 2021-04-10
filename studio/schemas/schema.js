import createSchema from "part:@sanity/base/schema-creator";// First, we must import the schema creator
import schemaTypes from "all:part:@sanity/base/schema-type"; // Then import schema types from any plugins that might expose them

// import document types

// import objects

// import sections / layout









// We import object and document schemas
import page from "./documents/page";
import post from "./documents/post";
import route from "./documents/route";
import faq from "./documents/faq";

import globalSettings from "./documents/globalSettings";

// imports for course content
import course from './documents/course';
import module from './documents/module';
import contentItem from './documents/contentItem';

// Object types
import cta from "./objects/cta";
import figure from "./objects/figure";
import internalLink from "./objects/internalLink";
import link from "./objects/link";
import contactInfo from "./objects/contactInfo";
import blockContent from "./objects/blockContent";

import mainImage from "./objects/mainImage";
import teamMember from "./documents/teamMember";
import { videoEmbed } from "./objects/embeds";
import feature from "./objects/feature";

import * as plugs from "./components/pageSections";
import plugDefaultFields from "./components/pageSections/_defaultFields"; // required for everything imported from plugs



const allPlugs = Object.values(plugs).map((plug) => {
  return { ...plug, fields: plugDefaultFields.concat(plug.fields) };
});

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes
    .concat([
      // The following are document types which will appear
      // in the studio.
      course,
      faq,
      module,
      contentItem,
      page,
      route,
      videoEmbed,
      globalSettings,
      post,
      mainImage,
      teamMember,
      // When added to this list, object types can be used as
      cta,
      figure,
      internalLink,
      link,
      blockContent,
      contactInfo,

      feature,
    ])
    .concat(allPlugs),
});
