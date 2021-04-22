import { SvgIcon } from "./SvgIcon";
import { PageType } from "../index";
import { useTranslation } from "react-i18next";

export function MenuBar(props) {
  const { t } = useTranslation();
  const { changeView, activeView } = props;

  return (
    <nav
      aria-label="Sections"
      className="hidden flex-shrink-0 w-96 bg-white border-r border-blue-gray-200 xl:flex xl:flex-col"
    >
      <div className="flex-1 min-h-0 overflow-y-auto">
        <div
          className={`${
            activeView === PageType.ACCOUNT
              ? "bg-blue-50 bg-opacity-50"
              : "hover:bg-blue-50 hover:bg-opacity-50"
          } flex p-6 border-b border-blue-gray-200`}
          onClick={() => changeView(PageType.ACCOUNT)}
        >
          <SvgIcon icon={PageType.ACCOUNT} />
          <div className="ml-3 text-sm">
            <p className="font-medium text-blue-gray-900">
              {t("account.menu.client")}
            </p>
          </div>
        </div>

        <div
          className={`${
            activeView === PageType.BILLING
              ? "bg-blue-50 bg-opacity-50"
              : "hover:bg-blue-50 hover:bg-opacity-50"
          } flex p-6 border-b border-blue-gray-200`}
          onClick={() => changeView(PageType.BILLING)}
        >
          <SvgIcon icon={PageType.BILLING} />
          <div className="ml-3 text-sm">
            <p className="font-medium text-blue-gray-900">
              {" "}
              {t("account.menu.billing")}
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
