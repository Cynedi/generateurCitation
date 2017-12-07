import React from 'react';

//creation d'un componenent pour afficher uniquement la citation oû on veut//
class Citation extends React.Component {
  render(){
    return (
      //props=passe donnée d'un component à un autre
      <p>
        {this.props.details.citation}
        <span> -{this.props.details.auteur}-</span>
      </p>
    )
  }
}

export default Citation;
