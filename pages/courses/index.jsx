import { courses } from "./coursesData"; // TODO : Mock data
import { CourseCard } from "./components/CourseCard";
import { useRouter } from "next/router";
import Error from "next/error";
import RenderHeader from "../../components/render/renderHeader";
import RenderFooter from "../../components/render/renderFooter";
import { getClient } from "../../utils/sanity";
import { query } from "../../utils/query";
import { useTranslation } from "react-i18next";

const PAGE_TITLE = "Courses";

export const getStaticProps = async ({ preview = false }) => {
  var allData = await getClient(preview).fetch(query(PAGE_TITLE));

  return {
    props: { courses, preview, allData },
    revalidate: 1,
  };
};

export function CoursesPage({ courses, allData, preview }) {
  const router = useRouter();
  const { t } = useTranslation();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!allData) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <RenderHeader data={allData.globalData} />

      <div className="max-w-xl mx-auto lg:max-w-7xl">
        <div className="py-10 px-16">
          <h1 className="text-3xl font-extrabold text-blue-gray-900">
            {t("courses.catalog")}
          </h1>
        </div>
        <div className="flex-1 flex flex-row flex-wrap justify-between w-full px-16">
          {courses.map((course) => (
            <CourseCard course={course} />
          ))}
        </div>
      </div>

      <RenderFooter data={allData.globalData} />
    </>
  );
}

export default CoursesPage;
