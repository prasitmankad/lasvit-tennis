import React from "react";
import { urlFor } from "../../utils/sanity";
import { MajorCourseFeatures } from "../sections/MajorCourseFeatures";
import { FullCourseFeatures } from "./../../components/sections/FullCourseFeatures";
import { FaqSection } from "./../../components/sections/FaqSection";
import { StatSection } from "./../../components/sections/StatSection";
import { PricingSection } from "./../../components/sections/PricingSection";
import { ModulesSection } from "./../../components/sections/ModulesSection";
import { ContentSneakPeek } from "./../../components/sections/ContentSneakPeek";
import { useClient } from "../../hooks/useClient";
import { Loader } from "../../components/Loader";
import { CourseBanner } from "../../components/courses/CourseBanner";

export function CourseDetail({ payCourse, course }) {
  const { courseBilling, client } = useClient(course._id);

  if (courseBilling === undefined && client) {
    return <Loader />;
  }

  return (
    <div className="bg-white">
      {course && (
        <>
          {client === null || courseBilling === null ? ( // not paid
            <>
              <CourseBanner course={course} />

              <MajorCourseFeatures content={course.content} />
              <ContentSneakPeek content={course.content.sneakpeek} />

              <FullCourseFeatures content={course.content} />
              <StatSection stats={course.stats} />
              <PricingSection pricing={course.pricing} payCourse={payCourse} />
              <FaqSection faqs={course.faqs} />

              {/* <ModulesItemSection
                items={course.content.sneakpeek}
                title={"Sneak peek"}
              /> */}
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
        </>
      )}
    </div>
  );
}
