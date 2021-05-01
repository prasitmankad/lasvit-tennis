import { globalPageQuery } from "./page";

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
  title,
  shortDescription,
  stats,
  pricing,
  content{
    features[]{
      ...,
      mainImage{
        "url": asset->{url}
      }
    }
  },
  faqs{
    ...,
    faq[]->{
      question,
      answer
    }
  }
}`;

export const courseCollection = `{
  'globalData': ${globalPageQuery},
  'pageData': ${courseCollectionQuery}
}`;

export const courseDetail = `{
  'globalData': ${globalPageQuery},
  'pageData': ${courseDetailQuery}
}`;

export const courseList = `*[_type == "course" && defined(slug.current)]{"params": {"id": slug.current}}`;
