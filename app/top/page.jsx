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
          console.log(error)
        });
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Top News</h1>
      <div className="article-grid">
        {articles.map((article) => (
          <div key={article.article_id} className="article py-2">
            <h2 className="text-xl">{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.link}>Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopNewsPage;
