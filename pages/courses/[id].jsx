import { courses } from "./coursesData"; // TODO : Mock data
import React from "react";
import Error from "next/error";
import { CourseBanner } from "./components/CourseBanner";
import { CoursePriceCard } from "./components/CoursePriceCard";
import { useDispatch } from "react-redux";
import { createBillingAction } from "../../modules/actions/apiAction";
import { useRouter } from "next/router";
import RenderHeader from "../../components/render/renderHeader";
import RenderFooter from "../../components/render/renderFooter";
import { getClient } from "../../utils/sanity";
import { query } from "../../utils/query";

const PAGE_TITLE = "Courses";

export const getStaticPaths = async () => {
  const paths = courses.map((course) => {
    return {
      params: { id: course.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  var allData = await getClient(false).fetch(query(PAGE_TITLE));
  const id = context.params.id;
  const data = courses.find((course) => course.id === Number(id)) || null;

  return {
    props: { course: data, id, allData },
  };
};

function CourseDetail({ course, allData }) {
  const dispatch = useDispatch();

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!allData) {
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
      <RenderHeader data={allData.globalData} />

      <CourseBanner course={course} />
      <div className="max-w-xl mx-auto lg:max-w-7xl">
        <div className="flex-1 flex flex-row flex-wrap justify-between w-full py-16 ">
          {course.price.map((price) => (
            <CoursePriceCard
              key={course.id}
              price={price}
              payCourse={(token) => payCourse(token, price)}
            />
          ))}
        </div>
      </div>

      <RenderFooter data={allData.globalData} />
    </>
  );
}

export default CourseDetail;
