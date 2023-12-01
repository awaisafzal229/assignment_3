"use client";
import { BlogData } from "../../blogData/data";
function Page({params}:{ params: {slug:string}}) {
    const findData = BlogData.find((Blog)=> Blog.slug === params.slug)
  return (
    <div>
        <h1>Title: {findData?.slug}</h1>
        <p>{findData?.description}</p>
        <img src={"/camera.png"} alt="" />
      
    </div>
  )
}

export default Page
