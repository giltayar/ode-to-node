const React = require('react')
const {createFactory} = require('react')

const A = createFactory('a')
const DIV = createFactory('div')

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {counter: 0}
  }

  render() {
    return (
      DIV({},
        A({className: 'dec', onClick: () => this.setState({counter: this.state.counter - 1})}, '-'),
        DIV({className: 'counter-value'}, this.state.counter.toString()),
        A({className: 'inc', onClick: () => this.setState({counter: this.state.counter + 1})}, '+')
      )
    )
  }
}

module.exports = Counter