import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch} from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/slices/CartSlice";
const CartItem=({item})=>{
    const dispatch=useDispatch();
    const RemoveFromCart=()=>{
        dispatch(remove(item.id));
        toast.success("Item Removed");
    }
    return(
        <div>
        <div>
            <img src={item.image} alt=""/>
        </div>
        <div>
            <h1>{item.title}</h1>
            <h1>{item.description}</h1>
            <div>
                <p>{item.price}</p>
                <div onClick={RemoveFromCart}>
                <MdDelete />
                </div>
            </div>
        </div>
        </div>
    )
}

export default CartItem;