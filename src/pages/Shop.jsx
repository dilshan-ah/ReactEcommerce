import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { DataContext } from '../context/Context'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const Shop = () => {

  const { allProducts, loading } = useContext(DataContext)

  return (
    <>
      <Navbar />

      <div className='py-10 container mx-auto grid grid-cols-7 gap-10'>

        <div className='col-span-2'>
          <div className="card bg-base-100 shadow-xl p-10">
            <h2 className='text-xl font-bold'>
              Categories
            </h2>

            {allProducts?.products && (
              <ul>
                {[...new Set(allProducts.products.map(each => each.category))].map(category => (
                  <li key={category} className=' py-2'>
                    <a href="#" className='link link-primary font-semibold'>{category}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className='col-span-5 grid grid-cols-3 gap-5'>
          {loading ? (
            allProducts?.products?.map((each) => <div className="flex flex-col gap-4 w-52">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>)

          ) : (allProducts?.products?.map((each) =>
            <Link to={`${each?.id}`} key={each.id}>
              <ProductCard item={each} />
            </Link>
          ))
          }
        </div>

      </div>
    </>
  )
}

export default Shop