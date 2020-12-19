import React from 'react'
import ReactDOM from 'react-dom'

const element = React.createElement('div', { id: 'test' }, 'Mahdi Asemani')

ReactDOM.render(element, document.querySelector('#root'))