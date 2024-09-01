import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import water from "../assets/water.png";
const NavBar=()=>{
    const {cart}=useSelector((state)=>state);

    return(
        <div>
        <nav className="max-w-4xl h-20 mx-auto flex justify-between items-center">
            <div>
               <NavLink to="/">
               <img src={water} height={50} width={50} alt="" loading="lazy"/>
               </NavLink>
            </div>
            <div className="flex items-center font-medium text-slate-100 gap-3">
                <NavLink to='/' className="group">
                <p className="text-[0.8rem]  transition-all duration-200">Home</p>
                <div className="h-[4px] bg-slate-100 w-0 group-hover:w-full transition-all duration-200"></div>
                </NavLink>
                <NavLink to="/cart" className="relative group">
                
                <div className="rounded-full h-[40px] w-[40px] flex justify-center items-center pr-[1px] relative">
                <FaCartShopping className="text-[1.4rem]" />
                <div>{cart.length >0 ? (<div className="absolute bg-green-400 rounded-full h-4 w-4 text-[0.7rem] flex justify-center items-center font-semibold top-1 right-[0.3rem] float 
                ">{cart.length} </div>): (<div> </div>)}</div>
                </div>
                </NavLink>
            </div>
        </nav>
        </div>
    )
}

export default NavBar;