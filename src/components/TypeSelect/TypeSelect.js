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
const TypeSelect = ({ handleTypeChange }) => {

    const classes = useStyles();

    return (
      <div>
      <FormControl className={classes.formControl}>
          <InputLabel 
          style={{ color: '#c9c9db' }}
          id="demo-simple-select-label">Select Type</InputLabel>
        <Select
          style={{ color: '#c9c9db' }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleTypeChange}
        >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="bug">Bug</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
            <MenuItem value="dragon">Dragon</MenuItem>
            <MenuItem value="electric">Electric</MenuItem>
            <MenuItem value="fairy">Fairy</MenuItem>
            <MenuItem value="fighting">Fighting</MenuItem>
            <MenuItem value="fire">Fire</MenuItem>
            <MenuItem value="flying">Flying</MenuItem>
            <MenuItem value="ghost">Ghost</MenuItem>
            <MenuItem value="grass">Grass</MenuItem>
            <MenuItem value="ground">Ground</MenuItem>
            <MenuItem value="ice">Ice</MenuItem>
            <MenuItem value="normal">Normal</MenuItem>
            <MenuItem value="poison">Poison</MenuItem>
            <MenuItem value="psychic">Psychic</MenuItem>
            <MenuItem value="rock">Rock</MenuItem>
            <MenuItem value="steel">Steel</MenuItem>
            <MenuItem value="water">Water</MenuItem>
          </Select>
        </FormControl> 
        </div>
    )
}

export default TypeSelect


    