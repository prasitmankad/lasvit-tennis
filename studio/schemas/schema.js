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

// import objects
import blockContent from "./components/objects/blockContent";
import button from "./components/objects/button"; 
import { videoEmbed } from "./components/objects/embeds";
import feature from "./components/objects/feature";
import linkInternal from "./components/objects/linkInternal";
import linkExternal from "./components/objects/linkExternal";
import mainImage from "./components/objects/mainImage";

// import sections / layout
import * as plugs from "./components/pageSections";
import plugDefaultFields from "./components/pageSections/_defaultFields"; // required for everything imported from plugs

const allPlugs = Object.values(plugs).map((plug) => {
  return { ...plug, fields: plugDefaultFields.concat(plug.fields) };
});

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type to the ones provided by any plugins that are installed
  types: schemaTypes
    .concat([
      // documents
      globalSettings,
      page,
      post,
      course,
      module,
      contentItem,
      faq,
      teamMember,

      // objects
      blockContent,
      button,
      videoEmbed,
      feature,
      
      linkInternal,
      linkExternal,
      mainImage,

    ])
    .concat(allPlugs),
});
