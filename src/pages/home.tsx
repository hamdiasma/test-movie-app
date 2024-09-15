import apiClient from "../utils/useApi";
import { IAllData } from "../utils/types";
import Layout from "../layout/Layout";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import HomeComponent from "../components/home";
import ErrorComponent from "../components/globals/ErrorComponent";

function Home() {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [data, setData] = useState<IAllData>({
    results: [],
    page: Number(searchParams.get("page")) || 1,
    total_pages: 0,
    total_results: 0,
  });
  const [page, setPage] = useState<number>(
    Number(searchParams.get("page")) || 1
  );
  useEffect(() => {
    if (!searchParams.get("page")) {
      setPage(1);
    }
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const fetchMovies = async () => {
      if (errorMsg) setErrorMsg("");
      setLoading(true);
      try {
        const res = await apiClient.get(`/trending/movie/day?page=${page}`);
        if (res?.status === 200) {
          const newData = res?.data;
          setData(newData);
          setLoading(false);
        }
      } catch (error: any) {
        setLoading(false);
        setErrorMsg(error?.response?.data?.status_message);
      }
    };
    fetchMovies();
  }, [page]);

  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-3xl font-bold underline text-primary my-20">
          Hello, Tailwind with React + TypeScript!
        </h1>
      </div>
      {errorMsg && <ErrorComponent msg={errorMsg} />}
      {data && !errorMsg && (
        <HomeComponent data={data} setPage={setPage} loading={loading} />
      )}
    </Layout>
  );
}

export default Home;
