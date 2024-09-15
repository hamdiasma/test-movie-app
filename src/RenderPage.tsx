import React from "react";
import { IParams } from "@/utils/types";
import { useParams } from "react-router-dom";

import NotFound from "./components/globals/NotFound";
const generatePage = (name: string): JSX.Element => {
  const component = () => require(`./pages/${name}`).default;
  try {
    return React.createElement(component());
  } catch (error) {
    return <NotFound />;
  }
};

function RenderPage() {
  const { slug, page }: IParams = useParams();
  let name: string = "";
  if (page) {
    name = slug ? `${page}/[slug]` : `${page}`;
  } else if (!page && name === "") {
    name = "home";
  }

  return generatePage(name);
}

export default RenderPage;
