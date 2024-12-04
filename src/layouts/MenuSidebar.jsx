import React, { useState } from "react";
import { Avatar, Button, Skeleton } from "@nextui-org/react";
import { FaArrowRightFromBracket, FaCirclePlus, FaCircleUser, FaHouse, FaRankingStar } from "react-icons/fa6";
import { useNavigate } from "react-router";

function MenuSidebar() {
  const logoPath = "/svg/logo.svg";

  const [isLoading] = useState(false);
  const [isAuth] = useState(true);

  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 h-[100dvh] w-[252px] flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="flex mx-5 mt-6 pb-4 gap-4 items-center border-b-2">
          <img src={logoPath} alt="logo" className="w-[32px]" />
          <h1 className="font-bold text-xl font-mont">ForumApp</h1>
        </div>
        <div className="flex flex-col items-center mt-6 gap-3 mx-5 pb-5 border-b-2">
          {!isLoading && isAuth ? (
            <>
              <Avatar isBordered radius="full" src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-[86px] h-[86px] ring-indigo-400" />
              <div className="flex flex-col text-center items-center justify-center">
                <h1 className="text-lg font-semibold">Jhon Doe</h1>
                <p className="text-xs text-slate-500">jhondoeganteng320@yahoo.com</p>
              </div>
              <Button className="h-fit px-4 py-2 gap-3 mt-1 text-indigo-600 bg-indigo-100 hover:bg-indigo-600 hover:text-white hover:!opacity-100">
                <FaCirclePlus />
                <span className="font-semibold">Add Thread</span>
              </Button>
            </>
          ) : !isLoading ? (
            <NotAuthProfile />
          ) : (
            <LoadingProfile />
          )}
        </div>
        <div className="flex flex-col mt-5 px-5 gap-2">
          <Button className="w-full bg-indigo-600 text-white justify-start items-center gap-3" onClick={() => navigate("/")}>
            <FaHouse />
            <span className="font-semibold">Feeds</span>
          </Button>
          <Button
            className="w-full bg-white text-slate-700 justify-start items-center gap-3 hover:bg-slate-200 hover:text-[#333] hover:!opacity-100"
            onClick={() => navigate("/leaderboards")}
          >
            <FaRankingStar />
            <span className="font-semibold">Leaderboards</span>
          </Button>
        </div>
      </div>
      {isAuth && (
        <div className="flex flex-col px-5 mb-6">
          <Button className="w-full bg-white text-red-600 justify-start items-center gap-3 hover:bg-red-100 hover:!opacity-100">
            <FaArrowRightFromBracket className="rotate-180" />
            <span className="font-semibold">Logout</span>
          </Button>
        </div>
      )}
    </nav>
  );
}

function LoadingProfile() {
  return (
    <>
      <Skeleton className="w-[82px] h-[82px] rounded-full" />
      <div className="flex flex-col gap-2 text-center items-center justify-center w-full">
        <Skeleton className="h-[28px] w-[120px] rounded-lg" />
        <Skeleton className="h-[16px] w-full rounded-lg" />
      </div>
      <Skeleton className="h-[36px] w-[136px] rounded-xl" />
    </>
  );
}

function NotAuthProfile() {
  return (
    <>
      <FaCircleUser className="w-[86px] h-[86px] text-slate-400" />
      <div className="flex flex-col text-center items-center justify-center">
        <h1 className="text-lg font-semibold">Let&apos;s Login First!</h1>
        <p className="text-xs text-slate-500">Login to get full access</p>
      </div>
      <div className="flex items-center gap-2 w-full">
        <Button className="h-fit px-4 py-2 gap-3 mt-1 text-indigo-600 bg-indigo-100 hover:bg-indigo-600 hover:text-white w-1/2" radius="full">
          <span className="font-semibold">Login</span>
        </Button>
        <Button className="h-fit px-4 py-2 gap-3 mt-1 text-slate-500 bg-slate-100 hover:bg-slate-600 hover:text-white w-1/2" radius="full">
          <span className="font-semibold">Register</span>
        </Button>
      </div>
    </>
  );
}

export default MenuSidebar;
