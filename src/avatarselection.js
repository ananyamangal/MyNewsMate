import React from 'react';
import './AvatarSelection.css';
import imagee from "./assets/Screenshot 2024-09-01 at 5.18.25 PM.png"
import imageee from "./assets/Screenshot_2024-09-01_at_1.57.47_PM-removebg-preview (1).png"
const AvatarSelection = () => {
    return (

        <div>
              <header className="navbar">
            <nav className="navbar">
        <div className="navbar-left">
            <a href="#">Home</a>
            <a href="#">Choose Avatar</a>
            <a href="#">News</a>
        </div>
        <div className="navbar-right">
            <a href="#">Login/Signup</a>
        </div>
    </nav>
    </header>
        <div className="avatar-selection">
            
            <div className="avatar-container">
                <h2>Choose your Avatar!</h2>
                <div className="avatars">
                    <div className="avatar">
                        <img src={imageee} alt="Avatar 1" />
                    </div>
                    <div className="avatar">
                        <img src={imagee} alt="Avatar 2" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default AvatarSelection;
