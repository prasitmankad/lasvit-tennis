export function CourseBanner({ course }) {
  return (
    <div class="bg-indigo-900">
      <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div class="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
          <div class="max-w-xl">
            <h2 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              {course.name}
            </h2>
            <p class="mt-5 text-xl text-indigo-300">{course.perex}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
