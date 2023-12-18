import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useState, useEffect, useContext } from 'react';

import { IoIosStar } from "react-icons/io";
import { BsCartPlus } from "react-icons/bs";
import { DataContext } from '../context/Context';

const SingleProduct = () => {

  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [singleData, setSingleProductData] = useState([]);

  const {handleAddToCart} = useContext(DataContext)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleProductData(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto grid grid-cols-2 w-100 h-screen gap-20 py-20">

        <div className="skeleton"></div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
            <div className="flex flex-col gap-4">
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-4 w-28"></div>
            </div>
          </div>
          <div className="skeleton h-32 w-full"></div>
        </div>

      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className='container mx-auto grid grid-cols-2 gap-20 py-20'>
        <div className='card'>
          <img src={singleData.thumbnail} alt="" className='w-full h-96 object-cover rounded-2xl' />
        </div>

        <div>
          <h2 className='text-3xl font-semibold mb-5'>{singleData.title}</h2>
          <h3 className='text-2xl mb-5 font-semibold'><del className='mr-5 font-light'>${singleData.price}</del>${(singleData.price - singleData.price * singleData.discountPercentage / 100).toFixed(2)}</h3>
          <p className='mb-5'>{singleData.description}</p>
          <p className='mb-5'><span className='font-bold'>Category:</span> {singleData.category}</p>
          <p className='mb-5'><span className='font-bold'>Brand:</span> {singleData.brand}</p>

          <p className='mb-5 flex items-center'>
            <IoIosStar className='mr-2' /> {singleData.rating}
          </p>

          <button className="btn btn-outline" onClick={() => handleAddToCart(singleData)}>
            <BsCartPlus className="text-xl" />
            Add to cart
          </button>
        </div>
      </div>
    </>
  )
}

export default SingleProduct