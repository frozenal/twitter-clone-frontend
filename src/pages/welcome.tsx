import React from "react";

interface Props {}

const welcome = (props: Props) => {
  return (
    <div className="h-screen w-screen">
      <div>Main</div>
      <footer>Footer</footer>
    </div>
  );
};

export default welcome;
