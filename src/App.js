import React from 'react'
import './App.css'
import {Navbar} from './Components/Navbar/Navbar'
import {Intro} from './Components/intro/intro'
import { Portfolio } from './Components/Portfolio/Portfolio';
import { Footer } from './Components/Footer/Footer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { themeContext } from './Context';
import { useContext } from 'react';
import Contact from './Components/Contact/Contact';
function App() {
  const theme= useContext(themeContext)
  const darkMode=theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background:darkMode? 'black':'',
      color:darkMode? 'white':''
    }}
    >

      <Navbar/>
      <Intro/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
