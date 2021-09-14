import React, { Component } from 'react';
import '../../App.scss';
import './navbar.scss';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png';


class Navbar extends Component {
    render () {
        return (
            <>
              <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
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
                                {/* <img className="rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="phot utilisateur"/> */}
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