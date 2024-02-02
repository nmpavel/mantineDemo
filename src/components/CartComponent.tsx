import { Button } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiMenuKebab } from "react-icons/ci";
import { FaRegCompass } from "react-icons/fa";
import { IoIosStar, IoMdMenu } from "react-icons/io";
import { IoCartOutline, IoHomeOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";

const CartComponent = () => {
  return (
    <div className=" md:scale-75 lg:scale-50 relative bg-white h-[800px] w-96 rounded-[40px] overflow-hidden pt-16  hover:opacity-70 border-x-2 border-y-4 border-transparent hover:cursor-pointer hover:border-red-500 transition-all duration-300">
      <div className=" relative flex flex-col  items-center w-full h-[680px] shadow-lg">
        <div className="flex flex-row  justify-between items-center px-8  font-bold text-lg w-full">
          <IoMdMenu />
          <p className=" ">Cart</p>
          <CiMenuKebab />
        </div>
        <div className=" flex flex-col mt-10">
        {
          [1,2].map((i:number)=>(
            <div key={i} className=" flex flex-col gap-6 px-8 pt-6 pb-4 border-b border-gray-400">
          <div className="flex flex-row gap-4">
            <div className=" bg-gray-50 rounded-lg">
              <Image
                src={"/images/headphone.png"}
                height={100}
                width={120}
                alt="headphone"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-semibold">Sony WH 1000XM4</p>
              <p className=" text-sm text-gray-500">Head Phone</p>
              <p className="text-lg font-semibold text-blue-600">$ 4.999</p>
            </div>
          </div>
          <div className=" flex flex-row justify-between">
             <div className="flex flex-row items-center gap-4">
                <p className=" text-gray-500">Size</p>
                <p className=" font-bold">XL</p>
             </div>
             <div className="flex flex-row items-center gap-4">
                <p className=" text-gray-500">Color</p>
                <div className=" bg-black w-6 h-6 rounded-md  flex justify-center items-center" />
             </div>
             <div className="flex flex-row items-center gap-4">
                <p className=" text-gray-500">Qty</p>
                <p className=" font-bold">2</p>
             </div>
          </div>
        </div>
          ))
        }
        </div>
        <div className=" absolute bottom-0 w-full px-8 pb-6 space-y-6">
             <div className="flex flex-row justify-between items-center">
                <p className=" text-sm">Total Amount</p>
                <p className=" font-bold">9.998</p>
             </div>
             <Button fullWidth variant="filled" color="red" radius="md">
            Checkout
          </Button>
        </div>
      </div>
      <div className=" absolute bottom-0 flex flex-row justify-between text-gray-400 text-2xl px-8 py-4 w-full">
          <IoHomeOutline />
          <FaRegCompass />
          <IoCartOutline />
          <CgProfile />
        </div>
    </div>
  );
};

export default CartComponent;
