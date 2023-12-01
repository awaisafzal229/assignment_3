import React from 'react'
import Link from 'next/link'
function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
            <Link href={"/studentList/1"}>Anas</Link>
        </li>
        <li>
        <Link href={"/studentList/2"}>Awais</Link>

        </li>
        <li>
        <Link href={"/studentList/3"}>Huzaifa</Link>

        </li>
        <li>
        <Link href={"/studentList/4"}>Ahmad</Link>

        </li>
      </ul>
    </div>
  )
}

export default StudentList
