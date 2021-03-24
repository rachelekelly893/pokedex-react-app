import React from 'react';
import './style.css'

const BasicPagination = ({ pokemonPerPage, totalPokemon, paginate }) => {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div class="center">
    <div className='pagination'>
      {pageNumbers.map(number => (
          <a key={number} onClick={() => paginate(number)} href='!#' className='page-link'>
            {number}
          </a>
      ))}
  </div>
  </div>
)};

export default BasicPagination