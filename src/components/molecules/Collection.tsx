import React, { FC } from "react";
import MyLoader from "../globals/MyLoader";
import Article from "./Article";
import { IAllData, IArticle } from "../../utils/types";

interface IPropd {
  data: IAllData;
  loading: boolean;
}
const Collection: FC<IPropd> = ({ data, loading }) => {
  const { results } = data;
  return (
    <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 overflow-hidden">
      {results?.map((article: IArticle, index) =>
        loading ? (
          <MyLoader key={index} />
        ) : (
          <Article
            key={`${article.original_title}_${article.id}`}
            article={article}
          />
        )
      )}
    </div>
  );
};

export default Collection;
