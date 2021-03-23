import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypeSelect from '../TypeSelect/TypeSelect'

import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import GrowMenu from '../GrowMenu/GrowMenu';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: 'red',
		boxShadow: 'pink'
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1,
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block'
		},
		color: 'White',
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto'
		}
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputRoot: {
		color: 'inherit'
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '24ch',
			'&:focus': {
				width: '30ch'
			}
		}
	}
}));

const NavBar = ({ handleNameChange, typeFilter, setTypeFilter, handleTypeChange}) => {
	const classes = useStyles();

	function refreshPage() {
		window.location.reload(false);
	}

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<GrowMenu />
					<Typography className={classes.title} variant="h3" noWrap>
						Pokedex
					</Typography>
					<div className={classes.types}>
						<TypeSelect typeFilter ={typeFilter} setTypeFilter={setTypeFilter} set handleTypeChange={handleTypeChange}/>
						</div>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							onChange={handleNameChange}
							placeholder="Filter By Name..."
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
					<Button
						style={{ marginLeft: 16 }}
						variant="contained"
						color="secondary"
						value="Refresh Page"
						onClick={refreshPage}
					>
						Clear Filters
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default NavBar;
