import { useRouter } from "next/router";
import React from "react";

interface Props {}

const login = (props: Props) => {
  const router = useRouter();

  console.log(router.query);

  return <div>Login page</div>;
};

export default login;
