import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Header() {
  return (
    <div className='p-4 shadow-sm border flex justify-between'>
        {/* Left side */}
      <div>

      </div>

      {/* User button for logout and other info - Right side */}
      <div>
        <UserButton />
      </div>
    </div>
  )
}

export default Header
