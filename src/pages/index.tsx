import React from "react";

import { useRouter } from "next/router";

interface Props {}

const index = (props: Props) => {
  const router = useRouter();

  if (process.browser) {
    router.push("/welcome");
  }

  return <div>Hello NextJS</div>;
};

export default index;
