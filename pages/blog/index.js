import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../../utils/sanity";
import BlogPage from '../../components/BlogPage';

// return posts
// const query = `*[_type == "post" && defined(slug.current)]`;

const query = `*[
    !(_id in path('drafts.**')) &&
    (_type == "post" && defined(slug.current) || _type == "siteConfig")
  ]
  {
    _id,
    excerpt,
    slug,
    postImage,
      title,
    tagline,
    siteDescription,
    mainNavigation,
    footerNavigation,
    frontpage,
    logo,
    content,
    description
  }`;

function BlogPageContainer({ postsData, preview }) {
  const router = useRouter();
  if (!router.isFallback && !postsData) {
    return <Error statusCode={404} />;
  }
  const { data: posts } = usePreviewSubscription(query, {
    initialData: postsData,
    enabled: preview || router.query.preview !== null,
  });

  return <BlogPage posts={posts} />;
}

export async function getStaticProps({ params = {}, preview = false }) {
  const postsData = await getClient(preview).fetch(query);
  console.log("Query =>", query);
  return {
    props: { preview, postsData },
    revalidate: 1,
  };
}

export default BlogPageContainer;