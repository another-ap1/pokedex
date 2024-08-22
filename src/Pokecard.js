import React from 'react';
import './Pokecard.css'

const pokeImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const Pokecard = ({pokedex}) => {
    return (
    <div>
      <h1 className='pokecard-title'>Pokedex</h1>
      <div>
        {pokedex.map(p => (
          <div key={p.id} className='pokemon'>
            <h3>{p.name}</h3>
            <img src={`${pokeImg}${p.id}.png`}/>
            <ul>
              <li>Type: {p.type}</li>
              <li>EXP: {p.base_experience}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
    )
}

export default Pokecard