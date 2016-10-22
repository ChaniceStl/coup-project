import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore'

import deck from './deck.js'
import cardBack from '../img/back.png'

//css
import './scss/app.scss';

//button
import Button from "./button/button.jsx"

//*** please change all your functions to es6
//*** our card object might get bigger. when you used underscores did you account for that?
//*** can you break your components into the component folder

var Table = React.createClass({
  getInitialState: function () {
    var shuffled = _.shuffle(this.props.deck);
    return {deck: shuffled}  
  },
  handleDealButton: function () {

    var deck = this.state.deck;
    var player1 = [];
    var player2 = [];
    var player3 = [];
    var player4 = [];
    var player5 = [];
    var player6 = [];

    //*** setup an array of player objects that you can map over since there will not always be six players. 
    //*** remove things from the front of the deck. I think it will better. so everyone can use push with there functions
    //*** side though: Maybe think of a way we can reuse the function when the player exchanges cards. we can check to see which cards are null?
    //player hand, deal 2 cards
      player1.push(deck.pop());
      player2.push(deck.pop());
      player3.push(deck.pop());
      player4.push(deck.pop());
      player5.push(deck.pop());
      player6.push(deck.pop());
      player1.push(deck.pop());
      player2.push(deck.pop());
      player3.push(deck.pop());
      player4.push(deck.pop());
      player5.push(deck.pop());
      player6.push(deck.pop());    
      
      this.setState({
          player1 :  player1,
          player2 :  player2,
          player3 :  player3,
          player4 :  player4,
          player5 :  player5,
          player6 :  player6,
          deck : deck
      });
  },
  render: function () {
    return (
      <div className='table-board'>
          <Interface
            deal={this.handleDealButton} />
          <Hand
            showDeck={true}
            hand={this.state.player1} />
      </div>
    )
  }
})

////////////////////

var Card = React.createClass({
  render(){
    let cardFace = require('../img/' + this.props.face + '.png')
    let cardImg = (this.props.hidden) ? cardBack : cardFace

    //*** define your css style in the css files
    let cardStyle = {
        padding: 0,
        WebkitFilter: "drop-shadow(0px 0px 5px #666)",
        filter: "drop-shadow(0px 0px 5px #666)"
      }
      
    return (
      <div className='card' style={cardStyle}>
        <img src={cardImg} />
      </div>
    )
  }
})

////////////////////////
var Hand = React.createClass({
  getDefaultProps: function () {
    return {
      hand: []
    }
  },
  render: function () {
    console.log("props hand",this.props.hand)
    let twoCards = this.props.hand.map((result, index) => {
      return <Card key={index} face={result.f} hidden={false}/>
    })
    return (
      <div className='hand'>
        {this.props.hand ? twoCards : null}
      </div>
    )
  }
})

//////////////////////

//*** is there a reason why you broke this component out. it is fine. I just curious to know
var Interface = React.createClass({
  render: function() {
    return (
      <div className='interface'>
          <br/>
        <button onClick={this.props.deal} type="button">Deal</button>
      </div>
    );
  }
});


////////////////////////
//*** there is an app and a main which is a little confusing
//*** is there a shuffle button
var App = React.createClass({

  getInitialState:function() {
    return {deck: deck};
  },
  shuffleDeck : function(deck){
    return _.shuffle(_.shuffle(_.shuffle(_.shuffle(deck))));
  },
  render: function () {
    return (
      <div>
        <h2>Tabloid</h2>
        <Table deck={this.shuffleDeck(this.state.deck)}/>
        {this.props.children}
        <Button />
      </div>
    )
  }
})

////////////////////////

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <App />
      </div>
    )
  }
})

ReactDOM.render(
<Main />, document.getElementById('root'));