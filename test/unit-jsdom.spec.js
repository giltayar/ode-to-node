describe('Counter (jsdom)', function() {
  let Counter


  beforeEach(function() {
    Counter = require('../src/Counter')
  })

  it('should include an <a> with a - sign', function() {
    reactDOM.render(<Counter/>, document.getElementById('root'))
    expect($('a')).to.have.length(2)
    expect($('a:eq(0)').text()).to.equal('-')

    //$('.inc').trigger('click')
    const evt = document.createEvent('Events')
    evt.initEvent('click', true, true)
    $('.inc')[0].dispatchEvent(evt)

    expect($('.counter-value').text()).to.equal('1')
  })
})