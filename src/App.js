import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './components/Title';

class App extends Component {

  onClickHandler = () => {
    // HelloWorld のh2タグを取得
    let title = document.getElementById('versionStatement');
    // upgrade のタグを取得
    let upgradeButton = document.getElementById('upgradeButton');
    // 取得したh2タグのテキストを変更する
    title.textContent = "Hello World 4.0";
    // 取得したpタグを非表示にする
    upgradeButton.style.display = "none";

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title
            title="Hello World 3.0"
            titleStyle={{ color: 'orange' }}
            onClick={this.onClickHandler}
          />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
