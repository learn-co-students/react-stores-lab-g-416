const React = require('react');
const counterStore = require('../stores/counterStore');
const actions = require('../actions');

class App extends React.Component {
  constructor (props) {
    super(props);

    let count = counterStore.getState();

    this.state = {
      // Your implementation here.
      counter: count
    };

    this.handleIncrement = actions.increment.bind(this);
    this.handleDecrement = actions.decrement.bind(this);
  }
  componentDidMount () {

    this.removeListener = counterStore.addListener((state) => {
      this.setState({ counter: state });
    });

    const counter = counterStore.getState();
  }
  componentWillUnmount () {
    // Your implementation here.
    this.removeListener();
  }

  render () {
    const {counter} = this.state;
    return (
      <div className='app'>
        <h1 className='counter'>{counter}</h1>
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
