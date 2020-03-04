import React, { Component } from 'react';
import '../assets/scss/sidebar.scss'
import SideAvatar from './avatar';
import Profile from '../assets/images/blackProfileLogo.png';

class Sidebar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
          <div className="sidebar">
              <div className="online__users">
               <p><strong> PLAYERS</strong> (online)</p>
              </div>
              <ul>
                  <li><span className="Profile"><img alt="profile" src={Profile} /></span> Emmy K</li>
                  <li><span className="Profile"><img alt="profile" src={Profile} /></span> Sharon M</li>
                  <li><span className="Profile"><img alt="profile" src={Profile} /></span> Elvis R</li>
                  <li><span className="Profile"><img alt="profile" src={Profile} /></span> Bihire B</li>
                  <li><span className="Profile"><img alt="profile" src={Profile} /></span> Clement M</li>
              </ul>
          </div>  
        )
    }
}

export default Sidebar