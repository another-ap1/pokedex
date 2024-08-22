import React from 'react';
import Pokecard from './Pokecard'
import pokedex from './Pokedex';
import './App.css';


function App() {
  return (
    <Pokecard pokedex={pokedex} />
  );
}

export default App;
