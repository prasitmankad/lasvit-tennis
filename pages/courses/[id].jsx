import { courses } from "./coursesData"; // TODO : Mock data
import React from "react";
import { PageWrapper } from "../PageWrapper";
import { CourseBanner } from "./components/CourseBanner";
import { CoursePriceCard } from "./components/CoursePriceCard";
import { useDispatch } from "react-redux";
import { createBillingAction } from "../../modules/actions/apiAction";

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
  const id = context.params.id;
  const data = courses.find((course) => course.id === Number(id)) || null;

  return {
    props: { course: data, id },
  };
};

function CourseDetail({ course }) {
  const dispatch = useDispatch();

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
    <PageWrapper page={null}>
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
    </PageWrapper>
  );
}

export default CourseDetail;
