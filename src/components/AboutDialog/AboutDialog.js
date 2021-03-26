import React from 'react';
import { Dialog } from '@material-ui/core';
import './style.css';

function AboutDialog(props) {
	const { onDialogClose, selectedValue, dialogOpen } = props;

	const handleDialogClose = () => {
		onDialogClose(selectedValue);
	};

	return (
		<Dialog
			fullWidth
			maxWidth="sm"
			onClose={handleDialogClose}
			open={dialogOpen}
		>
            <div className="dialog">
                <h2>This Pokedex app was built by Rachel Kelly using JS React and Material UI</h2>
                <h3>Features</h3>
                <p>Paginated list of all current (2021) Pokemon</p>
                <p>Pokemon Card style dialog with stats for each Pokemon</p>
                <p>Filter Pokemon by name, type or both</p>
                <h3>Resources</h3>
                <p><a href="https://www.youtube.com/watch?v=HaEB0vdxpdg">This Youtube Video</a> was used as a starting point</p>
                <p>Pokemon data was accessed via <a href="https://pokeapi.co/">Poke API</a></p>
                <p><a href="https://material-ui.com/">Material UI</a> used for styling</p>
            </div>	
        </Dialog>
	);
}

export default AboutDialog;
