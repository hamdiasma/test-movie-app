import { Link } from "react-router-dom";
import { EnumMediaType, IArticle } from "../../utils/types";
import React, { FC } from "react";
import Anchor from "../atoms/Anchor";

interface IPropd {
  article: IArticle;
}
const Article: FC<IPropd> = ({ article }) => {
  let title = "";
  let date_release = "";
  switch (article.media_type) {
    case EnumMediaType.MOVIE:
    case EnumMediaType.PERSON:
      title = article.title;
      date_release = article.release_date;
      break;
    case EnumMediaType.TV:
      title = article.name;
      date_release = article.first_air_date;

      break;
    default:
      title = article.title;
      break;
  }
  return (
    <div className=" bg-light inline-block  rounded-lg overflow-hidden  hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)] hover:scale-105 cursor-pointer  transition-hover duration-300 border border-gray-light">
      <Anchor to={`/movie/${article.id}`}>
        <img
          className="rounded-t w-full"
          src={`https://media.themoviedb.org/t/p/w220_and_h330_face${article.poster_path}`}
          alt={article.original_title}
        />
        <div className="px-2 py-1">
          <span className="flex items-center justify-start gap-3 font-medium">
            {title}
          </span>
          <span className="text-custom-gray">{date_release}</span>
        </div>
      </Anchor>
    </div>
  );
};

export default Article;
