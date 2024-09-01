import React from 'react';
import './AvatarSelection.css';
import imageee from "./assets/Screenshot_2024-09-01_at_1.57.47_PM-removebg-preview (1).png"
import imagee from "./assets/Screenshot_2024-09-01_at_1.32.02_PM-removebg-preview.png"
const AvatarSelection = () => {
    return (
        <div className="avatar-selection">
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
            <div className="avatar-container">
                <h2>Choose your avatar!</h2>
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
    );
}

export default AvatarSelection;
