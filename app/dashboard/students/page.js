import React from 'react'
import AddNewStudent from "./_components/AddNewStudent"

function StudentPage() {
  return (
    <div className='p-7'>
      <h2 className='font-bold text-2xl flex justify-between items-center'>
        Student
        <AddNewStudent />
      </h2>
    </div>
  )
}

export default StudentPage
