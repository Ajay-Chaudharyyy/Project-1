import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { add,remove } from "../redux/slices/CartSlice";
const Product=({post})=>{
    const dispatch=useDispatch();
    const AddToCart=()=>{
        dispatch(add(post));
        toast.success("Item Added to Cart");
    };
    const RemoveFromCart=()=>{
        dispatch(remove(post.id));
        toast.error("Item Removed from Cart");
    }
    const {cart}=useSelector((state)=>state);
    return(
        <div className="flex flex-col items-center justify-between hover:scale-110 transition-all duration-300 hover:shadow-[0_20px_50px_gray] ease-in gap-3 p-4 mt-10 ml-5 rounded-xl border group">
        <div>
            <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
                {post.title}
            </p>
        </div>
        <div>
            <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ")+ "..."}</p>
        </div>
        <div className="h-[180px]">
            <img src={post.image} alt="" className="h-full w-full"/>
        </div>
        <div className="flex justify-between items-center gap-12">
            <div>
            <p className="text-green-600 font-semibold items-center w-full mt-5">${post.price}</p>
            </div>
            <div className="mt-5">
            {
                cart.some((p)=>p.id===post.id)?
                (<button onClick={RemoveFromCart} className="text-[0.7rem] text-slate-700 border-2 border-slate-700 font-bold w-[5rem] h-[2rem]
                rounded-xl group-hover:bg-red-500 group-hover:text-white group-hover:border-white transition-all duration-300">Remove Item</button>)
                :
                (<button onClick={AddToCart} className="text-[0.7rem] text-slate-700 border-2 border-slate-700 font-bold w-[5rem] h-[2rem]
                rounded-xl group-hover:bg-green-500 group-hover:text-white group-hover:border-white transition-all duration-300">Add to Cart</button>)
            }
            </div>
        </div>
        
        </div>
    )
}

export default Product;