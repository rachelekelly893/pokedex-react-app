import React from 'react';
import Card from '../Card/Card'
import Loading from '../Loading/Loading'

const Pokemon = ({ pokemon, loading }) => {
  if (loading) {
    return <Loading/>;
  }

  return (
    <div className="grid-container">
		{pokemon.map((pokemon, i) => {
      if (pokemon === undefined) {
        return <div>
          <h2>Pokemon Not Found</h2>
          <br/>
          <p>404 error</p>
          <br/>
          <p>Could not Retrieve Pokemon</p>
          <p>Data From API</p>
          </div>

      } else {
		return <Card key={i} pokemon={pokemon} />;}
		})}
	</div>
  );
};

export default Pokemon;