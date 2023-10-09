import React, { useState, useEffect } from 'react';
import Card from './Card'
import '../style/home.css'
// import Loader from './Loader';

function NewsComponent() {
  const [newsType, setNewsType] = useState('top')
  const [newsData, setNewsData] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    fetchNews();
  }
    , []);

  const apiKey = 'pub_30159d22118cea42f6deddcf5f353e3b31956';
  const fetchNews = () => {
    const apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&language=en&category=${newsType}`;
    


    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((responseData) => {
        setNewsData(responseData.results); 
        // setLoading(false); // Set loading to false since the request is complete
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        // setLoading(false); 
      });
  }

  return (
    <div className='container'>
      <div className='heading'>
        <h1>Daily News</h1>
      </div>
      <div className='select-news'>
        <label>Select type of news:</label>
        <select id='newsType' value={newsType} onChange={(e) => setNewsType(e.target.value)}>
          <option id='top'>Top</option>
          <option id='general'>General</option>
          <option id='health'>Health</option>
          <option id='business'>Business</option>
          <option id='science'>Science</option>
          <option id='enternatinement'>Entertainment</option>
          <option id='sports'>Sports</option>
          <option id='technology'>Technology</option>
          <option id='politics'>Politics</option>
        </select>
        <button onClick={fetchNews}>fetch News</button>
      </div>


      <div className='news-card'>

        {newsData.map((article) => (
          <Card key={article.article_id} title={article.title} link={article.link} image_url={article.image_url} />
        ))}

      </div>
    </div>
  );
}

export default NewsComponent;
