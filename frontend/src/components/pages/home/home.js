import React, { Component } from 'react';
import '../../../App.scss';
import './home.scss';
import Navbar from '../../navbar/navbar';
import Posts from '../../posts/posts';


class Home extends Component {

  componentDidMount() {
    this.authenticate();
  }

  authenticate() {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user.token;

    if (!token) {
      window.location.href = "/";
    }
  }

  render() {
    return (
      <>
        <Navbar />
        <Posts />
      </>
    );
  } 
}
  
export default Home;