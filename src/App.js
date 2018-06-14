import React, { Component } from 'react';
import logo from './logo.svg';
import {Button, ButtonNavigation, ButtonNavigationItem, Icon} from 'bee-mobile';
import 'bee-mobile/dist/bee-mobile.min.css'
import music from '../src/audio/Payphone.mp3'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet"/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button>Primary</Button>
        <audio autoPlay="autoplay" src={music} loop="loop">
        </audio>
        <ButtonNavigation>
          <ButtonNavigationItem label="home" icon={<Icon icon="home"/>}/>
          <ButtonNavigationItem label="s" icon={<Icon icon="tag_faces"/>}/>
          <ButtonNavigationItem label="c"/>
        </ButtonNavigation>
      </div>
    );
  }
}

export default App;
