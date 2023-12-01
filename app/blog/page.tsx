import { BlogData } from "../blogData/data";
import Link from "next/link";
import Image from "next/image";

const Blog = ()=>{
    return(
        <div>
            {BlogData.map((item)=>(
                <div key={item.slug}>
                    <div>
                        <Image
                         src={item.img}
                         width={100}
                         height={100}
                         alt="logo"/>
                    </div>
                    <div>
                        <Link href={`/blog/${item.slug}`}>
                            <h1>{item.title}</h1>
                        </Link>
                        <p>{item.description.slice(0,80)}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Blog;