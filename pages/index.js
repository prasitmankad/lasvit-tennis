import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription, urlFor } from "../utils/sanity";
//import { urlFor } from "../utils/sanity";
import RenderSections from "../components/RenderSections";
//import renderUI from "../components/render";

import Link from "next/link";

// construct query for global data and page data
// allData -- overall grouping for global and page data in response
// globalData -- global reusable content
// pageData -- content for this specific page, not in draft

// FIXME: Update query to return Team Member info
// FIXME: Update query to return Post Auther info
const query = `{
  'globalData': *[(_type == "globalSettings" && !(_id in path('drafts.**')))][0] {
	  businessInfo {
      title, 
      tagline, 
      siteDescription, 
      contact,
      'teamMembers': *[_type=="teamMember"]{
        image,longDescription,name,position,shortDescription
      },
    },
    branding,
    headerMenu,
    footer,
    siteSettings
	},
  'pageData': *[(_type == "page" && title=="Home" && !(_id in path('drafts.**')))][0] {
    slug,
    title,
    'sections':content,
    'recentPosts': *[_type=="post" && !(_id in path('drafts.**'))]| order(publishedAt desc)[0..2]
  }
}`;

/* OLD QUERY
const query = `{
  'globalData': *[(_type == "globalSettings" && !(_id in path('drafts.**')))][0] {
	...
	},
  'pageData': *[(_type == "page" && title=="Home" && !(_id in path('drafts.**')))][0] {
    'recentPosts': *[_type=="post" && !(_id in path('drafts.**'))]| order(publishedAt desc)[0..2],
    title,
    content[]{
      ...,
      team_members[]{
        author->{
        _id,
        _type,
        bio,
        headline,
        image,
        name,
        slug
        }
      }
    }
}
}`;
*/

