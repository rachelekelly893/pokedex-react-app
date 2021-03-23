import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      width: '10em',
      height: '4em'
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const TypeSelect = ({ handleTypeChange }) => {

    const classes = useStyles();


    return (
        <FormControl variant="filled" className={classes.formControl}>
        <Select
        style={{ height: '2.5em',
    color: '#c9c9db' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
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
          <FormHelperText
          style={{ color: '#c9c9db' }}
          >Filter by Type</FormHelperText>
        </FormControl> 
    )
}

export default TypeSelect


    