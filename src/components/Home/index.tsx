import React from 'react'
import CartComponent from '../CartComponent'
import AddToCart from '../AddToCart'
import Profile from '../Profile'

const HomePage = () => {
  return (
    <div className='flex flex-row justify-center items-center bg-gray-200'>
        <CartComponent/>
        <AddToCart/>
        <Profile/>
    </div>
  )
}

export default HomePage