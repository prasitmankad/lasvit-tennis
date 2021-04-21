import { courses } from "./coursesData"; // TODO : Mock data
import { PageWrapper } from "../PageWrapper";
import { CourseCard } from "./components/CourseCard";

export const getStaticProps = async () => {
  return {
    props: { courses },
  };
};

export function CoursesPage({ courses }) {
  return (
    <PageWrapper page={null}>
      <div class="max-w-xl mx-auto lg:max-w-7xl">
        <div className="py-10 px-16">
          <h1 className="text-3xl font-extrabold text-blue-gray-900">
            Course Catalog
          </h1>
        </div>
        <div className="flex-1 flex flex-row flex-wrap justify-between w-full px-16">
          {courses.map((course) => (
            <CourseCard course={course} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}

export default CoursesPage;
