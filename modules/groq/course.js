import { globalPageQuery } from "./common";

export const courseCollectionQuery = `
*[(_type == "course" )]{
  slug,
  title,
  shortDescription,
  mainImage{
  	alt,
  	"src": asset->{
  		url, 
		}
	}
}`;

export const courseDetailQuery = `*[_type == "course" && slug.current == $slug][0]{
  ...,
  _id,
  title,
  shortDescription,
  stats,
  pricing,
  mainImage,
  content{
    ...,
    features[]{...,},
    modules[]->{..., contentItems[]->},
    sneakpeek[]->
  },
  faqs{faq[]->{question,answer}
  }
}`;

// export const courseDetailQuery = `*[_type == "course" && slug.current == $slug][0]{
//   _id,
//   title,
//   shortDescription,
//   stats,
//   pricing,
//   mainImage{
//   	...
// 	},
//   content{
//     ...,
//     features[]{
//       ...,
//       mainImage{
//         ...,
//       }
//     },
//     sneakpeek[]->
//   },
//   faqs{
//     ...,
//     faq[]->{
//       question,
//       answer
//     }
//   },
//   "modules": *[_type == "module" && ^._id in course[]._ref]{
//     ...,
//     mainImage{
//       asset->{
//         url
//       }
//     },
//     "items": *[_type == "contentItem" && ^._id in modules[]._ref]{
//       ...,
//       modules[]->
//     }
//   }
// }`;

export const courseCollection = `{
  'globalData': ${globalPageQuery},
  'pageData': ${courseCollectionQuery}
}`;

export const courseDetail = `{
  'globalData': ${globalPageQuery},
  'pageData': ${courseDetailQuery}
}`;

export const courseList = `*[_type == "course" && defined(slug.current)]{"params": {"id": slug.current}}`;
