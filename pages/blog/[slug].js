import Error from "next/error";
import { groq } from "next-sanity";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../../utils/sanity";

const query = groq`*[_type == "post" && slug.current == $slug][0]`;

function BlogPostContainer({ postData, preview }) {
  const router = useRouter();
  if (!router.isFallback && !postData?.slug) {
    return <Error statusCode={404} />;
  }

  const { data: post = {} } = usePreviewSubscription(query, {
    params: { slug: postData?.slug?.current },
    initialData: postData,
    enabled: preview || router.query.preview !== null,
  });

  return <></>;
}

export async function getStaticProps({ params, preview = false }) {
  const postData = await getClient(preview).fetch(query, {
    slug: params.slug,
  });

  return {
    props: { preview, postData },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export default BlogPostContainer;
