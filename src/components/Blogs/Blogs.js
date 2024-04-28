import { useEffect, useState } from "react"

const Blogs= () =>{

    // eslint-disable-next-line no-unused-vars
    const[blogs,setBlogs] =useState([]);
    
    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data=>setBlogs(data))

    }
,[])

    return(
        <div>
            
        </div>
    )
}

export default Blogs;