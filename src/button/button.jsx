import React from "react"; 

var Button = React.createClass({
	getInitialState(){
		return({income: 0, aid: 0})
	},
	addIncome(){
		this.setState({income: this.state.income + 1})
	},
	addAid(){
		this.setState({aid: this.state.aid + 2})
		
		//so if the bluff button was fired it will remove 2 from aid
		// if(document.getElementById('bluff').on('click')){
		// 	this.setState({aid: this.state.aid - 2})
		// }else{
		// 	this.setState({aid: this.state.aid +2})
		// }
	},
	render(){
	return(
	<div>
		<button id="incomeButton" onClick={this.addIncome} type="button">Income</button>
		{this.state.income}

		<button id="aidButton" onClick={this.addAid}
		type="button">Aid</button>
		{this.state.aid}

		<button id="bluff" 
		type="button">Bluff</button>

	</div>
	)
  }
})

export default Button;