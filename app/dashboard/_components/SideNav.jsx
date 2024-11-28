'use client'
import { useUser } from '@clerk/clerk-react'
import { GraduationCap, Hand, LayoutDashboard, Settings } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function SideNav() {

    const { user } = useUser()
    const profileImageUrl = user?.imageUrl;
    const menuList = [
        {
            id: 1,
            name: 'Dashboard',
            icon: LayoutDashboard,
            path: '/dashboard',
        },
        {
            id: 2,
            name: 'Students',
            icon: GraduationCap,
            path: '/dashboard/students'
        },
        {
            id: 3,
            name: 'Attendance',
            icon: Hand,
            path: '/dashboard/attendance'
        },
        {
            id: 4,
            name: 'Settings',
            icon: Settings,
            path: '/dashboard/settings'
        },
    ]
  return (
    <div className='border shadow-md h-screen p-5'>
      <Link href={'/'} className='w-[180px] h-[50px] text-blue-600 font-extrabold  text-center text-xl'>
        Attendance System 
      </Link>

      <hr className='my-5'></hr>
      {/* Menu list loading */}
      {menuList.map((menu,index) => (
        <h2 className='flex items-center gap-3 text-md p-4 text-slate-500 hover:bg-blue-600 hover:text-white cursor-pointer rounded-lg my-2'>
            <menu.icon/>
            {menu.name}
        </h2>
      ))}

      <div className='flex gap-2 items-center bottom-5 fixed p-4'>
        <Image src={profileImageUrl} width={35} height={35} alt='user' className='rounded-full'/>
        <div>
            <h2 className='text-sm font-bold'>{user?.firstName} {user?.lastName}</h2>
            <h2 className='text-sm text-slate-400'>{user?.emailAddresses[0].emailAddress}</h2>
        </div>
      </div>
    </div>
  )
}

export default SideNav
