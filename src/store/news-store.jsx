import { createContext, useReducer } from "react";

export const NewsList = createContext({
  newsList: [],
  addInitialNews: () => {},
});

const newsListReducer = (currNewsList, action) => {
  let newNewsList = currNewsList;

  if (action.type === "INITIAL_NEWS") {
    newNewsList = action.payload.articles;
  }
  return newNewsList;
};

const NewsListProvider = ({ children }) => {
  const [newsList, dispatchNewsList] = useReducer(newsListReducer, []);

  const addInitialNews = (articles) => {
    dispatchNewsList({
      type: "INITIAL_NEWS",
      payload: { articles },
    });
  };

  return (
    <NewsList.Provider value={{ newsList, addInitialNews }}>
      {children}
    </NewsList.Provider>
  );
};

export default NewsListProvider;
