import React from 'react'

function Footer() {
    
    const yearUpdate = new Date().getFullYear()
  return (
    <footer>
        <p>Copyright © {yearUpdate}</p>
        </footer>
  )
}

export default Footer