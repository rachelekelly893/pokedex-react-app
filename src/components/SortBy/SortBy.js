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
		minWidth: '10em'
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

// COMPONENT
const SortBy = ({ handleSortChange }) => {
	const classes = useStyles();
	const sortBys = [ 'Name', 'Type', 'ID', 'HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed' ];

	return (
		<div>
			<FormControl className={classes.formControl}>
				<InputLabel style={{ color: '#c9c9db' }} id="demo-simple-select-label">
					Sort By
				</InputLabel>
				<Select
					style={{ color: '#c9c9db' }}
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					onChange={handleSortChange}
				>
					{sortBys.map((sortBy, i) => {
						return (
							<MenuItem value={sortBy} key={i}>
								{sortBy}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</div>
	);
};

export default SortBy;
