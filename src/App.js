import React from 'react';
import './Login_page.css';
import './index.css';
import diceImage from './dice.jpg';
import facebookLogo from './facebook_logo.png';
import googleLogo from './google_logo.png';
import instagramLogo from './instagram_logo.png';
import twitterLogo from './twitter_logo.png';
import zannana from './zannana_logo.png';


const App = () => {
  return (
    <div className="App">
      <img src={zannana} alt="Top Right Logo" className="top-right-logo" />
      <div className="login-container">
        <div className="login-left">
          <img src={diceImage} alt="Login" style={{ width: '100%' }} />
        </div>
        <div className="login-right">
          <div className="login-header">
            <h2>LOG IN</h2>
            <p className="login-text">Use an existing account</p>
            <div className="social-login">
              <a href="#" className="social-btn">
                <img src={facebookLogo} alt="Facebook" className="social-logo" />
              </a>
              <a href="#" className="social-btn">
                <img src={googleLogo} alt="Google" className="social-logo" />
              </a>
              <a href="#" className="social-btn">
                <img src={instagramLogo} alt="Instagram" className="social-logo" />
              </a>
              <a href="#" className="social-btn">
                <img src={twitterLogo} alt="Twitter" className="social-logo" />
              </a>
            </div>
            <div className="separator">
              <hr />
              <p>or, continue with your email</p>
              <hr />
            </div>
          </div>
          <form>
  <div className="form-group">
    <label htmlFor="username" className="login-text">Email/Username</label>
    <input
      type="text"
      id="username"
      name="username"
      placeholder="youremail@email.com"
      className="input-field"
    />
  </div>
  <div className="form-group">
    <a href="#" className="forgot-password">Forgot Password?</a>
    <label htmlFor="password" className="login-text">Password</label>
    <input
      type="password"
      id="password"
      name="password"
      placeholder="••••••••"
      className="input-field"
    />
  </div>
  <div className="form-group">
    <label htmlFor="rememberMe" className="rememberMe-label">
      Remember Me
      <input type="checkbox" id="rememberMe" className="rememberMe" />
    </label>
  </div>
  <button type="submit" className="login-btn">LOG IN</button>
</form>

          <p className="login-text-2">Need an account? <a href="#" className="login-text">Sign up here</a> &gt;</p>
        </div>
      </div>
    </div>
  );
};

export default App;
