const React = require('react')
const {createFactory} = require('react')
const ReactDOM = require('react-dom')
const Counter = createFactory(require('./Counter.js'))

class ReactApp extends React.Component {
  render() {
    return (
      Counter()
    )
  }
} 

module.exports = (domElement) => 
  ReactDOM.render(createFactory(ReactApp)(), domElement)

