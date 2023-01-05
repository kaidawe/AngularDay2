
import './App.css';
import { useEffect, useState } from 'react';
import PokemonForm from './pokemonForm';
import styles from "./styles.css"

function App() {


  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/pokemons")
      .then((res) => res.json())
      .then((data) => setData(data.pokemons));
  }, []);

  return (
    <div className="Pokemon">
      <h1>Haley Dawe's assignment</h1>
      <br>
      </br>
      <h2>Existing Pokemon:</h2>
      {
        data.map(item => (
        <div key={item.id}>
          <h3>Name: {item.name}</h3>
          <p>Level: {item.level}</p>
          <p>Type: {item.type}</p>
          <img src={item.image} alt="pokemon's character img"></img>
          <br></br>
        </div>
        ))
      }
      <br></br>
      <h4>Add a Pokemon:</h4>
      <div>{PokemonForm()}</div>

    </div>
  );
}

export default App;
