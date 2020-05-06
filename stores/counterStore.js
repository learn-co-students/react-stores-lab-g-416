const Store = require("./Store")

class CounterStore extends Store {

	constructor () {
		super (0)
	}

	increment () {
		const prevState = this.getState()

		this.setState(prevState + 1)
	}

	decrement () {
		const prevState = this.getState()

		this.setState(prevState - 1)
	}

}

module.exports = new CounterStore()
