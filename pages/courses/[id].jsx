import React from "react";
import Error from "next/error";
import { CourseDetail } from "../../components/courses/CourseDetail";
import { useDispatch } from "react-redux";
import { createBillingAction } from "../../modules/actions/apiAction";
import { useRouter } from "next/router";
import RenderHeader from "../../components/render/renderHeader";
import RenderFooter from "../../components/render/renderFooter";
import { sanityClient } from "../../utils/sanity";
import { courseList, courseDetail } from "../../modules/groq/course";

export async function getStaticProps({ params = {}, preview = false }) {
  const { id } = params;
  const pageData = await sanityClient.fetch(courseDetail, { slug: id });

  return {
    props: { pageData },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const routes = await sanityClient.fetch(courseList);
  return {
    paths: routes || null,
    fallback: true,
  };
}

function Course({ pageData }) {
  console.log("CourseDetail -> ", pageData);
  
  const router = useRouter();
  const dispatch = useDispatch();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!pageData) {
    return <Error statusCode={404} />;
  }

  function payCourse(token, price) {
    const course = pageData.pageData;
    const GQLData = {
      amount: price.value,
      currency: price.currency,
      symbol: price.symbol,
      period: price.frequency,
      priceType: price.type,
      courseId: `${course._id}`,
      name: course.title,
    };

    dispatch(createBillingAction(token, GQLData));
  }

  return (
    <>
      <RenderHeader data={pageData.globalData} />

      {pageData && (
        <>
          <CourseDetail
            course={pageData.pageData}
            payCourse={(token, price) => payCourse(token, price)}
          />
        </>
      )}

      <RenderFooter data={pageData.globalData} />
    </>
  );
}

export default Course;
