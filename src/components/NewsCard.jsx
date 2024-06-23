import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

const NewsCard = ({ category, searchInput }) => {
  const [articles, setArticles] = useState([]);

  const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=1a3c4fe22a8f4a999920c3ec26a83564`;
  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data.articles);
        setArticles(data.articles);
      } catch (err) {
        console.log(err);
      }
    };
    getNews();
  }, [category]);

  let searchResults = articles.filter((eachApp) =>
    eachApp.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mt-3 mb-3">Latest News</h2>
        </div>
        {searchResults.map((eachNews, index) => (
          <NewsItems newsDetails={eachNews} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
