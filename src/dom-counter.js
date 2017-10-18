const root = document.getElementById('root')

root.innerHTML = `
  <a id="dec">-</a>
  <div id='counter-value'>0</div>
  <a id='inc'>+</a>
`
const valueElement = document.getElementById('counter-value')

document.getElementById('dec').addEventListener('click', () => {
  valueElement.textContent = parseInt(valueElement.textContent) - 1
})

document.getElementById('inc').addEventListener('click', () => {
  valueElement.textContent = parseInt(valueElement.textContent) + 1
})
