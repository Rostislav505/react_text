import React from 'react';
import './nav.css';

const Navigation = () => {
    return(
        <div>
            <ul className="nav-elements">
                <li className="nav-element"><a className="nav-link" href="#">Main Page</a></li>
                <li className="nav-element"><a className="nav-link" href="#">Factorio</a></li>
                <li className="nav-element"><a className="nav-link" href="#">The Witcher 3: Wild Hunt</a></li>
                <li className="nav-element"><a className="nav-link" href="#">Frostpunk</a></li>
                <li className="nav-element"><a className="nav-link" href="#">Terraria</a></li>
                <li className="nav-element"><a className="nav-link" href="#">Starbound</a></li>
                <li className="nav-element"><a className="nav-link" href="#">The Witcher 2</a></li>
                <li className="nav-element"><a className="nav-link" href="#">Anno 1709</a></li>
                <li className="nav-element"><a className="nav-link" href="#">The Elder Scrolls: Skyrim</a></li>
                <li className="nav-element"><a className="nav-link" href="#">This War of Mine</a></li>
            </ul>
        </div>
    )
}

export default Navigation;