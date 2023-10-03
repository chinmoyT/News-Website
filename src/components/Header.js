import React from 'react'

const Header = () => {
  return (
    <div>
      <select>
        <option onClick={e.target.value}>entertainment</option>
        <option onClick={e.target.value}>business</option>
        <option onClick={e.target.value}>top</option>
      </select>
    </div>
  )
}

export default Header
