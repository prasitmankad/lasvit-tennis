import React from "react";

import { FeatureSectionWithPictures } from "./sections/FeatureSectionWithPictures";
import { FeatureSection } from "./sections/FeatureSection";
import { FaqSection } from "./sections/FaqSection";
import { StatSection } from "./sections/StatSection";
import { PricingSection } from "./sections/PricingSection";
import { ModulesSection } from "./sections/ModulesSection";
import { ModulesItemSection } from "./sections/ModulesItemSection";
import { useClient } from "../../../hooks/useClient";
import { Loader } from "../../../components/Loader";

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
              <ModulesItemSection
                items={course.content.sneakpeek}
                title={"Sneak peek"}
              />
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