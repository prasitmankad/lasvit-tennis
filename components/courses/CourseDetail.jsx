import React from "react";

import { FeatureSectionWithPictures } from "./../../components/sections/FeatureSectionWithPictures";
import { FeatureSection } from "./../../components/sections/FeatureSection";
import { FaqSection } from "./../../components/sections/FaqSection";
import { StatSection } from "./../../components/sections/StatSection";
import { PricingSection } from "./../../components/sections/PricingSection";
import { ModulesSection } from "./../../components/sections/ModulesSection";
import { ModulesItemSection } from "./../../components/sections/ModulesItemSection";
import { useClient } from "../../hooks/useClient";
import { Loader } from "../../components/Loader";

export function CourseDetail({ payCourse, course }) {
  const { courseBilling, client } = useClient(course._id);

  if (courseBilling === undefined && client) {
    return <Loader />;
  }

  return (
    <div className="bg-white">
      {course && (
        <>
          <FeatureSectionWithPictures content={course.content} />
          {client === null || courseBilling === null ? (
            <>
              <PricingSection pricing={course.pricing} payCourse={payCourse} />
              <div className="lg:mx-24">
                <ModulesItemSection
                  items={course.content.sneakpeek}
                  title={"Sneak peek"}
                />
              </div>
            </>
          ) : (
            <ModulesSection modules={course.modules} />
          )}
          <StatSection stats={course.stats} />
          <FeatureSection content={course.content} />
          <FaqSection faqs={course.faqs} />
        </>
      )}
    </div>
  );
}
