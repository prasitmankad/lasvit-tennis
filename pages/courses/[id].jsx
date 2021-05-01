import React from "react";
import Error from "next/error";
import { CourseBanner } from "./components/CourseBanner";
import { CoursePriceCard } from "./components/CoursePriceCard";
import { useDispatch } from "react-redux";
import { createBillingAction } from "../../modules/actions/apiAction";
import { useRouter } from "next/router";
import RenderHeader from "../../components/render/renderHeader";
import RenderFooter from "../../components/render/renderFooter";
import { sanityClient } from "../../utils/sanity";
import { courseList, courseDetail } from "../../modules/groq/course";

export async function getStaticProps({ params = {}, preview = false }) {
  const { id } = params;
  var pageData = await sanityClient.fetch(courseDetail, { slug: id });

  return {
    props: { pageData },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  var routes = await sanityClient.fetch(courseList);
  return {
    paths: routes || null,
    fallback: true,
  };
}

function CourseDetail({ pageData }) {
  const { pageData: course, globalData } = pageData;
  const router = useRouter();
  const dispatch = useDispatch();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!pageData) {
    return <Error statusCode={404} />;
  }

  function payCourse(token, price) {
    const GQLData = {
      amount: price.amount,
      currency: price.currency,
      period: price.period,
      priceType: price.type,
      courseId: `${course.id}`,
      name: course.name,
    };

    dispatch(createBillingAction(token, GQLData));
  }

  return (
    <>
      <RenderHeader data={globalData} />
      <CourseBanner course={course} />

      <CoursePriceCard
        course={course}
        payCourse={(token, price) => payCourse(token, price)}
      />

      <RenderFooter data={globalData} />
    </>
  );
}

export default CourseDetail;
