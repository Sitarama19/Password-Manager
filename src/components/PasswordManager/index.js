import {Component} from 'react'
import './index.css'

class PasswordManager extends Component {
  state = {
    webSiteInput: '',
    userInput: '',
    passwordInput: '',
  }

  render() {
    return (
      <div className="app-container">
        <div className="password-manager-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="password-input-container">
            <div className="general-input-container">
              <p className="add-password-text">Add New Password</p>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
