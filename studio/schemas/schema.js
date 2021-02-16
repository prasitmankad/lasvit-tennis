// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import category from "./documents/category";
import page from "./documents/page";
import post from "./documents/post";
import route from "./documents/route";
import siteConfig from "./documents/siteConfig";
import person from "./documents/person";
// imports for course content
import course from './documents/course';
import course_module from './documents/course_module';
import course_video from './documents/course_video';

// Object types
import blockContent from "./objects/blockContent";
import cta from "./objects/cta";
import figure from "./objects/figure";
import internalLink from "./objects/internalLink";
import link from "./objects/link";
import portableText from "./objects/portableText";
import simplePortableText from "./objects/simplePortableText";
import contactInfo from "./objects/contactInfo";

// Landing page sections
// import hero from "./objects/hero";
import imageSection from "./objects/imageSection";
import textSection from "./objects/textSection";
import simpleBlockContent from "./objects/simpleBlockContent";
import mainImage from "./objects/mainImage";
import authorReference from "./objects/authorReference";
import bodyPortableText from "./objects/bodyPortableText";
import author from "./documents/author";
import { videoEmbed } from "./objects/embeds";
import feature from "./objects/feature";
import localeString from "./locale/String";
import localeText from "./locale/Text";
import localeBlockContent from "./locale/BlockContent";
import * as plugs from "./uiComposites"; // imports the Hero ui object
import plugDefaultFields from "./uiComposites/_defaultFields"; // required for everything imported from plugs



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
      course_module,
      course_video,
      category,
      page,
      route,
      videoEmbed,
      siteConfig,
      person,
      post,
      mainImage,
      author,
      authorReference,
      // When added to this list, object types can be used as
      cta,
      bodyPortableText,
      figure,
      internalLink,
      link,
      // hero,
      imageSection,
      textSection,
      portableText,
      simplePortableText,
      simpleBlockContent,
      contactInfo,
      blockContent,
      localeText,
      localeBlockContent,
      localeString,
      feature,
    ])
    .concat(allPlugs),
});
