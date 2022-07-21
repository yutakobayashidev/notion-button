import './App.css';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <button onClick={this.handleClick} className="Button">
          + New Page
        </button>
      </header>
    </div>
    );
  }
  // ***** クリック時呼び出される関数を追加 *****
  handleClick() {
    
    const obj = {parent: {
      "type": "database_id",
      "database_id": process.env.REACT_APP_NOTION_DATABASE
    },
    "properties": {
      "Name": {
          "title": [
              {
                  "text": {
                      "content": "ウェブからのページ追加"
                  }
              }
          ]
      },
    }};


    const body = JSON.stringify(obj);
    
    const headers = {
      'Content-Type': 'application/json',
      'Notion-Version': '2021-05-13',
      'Authorization': "Bearer " + process.env.REACT_APP_NOTION_TOKEN
    };
    

    const method = "POST";

    fetch("https://notion.yutakobayashi.workers.dev/https://api.notion.com/v1/pages", {method, headers,body}).then((res)=> res.json()).then(console.log).catch(console.error);

  }
  // ***** ここまで追加 *****
}

export default App;
