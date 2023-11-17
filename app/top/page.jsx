"use client";
import React, { useState, useEffect } from "react";

const TopNewsPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      // approach 1: not test-friendly
      // const response = await fetch(
      //   "https://newsdata.io/api/1/news?apikey=pub_32853f71cab0b8f9074a57241ef45b190d5d8&country=vi&category=top"
      // );
      // const data = await response.json();
      // setArticles(data.results);

      // approach 2: test-friendly
      fetch('https://newsdata.io/api/1/news?apikey=pub_32853f71cab0b8f9074a57241ef45b190d5d8&country=vi&category=top')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          // Then try to parse it as JSON
          return response.json();
        })
        .then(data => {
          // Use the data
          setArticles(data.results);
        })
        .catch(error => {
          // Handle the error
          // console.log(error)
        });
    };
    fetchArticles();
  }, []);

  return (
    <div className="bg-white p-5 w-screen min-h-screen h-full font-serif">
      <h1 className="text-5xl bg-white bold text-center py-5">Top News</h1>
      <div className="article-grid grid grid-cols-2 gap-5">
        {articles.map((article) => (
          <div key={article.article_id} className="article py-2 bg-white">
            <h2 className="text-xl bold">{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.link} className="text-sm text-sky-500 underline-offset-2">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopNewsPage;
