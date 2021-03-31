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
    const types = ["bug", "dark", "dragon", "electric", "fairy", "fighting", "fire", "flying", "ghost", "grass", "ground", "ice", "normal", "poison", "psychic", "psychic", "steel", "water"]

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
            {types.map((type, i) => {
            return <MenuItem value={type} key={i}> {type}</MenuItem>})}
          </Select>
        </FormControl> 
        </div>
    )
}

export default TypeSelect


    