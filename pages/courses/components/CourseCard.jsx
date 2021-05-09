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
      <div className="relative text-center text-white">
        <img
          className="w-full"
          src={mainImage.src.url}
          alt="Sunset in the mountains"
        />

        {/* <div className="absolute top-1/2 left-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-32 w-32"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div> */}
      </div>
      <div className="h-56 px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-grey-darker text-justify">{shortDescription}</p>
      </div>
    </div>
  );
}
