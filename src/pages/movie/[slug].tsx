import { IMovie, IParams } from "@/utils/types";
import Layout from "../../layout/Layout";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../utils/useApi";
import BackgroundImageComponent from "../../components/atoms/BackgroundImageComponent";
import ErrorComponent from "../../components/globals/ErrorComponent";

function ArticleDetails() {
  const { slug }: IParams = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [id] = useState<string>(slug || "");
  const [data, setData] = useState<IMovie | null>(null);
  const date = useRef<number | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      if (errorMsg) setErrorMsg("");
      setLoading(true);
      try {
        const res = await apiClient.get(`/movie/${id}`);
        if (res?.status === 200) {
          const newData = res?.data;
          setData(newData);
          setTimeout(() => setLoading(false), 500);
        }
      } catch (error: any) {
        setLoading(false);
        setErrorMsg(error?.response?.data?.status_message);
      }
    };
    fetchMovie();
  }, [id]);

  if (data) {
    const checkDate = new Date(data?.release_date);
    date.current = checkDate.getFullYear();
    console.log(data);
  }

  const renderDetail = () => {
    if (!data) return;
    return (
      <>
        <h2>
          <span className="  opacity-1 text-[20px] font-semibold">
            {data?.title} ({date?.current})
          </span>
        </h2>
        <h3 className=" italic opacity-80 py-5">{data?.tagline}</h3>
        <h3 className=" font-semibold">Synopsis</h3>
        <h3 className="opacity-90">{data?.overview}</h3>
      </>
    );
  };
  return (
    <Layout>
      {errorMsg && <ErrorComponent msg={errorMsg} />}
      {data && (
        <>
          <div className=" h-full">
            <div className="relative">
              <BackgroundImageComponent height={400} src={data?.backdrop_path}>
                <div className="flex align-middle h-full gap-5 justify-center sm:justify-start py-5 px-20 relative z-10">
                  <img
                    className="rounded-lg"
                    src={`https://media.themoviedb.org/t/p/w220_and_h330_face${data?.poster_path}`}
                    alt={data?.title}
                  />
                  <section className="p-5 hidden md:block text-light">
                    {renderDetail()}
                  </section>
                </div>
              </BackgroundImageComponent>
            </div>
            <section className="p-5 block md:hidden">{renderDetail()}</section>
            <section className="mt-10">
              <h2 className="text-[20px] font-semibold mb-5">Genre:</h2>
              <div className="flex flex-wrap gap-3">
                {data?.genres.map((genre) => (
                  <span
                    className="bg-primary text-light px-5 py-2 rounded-lg"
                    key={genre?.id}
                  >
                    {genre?.name}
                  </span>
                ))}
              </div>
              <br />
              <h2 className="text-[20px] font-semibold mb-5">Times:</h2>
              <span className="bg-primary text-light px-5 py-2 rounded-lg">
                {data?.runtime} (min)
              </span>
            </section>
          </div>
        </>
      )}
    </Layout>
  );
}

export default ArticleDetails;
