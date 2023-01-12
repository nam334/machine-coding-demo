import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const openMenu = useSelector((store) => store.app.openMenu)
  return (
    <div>
      {
        openMenu && (
          <ul>
            <li>Subscriptions</li>
            <li>Most played</li>
            <li>Trending</li>
        </ul>
        )
      }
        
    </div>
  )
}

export default Sidebar