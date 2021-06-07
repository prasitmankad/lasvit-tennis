import React from "react";
import { useRouter } from "next/router";

import RenderNewPages from "../components/render/renderNewPages";


function IndexPage() {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <RenderNewPages />
    </>
  );
}

export default IndexPage;
