import { useRouter } from "next/router";

export function CourseCard({ course }) {
  const { mainImage, shortDescription, title, slug } = course;
  const router = useRouter();

  return (
    <div
      key={course.id}
      className="max-w-xs rounded overflow-hidden hover:bg-blue-50 hover:bg-opacity-50 hover:shadow-xl shadow-md m-4 cursor-pointer"
      onClick={() => {
        router.push(`/courses/${slug.current}`);
      }}
    >
      <img
        className="w-full"
        src={mainImage.src.url}
        alt="Sunset in the mountains"
      />
      <div className="h-56 px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-grey-darker text-justify">{shortDescription}</p>
      </div>
    </div>
  );
}
