import React from "react";

function NewsCard({ article }) {
  return (
    <div className="z-0 w-[500px]  text-white bg-neutral-800 rounded-2xl border  border-neutral-600 ">
      <a href={article.url} target="/">
        <div className="relative overflow-hidden group cursor-pointer">
          <div>
            <div className="">
              <img
                className="h-full w-full object-fit group-hover:scale-105 duration-300 border-b-4 border-neutral-500"
                src={article.urlToImage}
                style={{ width: "100%", height: "300px" }}
                alt="image"
              />
            </div>
          </div>

          <div className="flex justify-start flex-col my-4 p-4">
            <h1 className="text-4xl ">{article.title.substring(0, 40)}...</h1>

            <hr className="m-2 border-1 border-neutral-500" />
            <p className="text-xl box-border h-20">
              {article.description && article.description.substring(0, 100)}...
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default NewsCard;
