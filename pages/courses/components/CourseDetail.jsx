import React from "react";

import { FeatureSectionWithPictures } from "./sections/FeatureSectionWithPictures";
import { FeatureSection } from "./sections/FeatureSection";
import { FaqSection } from "./sections/FaqSection";
import { StatSection } from "./sections/StatSection";
import { PricingSection } from "./sections/PricingSection";
import { ModulesSection } from "./sections/ModulesSection";
import { useBillingCourse } from "../../../hooks/useBillingCourse";
import { Loader } from "../../../components/Loader";

export function CourseDetail({ payCourse, course }) {
  const { courseBilling } = useBillingCourse(course._id);

  if (courseBilling === undefined) {
    return <Loader />;
  }

  return (
    <div className="bg-white">
      {course && courseBilling && (
        <>
          <FeatureSectionWithPictures content={course.content} />
          <ModulesSection modules={course.modules} />
          <StatSection stats={course.stats} />
          <FeatureSection content={course.content} />
          <FaqSection faqs={course.faqs} />
        </>
      )}

      {!!course && courseBilling === null && (
        <>
          <PricingSection pricing={course.pricing} payCourse={payCourse} />
        </>
      )}
    </div>
  );
}
