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
<<<<<<< HEAD
import { CourseDashboard } from "../courses/CourseDashboard"; // aka course layout
import RenderHeader from "../../components/render/renderHeader";
import RenderFooter from "../../components/render/renderFooter";
import { Course } from "./dashboard/coursed";
=======
import { CourseDashboard } from "../sections/CourseDashboard.js";
>>>>>>> d8f8905db903149cc20bef073f39c1c293b8221d

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
<<<<<<< HEAD
          {client === null || courseBilling === null ? (
            <>
              {/* {console.log("CourseData -> ",course) } */}
              <RenderHeader data={data} />
=======
          {/* <FeatureSectionWithPictures content={course.content} /> */}
          {client === null || courseBilling === null ? (
            <>
              
              {/* <CourseDashboard course={course} /> */}

>>>>>>> d8f8905db903149cc20bef073f39c1c293b8221d
              <CourseBanner course={course} />
              <MajorCourseFeatures content={course.content} />
              <ContentSneakPeek content={course.content.sneakpeek} />
              <FullCourseFeatures content={course.content} />
              <StatSection stats={course.stats} />
              <PricingSection pricing={course.pricing} payCourse={payCourse} />
              <FaqSection faqs={course.faqs} />
<<<<<<< HEAD
              <RenderFooter data={data} />
            </>
          ) : (
            <CourseDashboard courseData={course} globalData={data} />
          )}
=======
              

              

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
>>>>>>> d8f8905db903149cc20bef073f39c1c293b8221d
        </>
      )}
    </div>
  );
}
