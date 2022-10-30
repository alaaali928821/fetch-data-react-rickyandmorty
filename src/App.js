import './App.css';
import Axios from 'axios';
import Char from './char'
import { useEffect, useState } from 'react';

function App() {
  const [charactersData, setCharData] = useState([]);
  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/character').then((res) => {
      const l = res.data.results.map(el => {
        return ({
          id: el.id,
          name: el.name,
          img: el.image
        })
      })
      setCharData(l)
    })
  }, []);

  return <div className="App">{charactersData.map(el => <Char name={el.name} img={el.img} />)}</div>

}

export default App;
