"use client";

import Link from "next/link";
import { FaRegUserCircle } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi'
import SearchBar from "./UI/SearchBar";
import ResponsiveNavBar from "./UI/ResponsiveNavBar";
import Menu from "./UI/NavBar";
import MenuButton from "./UI/MenuButton";

export default function Header () {

    return (
        <>
        <div className="bg-easy flex flex-col  w-full py-4 px-4 sm:px-8 text-center items-center">
            <div className="w-80 flex justify-center">
                <img src="tasty-logo.png" className=""/>
            </div>
            <div className="flex flex-wrap justify-between w-full items-center">
                <MenuButton />
                <ResponsiveNavBar/>
                <div>
                    <ul className="flex gap-3 mt-8 md:w-[22rem] justify-end">
                        <SearchBar />
                        <li>
                            <Link href="/Login" >
                                <span className="text-brown p-2 bg-white w-8 h-8 mob:h-10 mob:w-10 rounded-full flex justify-center items-center transition-transform hover:scale-90">
                                    <FaRegUserCircle className="w-4 h-4" />
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/checkout" >
                                <span className="text-brown p-2 bg-white w-8 h-8 mob:h-10 mob:w-10 rounded-full flex justify-center items-center transition-transform hover:scale-90">
                                    <HiOutlineShoppingBag className="w-4 h-4" />
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="menu" className="hidden">
            <Menu />
        </div>
        </>
    )
}