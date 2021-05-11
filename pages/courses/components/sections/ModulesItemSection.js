import ReactPlayer from "react-player/youtube";

export function ModulesItemSection({ items, title }) {
  return (
    <div className="mt-16 mx-16">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
        {title}
      </h2>

      <div className="mx-16 my-4">
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {items.map((item) => (
            <li key={item.fileUrl} className="relative">
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                {item.contentType === "video" && (
                  <ReactPlayer
                    className="object-cover group-hover:opacity-75"
                    url={item.fileUrl}
                    width="auto"
                    height="auto"
                  />
                )}

                {item.contentType !== "video" && (
                  <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                    // TODO
                  </div>
                )}
              </div>
              <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                {item.contentTitle}
              </p>
              <p className="inline-block bg-grey-lighter rounded-full text-sm text-gray-500 font-semibold text-grey-darker mr-2">
                {item.shortDescription}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
