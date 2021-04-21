import { useRouter } from "next/router";

export function CourseCard({ course }) {
  const router = useRouter();

  return (
    <div
      key={course.id}
      className="max-w-xs rounded overflow-hidden hover:bg-blue-50 hover:bg-opacity-50 hover:shadow-xl shadow-md m-4 cursor-pointer"
      onClick={() => {
        router.push(`/courses/${course.id}`);
      }}
    >
      <img
        className="w-full"
        src="https://tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      <div className="h-56 px-6 py-4">
        <div className="font-bold text-xl mb-2">{course.name}</div>
        <p className="text-grey-darker text-justify">{course.perex}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
          #lasvit
        </span>
        <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
          #tennis
        </span>
        <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
          #courses
        </span>
      </div>
    </div>
  );
}
