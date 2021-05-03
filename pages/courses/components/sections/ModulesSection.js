import React from "react";
import { useTranslation } from "react-i18next";
import { ModulesItemSection } from "./ModulesItemSection";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ACTUAL_MODULE = 0;

export function ModulesSection({ modules }) {
  const { t } = useTranslation();
  const [actualModule, setActualModule] = React.useState(
    modules[ACTUAL_MODULE]
  );
  const [actionIdx, setActionIdx] = React.useState(ACTUAL_MODULE);

  return (
    <div className="mx-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
        {t("courses.module")}
      </h2>
      <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
        {modules.map((mod, inx) => (
          <div
            key={mod._id}
            onClick={() => {
              setActualModule(mod);
              setActionIdx(inx);
            }}
            className={classNames(
              inx === 0 ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none" : "",
              inx === 1 ? "sm:rounded-tr-lg" : "",
              inx === modules.length - 2 ? "sm:rounded-bl-lg" : "",
              inx === modules.length - 1
                ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                : "",
              `flex cursor-pointer hover:bg-gray-50 relative group bg-white p-6 ${
                inx === actionIdx ? "bg-gray-100" : ""
              }`
            )}
          >
            <div className="flex-shrink-0 rounded-lg inline-flex p-3">
              <img
                className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
                src={mod.mainImage.asset.url}
                alt=""
              />
            </div>
            <div className="flex-1 mt-8">
              <h3 className="text-lg font-medium">
                <div className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {mod.title}
                </div>
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {mod.shortDescription}
              </p>
            </div>
            <span
              className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
              aria-hidden="true"
            ></span>
          </div>
        ))}
      </div>

      <ModulesItemSection module={actualModule} />
    </div>
  );
}
