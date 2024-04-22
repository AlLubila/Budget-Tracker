import React from 'react'

const Header = (props) => {
  const setBtnClicked = props.setBtnClicked
  const handleClick = ()=>{
    setBtnClicked(true)
  }
  return (
    
    <div className='header'>
      <div className='title'>
        <h1>Budget Tracker.</h1>
      </div>
      <div className='btn'>
        <button onClick={handleClick}>Add transaction</button>
      </div>
    </div>
  )
}

export default Header

