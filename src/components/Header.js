import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';

const Header = () => {
    const [loginBtn, setloginBtn] = useState("Login");


    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={LOGO_URL}
                    alt="Logo image"
                ></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        loginBtn == "Login" ? setloginBtn(() => "Logout") : setloginBtn(() => "Login")
                    }}>
                        {loginBtn}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;