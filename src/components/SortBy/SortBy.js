import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

// STYLES 
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '10em',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));


// COMPONENT
const SortBy = ({ handleSortChange }) => {

    const classes = useStyles();

    return (
      <div>
      <FormControl className={classes.formControl}>
          <InputLabel 
          style={{ color: '#c9c9db' }}
          id="demo-simple-select-label">Sort By</InputLabel>
        <Select
          style={{ color: '#c9c9db' }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleSortChange}
        >
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="type">Type</MenuItem>
            <MenuItem value="ID">ID Number</MenuItem>
            <MenuItem value="HP">HP</MenuItem>
            <MenuItem value="attack">Attack</MenuItem>
            <MenuItem value="defense">Defense</MenuItem>
            <MenuItem value="specialAttack">Special Attack</MenuItem>
            <MenuItem value="specialDefense">Special Defense</MenuItem>
            <MenuItem value="speed">Speed</MenuItem>
          </Select>
        </FormControl> 
        </div>
    )
}

export default SortBy


    