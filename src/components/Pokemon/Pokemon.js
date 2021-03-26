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
		return <Card key={i} pokemon={pokemon} />;
		})}
	</div>
  );
};

export default Pokemon;