import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <img src="https://i.ytimg.com/vi/-EzURpTF5c8/maxresdefault.jpg" alt="PinkFloyd" width="300px"></img>

                <ul>
                    <li><Link to="/barrett">Syd Barrett</Link></li>
                    <li><Link to="/waters">Roger Waters</Link></li>
                    <li><Link to="/gilmour">David Gilmour</Link></li>
                    <li><Link to="/wright">Rick Wright</Link></li>
                    <li><Link to="/mason">Nick Mason</Link></li>
                </ul>

        </div>
    )
}

export default Nav;