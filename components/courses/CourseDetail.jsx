import React from "react";
import { urlFor } from "../../utils/sanity";
import { FullCourseFeatures } from "./../../components/sections/FullCourseFeatures";
import { ModulesSection } from "./../../components/sections/ModulesSection";
import { useClient } from "../../hooks/useClient";
import { Loader } from "../../components/Loader";
import { CourseBanner } from "../../components/courses/CourseBanner";
import { MajorCourseFeatures } from "../sections/MajorCourseFeatures";
import { ContentSneakPeek } from "./../../components/sections/ContentSneakPeek";
import { StatSection } from "./../../components/sections/StatSection";
import { PricingSection } from "./../../components/sections/PricingSection";
import { FaqSection } from "./../../components/sections/FaqSection";

export function CourseDetail({ payCourse, course }) {
  const { courseBilling, client } = useClient(course._id);

  if (courseBilling === undefined && client) {
    return <Loader />;
  }

  return (
    <div className="bg-white">
      {course && (
        <>
          {/* <FeatureSectionWithPictures content={course.content} /> */}
          {client === null || courseBilling === null ? (
            <>
              <CourseBanner course={course} />
              <MajorCourseFeatures content={course.content} />
              <ContentSneakPeek content={course.content.sneakpeek} />
              <FullCourseFeatures content={course.content} />
              <StatSection stats={course.stats} />
              <PricingSection pricing={course.pricing} payCourse={payCourse} />
              <FaqSection faqs={course.faqs} />

              {/* <PricingSection pricing={course.pricing} payCourse={payCourse} />
              <div className="lg:mx-24">
                <ModulesItemSection
                  items={course.content.sneakpeek}
                  title={"Sneak peek"}
                />
              </div> */}
            </>
          ) : (
            // paid layout variants
            // modules
            // content items - videos
            // content items - articles
            <>
              <ModulesSection modules={course.modules} />
            </>
          )}
          {/* <StatSection stats={course.stats} />
          <FeatureSection content={course.content} />
          <FaqSection faqs={course.faqs} /> */}
        </>
      )}
    </div>
  );
}
