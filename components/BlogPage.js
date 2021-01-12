import { useState } from "react";

import BlogPostCard from "./BlogPostCard";

function BlogPage({ posts }) {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Lasvit Blog
            </h1>
          </div>

          <div class="flex flex-wrap -m-4">
            {posts.map((post) => (
              <BlogPostCard key={post._id} {...post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPage;
