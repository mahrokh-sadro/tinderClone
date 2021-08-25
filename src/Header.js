import React from 'react'
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';



function Header() {
    return (
        <div className="header">

            <IconButton>
                <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>

            <img
                className="header_logo"
                src="http://america.aljazeera.com/content/ajam/blogs/scrutineer/2014/7/2/tinder-cofoundertakesswipeatdatingappssexistworkplace/jcr:content/blog/mainpar/textimage/image.adapt.990.high.Tinder_logo_070214.1404740996049.jpg"
            />
            <IconButton>
                <ForumIcon fontSize="large" className="header_icon" />
            </IconButton>
        </div>
    )
}

export default Header
