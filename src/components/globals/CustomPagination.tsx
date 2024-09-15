import React from "react";
import Pagination from "react-js-pagination";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

interface Props {
  resPerPage: number;
  filtredArticlesCount: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
const CustomPaginagion = ({
  resPerPage,
  filtredArticlesCount,
  page,
  setPage,
}: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  let queryParams: any;

  const handlePageChange = (currentPage: string) => {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(location?.search);
      if (queryParams.has("page")) {
        queryParams.set("page", currentPage);
      } else {
        queryParams.append("page", currentPage);
      }
      setPage(Number(currentPage));
      const path = `${location.pathname}?${queryParams.toString()}`;
      navigate(path);
    }
  };

  return (
    <div>
      {resPerPage < filtredArticlesCount && (
        <div className="flex justify-center mt-5">
          <Pagination
            activePage={page || 1}
            itemsCountPerPage={20}
            totalItemsCount={filtredArticlesCount}
            onChange={handlePageChange}
            nextPageText={">"}
            prevPageText={"<"}
            lastPageText={">>"}
            firstPageText={"<<"}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      )}
    </div>
  );
};

export default CustomPaginagion;
