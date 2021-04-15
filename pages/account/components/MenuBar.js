import { SvgIcon } from "./SvgIcon";
import { PageType } from "../index";

export function MenuBar(props) {
  const { changeView, activeView } = props;

  return (
    <nav
      aria-label="Sections"
      class="hidden flex-shrink-0 w-96 bg-white border-r border-blue-gray-200 xl:flex xl:flex-col"
    >
      <div class="flex-1 min-h-0 overflow-y-auto">
        <div
          // class="bg-blue-50 bg-opacity-50 flex p-6 border-b border-blue-gray-200"
          class={`${
            activeView === PageType.ACCOUNT
              ? "bg-blue-50 bg-opacity-50"
              : "hover:bg-blue-50 hover:bg-opacity-50"
          } flex p-6 border-b border-blue-gray-200`}
          onClick={() => changeView(PageType.ACCOUNT)}
        >
          <SvgIcon icon={PageType.ACCOUNT} />
          <div class="ml-3 text-sm">
            <p class="font-medium text-blue-gray-900">Account</p>
          </div>
        </div>

        <div
          class={`${
            activeView === PageType.BILLING
              ? "bg-blue-50 bg-opacity-50"
              : "hover:bg-blue-50 hover:bg-opacity-50"
          } flex p-6 border-b border-blue-gray-200`}
          onClick={() => changeView(PageType.BILLING)}
        >
          <SvgIcon icon={PageType.BILLING} />
          <div class="ml-3 text-sm">
            <p class="font-medium text-blue-gray-900">Billing</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
