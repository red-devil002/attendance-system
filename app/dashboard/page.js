"use client"
import { useTheme } from 'next-themes'
import React, { useEffect } from 'react'

function DashboardPage() {
  const { setTheme } = useTheme()

  return (
    <div>
      DashboardPage
    </div>
  )
}

export default DashboardPage
