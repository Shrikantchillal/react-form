import React from 'react';
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <div className="App">
            <div>
                Landing
            </div>
            <Link to="/signup">Signup</Link>
        </div>
    )
}

export default Landing;