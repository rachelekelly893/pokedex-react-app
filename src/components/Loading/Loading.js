import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import MenuIcon from '../../images/580b57fcd9996e24bc43c31f.png';


const BorderLinearProgress = withStyles((theme) => ({
	root: {
		height: 20,
		borderRadius: 5
	},
	colorPrimary: {
		backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
	},
	bar: {
		borderRadius: 5,
		backgroundColor: '#1a90ff'
	}
}))(LinearProgress);

const Loading = () => {
    return (
        <div>
            <BorderLinearProgress color="secondary" />
            <h2>CATCHING POKEMON...</h2>
            <img src={MenuIcon} height="200em" alt="pokeball" id="pokelogo" />
        </div>
    )
}

export default Loading 

