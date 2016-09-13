const React = require('react')
const ReactDOM = require('react-dom')
const Counter = require('./Counter.js')

class ReactApp extends React.Component {
  render() {
    return (
      <Counter/>
    )
  }
} 

module.exports = (domElement) => 
  ReactDOM.render(<ReactApp />, domElement)

