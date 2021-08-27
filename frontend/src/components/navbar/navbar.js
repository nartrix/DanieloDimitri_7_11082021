import React, { Component } from 'react';
import '../../App.scss';
import './navbar.scss';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png';


class Navbar extends Component {
    render () {
        return (
            <>
              <nav className="navbar" role="navigation" aria-label="main navigation">
                  <div className="navbar-brand">
                      <Link className="navbar-item" to='/home'>
                          <img src={logo} className='img-logo' alt='logo'/>
                      </Link>
                  </div>

                  <div className='navbar-end'>
                    <div className='navbar-brand'>
                        <Link className='navbar-item' to='/logout'>
                            Déconnexion
                        </Link>

                        <Link className='navbar-item' to='/account'>
                            <div className='img-account'>

                            </div>
                        </Link>
                    </div>
                  </div>
              </nav> 
            </>
        );
    } 
}
  
export default Navbar;