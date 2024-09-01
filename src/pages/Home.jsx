import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
const API_URL='https://fakestoreapi.com/products';



const Home=()=>{

    const [loading,setLoading]=useState(true);
const [posts,setPosts]=useState([]);
const fetchProductData=async()=>{
    setLoading(true);
    try{
        const res=await fetch(API_URL);
        const data=await res.json();
        setPosts(data);
    }
    catch(error)
    {
        alert("error aagya bhaiya");
        setPosts([]);
    }
    setLoading(false);
}
useEffect(()=>{
    fetchProductData();
},[])

    return(
        <div>
         {
            loading? (<Spinner/>):
            posts.length>0?
            (
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl p-2 mx-auto space-x-5 space-y-10 min-h-[80vh]">
                {
                    posts.map((post)=>{

                    return(
                        <Product key={posts.id} post={post}/>
                    )
                })
                }
                </div>
            ):
            <div className="flex justify-center items-center"> <p>No Data Found </p></div>
         }
        </div>
    )
}

export default Home;