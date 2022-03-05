import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
      'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return <div>
    {loading ?
     <h1>Loading...</h1>
      : 
      <div>
        {movies.map(movies => (
          <div key={movies.id}>
            <img src={movies.medium_cover_image} />
            <h2>{movies.title}</h2>
            <p>{movies.summary}</p>
            <ul>
              {movies.genres.map((g)=>(
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>}
  </div>;
};

export default App;
