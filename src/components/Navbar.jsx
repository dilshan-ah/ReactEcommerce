import { Link } from "react-router-dom"

import { useContext, useState } from "react";
import { DataContext } from "../context/Context";
import SignupModal from "./SignupModal";

import { signOut } from "firebase/auth";
import { auth } from "../firebase";


import avatarImage from "../assets/avatar.png"

const Navbar = () => {

    const userDetails = auth.currentUser


    const { userState, cart, totalCost } = useContext(DataContext)



    const handleSignOut = async () => {
        try{
            await signOut(auth)
        }catch(err){
            console.log(err);
        }
      };


    return (
        <div className="w-full shadow">
            <div className="navbar bg-base-100 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/' className="font-bold">Home</Link></li>
                            <li><Link to='/shop' className="font-bold">Shop</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">Ecommerce</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/' className="font-bold">Home</Link></li>
                        <li><Link to='/shop' className="font-bold">Shop</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="form-control mr-5">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{cart.length}</span>
                            </div>
                        </div>
                        <div tabIndex={0} className="mt-3 z-[50] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">{cart.length} Items</span>
                                <span className="text-info">Subtotal: {totalCost}</span>
                                <div className="card-actions">
                                    <Link to='/cart' className="btn btn-primary btn-block">View cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={userDetails?.photoURL != null ? userDetails.photoURL:avatarImage} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                userState &&
                                <div>
                                    <li>
                                        <a>
                                            Profile
                                        </a>
                                    </li>
                                </div>
                            }
                            {
                                !userState &&
                                <li><a onClick={() => document.getElementById('signupModal').showModal()}>Sign in/up</a></li>
                            }

                            <SignupModal />

                            {
                                userState &&
                                <li>
                                    <a onClick={handleSignOut}>Sign out</a>
                                </li>
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar