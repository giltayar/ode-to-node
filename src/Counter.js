const React = require('react')

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {counter: 0}
  }

  render() {
    return (
      <div>
        <a className='dec' onClick={() => this.setState({counter: this.state.counter - 1})}>-</a>
        <div className='counter-value'>{this.state.counter.toString()}</div>
        <a className='inc' onClick={() => this.setState({counter: this.state.counter + 1})}>+</a>
      </div>
    )
  }
}

module.exports = Counter