// main page component renders
function IndexPage(props) {
  const { allData, preview } = props;
  const router = useRouter();

  console.log("allData => ", allData); // write out allData for debugging

  // If the page is not yet generated, this will be displayed initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!allData) {
    return <Error statusCode={404} />;
  }

  const { data: page } = usePreviewSubscription(query, {
    initialData: allData,
    enabled: preview || router.query.preview !== null,
  });

  return (
    <>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

      <div className="bg-white">
        <header class="text-gray-600 body-font">
          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link href="/">
              <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                <img
                  src={urlFor(allData.globalData.branding.companyLogo)
                    .auto("format")
                    .width(125)
                    // .height(400)
                    .fit("crop")
                    .quality(80)}
                  alt={allData.globalData.branding.companyLogo?.alt || ``}
                />
              </a>
            </Link>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link href="/">
                <a class="mr-5 hover:text-gray-900 cursor-pointer">Home</a>
              </Link>
              <Link href="/about">
                <a class="mr-5 hover:text-gray-900 cursor-pointer">About</a>
              </Link>
              <Link href="/blog">
                <a class="mr-5 hover:text-gray-900 cursor-pointer">Blog</a>
              </Link>
              {/* <Link href="/contact">
                <a class="mr-5 hover:text-gray-900 cursor-pointer">
                  Contact Us
                </a>
              </Link> */}
            </nav>
          </div>
        </header>
        <RenderSections sections={allData.mainContent.content} />
        <footer class="text-gray-600 body-font">
          <div class="bg-gray-100 border-t border-gray-200">
            <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
              <Link href="/">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                  <img
                    src={urlFor(allData.globalData.branding.companyLogo)
                      .auto("format")
                      .width(80)
                      // .height(400)
                      .fit("crop")
                      .quality(80)}
                    alt={allData.globalData.branding.companyLogo?.alt || ``}
                  />
                </a>
              </Link>

              <p class="text-sm text-gray-600 sm:ml-6 sm:mt-0 mt-4">
                © 2021 Lasvit Tennis. All rights reserved.
              </p>

              <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
                <Link href="/privacy">
                  <a
                    // href="/privacy"
                    rel="noopener noreferrer"
                    class="text-gray-600 ml-1"
                    // target="_blank"
                  >
                    Privacy Policy
                  </a>
                </Link>{" "}
                //
                <Link href="/terms">
                  <a
                    // href="https://lasvittennis.com/terms"
                    rel="noopener noreferrer"
                    class="text-gray-600 ml-1"
                    // target="_blank"
                  >
                    Website Terms
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  var allData = await getClient(preview).fetch(query);

  return {
    props: { preview, allData },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}

export default IndexPage;

/* QUERY RESPONSE
{
  "globalData": {
    "branding": {
      "companyLogo": {
        "_type": "image",
        "alt": "Lasvit Tennis Logo",
        "asset": {
          "_ref": "image-36c6dc7e1eadc9506b6afbcd4b603f728119b63f-2288x1024-png",
          "_type": "reference"
        }
      },
      "primaryAccentColor": {
        "title": "Orange",
        "value": "#F15926"
      },
      "primaryTextColor": {
        "title": "Mid Grey",
        "value": "#464343"
      },
      "secondaryAccentColor": {
        "title": "Light Teal",
        "value": "#20C0D9"
      }
    },
    "businessInfo": {
      "contact": {
        "city": "Prague",
        "country": "Czechia",
        "geolocation": {
          "_type": "geopoint",
          "alt": 10,
          "lat": 50.0597717,
          "lng": 14.1847581
        },
        "street": "Fake Street",
        "streetNo": "123",
        "zip": "9999"
      },
      "siteDescription": "Linking the world through world class coaching services, education, coaching tools and resources for coaches, parents and players alike. We are in constant pursuit of knowledge, refining the art of coaching and linking the world of science in an understandable way. We will leave no stone un-turned in our constant search for betterment in the sport with love so much. Lasvit Tennis lives and breathes by our core of Learn. Teach. Grow.",
      "tagline": "High performance tennis coaching",
      "teamMembers": [
        {
          "image": {
            "_type": "mainImage",
            "alt": "Brett Hillier",
            "asset": {
              "_ref": "image-cc993392a59477b05ec91e008789d2fd9c472c1a-4000x6000-jpg",
              "_type": "reference"
            },
            "caption": "Brett Hillier",
            "crop": {
              "_type": "sanity.imageCrop",
              "bottom": 0.43737313432835767,
              "left": 0.23134328358208966,
              "right": 0.16791044776119413,
              "top": 0.1665
            },
            "hotspot": {
              "_type": "sanity.imageHotspot",
              "height": 0.39612686567164235,
              "width": 0.6007462686567162,
              "x": 0.5317164179104478,
              "y": 0.36456343283582116
            }
          },
          "longDescription": [
            {
              "_key": "aa3d7c740ca6",
              "_type": "block",
              "children": [
                {
                  "_key": "a4a5fda5ace10",
                  "_type": "span",
                  "marks": [],
                  "text": "Brett's tennis journey began in the small town of Upper Beaconsfield. The Head coach, Lois Plowman, a former professional player took Brett under her wings. Years of hard work, dedication and problem solving gave Brett the tools to play across the globe at a ITF futures level. Quite an achievement considering Brett was born with only one finger on his left hand. Due to this challenge Brett has created a unique way of looking at the world, how he problem solves and how he approaches the entire learning process. He was and still is constantly finding new ways to learn 'simple' skills. To understand why the body moves in certain ways and even how the use of language changes the understanding of the task at hand. After a year of traveling and playing, Brett knew where he wanted to be and what he wanted to do. Coach. Not simply follow what other coaches were doing but create a way for each person to learn in the most optimal way. Mold the learning process and acquire knowledge in an enjoyable and rewarding way."
                }
              ],
              "markDefs": [],
              "style": "normal"
            },
            {
              "_key": "ddd6b224bc6c",
              "_type": "block",
              "children": [
                {
                  "_key": "f34760783bca0",
                  "_type": "span",
                  "marks": [],
                  "text": "Brett initially started honing his craft at the Sanchez-Casal academy in Barcelona. Next at The High Performance Training Center of Melbourne Park, to founding the International Tennis School of Excellence at Beaconhills College. There was still more to learn and more to share."
                }
              ],
              "markDefs": [],
              "style": "normal"
            },
            {
              "_key": "dd8174e16c0e",
              "_type": "block",
              "children": [
                {
                  "_key": "38cdbb7a918e0",
                  "_type": "span",
                  "marks": [],
                  "text": "From here Brett delved into the world of psychology, undertaking a degree with Southern Cross University and thirst for more knowledge continued. On court analysis, computer modeling of the 'perfect' program, perfect session and perfect coaching tools. Refine. Learn. Repeat. Lasvit Tennis is built from Brett's desire to share this process, develop a deeper understanding of the pillars of growth and create the ultimate tennis platform for everyone to benefit."
                }
              ],
              "markDefs": [],
              "style": "normal"
            },
            {
              "_key": "9851de25462e",
              "_type": "block",
              "children": [
                {
                  "_key": "700e4a039ba80",
                  "_type": "span",
                  "marks": [],
                  "text": "Brett writes 'If only my my Mum had these tools when I was younger, to know what aspects of training were most important and when to use them. What options are our there post 18 years of age and how to make it happen.'"
                }
              ],
              "markDefs": [],
              "style": "normal"
            },
            {
              "_key": "c9d1305c96b5",
              "_type": "block",
              "children": [
                {
                  "_key": "1121cf73afba0",
                  "_type": "span",
                  "marks": [],
                  "text": "Brett's decision to build the Lasvit Tennis platform for every tennis player, parent and coach. The ultimate resource for all of the mothers like Brett's mum who need that helping hand to give their child the greatest chance of success."
                }
              ],
              "markDefs": [],
              "style": "normal"
            },
            {
              "_key": "33a994b1d3a0",
              "_type": "block",
              "children": [
                {
                  "_key": "e342e02c1eec0",
                  "_type": "span",
                  "marks": [],
                  "text": "Brett lives by a motto and it is alive and well within the Lasvit Tennis team. Learn. Teach. Grow. A constant feedback loop that leads to constant improvement, enjoyment in the process and the power to achieve success higher than most people thought possible. 'I don't believe hard work is the only answer, it's certainly an element but smart, hard, thoughtful work is the north star for me. When you surrund yourself with people wanting more, learning more and love sharing the process you really stand a chance. We need to be around a team that drives towards this pursuit on the daily. Rare to find'"
                }
              ],
              "markDefs": [],
              "style": "normal"
            },
            {
              "_key": "7475867b10db",
              "_type": "block",
              "children": [
                {
                  "_key": "b726947ee83e0",
                  "_type": "span",
                  "marks": [],
                  "text": "Rare indeed, that's why we created it!"
                }
              ],
              "markDefs": [],
              "style": "normal"
            },
            {
              "_key": "60846dd80cd3",
              "_type": "block",
              "children": [
                {
                  "_key": "109250bb668e0",
                  "_type": "span",
                  "marks": [],
                  "text": ""
                }
              ],
              "markDefs": [],
              "style": "normal"
            }
          ],
          "name": "Brett Hillier",
          "position": "Head Coach and Co-Founder",
          "shortDescription": "Brett has the desire to 'perfect' the program, session and  coaching tools, develop a deeper understanding of the pillars of growth and create the ultimate tennis platform for everyone to benefit."
        },
        {
          "image": null,
          "longDescription": [
            {
              "_key": "400b440b5a16",
              "_type": "block",
              "children": [
                {
                  "_key": "a079ed936c48",
                  "_type": "span",
                  "marks": [],
                  "text": "This is a long description of the team member."
                }
              ],
              "markDefs": [],
              "style": "normal"
            }
          ],
          "name": "Prasit Mankad",
          "position": "Resident Tech Boffin",
          "shortDescription": "This is a short description of the team member."
        }
      ],
      "title": "Lasvit Tennis"
    },
    "footer": {
      "column1": {
        "heading": "SOLUTIONS",
        "links": [
          {
            "_key": "514fff8badc5",
            "_ref": "5cd11db0-3aeb-4062-b208-4731200c487f",
            "_type": "reference"
          },
          {
            "_key": "65c1c8e51a67",
            "_ref": "c39711e7-233b-44d8-83f1-563f687ed3c8",
            "_type": "reference"
          }
        ]
      },
      "column2": {
        "heading": "SUPPORT",
        "links": [
          {
            "_key": "d59078449a84",
            "_ref": "c39711e7-233b-44d8-83f1-563f687ed3c8",
            "_type": "reference"
          },
          {
            "_key": "eb07d177cbd2",
            "_ref": "0b7913b5-bad3-451d-a655-67dcb1dddb6a",
            "_type": "reference"
          },
          {
            "_key": "dac7d6f06d0f",
            "_ref": "f917fd78-769d-4cbb-9526-29ceebae45e0",
            "_type": "reference"
          }
        ]
      },
      "column3": {
        "heading": "COMPANY",
        "links": [
          {
            "_key": "5d19a200fd80",
            "_ref": "5cd11db0-3aeb-4062-b208-4731200c487f",
            "_type": "reference"
          }
        ]
      },
      "column4": {
        "heading": "LEGAL",
        "links": [
          {
            "_key": "cff28f01e4af",
            "_ref": "0b7913b5-bad3-451d-a655-67dcb1dddb6a",
            "_type": "reference"
          },
          {
            "_key": "d4a609e2f83f",
            "_ref": "60047fea-6345-49b3-b434-0e8dbcbc5364",
            "_type": "reference"
          }
        ]
      },
      "signup": {
        "heading": "SUBSCRIBE TO OUR NEWSLETTER",
        "message": "The latest news, articles, and resources, sent to your inbox weekly."
      }
    },
    "headerMenu": {
      "menuItems": {
        "buttons": [
          {
            "_key": "5ffa32042612",
            "_type": "button",
            "buttonText": "Log In",
            "route": {
              "_ref": "435dcd1d-5b8a-4dbf-96ef-687653accee8",
              "_type": "reference"
            }
          }
        ],
        "links": [
          {
            "_key": "8be588a91a8a",
            "_ref": "c39711e7-233b-44d8-83f1-563f687ed3c8",
            "_type": "reference"
          },
          {
            "_key": "68194aa12bdf",
            "_ref": "6cc5641e-cdde-484c-bb8f-8182bfb70ed2",
            "_type": "reference"
          },
          {
            "_key": "462e97f959d4",
            "_ref": "5cd11db0-3aeb-4062-b208-4731200c487f",
            "_type": "reference"
          }
        ]
      }
    },
    "siteSettings": {
      "facebook": "https://www.facebook.com/lasvit.tennis",
      "frontpage": {
        "_ref": "c39711e7-233b-44d8-83f1-563f687ed3c8",
        "_type": "reference"
      },
      "instagram": "https://www.instagram.com/lasvit.tennis/",
      "url": "https://lasvittennis.com"
    }
  },
  "pageData": {
    "recentPosts": [
      {
        "_createdAt": "2021-03-05T13:00:01Z",
        "_id": "20410e4d-bc6e-4a4d-a5f7-606217d647e6",
        "_rev": "E0HnF65EXm06UN0suaW5uz",
        "_type": "post",
        "_updatedAt": "2021-04-10T07:31:49Z",
        "authors": [
          {
            "_key": "7ef1ccbe0b87",
            "_ref": "a0426fa1-442e-42e3-a579-f6b5972d94c7",
            "_type": "reference"
          }
        ],
        "body": [
          {
            "_key": "cda905057eee",
            "_type": "block",
            "children": [
              {
                "_key": "6d4471d0cfdd0",
                "_type": "span",
                "marks": [],
                "text": "So why college, two reasons why we would really consider, well, I guess there are three reasons why we would consider college. One is the expense, unless you're in a country that offers a payment scheme for university or a free university, university can be expensive. Now in the United States, university is super expensive if you're going to a well-known school. Now, this isn't so much of the issue, but in places like Australia, New Zealand, England, Europe, pretty much most places in the world. If you're playing tennis still and studying full-time on campus at a university, you're going to really, really struggle. The United States offers a system that you can combine both. Really elite-level tennis, really elite level schools."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "f4be0f0891a9",
            "_type": "block",
            "children": [
              {
                "_key": "f94d36200e810",
                "_type": "span",
                "marks": [],
                "text": "So it's the perfect combination. So you might think when a lot of parents get to the age where their child's at the age of 16, that's like school or tennis. Why not have both? If you can get your tennis up to a level, invest time and money in that process from, you know, 10, 12, 13, 14, 16, 17 years of age, that time energy and money investment can lead to the reward of free education at university."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "10a442f3c66e",
            "_type": "block",
            "children": [
              {
                "_key": "f6a35016687f0",
                "_type": "span",
                "marks": [],
                "text": "Now, this is one really important point. If you focus purely on academics, you have less chance of getting that scholarship. You can still get a scholarship through academics. Why not get both? So you don't need to be Einstein to get good grades at college. You need to have solid grades. Absolutely. You need to sit in an SAT. We'll explain all that down below, but it's not crazy hard to achieve. What you need is a great combination of very good tennis and very good studies, not exceptional at either. So that's something that everyone can achieve."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "94516baedb67",
            "_type": "block",
            "children": [
              {
                "_key": "b05dd224fbd10",
                "_type": "span",
                "marks": [],
                "text": "\n"
              },
              {
                "_key": "6ed78f38255b0",
                "_type": "span",
                "marks": [],
                "text": "\nThe second thing and really important part of college is not everyone's ready to go on tour at the age of 18. Maturity level, physical capabilities. I didn't grow into my body until I was a little bit sort of 19/20. After going to the gym, getting a bit stronger, getting faster. I wasn't really ready to compete until I was 20 years old, basically. So for me, college maybe was the better option and I should have taken that. It would have given me two years of study, two years at a really high level of tennis and two years to mature and grow into my body and my mind, I would have been much more grounded and more performance-ready at 20 than 18 going into tour. You can always leave college. It's very hard to go back when you're 22 or 23, cause they have some age restrictions and it's harder to go to the US for college reasons. So for parents out there who are trying to find the right balance with their child, whether tennis needs to be the priority or not is a really interesting discussion and it's not something I can answer for you. It's got to come from you and your family. The dynamic between you and your child and that conversation. But what I can tell you is that most children that study full-time without any escape, really struggle between the years of 18 to 22, there's a lot going on, they're becoming an adult, they're out in the world and what I think tennis or any sport really is. But in our situation, tennis brings that grounding and grounding is such an important thing for someone who maybe has just gone overseas to study, or is trying to pursue a career that is really intense and involves a lot of hours sitting at a desk, tennis could be a great escape.\n\n"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "f7eaf50ee289",
            "_type": "block",
            "children": [
              {
                "_key": "53c866653aa10",
                "_type": "span",
                "marks": [],
                "text": "You don't have to be the best tennis player in the world to have tennis at a college level, but it can complement your studies. It can help you succeed in your areas of pursuit, whether that's a degree or starting a business or going and doing your master's after your undergraduate, tennis can always be there. It's not like a switch you turn on and off. It's always ready to go and it compliments your studies. So I don't think it's an one or the other type scenario, it's just how much energy and intention you want to direct, and you want to lead with tennis and go to college, or you want to lead with studies and continue with tennis."
              },
              {
                "_key": "53c866653aa11",
                "_type": "span",
                "marks": [],
                "text": "\n\n"
              },
              {
                "_key": "5928f6642e360",
                "_type": "span",
                "marks": [],
                "text": "We don't know what's going to happen in life, but I can tell you this. If you sit at a desk all day long with no escape, nothing to ground you to what you've been doing for most of your life, I think it will be a really tough battle and you'll find those, those battles come in later down the track."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "8af22e050b73",
            "_type": "block",
            "children": [
              {
                "_key": "d7b1e033f6e70",
                "_type": "span",
                "marks": [],
                "text": ""
              },
              {
                "_key": "83835fab35980",
                "_type": "span",
                "marks": [],
                "text": "\nSo the college system works in multiple ways for their scholarships. Now, you get a percentage scholarship based on your academics and also your sports. So you could be number one in the team and have a full sports scholarship and do well at school and get a full academic scholarship. That means your expenses are completely covered. You may be number four in the team and you only have 25% of your sports scholarship covered, but you're an exceptional student and you have a hundred percent of that covet. They are split into two, for example, a good friend of mine who I grew up playing with, went to college on a tennis scholarship. I believe he was number six in the team and had 25 or 30% on his sports, but he's a very good student. In the end, he had a zero sports scholarship after two years and had a complete full scholarship with academics. He continued playing on the team and he just played matches and training. So he went the other way when he was at college and took the academic pursuit. I had another friend who went to college down in North Carolina, [00:06:00] and he went the other way where he had a really good starting position with academics and had a hundred percent scholarship. And then as he was there, he's tennis got better and he moved up the team and he was able to get a larger sports scholarship."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "8e5698dc18bb",
            "_type": "block",
            "children": [
              {
                "_key": "772b29faa3a70",
                "_type": "span",
                "marks": [],
                "text": "Now prices vary from state to state, college to college and especially those in the Ivy League. So you can be talking anywhere from 15,000 US dollars a year, right up to about 300,000 per year. When you're looking at your Ivy league colleges, the reputation of the Ivy League is incredible. As you know, the "
              },
              {
                "_key": "81f285e3d7e5",
                "_type": "span",
                "marks": [],
                "text": "Harvard's"
              },
              {
                "_key": "8cce6ac0b05e",
                "_type": "span",
                "marks": [],
                "text": ", the "
              },
              {
                "_key": "c02d2d86872e",
                "_type": "span",
                "marks": [],
                "text": "Stanford's"
              },
              {
                "_key": "823627ffdafe",
                "_type": "span",
                "marks": [],
                "text": ", the "
              },
              {
                "_key": "765dee2c0c6b",
                "_type": "span",
                "marks": [],
                "text": "Princeton's"
              },
              {
                "_key": "c9364b39e587",
                "_type": "span",
                "marks": [],
                "text": " of this world, and they're an exceptional level that tennis programs are really, really top-notch, and the academics are known throughout the world the top universities. So you might look at it, hey, I want my child to go to one of these Ivy League schools. Can I afford 300,000 US dollars per year? If you can. Amazing. Maybe you go, I need to go a little bit lower end than a hundred thousand if you can. Great. What a great combination to combine both and get a scholarship. Even if it's a part scholarship. If this is the direction you want to go, 25% on a $300,000 scholarship tuition fee is a significant amount. Even if it's a hundred thousand dollars a year, there are 25,000 US dollars in your pocket. You will have a sheet listed below inside this area and will cost up a few universities to get an idea."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "6935c43aaf1e",
            "_type": "block",
            "children": [
              {
                "_key": "79d645585b160",
                "_type": "span",
                "marks": [],
                "text": "The process of getting to college is quite challenging. You got to do a lot of visits, video resumes, some exams, contact the universities. We also do that, but it's a case by case thing and we don't take everyone on, but if it's something that you want to do and work with us, we can help you there. Just get in touch privately via email and we can work that through together."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "b4cebbe93a3d",
            "_type": "block",
            "children": [
              {
                "_key": "3947ca580f680",
                "_type": "span",
                "marks": [],
                "text": "So if you're looking to go to college and that's a really, really important and valuable option for you, there's a couple of ways that you can go about doing it."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "67c99dbec95a",
            "_type": "block",
            "children": [
              {
                "_key": "6cee9d2563160",
                "_type": "span",
                "marks": [],
                "text": "One is all by yourself. There's nothing stopping a parent from doing all the paperwork, filming all the required video resumes, the Encore presentation, packaging it up, contacting all the universities, the Scouts, et cetera. Completely can do that. It's super time consuming, really, really tough. And knowing the people to contact can be a real pain in the behind. So what we can do for you is to help you with that process. So essentially become like an agent on your behalf. We help give you all the tools to do that. So we film the video if we can, if we're in close proximity to you, if not, we'll give you a full video guideline on the best angles to film, cameras to use, how to mount on the fence, et cetera."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "6b67f705c964",
            "_type": "block",
            "children": [
              {
                "_key": "148d68ec0ed60",
                "_type": "span",
                "marks": [],
                "text": "We will also take care of the paperwork, understanding what visas are required. Talking with the schools, getting the right coaches to look at the right videos of your child. We can do that. If that's something that you're really interested in doing potentially your child would be with the ages of 15, 16. Then it's a perfect time to do it because in some cases, and in some countries you have to change your high school subjects to give you the right amount of points for your grade point average because, in the United States, they use a grade point average. To give you the option of going to the United States. So for example, for me, I had to change in year 10 when I was 16 to do Physics at school because I needed an extra mass on my grade point average and my report to help me get into college. So I did get into a college and sign. I just decided not to go for me at the time."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "51da6d270515",
            "_type": "block",
            "children": [
              {
                "_key": "95728344e7230",
                "_type": "span",
                "marks": [],
                "text": "I wish I did now, but, but I didn't. So here I am with the lessons of someone who didn't go helping you guys set that up for your child."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "467fc3bbc0dc",
            "_type": "block",
            "children": [
              {
                "_key": "4e8d4df7bcc40",
                "_type": "span",
                "marks": [],
                "text": "\n"
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ],
        "mainImage": {
          "_type": "mainImage",
          "alt": "College Tennis",
          "asset": {
            "_ref": "image-7be394864eed07f688eb2de8e887e4164f873bbf-1920x1000-png",
            "_type": "reference"
          }
        },
        "publishedAt": "2021-03-05T12:56:43.781Z",
        "slug": {
          "_type": "slug",
          "current": "college-tennis"
        },
        "tags": [
          {
            "label": "college",
            "value": "college"
          },
          {
            "label": "study",
            "value": "study"
          },
          {
            "label": "tennis",
            "value": "tennis"
          }
        ],
        "title": "College Tennis"
      },
      {
        "_createdAt": "2021-01-18T18:45:53Z",
        "_id": "36464c8d-5716-470f-b45c-2165b12234d7",
        "_rev": "11Z9UYIOpi3kNYocw5FRPH",
        "_type": "post",
        "_updatedAt": "2021-02-04T04:50:56Z",
        "authors": [
          {
            "_key": "3805a2583bb5",
            "_type": "authorReference",
            "author": {
              "_ref": "3491b1e3-cd44-4128-8b31-7f3045bc6bf3",
              "_type": "reference"
            }
          }
        ],
        "body": [
          {
            "_key": "c5c960399364",
            "_type": "block",
            "children": [
              {
                "_key": "5b397e27399f",
                "_type": "span",
                "marks": [],
                "text": "Trust is needed to make any great change in a students’ life. Or in anyone's life for that matter. Trust in your favorite instagrammer, facebooker or blog writer. Trust in your local doctor, nutritionist or personal trainer. I've been wrestling with the idea of creating trust so messages can be heard and understood faster and more clearly out on court."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "84717563c979",
            "_type": "block",
            "children": [
              {
                "_key": "374e992d38000",
                "_type": "span",
                "marks": [],
                "text": "I believe my role as a tennis coach is to convey information, guidance and direction for my students and parents. Helping them steer clear of pitfalls and future problems. Guiding them into a direction that will give them the greatest, long term chance of success. It's certainly a challenge to connect with all parents on a level where you feel heard."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "4ecb0771185a",
            "_type": "block",
            "children": [
              {
                "_key": "55ff20c32d260",
                "_type": "span",
                "marks": [],
                "text": "Education is, I believe, where the relationship is fostered most. Ignorance, of course, the most suitable trait for transgression. The cool thing about education is the depth of a subject. It never ends! You can educate yourself but can never know a topic in entirety. You can, however, approach the learning process with a scientific mind. A willingness to understand and grow. The scientific mind is a mind that searches for truth through trial and error. Through the use of other scientific studies, from other known knowledge bases, from educators well versed in the field. The crucial factor is, learning continues to grow and develop. This growth mindset will develop all areas of one's life, limit common overtraining or burnout issues in teenagers and create processes you can use time and time again."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "8e3fa58b6081",
            "_type": "block",
            "children": [
              {
                "_key": "8ba3b7801cc70",
                "_type": "span",
                "marks": [],
                "text": "One of the major ideas that I'm working through is the notion of team work or the team that surrounds the student/child. What the 'Pillars' around them do and how they build both the foundation and house."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "dcffc311e506",
            "_type": "block",
            "children": [
              {
                "_key": "547a94a3ed050",
                "_type": "span",
                "marks": [],
                "text": "It is very rare that a child only has one key person around them. Often it is multiple 'Pillars'. These pillars can hold up the house/team. The pillars that are built around the child are often what will make or break their pursuits, directly affect their happiness, growth and overall sense of well-being."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "896118745c20",
            "_type": "block",
            "children": [
              {
                "_key": "cf68d78173eb0",
                "_type": "span",
                "marks": [],
                "text": "When discussing the team it is important to be very clear on many aspects."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "50fef8b2946f",
            "_type": "block",
            "children": [
              {
                "_key": "f61f9a7f49f10",
                "_type": "span",
                "marks": [],
                "text": "The first thing is:"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "46ccc6017831",
            "_type": "block",
            "children": [
              {
                "_key": "3d6add3f90540",
                "_type": "span",
                "marks": [],
                "text": "Who's passion are you pursuing? Is it 100% your child's passion or is it more yours?"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "b12b77301641",
            "_type": "block",
            "children": [
              {
                "_key": "24e418f3660b0",
                "_type": "span",
                "marks": [],
                "text": "If it's your passion, please ask yourself the following questions."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "6e02254606d1",
            "_type": "block",
            "children": [
              {
                "_key": "3bbf40031c780",
                "_type": "span",
                "marks": [],
                "text": "Why is it so important to you?"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "32a3e3c72288",
            "_type": "block",
            "children": [
              {
                "_key": "dd24c6efa6120",
                "_type": "span",
                "marks": [],
                "text": "Does it really matter if your child chooses this particular activity or not?"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "33cb1efddbed",
            "_type": "block",
            "children": [
              {
                "_key": "4c2fee70e2980",
                "_type": "span",
                "marks": [],
                "text": "Are you creating stress in your child's life that shouldn't be there?"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "3a21294d7eed",
            "_type": "block",
            "children": [
              {
                "_key": "50eb363bd3240",
                "_type": "span",
                "marks": [],
                "text": "What is your number one hope in life for your child?"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "3c12773c8d12",
            "_type": "block",
            "children": [
              {
                "_key": "2d501cfd70b00",
                "_type": "span",
                "marks": [],
                "text": "It's a hard thing to sit back and ask yourself these questions and answer honestly. Put your kids health and well-being first when responding, not their success in the activity they love. Remove your ego when answering, it will only cloud your judgment. If you can answer unemotionally, with clarity and honestly you are doing justice to your role as a parent."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "cb9298a8e642",
            "_type": "block",
            "children": [
              {
                "_key": "ed1302b1e1d90",
                "_type": "span",
                "marks": [],
                "text": "Here is a little activity that we can do together. It will clearly identify what team members are around your child and hopefully identify if they are strong pillars or the team/pillars could use some attention."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "1d9c357914aa",
            "_type": "block",
            "children": [
              {
                "_key": "68c9205bfcab0",
                "_type": "span",
                "marks": [],
                "text": "OK. Let's take a second to think about your children. Grab a notepad and write their name at the top of the page. Seriously........Grab a notepad, this only works as a visual!"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "0e93ad5d41bc",
            "_type": "block",
            "children": [
              {
                "_key": "d8cf61c00f930",
                "_type": "span",
                "marks": [],
                "text": "In the middle of the page, write out their main activity. If they have more than one, great! Write them all out. Now, around the central activities write out the names of people who are associated with those activities. Their name and their role. Include every person you can think of."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "86465eca9f96",
            "_type": "block",
            "children": [
              {
                "_key": "099dad4f1eef0",
                "_type": "span",
                "marks": [],
                "text": "Thinking back to when I was 12 years old, my notepad would look like this."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "3423213d382c",
            "_type": "block",
            "children": [
              {
                "_key": "07425b34257f0",
                "_type": "span",
                "marks": [],
                "text": "Activities"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "0fd27706ff73",
            "_type": "block",
            "children": [
              {
                "_key": "c8e0e3d2fa9b0",
                "_type": "span",
                "marks": [],
                "text": "Tennis and Australian Football (go the mighty Beacy tigers!) People around me - Mum and Dad, tennis coach Lois and Football coach Jacko. Assistant coaches that may take sessions from time to time. I had two tennis coaches. Lois was my main coach and Warrick was her assistant who ran squads. Tennis team mates and tournament friends. Football team mates. My school friends (important they're included. Your child will spend most of their time with school friends) Tennis club members that I would see often. Nan and Pa. My grandparents were very involved with taking me to tennis."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "18ae61edad79",
            "_type": "block",
            "children": [
              {
                "_key": "9595bab49ee40",
                "_type": "span",
                "marks": [],
                "text": "\nFor me, almost all pillars on the 'Team Brett' page were good people. They were great people. I owe a lot to that bunch and probably more than they can ever know. I was so fortunate that my parents were really there to support me. I chose the tournaments I played and they would find a way to get me there. Never, once did they force me to go to training or create training sessions that I didn't ask for. They allowed me to play multiple sports because I loved them. They didn't have me specialize, pick one that I would be great at. I was lucky to have balance and their concern was my well-being as a child."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "25ebdcee6217",
            "_type": "block",
            "children": [
              {
                "_key": "933bd41e4b0b0",
                "_type": "span",
                "marks": [],
                "text": "\nNow for your notepad page. Look at every 'key' person around your child's activity. Clearly imagine what their role is, how you believe they are impacting on your child's world and reflect. Are these 'key' people creating a strong, loving, caring and supportive house? Are you able to sit back and reflect on yourself as a pillar? Are you a supportive, loving, caring pillar or maybe not exactly the type of support you would like to be?"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "db30cd05b772",
            "_type": "block",
            "children": [
              {
                "_key": "8ec24e368fad0",
                "_type": "span",
                "marks": [],
                "text": "\nIf you can do this exercise open and honestly you will open doors that were previously closed. If everything you are doing currently is supportive, caring and inline with the strong 'pillars' framework, fantastic. Appreciate the work you have done or are doing to get your relationship and team in the best position possible."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "b689c118adfa",
            "_type": "block",
            "children": [
              {
                "_key": "9d2f29dd32020",
                "_type": "span",
                "marks": [],
                "text": "Reflection is the best way to get a sense of where you are."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "8341acd9a84b",
            "_type": "block",
            "children": [
              {
                "_key": "dc4687a62ead0",
                "_type": "span",
                "marks": [],
                "text": "\nMy role as a tennis coach is to be a strong and supportive pillar. My role is to guide parents to see the network around their child as see it as a team. When you view each person connected with your child on the same team, you can better eliminate road blocks. It's stops the 'us v them' mentality. Parents and coaches may not always see eye to eye. That's ok. Our job is not be be passengers and avoid causing waves. Our job is to do the right thing as a team. Fierce and strong conversations are often required, when the intention is growth and not personal, the team and pillars will flourish. Keep a strong growth mindset and honest intentions."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "f81a1bb4bcb9",
            "_type": "block",
            "children": [
              {
                "_key": "acfe1161fee40",
                "_type": "span",
                "marks": [],
                "text": "If you want to go fast, go alone. If you want to go far, go together- African Proverb"
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ],
        "excerpt": [
          {
            "_key": "f111fe46cedd",
            "_type": "block",
            "children": [
              {
                "_key": "a6e819bc6a06",
                "_type": "span",
                "marks": [],
                "text": "This is an excerpt section that will now work."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ],
        "postImage": {
          "_type": "mainImage",
          "alt": "Tennis Pillars of Growth",
          "asset": {
            "_ref": "image-e8d3e3f0840ed99945a04aae66182c6aa25cb2e8-500x500-png",
            "_type": "reference"
          },
          "caption": "Tennis Pillars of Growth"
        },
        "publishedAt": "2021-01-18T18:30:00.000Z",
        "slug": {
          "_type": "slug",
          "current": "tennis-pillars-of-growth"
        },
        "title": "Pillars Of Growth"
      },
      {
        "_createdAt": "2021-01-18T19:19:03Z",
        "_id": "a9f4dab8-8e80-4f9f-b874-c196ce04a1e7",
        "_rev": "RPjHwKhsiYhsRT63LPBz2G",
        "_type": "post",
        "_updatedAt": "2021-01-18T19:19:03Z",
        "authors": [
          {
            "_key": "8532384263ce",
            "_type": "authorReference",
            "author": {
              "_ref": "3491b1e3-cd44-4128-8b31-7f3045bc6bf3",
              "_type": "reference"
            }
          }
        ],
        "body": [
          {
            "_key": "59f7a55bb3f4",
            "_type": "block",
            "children": [
              {
                "_key": "bac2d4ad46cf",
                "_type": "span",
                "marks": [],
                "text": "Environment. "
              },
              {
                "_key": "2748240a2c890",
                "_type": "span",
                "marks": [],
                "text": "How much does the environment around you impact your performance? Your growth as an athlete or the growth of your team?"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "7e00f5b62a5e",
            "_type": "block",
            "children": [
              {
                "_key": "66dfa34e0552",
                "_type": "span",
                "marks": [],
                "text": ""
              },
              {
                "_key": "4ac2bf7da9290",
                "_type": "span",
                "marks": [],
                "text": "Let’s talk about priming. Priming is when a world or action ‘primes’ an action or result from another person. In Malcolm Gladwell’s book ‘Blink’ he explores this phenomenon. What words have an impact on our subconscious mind, what real-world impact do they make and what are some examples? Can priming make us physically slower or faster? Nicer and calmer, even smarter? The answer is Yes to all. The 'how' is fascinating and what I look forward to sharing with you here."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "39aaed7017be",
            "_type": "block",
            "children": [
              {
                "_key": "02173fe93e05",
                "_type": "span",
                "marks": [],
                "text": ""
              },
              {
                "_key": "0b6047b770140",
                "_type": "span",
                "marks": [],
                "text": "Priming is so connected with the environment. When you think about your daily environment, what comes to mind? The way you drive to work, your car perhaps, the roads and scenery. Your place of work, the buildings, office "
              },
              {
                "_key": "bd25ae518306",
                "_type": "span",
                "marks": [],
                "text": "décor"
              },
              {
                "_key": "4850afbc9922",
                "_type": "span",
                "marks": [],
                "text": " and the chair and desk you sit at. What does your local place for lunch look like? Do you have a spot where you take a few minutes for yourself during the day? Think about this for your weekend too. What about holidays and family events?"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "5747d8566565",
            "_type": "block",
            "children": [
              {
                "_key": "ec1caded1fb8",
                "_type": "span",
                "marks": [],
                "text": ""
              },
              {
                "_key": "b984e07480460",
                "_type": "span",
                "marks": [],
                "text": "The second element of the environment is; The words, behaviours and energy of those around you. How do colleagues talk with you, how do you respond? What is your inner voice like at work, at home or when you are out running? How do you talk with your child? How do they talk with you?"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "a384d1f2aed3",
            "_type": "block",
            "children": [
              {
                "_key": "96c3936090af0",
                "_type": "span",
                "marks": [],
                "text": "\n"
              },
              {
                "_key": "9373a6c4f3630",
                "_type": "span",
                "marks": [],
                "text": "Let’s link these in for tennis. How does the coach talk with your child, how does the energy feel on the court? Do their teammates discuss things, importantly how do they discuss these things? If you are training 4-5 times a week, with similar people and at similar places, this will have a major impact on how you think and feel. Is the environment high performance, is it negative? Does it inspire you to grow or will it leave you feeling neutral or worse, feelings that are negative or depressive?"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "ac5748da3780",
            "_type": "block",
            "children": [
              {
                "_key": "e226d0bf52480",
                "_type": "span",
                "marks": [],
                "text": "\n"
              },
              {
                "_key": "a60f8e396cf90",
                "_type": "span",
                "marks": [],
                "text": "I would like to share with you some examples from Blink. Malcolm explores this idea in multiple ways, I want to explore the one example that impacted me the most when reading.\n\n"
              },
              {
                "_key": "023d07d795760",
                "_type": "span",
                "marks": [],
                "text": "Page 52 - Blink, Malcolm Gladwell"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "db008d8f463b",
            "_type": "block",
            "children": [
              {
                "_key": "daefcd641b3c0",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "Primed for Action"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "f6cfef077e21",
            "_type": "block",
            "children": [
              {
                "_key": "d1acf55b41ff0",
                "_type": "span",
                "marks": [],
                "text": "Imagine that I’m a professor, and I’ve asked you to come and see me in my office. You walk down a long corridor, come through the doorway, and sit down at the table. In front of you is a sheet of paper with a list of five-word sets. I want you to make a grammatical four-word sentence as quickly as possible out of each set. It’s called a scrambled-sentence test. Ready?"
              },
              {
                "_key": "d1acf55b41ff1",
                "_type": "span",
                "marks": [],
                "text": "\n"
              },
              {
                "_key": "783ab05d49b50",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "8f827de4d519",
            "_type": "block",
            "children": [
              {
                "_key": "b77a11f3899b0",
                "_type": "span",
                "marks": [],
                "text": ""
              },
              {
                "_key": "ba4e07047bea",
                "_type": "span",
                "marks": [],
                "text": "him was worried she always"
              },
              {
                "_key": "b2ae396937bf0",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "82cac2beaacb",
            "_type": "block",
            "children": [
              {
                "_key": "4fd57b547b6f0",
                "_type": "span",
                "marks": [],
                "text": ""
              },
              {
                "_key": "1b0266d66cc4",
                "_type": "span",
                "marks": [],
                "text": "from are Florida oranges temperature"
              },
              {
                "_key": "ce871961f6360",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "19682e9de141",
            "_type": "block",
            "children": [
              {
                "_key": "90b35b08df320",
                "_type": "span",
                "marks": [],
                "text": ""
              },
              {
                "_key": "e8134671dac1",
                "_type": "span",
                "marks": [],
                "text": "ball the throw toss silently"
              },
              {
                "_key": "2f75dc3be1380",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "688879cb3387",
            "_type": "block",
            "children": [
              {
                "_key": "e3b16da6682c0",
                "_type": "span",
                "marks": [],
                "text": ""
              },
              {
                "_key": "596970f81ae4",
                "_type": "span",
                "marks": [],
                "text": "shoes give replace old the"
              },
              {
                "_key": "e6f627a3e8c70",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "87b8b5f577f5",
            "_type": "block",
            "children": [
              {
                "_key": "1c5bdc1ec7130",
                "_type": "span",
                "marks": [],
                "text": ""
              },
              {
                "_key": "43505c49d8b7",
                "_type": "span",
                "marks": [],
                "text": "he observes occasionally people watches"
              },
              {
                "_key": "32471e3e780e0",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "78d9f6f37477",
            "_type": "block",
            "children": [
              {
                "_key": "9d777bb09ba80",
                "_type": "span",
                "marks": [],
                "text": ""
              },
              {
                "_key": "0a3961c18915",
                "_type": "span",
                "marks": [],
                "text": "be will sweat lonely they"
              },
              {
                "_key": "20f61936ba200",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "77a1e8eaa44c",
            "_type": "block",
            "children": [
              {
                "_key": "fe49bfeb73c60",
                "_type": "span",
                "marks": [],
                "text": ""
              },
              {
                "_key": "fb0af470c7a7",
                "_type": "span",
                "marks": [],
                "text": "sky the seamless gray is"
              },
              {
                "_key": "cca39e7aac990",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "689cbe4e1991",
            "_type": "block",
            "children": [
              {
                "_key": "1bf09f82dd930",
                "_type": "span",
                "marks": [],
                "text": ""
              },
              {
                "_key": "ba0b5335134e",
                "_type": "span",
                "marks": [],
                "text": "should now withdraw forgetful we"
              },
              {
                "_key": "c09ef9cb88890",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "52a667373685",
            "_type": "block",
            "children": [
              {
                "_key": "80ce9e8770500",
                "_type": "span",
                "marks": [],
                "text": ""
              },
              {
                "_key": "aafe4fd4359e",
                "_type": "span",
                "marks": [],
                "text": "us bingo sing play let"
              },
              {
                "_key": "e991f4805bf90",
                "_type": "span",
                "marks": [],
                "text": ""
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "1e2201bac233",
            "_type": "block",
            "children": [
              {
                "_key": "59b0569bb233",
                "_type": "span",
                "marks": [],
                "text": ""
              },
              {
                "_key": "55dc3b3ce7f7",
                "_type": "span",
                "marks": [],
                "text": "sunlight makes temperature wrinkle raisins"
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "c8556d148c89",
            "_type": "block",
            "children": [
              {
                "_key": "d4c7e5db570c0",
                "_type": "span",
                "marks": [],
                "text": "\n"
              },
              {
                "_key": "60cc8ad37f510",
                "_type": "span",
                "marks": [],
                "text": "That seemed straightforward, right? Actually, it wasn't. After you finished that test - believe it or not - you would have walked out of my office and back down the hall more slowly than you walked in. With that test, I affected the way you behaved. How? Well, look back at the list. Scattered throughout it are certain words, such as ‘worried,’ ‘Florida,’ ‘old,’ ‘lonely,’ ‘gray,’ ‘bingo,’ and ‘wrinkle.’ You thought that I was just making you take a language test. But, in fact, what I was also doing was making the big computer in your brain - your adaptive unconscious - think about the state of being old. It didn’t inform the rest of your brain about its sudden obsession. But it took all this talk of old age so seriously that by the time you finished and walked down the corridor, you acted old. You walked slowly."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "8f1b7d4187db",
            "_type": "block",
            "children": [
              {
                "_key": "67f36cb200ec0",
                "_type": "span",
                "marks": [],
                "text": "The test was devised by a very clever psychologist named John Bargh. It is an example of what is called a priming experiment."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "8e5657fe19af",
            "_type": "block",
            "children": [
              {
                "_key": "4017ec5d9b850",
                "_type": "span",
                "marks": [],
                "text": "\n"
              },
              {
                "_key": "99de8adc12f60",
                "_type": "span",
                "marks": [],
                "text": "The above can be a little confusing to tackle at first hopefully the infographic helped. It was a really profound moment reading the above for the first time. Such profound behaviour changes from minimal priming. The important question comes immediately to mind. If these 10 sentences can make physical changes to us in a very quick way, what can long term priming do to us?\n"
              },
              {
                "_key": "0bafd4a759660",
                "_type": "span",
                "marks": [],
                "text": "\nThe drop off conversations before school. "
              },
              {
                "_key": "6b3edb59adbf0",
                "_type": "span",
                "marks": [],
                "text": "The sideline remarks on the tennis court. "
              },
              {
                "_key": "b0f46034724c0",
                "_type": "span",
                "marks": [],
                "text": "Pre match words of ‘inspiration’ "
              },
              {
                "_key": "d529dba463260",
                "_type": "span",
                "marks": [],
                "text": "Condolences or scolding post match. "
              },
              {
                "_key": "5a2085a8f3dc0",
                "_type": "span",
                "marks": [],
                "text": "The general conversational tone and words at home. "
              },
              {
                "_key": "b38eb2fae1c60",
                "_type": "span",
                "marks": [],
                "text": "The words in the car. "
              },
              {
                "_key": "244e8bc391910",
                "_type": "span",
                "marks": [],
                "text": "The coaches words during practise"
              },
              {
                "_key": "32658dcc17c10",
                "_type": "span",
                "marks": [],
                "text": ". The words from teammates and friends."
              },
              {
                "_key": "6f985c0479100",
                "_type": "span",
                "marks": [],
                "text": "\nSome all too common phrases from parents on the sidelines"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "64566da04d9c",
            "_type": "block",
            "children": [
              {
                "_key": "6d43d178a6440",
                "_type": "span",
                "marks": [],
                "text": "You always miss your backhand down the line"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "6fd91423af19",
            "_type": "block",
            "children": [
              {
                "_key": "c38c29ccaa540",
                "_type": "span",
                "marks": [],
                "text": "You looked tired and angry"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "424ff685679a",
            "_type": "block",
            "children": [
              {
                "_key": "841d6c47b3300",
                "_type": "span",
                "marks": [],
                "text": "Why did you miss so many short balls"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "4df0fad3a6fe",
            "_type": "block",
            "children": [
              {
                "_key": "954eae97cea00",
                "_type": "span",
                "marks": [],
                "text": "Your second serve really let you down"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "d2e8c292f656",
            "_type": "block",
            "children": [
              {
                "_key": "8793f5ac18c80",
                "_type": "span",
                "marks": [],
                "text": "You need to hit harder on those high volleys"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "b3140ec2e144",
            "_type": "block",
            "children": [
              {
                "_key": "a95d67196ef20",
                "_type": "span",
                "marks": [],
                "text": "You struggled on their harder deep shots. \n"
              },
              {
                "_key": "1c01946302770",
                "_type": "span",
                "marks": [],
                "text": "Some parents may think that a few of these sentences are purely observational."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "97604c72edcd",
            "_type": "block",
            "children": [
              {
                "_key": "18cdd38997ee0",
                "_type": "span",
                "marks": [],
                "text": "‘Your second serve really let you down’"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "23164f7c1533",
            "_type": "block",
            "children": [
              {
                "_key": "28e369d0475e0",
                "_type": "span",
                "marks": [],
                "text": "‘You struggled on their harder deep shots’"
              },
              {
                "_key": "e0bd2a5527520",
                "_type": "span",
                "marks": [],
                "text": "\n\nIn a way they are statements but they will not come across as statements. The position parents hold, is never neutral. Children know and more importantly feel the deeper meaning and message of what you are saying. Think how simple the priming impacted behaviour above, now let’s add in stress and the dynamic of opponents, people watching etc. Talk about a pressure cooker! Tennis is one tough stage."
              },
              {
                "_key": "50a1514ab4560",
                "_type": "span",
                "marks": [],
                "text": "\n\nLet’s rephrase the above examples, ever so slightly. Change the priming. First thing, let’s remove the ‘YOU’ element. It makes it very personal and with flaws, it feels like you are talking about them."
              },
              {
                "_key": "decf9d07e66d0",
                "_type": "span",
                "marks": [],
                "text": "\n\nYou always missed your backhand down the line"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "85d95ce67db3",
            "_type": "block",
            "children": [
              {
                "_key": "49f0dc002e1b0",
                "_type": "span",
                "marks": [
                  "em"
                ],
                "text": "‘Those backhand down the lines are tough shots, did you feel comfortable with them today?\n"
              },
              {
                "_key": "4a0f5a2777930",
                "_type": "span",
                "marks": [],
                "text": "\nYou looked tired and angry"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "b0bdfead29c8",
            "_type": "block",
            "children": [
              {
                "_key": "8c63ca4cfbbf0",
                "_type": "span",
                "marks": [
                  "em"
                ],
                "text": "How did you feel before you started the match? Sometimes when I sleep badly I struggle at work the next day. How are your energy levels?"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "9b0a6c3524c2",
            "_type": "block",
            "children": [
              {
                "_key": "f034baff105d0",
                "_type": "span",
                "marks": [],
                "text": "\n"
              },
              {
                "_key": "cc6d608483840",
                "_type": "span",
                "marks": [],
                "text": "Why did you miss so many short balls"
              },
              {
                "_key": "cc6d608483841",
                "_type": "span",
                "marks": [],
                "text": "\n"
              },
              {
                "_key": "cc6d608483842",
                "_type": "span",
                "marks": [
                  "em"
                ],
                "text": "When you came forward to the net, did you feel confident?"
              },
              {
                "_key": "b36fc69306360",
                "_type": "span",
                "marks": [],
                "text": "\n\nYour second serve really let you down"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "fcd3d7aab00a",
            "_type": "block",
            "children": [
              {
                "_key": "62f40fa0581f0",
                "_type": "span",
                "marks": [
                  "em"
                ],
                "text": "When you start the point, did you have any goals in mind? First serve goals, second serve goals? Did you feel you got as many in as you liked and were you able to hit them where you hoped to?"
              },
              {
                "_key": "36a059055af60",
                "_type": "span",
                "marks": [],
                "text": "\n\nYou need to hit harder on those high volleys"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "3b85b4712b93",
            "_type": "block",
            "children": [
              {
                "_key": "49db64c7c5960",
                "_type": "span",
                "marks": [
                  "em"
                ],
                "text": "I would use the same prompt as the short balls ‘When you came forward to the net, did you feel confident’? Or what are you working on with the coach when you come forward?"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "1be4da436435",
            "_type": "block",
            "children": [
              {
                "_key": "b5d52f945d280",
                "_type": "span",
                "marks": [],
                "text": "\n"
              },
              {
                "_key": "17fed99eac770",
                "_type": "span",
                "marks": [],
                "text": "You struggled on their harder deep shots"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "9ea91fd467d6",
            "_type": "block",
            "children": [
              {
                "_key": "28ee75c409a50",
                "_type": "span",
                "marks": [
                  "em"
                ],
                "text": "Those deep hard shots look tricky, what are some things you practise with your coach on these ones?"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "81d31002dbbf",
            "_type": "block",
            "children": [
              {
                "_key": "a4a3757a4cb2",
                "_type": "span",
                "marks": [
                  "em"
                ],
                "text": ""
              },
              {
                "_key": "7e45694c6fed0",
                "_type": "span",
                "marks": [],
                "text": "These changes take immediate ‘attack’ mode away from your child. They open them to an answer that can go in multiple directions and most importantly guided by the child. They may have responses that take the conversation to somewhere completely different, somewhere completely unexpected. They need to trust the space, trust your motivations behind the questions and feel confident that you as a team will work through them at the right time in the right way."
              },
              {
                "_key": "7e45694c6fed1",
                "_type": "span",
                "marks": [],
                "text": "\n\n"
              },
              {
                "_key": "70c69b77570d0",
                "_type": "span",
                "marks": [],
                "text": "Another option, and a way to support these conversations in a different way: Is, just be with them. Hang out as a parent and spend time with your child. Did you enjoy the match? Cool, let’s go home and play in the backyard or whatever you like doing together. Then, send the coach a message and describe the match, how you saw it, what elements look like they need attention and an overall feel for the day."
              },
              {
                "_key": "70c69b77570d1",
                "_type": "span",
                "marks": [],
                "text": "\n"
              },
              {
                "_key": "70c69b77570d2",
                "_type": "span",
                "marks": [],
                "text": "Then the coach has the power to talk about the direction moving forward, decide the on-court drills to make adjustments if they feel they are needed."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "549c7ba38bcd",
            "_type": "block",
            "children": [
              {
                "_key": "363c285fe925",
                "_type": "span",
                "marks": [],
                "text": ""
              },
              {
                "_key": "a21784d4a3cc0",
                "_type": "span",
                "marks": [],
                "text": "Most of the time it isn’t about the skill during matches, or even the mistakes. It is about the pressure players put on themselves and how they deal with the mental side. I’m sure there will be technical problems, most of us don’t have the ‘perfect game’ even the very best are working daily to get better. It is very often, ‘THE HOW’ we approach the task or playing, the way we think during those moments of high pressure. You are in the corner of support, you are the child’s most secure voice. Be the voice that shapes future growth and trust. It may be a challenge but like most challenges, the rewards will be great!"
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ],
        "postImage": {
          "_type": "mainImage",
          "alt": "Words can make you act old!",
          "asset": {
            "_ref": "image-6d2d81bf2e89dff62ce7e950d95c889d5cfbe177-1024x768-png",
            "_type": "reference"
          },
          "caption": "Can words make you act old?"
        },
        "publishedAt": "2021-01-17T23:00:00.000Z",
        "slug": {
          "_type": "slug",
          "current": "words-can-make-you-old-yes-even-you"
        },
        "title": "Words Can Make You Old - Yes, even you!"
      }
    ],
    "sections": [
      {
        "_key": "e97becbc61e2",
        "_type": "siteNotice",
        "backgroundColor": {
          "title": "White",
          "value": "#ffffff"
        },
        "imageLocation": "left",
        "messageText": "Big news! We're excited to announce a brand new product."
      },
      {
        "_key": "bef5d8d45145",
        "_type": "hero",
        "backgroundColor": {
          "title": "White",
          "value": "#ffffff"
        },
        "buttons": [],
        "content": "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
        "heading": "Lasvit Tennis",
        "mainImage": {
          "_type": "mainImage",
          "alt": "Lasvit Tennis Banner Image",
          "asset": {
            "_ref": "image-c7400e38c81f5dfeae799c83eecc7bc928ab7b97-2400x1600-jpg",
            "_type": "reference"
          }
        },
        "subheading": "High performance tennis coaching"
      },
      {
        "_key": "5e966a0070ac",
        "_type": "featuredOn",
        "backgroundColor": {
          "title": "White",
          "value": "#ffffff"
        },
        "logos": [
          {
            "_key": "4114f3de95af",
            "logoImage": {
              "_type": "image",
              "asset": {
                "_ref": "image-95cde8a3c6e45bb6ce05b88700cafa387b6233e6-138x48-svg",
                "_type": "reference"
              }
            }
          },
          {
            "_key": "3982819f384f",
            "logoImage": {
              "_type": "image",
              "asset": {
                "_ref": "image-242f4e01ea685cea0392bed49bb22edb198d2f4d-127x48-svg",
                "_type": "reference"
              }
            }
          },
          {
            "_key": "326ea090d7f2",
            "logoImage": {
              "_type": "image",
              "asset": {
                "_ref": "image-3e6b333f6802b20c94816f67e0b9d84e83c675f9-158x48-svg",
                "_type": "reference"
              }
            }
          }
        ]
      },
      {
        "_key": "225339a08187",
        "_type": "featureGrid",
        "backgroundColor": {
          "title": "White",
          "value": "#ffffff"
        },
        "content": "Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.",
        "heading": "A better way to send money",
        "items": [
          {
            "_key": "eff9670e90a3",
            "iconColor": {
              "title": "Light Teal",
              "value": "#31E2E8"
            },
            "itemDescription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
            "itemHeading": "Competitive exchange rates"
          },
          {
            "_key": "20ad4d223dee",
            "iconColor": {
              "title": "Light Teal",
              "value": "#31E2E8"
            },
            "itemDescription": "Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.",
            "itemHeading": "No hidden fees"
          }
        ],
        "subheading": "TRANSACTIONS"
      },
      {
        "_key": "e2486e479007",
        "_type": "blogRoll",
        "backgroundColor": {
          "title": "White",
          "value": "#ffffff"
        },
        "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.",
        "heading": "From the blog",
        "popularity": 3,
        "subheading": "LASVIT BLOG"
      },
      {
        "_key": "3ff9b4c31a51",
        "_type": "team",
        "backgroundColor": {
          "title": "White",
          "value": "#ffffff"
        },
        "content": "Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse. Vivamus fringilla.",
        "heading": "Meet our team",
        "team": [
          {
            "_key": "4511c7294ac3",
            "_ref": "a0426fa1-442e-42e3-a579-f6b5972d94c7",
            "_type": "reference"
          },
          {
            "_key": "f474b842c0e4",
            "_ref": "e0e9a64b-092a-44b4-ab47-5fe2207ac047",
            "_type": "reference"
          }
        ]
      },
      {
        "_key": "075c59044b3b",
        "_type": "signup",
        "backgroundColor": {
          "title": "White",
          "value": "#ffffff"
        },
        "heading": "Want product news and updates?",
        "subheading": "Sign up for our newsletter."
      }
    ],
    "slug": {
      "_type": "slug",
      "current": "home"
    },
    "title": "Home"
  }
}

*/
