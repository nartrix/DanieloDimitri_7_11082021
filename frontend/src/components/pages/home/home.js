import React from 'react';
import '../../../App.scss';
import './home.scss';
import Navbar from '../../navbar/navbar';
import FormPost from '../../form/formPost/formPost';
import Posts from '../../posts/posts';


function Home() {
    return (
      <>
        <Navbar />
        <FormPost />
        <Posts />
      </>
    );
  }
  
export default Home;