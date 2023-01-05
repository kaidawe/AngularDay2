import React, { useState, useEffect } from 'react';
import styles from "./styles.css"
import axios from 'axios';

function PokemonForm() {
  const [formState, setFormState] = useState({
    id: 2,
    name: '',
    type: '',
    level: '',
    image: ''
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormState({
      ...formState,
      [name]: value,
    });
  }


  function handleSubmit(event) {
    event.preventDefault();

    const result = axios.post("/api/pokemons", {...formState})
    console.log("result")
   };


  return (
    <form onSubmit={handleSubmit} className="pokemonform">
      <label>
        ID:
        <input type="text" name="id" value={formState.id} disabled />
      </label>
      <br />
      <label>
        Name:  
        <input type="text" name="name" value={formState.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Type:  
        <input type="text" name="type" value={formState.type} onChange={handleChange} />
      </label>
      <br />
      <label>
        Level:  
        <input type="text" name="level" value={formState.level} onChange={handleChange} />
      </label>
      <br />
      <label>
        Image URL:  
        <input type="text" name="image" value={formState.image} onChange={handleChange} />
      </label>
      <br />
      <button type="submit" className='btn'>Submit</button>
    </form>
  );
}

export default PokemonForm;


