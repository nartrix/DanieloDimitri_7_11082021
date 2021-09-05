import React, { Component } from 'react';
import '../../../App.scss';
import './home.scss';
import Navbar from '../../navbar/navbar';
import Posts from '../../posts/posts';


class Home extends Component {
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