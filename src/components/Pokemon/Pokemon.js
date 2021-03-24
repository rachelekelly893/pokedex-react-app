import React from 'react';
import Card from '../Card/Card'

const Posts = ({ pokemon, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="grid-container">
		{pokemon.map((pokemon, i) => {
		return <Card key={i} pokemon={pokemon} />;
		})}
	</div>
  );
};

export default Posts;