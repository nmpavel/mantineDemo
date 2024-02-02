import { Button } from "@mantine/core";
import React from "react";
import { IoCartOutline, IoClose, IoHomeOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { FaRegCompass } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const AddToCart = () => {
  return (
    <div className=" md:scale-75 lg:scale-50 relative bg-gray-100 h-[800px] w-96 rounded-[40px] overflow-hidden">
      <div className="relative rounded-lg w-full h-1/2">
  <img src={"/images/tshirt.jpg"} className="w-full h-full rounded-lg" />
  <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
</div>


      <div className=" absolute bottom-0 w-full rounded-t-[40px] overflow-hidden bg-white ">
        <div className=" space-y-6 bg-white  w-full shadow-lg p-8">
          <div className="flex flex-row justify-between">
            <p className=" text-sm font-bold">Complete Order</p>
            <IoClose />
          </div>
          <div className="flex flex-col gap-4">
            <p className=" text-xs font-bold">Size</p>
            <div className="flex flex-row items-center gap-4">
              <div className=" bg-blue-200 w-10 h-10  flex justify-center items-center text-blue-800 font-bold rounded-lg">
                S
              </div>
              <div className="w-10 h-10  flex justify-center items-center border border-blue-200  py-2 px-4 text-blue-800 font-bold rounded-lg">
                M
              </div>
              <div className="w-10 h-10  flex justify-center items-center border border-blue-200 py-2 px-4 text-blue-800 font-bold rounded-lg">
                L
              </div>
              <div className="w-10 h-10  flex justify-center items-center border border-blue-200 py-2 px-4 text-blue-800 font-bold rounded-lg">
                XL
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className=" text-xs font-bold">Color</p>
            <div className="flex flex-row items-center gap-4">
              <div className=" text-white opacity-65 bg-red-500 w-10 h-10  flex justify-center items-center rounded-lg">
                <TiTick />
              </div>
              <div className=" bg-green-600 w-10 h-10  flex justify-center items-center   rounded-lg" />
              <div className=" bg-blue-400 w-10 h-10  flex justify-center items-center rounded-lg" />
              <div className=" bg-blue-800 w-10 h-10  flex justify-center items-center rounded-lg" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center">
              <p className=" text-xs font-bold">Quantity</p>
              <p className=" text-xs font-bold text-blue-500">+ Add Note</p>
            </div>
            <div className="flex flex-row items-center gap-16">
              <Button fullWidth variant="outline" radius="md">
                +
              </Button>
              <div className="font-bold">1</div>
              <Button fullWidth variant="outline" radius="md">
                -
              </Button>
            </div>
          </div>
          <Button fullWidth variant="filled" color="red" radius="md">
            Add to Cart
          </Button>
        </div>
        <div className="flex flex-row justify-between text-gray-400 text-2xl px-8 py-4">
          <IoHomeOutline />
          <FaRegCompass />
          <IoCartOutline />
          <CgProfile />
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
