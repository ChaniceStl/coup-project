import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore'
import './App.css';
import cardBack from './img/back.png'

// <img src={require('./logo-final-120.png')} height="150" width="auto" alt="Commodifi Logo Small"/>

var App = React.createClass({

  getInitialState:function() {

    return {deck: [
          {f:"act_1"},{f:"act_2"},{f:"act_3"},{f:"agn_1"},{f:"agn_2"},{f:"agn_3"},
          {f:"att_1"},{f:"att_2"},{f:"att_3"},{f:"dir_1"},{f:"dir_2"},{f:"dir_3"},
          {f:"ing_1"},{f:"ing_2"},{f:"ing_3"},{f:"per_1"},{f:"per_2"},{f:"per_3"}
        ]
      };
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

/////////////////////

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

var Hand = React.createClass({
  getDefaultProps: function () {
    return {
      hand: []
    }
  },
  render: function () {
    return (
      <div className='hand'>
        {this.props.showDeck ? <Card hidden={false} /> : ''}
        {this.props.hand ? this.props.hand.map((result, index) => (
          <Card key={index} face={result.f} />
        )) : null}
      </div>

    )
  }
})

//////////////////////

var Card = React.createClass({
  render: function () {
    var url = 'url(./img/'
    var cardImg = (this.props.hidden)
      ? 'url(' + cardBack + ')'
      :  url + this.props.face + '.png)';

    var cardStyle = {
        padding: 0,
        backgroundImage: cardImg,
        WebkitFilter: "drop-shadow(0px 0px 5px #666)",
        filter: "drop-shadow(0px 0px 5px #666)"
      }
      
    return (
      <div className='card' style={cardStyle}></div>
    )
  }
})

////////////////////////

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

var Main = React.createClass({
  render: function () {
    return (
      <div>
      <Table />
      <Hand />
      </div>
    )
  }
})

ReactDOM.render(
<Main />, document.getElementById('root'));
