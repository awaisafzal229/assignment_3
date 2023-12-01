"use client";
import React,{FC} from "react"
interface StudentProps {
    params: any;
}
const Student: FC<StudentProps> = function({params}) {
    console.log(params);
    
  return (
    <div>
      <h1>Student Details</h1>
      <h3>Name: {params.student}</h3>
     
    </div>
  )
}

export default Student
