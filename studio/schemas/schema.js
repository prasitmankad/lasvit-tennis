import createSchema from "part:@sanity/base/schema-creator"; // First, we must import the schema creator
import schemaTypes from "all:part:@sanity/base/schema-type"; // Then import schema types from any plugins that might expose them

// import document types
import globalSettings from "./documents/globalSettings";
import page from "./documents/page";
import post from "./documents/post";

import course from "./documents/course";
import module from "./documents/module";
import contentItem from "./documents/contentItem";
import faq from "./documents/faq";
import teamMember from "./documents/teamMember";

import route from "./documents/route";

// import objects
import * as objects from "./components/objects"

import cta from "./components/objects/cta";
import figure from "./components/objects/figure";
import internalLink from "./components/objects/internalLink";
import link from "./components/objects/link";
import blockContent from "./components/objects/blockContent";

import mainImage from "./components/objects/mainImage";
import { videoEmbed } from "./components/objects/embeds";
import feature from "./components/objects/feature";



// import sections / layout
import * as plugs from "./components/pageSections";
import plugDefaultFields from "./components/pageSections/_defaultFields"; // required for everything imported from plugs

// Object types

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

      feature,
    ])
    .concat(allPlugs),
});
