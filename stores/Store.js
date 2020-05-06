class Store {

	constructor (initialState) {
		this.state = initialState;
		this.listeners = [];
	}

	setState (state) {
		this.state = state;
		this.listeners.forEach(listener => listener(state));
	}

	getState () {
		return this.state
	}

	addListener (listener) {
		const removeListener = () => {
			this.listeners = this.listeners.filter(val => val !== listener)
		}
		
		this.listeners.push(listener);
		return removeListener;
	}

}

module.exports = Store
