import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'; // Import the CSS file

function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ae76b6ed169549c1ba0baf6b4d6773fe')
      .then((response) => {
        setNews(response.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching news data');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="heading" style={{ textAlign: 'center', fontStyle: 'italic' }}>Welcome to our App!</h1>

      <h2 className="heading">Latest News</h2>
      {loading ? (
        <p>Loading news data...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="news-container">
          {news.map((article) => (
            <div key={article.id} className="news-box">
              <h3 className="news-title">{article.title}</h3>
              <p className="news-description">{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more-button">
                Read More
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
