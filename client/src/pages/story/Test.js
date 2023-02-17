import React from 'react'

function Test() {

  fetch(`${process.env.REACT_APP_API_KEY}/menu/data`)
  .then(r => r.json())
  .then(data => {
    console.log('data', data)
  })


  return (
    <div>Test</div>
  )
}

export default Test