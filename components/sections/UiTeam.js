import PropTypes from "prop-types";
import Cta from "./Cta";
import { PortableText, urlFor } from "../../utils/sanity";

function uiTeam(props) {
  const { title, subtitle, paragraph, team_members } = props;
  return (
    <>
      {/* TEAM BLOC */}
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">
              {title}
            </h1>
            <h2 class="text-2xl font-medium title-font mb-4 text-gray-900">
              {subtitle}
            </h2>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              {paragraph && (
                <PortableText blocks={paragraph} className="text-gray-700" />
              )}
            </p>
          </div>
          <div class="container px-5 py-10 mx-auto">
            <div class="flex flex-wrap -mx-4 -mb-10 text-center">
            {team_members.map((member) => (
              <div class="sm:w-1/2 mb-10 px-4">
                <div key={member._id} class="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    class="object-cover object-center h-full w-full"
                    src="https://dummyimage.com/1201x501"
                  />
                </div>
                <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                  member.name
                </h2>
                <p class="leading-relaxed text-base">
                  Williamsburg occupy sustainable snackwave gochujang. Pinterest
                  cornhole brunch, slow-carb neutra irony.
                </p>
              </div>
            ))
              
)}

              
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default uiTeam;
