const React = require('react');
import counterStore from '../stores/counterStore'
import actions from '../actions'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // Your implementation here.
      counter: counterStore.getState()
    };
  }
  componentDidMount () {
    // Your implementation here.
    this.removeListener = counterStore.addListener(
      counter => this.setState({counter: counter}));
  }
  componentWillUnmount () {
    // Your implementation here.
    this.removeListener();
  }

  handleIncrement(ev) {
    ev.preventDefault();
    actions.increment();
  }

  handleDecrement(ev) {
    ev.preventDefault();
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
