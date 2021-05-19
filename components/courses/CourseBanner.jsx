import { useLanguage } from "../../hooks/useLanguage";
export function CourseBanner({ course }) {
  const { l } = useLanguage();
  return (
    <div className="bg-indigo-900">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              {l(course.title)}
            </h2>
            <p className="mt-5 text-xl text-indigo-300">
              {l(course.shortDescription)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
