import React from 'react';
import './AvatarSelection.css';

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
                        <img src="https://your-image-source.com/avatar1.png" alt="Avatar 1" />
                    </div>
                    <div className="avatar">
                        <img src="https://your-image-source.com/avatar2.png" alt="Avatar 2" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AvatarSelection;
