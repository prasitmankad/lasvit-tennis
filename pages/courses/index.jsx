import React from "react";
import { CourseCard } from "../../components/courses/CourseCard";
import { useRouter } from "next/router";
import Error from "next/error";
import RenderHeader from "../../components/render/renderHeader";
import RenderFooter from "../../components/render/renderFooter";
import { sanityClient } from "../../utils/sanity";
import { courseCollection as query } from "../../modules/groq/course";
import { useTranslation } from "react-i18next";
import { urlFor } from "../../utils/sanity";

export async function getStaticProps() {
  var pageData = await sanityClient.fetch(query);

  return {
    props: { pageData },
    revalidate: 1,
  };
}

function CoursesPage({ pageData }) {
  const router = useRouter();
  const { t } = useTranslation();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!pageData) {
    return <Error statusCode={404} />;
  }

  // console.log("Courses -> ", pageData);

  return (
    <>
      <RenderHeader data={pageData.globalData} />
      <div className="relative pt-6 pb-20 px-4 sm:px-6 lg:pt-6 lg:pb-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className={"bg-white"}>
            <div className="max-w-7xl mx-auto py-6 px-4 sm:py-6 sm:px-6 lg:px-8 lg:flex lg:justify-between">
              <div className="max-w-xl">
                <h2
                  className={
                    "prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_title text-" +
                    pageData.globalData.branding.primaryAccentColor.title
                  }
                >
                  {t("courses.catalog")}
                </h2>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-lg mx-auto grid gap-16 lg:grid-cols-3 lg:max-w-none py-4">
            {pageData.pageData.map((course, i) => (
              <CourseCard
                key={i}
                course={course}
                globalData={pageData.globalData}
              />
            ))}
          </div>
        </div>
      </div>
      <RenderFooter data={pageData.globalData} />
    </>
  );
}

export default CoursesPage;
