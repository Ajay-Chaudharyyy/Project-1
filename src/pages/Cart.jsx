import React, { useEffect, useState } from "react";
import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
const Cart=()=>{
    const {cart}=useSelector((state)=>state);
    const [totalAmount,setTotalAmount]=useState(0);
    useEffect(()=>{
        setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0))
    },[cart]);
    return(
        <div>
        {
            cart.length>0?
            (

                <div>
                <div>
                {
                    cart.map((item,index)=>(
                        <CartItem key={index} item={item} itemIndex={index}/>
                    ))
                }
                </div>
                <div>
                <div>
                <p>Your Cart</p>
                <p>Summary</p>
                <p><span>Total Items:{cart.length}</span></p>
                </div>

                <div>
                <p>Total Amount : {totalAmount}</p>
                <button>Check Out Now</button>
                </div>
                </div>
                </div>
            ):
            (<div>
            <h1>Cart is Empty</h1>
            <Link to='/'>
                <button>
                    Shop Now
                </button>
            </Link>
             </div>)
        }
        </div>
    )
}

export default Cart;