import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { DataContext } from '../context/Context'
import { TiDeleteOutline } from "react-icons/ti";


const Cart = () => {
    const { cart, setCart, totalCost } = useContext(DataContext)

    const handleRemove = (id) => {
        const filteredCart = cart.filter((item) => item.id !== id);
        setCart(filteredCart);
      };

    return (
        <>
            <Navbar />
            <div className='container mx-auto py-20'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.length > 0 && (cart.map((item) => (
                                <tr className="hover" key={item.id}>
                                    <th>1</th>
                                    <td>{item.title}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <a className='cursor-pointer' onClick={() => handleRemove(item.id)}>
                                            <TiDeleteOutline className='text-3xl' />
                                        </a>
                                    </td>
                                </tr>
                            )))}


                        </tbody>

                        {cart.length > 0 &&

                            <tfoot>
                            <tr className="hover">
                                <th></th>
                                <td>Total price:</td>
                                <td>${totalCost}</td>
                                <td></td>
                            </tr>
                        </tfoot>}
                    </table>
                </div>
            </div>
        </>
    )
}

export default Cart