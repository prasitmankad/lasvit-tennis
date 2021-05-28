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
import { CourseDashboard } from "../courses/CourseDashboard"; // aka course layout
import RenderHeader from "../../components/render/renderHeader";
import RenderFooter from "../../components/render/renderFooter";
import { Course } from "./dashboard/coursed";

export function CourseDetail({ payCourse, course, data }) {
  // console.log("Course Data -> ", course)
  const { courseBilling, client } = useClient(course._id);

  if (courseBilling === undefined && client) {
    return <Loader />;
  }

  return (
    <div className="bg-white">
      {course && (
        <>
          {client === null || courseBilling === null ? (
            <>
              {/* {console.log("CourseData -> ",course) } */}
              {/* <CourseDashboard courseData={course} globalData={data} /> */}
              <RenderHeader data={data} />
              <CourseBanner course={course} />
              <MajorCourseFeatures content={course.content} />
              <ContentSneakPeek content={course.content.sneakpeek} />
              <FullCourseFeatures content={course.content} />
              <StatSection stats={course.stats} />
              <PricingSection pricing={course.pricing} payCourse={payCourse} />
              <FaqSection faqs={course.faqs} />
              <RenderFooter data={data} />
            </>
          ) : (
            <CourseDashboard courseData={course} globalData={data} />
          )}
        </>
      )}
    </div>
  );
}
