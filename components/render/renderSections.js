import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { upperFirst } from "lodash";
// import * as SectionComponents from "../sections";
import * as composites from "../composites";

function resolveSections(section) {
  // eslint-disable-next-line import/namespace
  console.log("Composites -> ", composites)
  const Section = composites[section._type];
  console.log("Section --> ", Section);

  if (Section) {
    return Section;
  }

  console.error("Cant find section", section); // eslint-disable-line no-console
  return null;
}

function RenderSections(props) {
  console.log("props into AllData ->  ", props);
  const globalData = props.data.globalData;
  const pageData = props.data.pageData;

  const sections = pageData.sections;

  console.log("Sections --> ", sections);
  if (!sections) {
    // no sections defined on page
    console.error("Missing section. Check code for correct configuration.");
    return <div>Missing Sections</div>;
  }

  return (
    <Fragment>
      {sections.map((section) => {
        console.log("section map -> ", section)
        const SectionComponent = resolveSections(section);
        console.log("SectionComponent -> ", SectionComponent);
        if (!SectionComponent) {
          return <div>Missing section {section._type}</div>;
        }
        return <SectionComponent {...section} key={section._key} />;
      })}
    </Fragment>
  );
}

RenderSections.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      _type: PropTypes.string,
      _key: PropTypes.string,
      section: PropTypes.instanceOf(PropTypes.object),
    })
  ),
};

export default RenderSections;
