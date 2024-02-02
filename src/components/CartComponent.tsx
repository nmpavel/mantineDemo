import { Button } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { IoIosStar } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";

const CartComponent = () => {
  return (
    <div className=" md:scale-75 lg:scale-50 relative bg-gray-100 h-[800px] w-96 rounded-[40px] overflow-hidden">
      <div className="flex flex-col  items-center">
        <h1 className=" text-lg font-bold my-6">Cart</h1>
        <div className=" flex flex-col gap-6 bg-white m-4 p-4 rounded-lg shadow-lg">
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
              <p className="text-lg font-semibold text-blue-600">$ 4.999</p>
              <div className="flex flex-row items-center gap-2">
                <IoIosStar />
                4.9
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between ">
            <div className="text-2xl flex flex-row justify-center items-center gap-1">
              <div className=" bg-black text-white h-6 w-6 flex justify-center items-center shadow-xl  rounded-md">
                +
              </div>
              <p>1</p>
              <div className=" bg-black text-white h-6 w-6 flex justify-center items-center shadow-xl  rounded-md">
                -
              </div>
            </div>
            <div className=" text-sm font-medium flex flex-row items-center">
              <MdOutlineDelete className=" h-6 w-6" />
              Remove
            </div>
          </div>
        </div>
      </div>
      <div className=" space-y-2 absolute bottom-0 bg-white rounded-b-3xl rounded-t-[40px] py-6 px-4 w-full">
          <div className="flex flex-row justify-between items-center">
            <p>{`Subtotal(2 Items)`}</p>
            <p>$ 4.999</p>
          </div>
          <div className=" h-[1px] w-full border border-dashed"/>
          <div className="flex flex-row justify-between items-center">
            <p className=" font-semibold ">Total</p>
            <p>$ 4.999</p>
          </div>
          <div className="w-full">
          <Button fullWidth variant="filled" radius="xl">Buy Now</Button>
          </div>
      </div>
    </div>
  );
};

export default CartComponent;
