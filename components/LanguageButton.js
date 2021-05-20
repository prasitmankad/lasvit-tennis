import React from "react";
import i18n from "i18next";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { flag } from "../translations/config";
import { useLanguage } from "../hooks/useLanguage";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function LanguageButton() {
  const [lang, setLang] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  // const { setLangMutate } = useLanguage();

  React.useEffect(() => {
    setLang(i18n.language);
  }, []);

  return (
    <div className="lang-menu mx-4 mt-2">
      {lang && (
        <Popover className="relative">
          {() => (
            <>
              <div
                className={classNames(
                  open ? "text-gray-900" : "text-gray-500",
                  "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                )}
                onClick={() => setOpen((prev) => !prev)}
              >
                <span>
                  <img className="w-6 h-6" src={flag[lang]} alt="" />
                </span>
                <ChevronDownIcon
                  className={classNames(
                    open ? "text-gray-600" : "text-gray-400",
                    "ml-2 h-5 w-5 group-hover:text-gray-500"
                  )}
                  aria-hidden="true"
                />
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel
                  static
                  className="absolute z-10 left-1/2 transform -translate-x-1/2 w-24"
                >
                  <div className="mt-3 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white">
                      {Object.keys(flag).map((_, i) => (
                        <div
                          key={i}
                          className="px-7 py-2 block hover:bg-gray-50 transition ease-in-out duration-150"
                          onClick={() => {
                            setLang(_);
                            setOpen(false);
                            setLangMutate(_);
                          }}
                        >
                          <img className="w-8 h-8" src={flag[_]} alt="" />
                        </div>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      )}
    </div>
  );
}
