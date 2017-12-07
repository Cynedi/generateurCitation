import React from 'react';
import Citation from './Citation';
import citations from '../citations';

// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

//create a component class//
class App extends React.Component {
  //donnéees relative au component//
  state = {

  };
//Juste avant que le component soit monté(cycle de vie)//
componentWillMount(){
  this.genererCitation();
}

  genererCitation = event => {
    //On transforme les citations en array//
    const keyArray = Object.keys(citations);
    //une citation au hasard
    const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
//Si la même que dans le state//
    if (this.state.citation === citations[randomKey].citation ){
//rapelle la fonction//
      this.genererCitation();
      //sortir//
      return;
    }
    this.setState(citations[randomKey]);

  };
  render() {
    return (
    //JSX//
<div>
  <Citation details={this.state}/>
  <button onClick={e=> this.genererCitation(e)}> Une autre citation ! </button>

</div>
)
  }
}

//exporter le component//
export default App;
