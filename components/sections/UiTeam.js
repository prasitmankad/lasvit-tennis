import PropTypes from "prop-types";
import Cta from "./Cta";
import { PortableText, urlFor } from "../../utils/sanity";

// query nominated authors separately
// for the section get the child author reference
function uiTeam(props) {
  const { title, subtitle, paragraph, team_members } = props;
  console.log("Team Members =>", team_members);
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
                  <div
                    key={member.author._id}
                    class="rounded-lg h-64 overflow-hidden"
                  >
                    <img
                      src={urlFor(member.author.image)
                        .auto("format")
                        .width(300)
                        .height(300)
                        .fit("crop")
                        .quality(80)
                        .url()}
                      // alt={
                      //   member.author.image?.alt ||
                      //   `Photo of ${member.author.image.caption}`
                      // }
                      class="object-cover object-center h-full w-full"
                    />
                  </div>
                  <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                    {member.author.name}
                    <h3 class="title-font text-xl font-medium text-gray-700 mt-6 mb-3">
                      {member.author.headline}
                    </h3>
                  </h2>
                  <p class="leading-relaxed text-base">
                    {member.author.bio && (
                      <PortableText
                        blocks={member.author.bio}
                        className="text-gray-700"
                      />
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default uiTeam;