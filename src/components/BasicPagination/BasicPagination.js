import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      justifyContent:"center",
      display:'flex',
      marginBottom: '1em'
    },
  },
}));

export default function BasicPagination({ pokemonPerPage, currentPage, totalPokemon, handlePageChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination 
      count={Math.round(totalPokemon/pokemonPerPage)} 
      currentPage={currentPage}
      defaultPage={currentPage} 
      siblingCount={2} 
      boundaryCount={1} 
      color="secondary"  
      onChange={handlePageChange} 
      />
    </div>
  );
}