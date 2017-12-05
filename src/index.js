import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

//create a component class//
class App extends React.Component {
  render() {
    return (
      <div>
        <p>
          Ma citation
          <span>-Auteur-</span>
        </p>
        <button>Une autre citation!</button>
      </div>
    )
  }
}

//rendu//
ReactDOM.render(
  <App/>, document.getElementById('root'));
