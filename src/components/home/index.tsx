import { IAllData, IArticle } from "../../utils/types";
import React, { FC, lazy } from "react";
import CustomPagination from "../globals/CustomPagination";
import MyLoader from "../globals/MyLoader";
import Collection from "../molecules/Collection";
const Article = lazy(() => import("../molecules/Article"));

interface IPropd {
  data: IAllData;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
}

const HomeComponet: FC<IPropd> = ({ data, setPage, loading }) => {
  const { results, page, total_results } = data;
  return (
    <>
      <Collection data={data} loading={loading} />
      <CustomPagination
        resPerPage={results.length}
        page={page}
        filtredArticlesCount={total_results / 2}
        setPage={setPage}
      />
    </>
  );
};

export default HomeComponet;
