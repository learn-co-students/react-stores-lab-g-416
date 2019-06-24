const React = require('react');
import counterStore from '../stores/counterStore'
import actions from '../actions'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: counterStore.getState()
    };
  }
  componentDidMount () {
     this.removeListener = counterStore.addListener(
      counter => this.setState({counter: counter})
    );
  }
  componentWillUnmount () {
     this.removeListener();
  }

  handleIncrement(e) {
    e.preventDefault();
    actions.increment();
  }

  handleDecrement(e) {
    e.preventDefault();
    actions.decrement();
  }
  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.handleDecrement}>
            -
          </button>
          <button className='increment' onClick={this.handleIncrement}>
            +
          </button>
        </div>
      </div>
    );
  }
}

module.exports = App;
