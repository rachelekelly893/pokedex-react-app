import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


const useStyles = makeStyles((theme) => ({
  
  // types: {
	// 	position: 'relative',
	// 	borderRadius: theme.shape.borderRadius,
	// 	backgroundColor: fade(theme.palette.common.white, 0.15),
	// 	'&:hover': {
	// 	  backgroundColor: fade(theme.palette.common.white, 0.25),
	// 	},
	// 	marginLeft: 0,
	// 	width: '100%',
	// 	[theme.breakpoints.up('sm')]: {
	// 	  marginLeft: theme.spacing(1),
	// 	  width: 'auto',
	// 	},
	// },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));

const TypeSelect = ({ handleTypeChange }) => {

    const classes = useStyles();


    return (
      <div>
      <FormControl className={classes.formControl}>
          <InputLabel 
          style={{ color: '#c9c9db' }}
          id="demo-simple-select-label">Type</InputLabel>
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


    