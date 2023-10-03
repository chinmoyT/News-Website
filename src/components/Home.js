import React, { useState, useEffect } from 'react';
import Card from './Card'
import '../style/home.css'
// import Loader from './Loader';

function NewsComponent() {
  const [newsType, setNewsType] = useState('everything')
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    // Define the API URL with your API key and query
      fetchNews();
    }
    , []); 

    const apiKey = 'pub_30159d22118cea42f6deddcf5f353e3b31956';
    //const query = 'everything';
    const fetchNews= ()=> {
      const apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${newsType}`;

      // Use the fetch API to make a GET request to the Newsdata.io API
      
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((responseData) => {
          setNewsData(responseData.results); // Update the newsData state with the fetched data
          setLoading(false); // Set loading to false since the request is complete
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false); // Set loading to false in case of an error
        });
      }  

  return (
    // <div>
    //   {loading ? (
    //     <Loader isLoading={loading}/>
    //     // <p>Loading...</p>
    //   ) : (
    //     <div className='container'>
    //       <h1 className='headlines'>News Headlines</h1>
    //       <ul>
    //         {newsData.map((article) => (
    //           <Card  key={article.article_id} title={article.title} description={article.description} link={article.link} image_url={article.image_url} />
    //         ))}
    //       </ul>
    //     </div>
    //   )}
    // </div>
    <div className='container'>
      <div className='heading'>
      <h1>Daily News</h1>
      </div>
      <label>Select type of news:</label>
      <select id='newsType' value={newsType} onChange={(e)=> setNewsType(e.target.value)}>
        <option id='business'>Business</option>
        <option id='enternatinement'>Entertainment</option>
        <option id='top'>Top</option>  
      </select>
      <button onClick={fetchNews}>fetch News</button>
      
      <div className='news-card'>
      
        {newsData.map((article)=> (
          // <div className='news-item' key={index}>
          //     <img src={article.image_url} alt="No image" />
          //     <a href={article.link}>
          //        <h2>{article.title}</h2>
          //     </a>   
          //     <p>{article.description}</p>
          // </div>
          <Card  key={article.article_id} title={article.title} description={article.description} link={article.link} image_url={article.image_url} />
        ))}
      
      </div>
    </div>
  );
}

export default NewsComponent;
