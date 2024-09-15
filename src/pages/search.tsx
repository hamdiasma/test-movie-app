import React, { useCallback, useEffect, useState } from "react";
import apiClient from "../utils/useApi";
import Layout from "../layout/Layout";
import Button from "../components/atoms/Button";
import { IAllData } from "../utils/types";
import Collection from "../components/molecules/Collection";

const images: string[] = [
  "Asg2UUwipAdE87MxtJy7SQo08XI",
  "stKGOm8UyhuLPR9sZLjs5AkmncA",
  "waPt1Dv5kWhbNna5rTv2NGfeb7O",
  "VuukZLgaCrho2Ar8Scl9HtV3yD",
  "6VoxDupaW2VXfLtJyeOoGCgXSjD",
];
function Search() {
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [searchState, setSearchState] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<IAllData>({
    results: [],
    page: 1,
    total_pages: 0,
    total_results: 0,
  });
  const randomImage = Math.floor(Math.random() * images.length);

  const handleSubmitSearch = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (searchState.length < 1) {
        return;
      }
      try {
        const res = await apiClient.get(
          `/search/movie?query=${searchState}&page=1`
        );
        if (res?.status === 200) {
          const newData: IAllData = res?.data;
          setData(newData);
          setPage(1);
        }
      } catch (error: any) {
        setLoading(false);
        setErrorMsg(error?.response?.data?.status_message);
      }
      setLoading(false);
    },
    [searchState]
  );
  const fetchDataInScroll = useCallback(async () => {
    try {
      const res = await apiClient.get(
        `/search/movie?query=${searchState}&page=${page}`
      );
      if (res?.status === 200) {
        const newData: IAllData = res?.data;
        setData({
          ...data,
          results: [...data.results, ...newData.results],
        });
      }
    } catch (error: any) {
      setLoading(false);
      setErrorMsg(error?.response?.data?.status_message);
    }
    setLoading(false);
  }, [data, page]);

  const handleScroll = useCallback(() => {
    if (window.scrollY >= document.body.offsetHeight - 15 && !loading) {
      setPage((prevPage) => prevPage + 1);
      console.log({ page, data: data.page });

      if (page > data.page) {
        fetchDataInScroll();
      }
    }
  }, [loading, fetchDataInScroll, searchState]);

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup the scroll event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Layout>
      <section className="relative overflow-hidden h-[500px]">
        <img
          className="absolute top-0 h-full w-full left-0 z-10 object-cover"
          src={`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${images[randomImage]}.jpg`}
          alt="Searh_page"
        />
        <div className="absolute  h-full w-full  bg-primary opacity-50 top-0 left-0 z-20" />
        <div className="absolute  text-light  text-[32px] font-semibold h-full w-full z-20 flex items-center p-20">
          <div className="gap-10">
            <h1 className="  opacity-1 relative z-40">Bienvenue,</h1>
            <h1> Des millions de films, émissions télévisées et artistes...</h1>
            <form
              onSubmit={handleSubmitSearch}
              className="flex text-[16px] h-11 mt-5"
            >
              <input
                type="text"
                name="search"
                placeholder="recherche un film"
                required
                className="text-[#111]  w-full rounded-lg pl-5 outline-none"
                onChange={(e) => setSearchState(e.target.value)}
                value={searchState}
              />
              <Button
                type="submit"
                value={"search"}
                loading={loading}
                className="rounded-lg bg-primary ml-5 px-5 hover:bg-opacity-80 cursor-pointer  transition-hover duration-300"
              />
            </form>
          </div>
        </div>
      </section>
      {data && data.total_results > 0 && (
        <section className="mt-10">
          <h1 className="text-[18px] font-semibold mb-10">
            Total Result: ({data?.total_results})
          </h1>
          <Collection data={data} loading={loading} />
        </section>
      )}
      {loading && <p>Loading more movies...</p>}
    </Layout>
  );
}

export default Search;
