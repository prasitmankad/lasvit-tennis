import { CourseCard } from "./components/CourseCard";
import { useRouter } from "next/router";
import Error from "next/error";
import RenderHeader from "../../components/render/renderHeader";
import RenderFooter from "../../components/render/renderFooter";
import { sanityClient } from "../../utils/sanity";
import { courseCollection as query } from "../../modules/groq/course";
import { useTranslation } from "react-i18next";

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

  return (
    <>
      <RenderHeader data={pageData.globalData} />

      <div className="max-w-xl mx-auto lg:max-w-7xl">
        <div className="py-10 px-16">
          <h1 className="text-3xl font-extrabold text-blue-gray-900">
            {t("courses.catalog")}
          </h1>
        </div>
        <div className="flex-1 flex flex-row flex-wrap justify-between w-full px-16">
          {pageData.pageData.map((course) => (
            <CourseCard course={course} />
          ))}
        </div>
      </div>

      <RenderFooter data={pageData.globalData} />
    </>
  );
}

export default CoursesPage;
