import React from 'react';
import './AvatarSelection.css';
import imagee from "./Screenshot 2024-09-08 at 10.17.32 AM.png";
import imageee from "./Screenshot 2024-09-08 at 10.19.34 AM.png";


const AvatarSelection = () => {
    // Simulating Aptos Payment function
    const handleCartoonModePayment = async () => {
        try {
            // Simulated Aptos payment process
            const paymentResult = await window.aptos.signAndSubmitTransaction({
                arguments: ["amount", "cartoon_mode"],
                function: "0x1::cartoon::pay_for_cartoon_mode",
                type: "entry_function_payload",
                type_arguments: [],
            });

            // If payment successful, redirect to localhost:5172
            if (paymentResult) {
                window.location.href = 'http://localhost:5172';
            } else {
                console.log("Payment failed!");
            }
        } catch (error) {
            console.error("Error during payment:", error);
        }
    };

    const handleAvatarClick = () => {
        window.location.href = 'http://localhost:5173/mastiii';
    };

    return (
        <div>
            <header className="navbar">
                <nav className="navbar">
                    <div className="navbar-left">
                    <a href="/">Home</a>
          <a href="haha">Choose Avatar</a>
          <a href="/hehe">News</a>
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
                        <div className="avatar" onClick={handleAvatarClick}>
                            <img src={imageee} alt="Avatar 1" />
                        </div>
                        <div className="avatar" onClick={handleAvatarClick}>
                            <img src={imagee} alt="Avatar 2" />
                        </div>
                    </div>
                    <div className="actions">
                        {/* Cartoon Mode Button */}
                        <button className="fuzzy-btn" onClick={handleCartoonModePayment}>
                            Cartoon Mode (Pay)
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvatarSelection;
