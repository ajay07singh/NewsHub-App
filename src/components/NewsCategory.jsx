import React from "react";
import { useContext, useEffect, useState } from "react";
import { NewsList } from "../store/news-store";
import Spinner from "./Spinner";
import NewsCard from "./NewsCard";
import { useNavigate } from "react-router-dom";
const NewsCategory = ({ category }) => {
  const { newsList, addInitialNews } = useContext(NewsList);
  const [loading, setloading] = useState(true);

  const URL = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=7156d872ae7a49b387a2b53f534089e7`;
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          addInitialNews(data.articles);
          setloading(false);
        });
    }, 0);
  }, []);

  return (
    <div className="">
      <div className="text-white mt-40 ">
        <h1 className="text-center md:text-8xl text-6xl md:mb-20 mb-10">
          Top Headlines{" "}
        </h1>
        <div className="py-10 flex flex-wrap gap-9 justify-center m-[auto]   px-20">
          {loading === true ? (
            <Spinner />
          ) : (
            newsList &&
            newsList.map((article) => (
              <NewsCard key={article.title} article={article} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCategory;
