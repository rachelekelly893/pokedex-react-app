import React, { useState } from 'react';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '../../images/580b57fcd9996e24bc43c31f.png';

import AboutDialog from '../AboutDialog/AboutDialog';
import TypesDialog from '../TypesDialog/TypesDialog';
import StatsDialog from '../StatsDialog/StatsDialog';
import GensDialog from '../GensDialog/GensDialog';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	paper: {
		marginRight: theme.spacing(2)
	}
}));

export default function MenuListComposition({filteredPokemon}) {
	const classes = useStyles();
	const [ open, setOpen ] = React.useState(false);
	const anchorRef = React.useRef(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);
	React.useEffect(
		() => {
			if (prevOpen.current === true && open === false) {
				anchorRef.current.focus();
			}

			prevOpen.current = open;
		},
		[ open ]
	);

	// DIALOGS
	const [ aboutDialogOpen, setAboutDialogOpen ] = useState(false);
	const [ typesDialogOpen, setTypesDialogOpen ] = useState(false);
	const [ statsDialogOpen, setStatsDialogOpen ] = useState(false);
	const [ gensDialogOpen, setGensDialogOpen ] = useState(false);
	const [ selectedValue, setSelectedValue ] = useState('');

	const handleAboutDialogClickOpen = () => {
		setAboutDialogOpen(true);
	};
	const handleTypesDialogClickOpen = () => {
		setTypesDialogOpen(true);
	};
	const handleStatsDialogClickOpen = () => {
		setStatsDialogOpen(true);
	};
	const handleGensDialogClickOpen = () => {
		setGensDialogOpen(true);
	};

	const handleAboutDialogClose = (value) => {
		setAboutDialogOpen(false);
		setSelectedValue(value);
	};
	const handleTypesDialogClose = (value) => {
		setTypesDialogOpen(false);
		setSelectedValue(value);
	};
	const handleStatsDialogClose = (value) => {
		setStatsDialogOpen(false);
		setSelectedValue(value);
	};
	const handleGensDialogClose = (value) => {
		setGensDialogOpen(false);
		setSelectedValue(value);
	};

	return (
		<div>
			<IconButton
				edge="start"
				className={classes.menuButton}
				color="inherit"
				aria-label="open drawer"
				ref={anchorRef}
				aria-controls={open ? 'menu-list-grow' : undefined}
				aria-haspopup="true"
				onClick={handleToggle}
			>
				<img src={MenuIcon} alt="pokeball" className={classes.logo} />
			</IconButton>
			<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
					>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
									<MenuItem onClick={handleAboutDialogClickOpen}>About The App</MenuItem>
									<MenuItem onClick={handleTypesDialogClickOpen}>About Types</MenuItem>
									<MenuItem onClick={handleStatsDialogClickOpen}>About Stats</MenuItem>
									<MenuItem onClick={handleGensDialogClickOpen}>About Generations</MenuItem>
									<AboutDialog selecetedValue={selectedValue} dialogOpen={aboutDialogOpen} onDialogClose={handleAboutDialogClose} />
									<TypesDialog selecetedValue={selectedValue} dialogOpen={typesDialogOpen} onDialogClose={handleTypesDialogClose} filteredPokemon={filteredPokemon} />
									<StatsDialog selecetedValue={selectedValue} dialogOpen={statsDialogOpen} onDialogClose={handleStatsDialogClose} filteredPokemon={filteredPokemon} />
									<GensDialog selecetedValue={selectedValue} dialogOpen={gensDialogOpen} onDialogClose={handleGensDialogClose} filteredPokemon={filteredPokemon} />
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</div>
	);
}
