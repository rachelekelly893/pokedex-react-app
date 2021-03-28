import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

import GrowMenu from '../GrowMenu/GrowMenu';
import pokedexLogo from '../../images/pokedexlogo.png'
import TypeSelect from '../TypeSelect/TypeSelect'
import SortBy from '../SortBy/SortBy'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: 'red',
		boxShadow: 'pink'
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	logoDiv: {
		flexGrow: 1,
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block'
		}
	},
	logo: {
		paddingLeft: '1em'
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
		  backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
		  marginLeft: theme.spacing(1),
		  width: 'auto',
		},
	  },
	  searchIcon: {
		padding: theme.spacing(0, 1),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
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
		  width: '7em',
		  '&:focus': {
			width: '10em',
		  },
		},
	  }
}));

const NavBar = ({ handleNameChange, handleTypeChange, handleSortChange}) => {
	const classes = useStyles();

	function refreshPage() {
		window.location.reload(false);
	}

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<GrowMenu />
					<div className={classes.logoDiv}>
						<img src={pokedexLogo} alt="pokedex logo" height='100em' className={classes.logo} />
					</div> 
					<SortBy handleSortChange={handleSortChange}/>
					<TypeSelect handleTypeChange={handleTypeChange}/>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							onChange={handleNameChange}
							placeholder="Name..."
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
					<Button
						style={{ marginLeft: '.5em'
						 }}
						variant="contained"
						color="secondary"
						value="Refresh Page"
						onClick={refreshPage}
					>
						Reset
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default NavBar;
