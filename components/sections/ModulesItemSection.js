import ReactPlayer from "react-player/lazy";
import { useLanguage } from "../../hooks/useLanguage";

export function ModulesItemSection({ items, title }) {
  const { l } = useLanguage();
  return (
    <div className="mt-16 mx-6">
      <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900">
        {title}
      </h2>
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {items.map((file) => (
          <li key={file.fileUrl} className="relative">
            <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
              {file.contentType === "video" && (
                <ReactPlayer
                  className="object-cover group-hover:opacity-75"
                  url={file.fileUrl}
                  width="auto"
                  height="auto"
                  controls={true}
                  light={true}
                />
              )}

              {file.contentType !== "video" && (
                <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                  // TODO
                </div>
              )}
            </div>
            <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
              {l(file.contentTitle)}
            </p>
            <p className="block text-sm font-medium text-gray-500 pointer-events-none">
              {l(file.shortDescription)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
