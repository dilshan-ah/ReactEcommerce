import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import BannerSlider from '../components/BannerSlider'
import ProductCard from '../components/ProductCard'
import { DataContext } from '../context/Context'
import { Link } from 'react-router-dom'

import Footer from '../components/Footer'


const Home = () => {
    const { allProducts, loading } = useContext(DataContext);


    return (
        <>
            <Navbar />

            <BannerSlider />

            <div className='container mx-auto py-10'>
                <h2 className='text-3xl font-semibold'>Top Products</h2>

                <div className='grid grid-cols-4 gap-5 py-10'>
                    {loading ? (
                        allProducts?.products?.map((each) => <div className="flex flex-col gap-4 w-52">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>)

                    ) : (allProducts?.products?.map((each) => each.rating >= 4.85 && 
                    <Link to={`shop/${each?.id}`} key={each.id}>
                    <   ProductCard item={each} />
                    </Link>
                    ))
                    }

                </div>
            </div>

            <Footer/>

        </>
    )
}

export default Home