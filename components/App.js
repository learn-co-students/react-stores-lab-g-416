const React = require("react");
const counterStore = require("../stores/counterStore");
const actions = require("../actions");

class App extends React.Component {

	constructor (props) {
		super(props);
		this.state = {counter: counterStore.getState()};
		this.handleDecClick = this.handleDecClick.bind(this);
		this.handleIncClick = this.handleIncClick.bind(this);
	}

	handleDecClick (ev) {
		ev.preventDefault();
		actions.decrement();
	}

	handleIncClick (ev) {
		ev.preventDefault();
		actions.increment();
	}

	componentDidMount () {
		this.removeListener = counterStore.addListener(counter => {this.setState({counter})})
	}

	componentWillUnmount () {
		this.removeListener()
	}

	render () {
		return (
			<div className="app">
				<h1 className="counter">{this.state.counter}</h1>
				<div className="actions">
					<button className="decrement" onClick={this.handleDecClick}>-</button>
					<button className="increment" onClick={this.handleIncClick}>+</button>
				</div>
			</div>
		)
	}

}

module.exports = App
