import React from "react";
import { IoMdMenu } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import { TiTick } from "react-icons/ti";
import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { FaRegCompass, FaShippingFast, FaStar } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { IoCartOutline, IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Profile = () => {
  return (
    <div className=" scale-50  relative bg-white h-[800px] w-96 rounded-[40px] overflow-hidden pt-16">
      <div className="flex flex-row  justify-between items-center px-8  font-bold text-lg">
        <IoMdMenu />
        <p className=" ">Profile</p>
        <CiMenuKebab />
      </div>
      <div className=" flex flex-col justify-center items-center gap-6 mt-6 shadow-lg px-8 pb-[72px]">
        <div className="relative">
          <img src={"/images/elon.jpg"} className=" w-40 h-40 rounded-[50px]" />
          <div className=" absolute bottom-0 right-0 text-white bg-green-400 w-12 h-12  flex justify-center items-center rounded-full">
            <TiTick />
          </div>
        </div>
        <div>
          <p className=" text-lg font-bold ">Elon Musk</p>
          <p>elonmusk@gmail.com</p>
        </div>
        <div className="flex flex-row justify-between gap-4 rounded-lg shadow-xl w-full p-2">
          <Button fullWidth variant="filled" color="red" radius="md">
            $ 6999
          </Button>
          <Button
            variant="transparent"
            fullWidth
            rightSection={<IconArrowRight size={14} />}
          >
            Top Up
          </Button>
        </div>
        <div className=" text-gray-500 text-xl flex flex-row gap-12 mt-8 items-center w-full">
          <FaStar />
          <p className=" font-semibold text-base text-black">My Review</p>
        </div>
        <div className=" text-gray-500 text-xl flex flex-row gap-12 mt-8 items-center w-full">
          <FaShippingFast />
          <p className=" font-semibold text-base text-black">
            Shipment Address
          </p>
        </div>
        <div className=" text-red-500 text-xl flex flex-row gap-12 mt-8 items-center w-full">
          <TbLogout />
          <p className=" font-semibold text-base">Log Out</p>
        </div>
      </div>
      <div className=" w-full absolute bottom-0 flex flex-row justify-between text-gray-400 text-2xl px-8 py-4">
        <IoHomeOutline />
        <FaRegCompass />
        <IoCartOutline />
        <div className=" text-red-500">
        <CgProfile />
        </div>
      </div>
    </div>
  );
};

export default Profile;
