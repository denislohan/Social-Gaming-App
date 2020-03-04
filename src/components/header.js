import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Avatar from './avatar';
import navProfile from '../assets/images/whiteProfileLogo.png';
import { connect } from 'react-redux'
import { signout } from '../redux/actions/authActions';

class Header extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         isLoggedOut: false
    //     }
    //     this.signout = this.signout.bind(this);
    // }

    signout(e) {
        // localStorage.clear('token');
        // this.setState({isLoggedOut :true})
        e.preventDefault();
        this.props.signout();
    }
    render() {
        const { isLoggedOut } = this.state;

        return isLoggedOut ? <Redirect to="/" /> : (
            <div className="navBar">
              <h1 className="logo">A BRAINY APP</h1>  
              <Avatar src={navProfile} />
              <button className="signout" id="signout" onClick={this.signout.bind(this)} >SIGN OUT</button>
            </div>
        )
    }
}
Header.propTypes = {
signout: React.PropTypes.func.isRequired
}
function mapStateToProps(state){
return {
auth: state.auth
};
}

export default connect(mapStateToProps, { signout }) (Header);
// export default Header;
