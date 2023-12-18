import { IoIosStar } from "react-icons/io";
import { BsCartPlus } from "react-icons/bs";


import { useContext } from "react";
import { DataContext } from "../context/Context";


const ProductCard = ({ item }) => {
    const {handleAddToCart} = useContext(DataContext)
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={item.thumbnail} alt="Image" className="h-60 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p className='truncate'>{item.description}</p>

                <div className="flex">
                    <div className="flex-1 flex items-center">
                        <IoIosStar />
                        {item.rating}
                    </div>
                    <div className="flex-none">
                        <p>${item.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard