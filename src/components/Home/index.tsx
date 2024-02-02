import React from 'react'
import CartComponent from '../CartComponent'
import AddToCart from '../AddToCart'
import Profile from '../Profile'

const HomePage = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 2xl:grid-cols-6 p-4 gap-4 bg-gray-200 md:-mt-24 lg:-mt-48 md:-ml-4 lg:-ml-12 xl:-ml-[110px] h-[150vh]'>
        <AddToCart/>
        <CartComponent/>
        <Profile/>
        <div className=" hover:opacity-70 border-x-2 border-y-4 border-transparent hover:cursor-pointer hover:border-red-500 transition-all duration-300  md:scale-75 lg:scale-50 bg-white h-[800px] w-96 rounded-[40px] overflow-hidden"/>
        <div className=" hover:opacity-70 border-x-2 border-y-4 border-transparent hover:cursor-pointer hover:border-red-500 transition-all duration-300 md:scale-75 lg:scale-50 bg-white h-[800px] w-96 rounded-[40px] overflow-hidden"/>
        <div className=" hover:opacity-70 border-x-2 border-y-4 border-transparent hover:cursor-pointer hover:border-red-500 transition-all duration-300 md:scale-75 lg:scale-50 bg-white h-[800px] w-96 rounded-[40px] overflow-hidden"/>
    </div>
  )
}

export default HomePage
