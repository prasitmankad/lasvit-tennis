import React, { Fragment } from "react";
import { ExclamationIcon } from "@heroicons/react/solid";
import PropTypes from "prop-types";
import * as composites from "../composites";
function RenderSections(props) {
  console.log("AllData Props ->  ", props);
  // reconstruct object

  const globalData = { globalData: { ...props.data.globalData } };

  // check if sections have been provided (var is null)
  if (!props.data.pageData.sections) {
    console.error("Missing section. Check code for correct configuration.");
    return (
      <div className="rounded-md bg-yellow-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <ExclamationIcon
              className="h-5 w-5 text-yellow-400"
              aria-hidden="true"
            />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">
              IT'S NOT YOU, IT'S US
            </h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>
                UI render method for React Component not found. Please check
                your CMS config.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // map each section to its corresponding render component and return a fragment
  // check if section has corresponding render and pipe out message if not
  return (
    <Fragment>
      {props.data.pageData.sections.map((section) => {
        const SectionComponent = resolveSections(section);
        // console.log("SectionComponent //", section._type);

        if (!SectionComponent) {
          // section ui render not found
          return (
            <React.Fragment key={section._key}>
              {/* <div className="rounded-md bg-yellow-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <ExclamationIcon
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">
                      IT'S NOT YOU, IT'S US
                    </h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>
                        UI render method for React Component not found. Please
                        check your CMS config.
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </React.Fragment>
          );
        }

        // group sectiondata into its own sub component
        let sectionData = { sectionData: { ...section } };
        if (section._type === "blog") {
          //console.log("section type // ", section._type)
           let postsData = { postsData: [ ...props.data.pageData.recentPosts ] };

          return (
            <React.Fragment key={section._key}>
            <SectionComponent
              
              {...sectionData} // send section to associated UI component
              {...globalData} // send global content and params
              {...postsData}
            />
            </React.Fragment>
          );
        } else {
          return (
            <SectionComponent
              key={section._key}
              {...sectionData} // send section to associated UI component
              {...globalData} // send global content and params
            />
          );
        }
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

function resolveSections(section) {
  // eslint-disable-next-line import/namespace
  const Section = composites[section._type];

  if (Section) {
    return Section;
  }

  console.error("Cant find section", section); // eslint-disable-line no-console
  return null;
}
