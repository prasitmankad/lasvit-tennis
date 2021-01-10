import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import ProductsPage from "../components/ProductsPage";
import { urlFor } from "../utils/sanity";

const query = `*[_type == "siteConfig"][0]`;
const pageQuery = `*[_type == "page" && title=="Home"][0]`;

function IndexPage(props) {
  const { configData, preview } = props;
  const router = useRouter();

  if (!router.isFallback && !configData) {
    return <Error statusCode={404} />;
  }

  const { data: config } = usePreviewSubscription(query, {
    initialData: configData,
    enabled: preview || router.query.preview !== null,
  });

  console.log(configData);

  return (
    <>
      {/* <div className="my-8">
        <div className="mt-4">
          <ProductsPage products={products} />
        </div>
      </div> */}

      {/* HERO SECTION */}
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              src={urlFor(props.configData.content[0].heroImage)
                .auto("format")
                .width(720)
                .height(600)
                .fit("crop")
                .quality(80)}
              alt={`Photo of ${props.configData.content[0].heading}`}
              class="object-cover object-center rounded"
            />

            {/* <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            /> */}
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-bold">
              {configData.title}
            </h1>
            <h2 class="title-font sm:text-1xl text-2xl mb-4 font-medium text-gray-900">
              {configData.tagline}
            </h2>

            <p class="mb-8 leading-relaxed text-gray-800">
              {configData.siteDescription}
            </p>

            <div class="flex justify-center">
              <a href="/#learnmore">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg items-center">
                  Learn More
                  <svg
                    class="w-4 h-4 ml-5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="3"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES  */}

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-col text-center w-full mb-10">
            <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              PERFORMANCE COACHING
            </h2>
            <h1
              name="learnmore"
              id="learnmore"
              class="title-font sm:text-1xl text-2xl mb-4 font-medium text-gray-900"
            >
              Our Services
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table.
            </p>
          </div>
          <div class="flex flex-wrap">
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Global Private Coaching
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              {/* <a class="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a> */}
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Video/Audio Library
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              {/* <a class="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a> */}
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Online Courses
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              {/* <a class="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a> */}
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Facility Management
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              {/* <a class="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* RECENT BLOG POSTS */}
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-5 mx-auto">
          <div class="flex flex-col text-center w-full mb-10">
            <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              BLOG
            </h2>
            <h1 class="title-font sm:text-1xl text-2xl mb-4 font-medium text-gray-900">
              Recent Posts
            </h1>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://dummyimage.com/722x402"
                  alt="blog"
                />
                <div class="p-6">
                  {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2> */}
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Shooting Stars
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-3xl text-gray-900">
              Signup for our Newsletter
            </h1>
            <p class="leading-relaxed mt-4">
              Have a question or interested in one of our servies? Get in touch
              with us here. Your email will be used to send you our new blog
              posts and updates. You can unsubscribe at any time using the link
              in our emails.
            </p>
          </div>
          <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <p class="text-xs text-gray-500 mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  var configData = await getClient(preview).fetch(query);
  var pageData = await getClient(preview).fetch(pageQuery);
  configData = { ...configData, ...pageData };
  // const groqData = {...configData,...pageData};

  return {
    props: {
      preview,
      configData,
    },
  };
}

export default IndexPage;
