import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore'

import deck from './deck.js'
import cardBack from '../img/back.png'

//css
import './scss/app.scss';


var Table = React.createClass({
  getInitialState: function () {
    var shuffled = _.shuffle(this.props.deck);
    console.log("shuffled",shuffled)
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
    console.log(player1)
        
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

var Cards = React.createClass({
  render(){
    console.log("props",this.props)
    // var url = '../../img/'
    console.log('../../img/' + this.props.face + '.png')
    let cardFace = require('../img/' + this.props.face + '.png')
    let cardImg = (this.props.hidden) ? cardBack : cardFace

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

var Card = React.createClass({
  render() {
    return (
      <h1 className="card">This is a card</h1>
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
      return <Cards key={index} face={result.f} hidden={false}/>
    })
    let oneCard = <Card/>
    console.log(twoCards)
    return (
      <div className='hand'>
        {this.props.hand ? twoCards : null}
      </div>
    )
  }
})

//////////////////////
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