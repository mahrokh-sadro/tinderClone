

import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';
import "./ButtomButtons.css"


function ButtomButtons() {
    return (
        <div className="bottomButton">
            <IconButton>
                <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton>
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton>
                <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton>
                <StarIcon fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default ButtomButtons
