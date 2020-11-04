import React, {useEffect, useState} from "react";
import axios from 'axios';

import './App.css';

import {CardContent} from "./components/CardContent";

function App() {

  const [data, setData] = useState(null);

  const newsAPIUrl = 'http://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=08314e913a994898aeac3ad82751cea3';

  useEffect(() => {
    axios.get(newsAPIUrl)
      .then(response => {
        setData(response.data);
      })
  }, [])

  return (
    <div className="App">
      <div className="cardWrapper">
      {data &&
        data.articles.map(article => {
          return <CardContent key={article.title} data={article} />
        })
      }
      </div>
    </div>
  );
}

export default App;
