import { Avatar, Button, Skeleton } from "@nextui-org/react";
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

function InfoSidebar() {
  const [isLoading] = useState(false);

  return (
    <aside className="fixed top-0 right-0 h-[100dvh] w-[420px] bg-slate-100 flex flex-col p-4 gap-4">
      {/* CATEGORY */}
      <div className="bg-white p-5 rounded-xl smooth-shadow">
        <h1 className="text-lg font-semibold">Categories</h1>
        <div className="flex flex-wrap gap-2 mt-3">
          {!isLoading ? (
            <>
              <Button className="min-w-0 bg-transparent text-slate-500 border-2 px-2 py-1 h-fit text-xs font-semibold rounded-lg hover:bg-indigo-200 hover:border-indigo-600 hover:text-indigo-600 hover:!opacity-100">
                <p>General</p>
              </Button>
              <Button className="min-w-0 bg-transparent text-slate-500 border-2 px-2 py-1 h-fit text-xs font-semibold rounded-lg hover:bg-indigo-200 hover:border-indigo-600 hover:text-indigo-600 hover:!opacity-100">
                <p>Redux</p>
              </Button>
              <Button className="min-w-0 bg-transparent text-slate-500 border-2 px-2 py-1 h-fit text-xs font-semibold rounded-lg hover:bg-indigo-200 hover:border-indigo-600 hover:text-indigo-600 hover:!opacity-100">
                <p>Perkenalan</p>
              </Button>
            </>
          ) : (
            <CategoriesLoading />
          )}
        </div>
      </div>
      {/* LEADERBOARDS */}
      <div className="bg-white p-5 rounded-xl smooth-shadow">
        <h1 className="text-lg font-semibold">Leaderboards</h1>
        <div className="flex flex-col mt-4 gap-5">
          {!isLoading ? (
            <>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-[24px]">
                    <span className="text-sm font-semibold text-slate-500">#1</span>
                  </div>
                  <Avatar
                    isBordered
                    radius="full"
                    src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                    className="w-[36px] h-[36px] ring-amber-300"
                  />
                  <p>Dimas Saputra</p>
                </div>
                <p className="text-lg font-bold">32</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-[24px]">
                    <span className="text-sm font-semibold text-slate-500">#2</span>
                  </div>
                  <Avatar
                    isBordered
                    radius="full"
                    src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                    className="w-[36px] h-[36px] ring-zinc-300"
                  />
                  <p>Dimas Saputra</p>
                </div>
                <p className="text-lg font-bold">32</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-[24px]">
                    <span className="text-sm font-semibold text-slate-500">#3</span>
                  </div>
                  <Avatar
                    isBordered
                    radius="full"
                    src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                    className="w-[36px] h-[36px] ring-yellow-700 ring-opacity-50"
                  />
                  <p>Dimas Saputra</p>
                </div>
                <p className="text-lg font-bold">32</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-[24px]">
                    <span className="text-sm font-semibold text-slate-500">#4</span>
                  </div>
                  <Avatar radius="full" src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-[36px] h-[36px]" />
                  <p>Dimas Saputra</p>
                </div>
                <p className="text-lg font-bold">32</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-[24px]">
                    <span className="text-sm font-semibold text-slate-500">#5</span>
                  </div>
                  <Avatar radius="full" src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-[36px] h-[36px]" />
                  <p>Dimas Saputra</p>
                </div>
                <p className="text-lg font-bold">32</p>
              </div>
            </>
          ) : (
            <LeaderboardsLoading />
          )}
        </div>
        <div className="flex w-full justify-end items-end mt-3">
          <Button className="text-sm font-semibold min-w-0 w-fit h-fit py-2 px-3 bg-slate-100 text-slate-600 hover:!opacity-100 hover:text-indigo-600 hover:bg-indigo-100">
            <p>Show more</p>
            <FaAngleRight />
          </Button>
        </div>
      </div>
    </aside>
  );
}

function CategoriesLoading() {
  return (
    <>
      <Skeleton className="h-[24px] w-[60px] rounded-lg" />
      <Skeleton className="h-[24px] w-[120px] rounded-lg" />
      <Skeleton className="h-[24px] w-[82px] rounded-lg" />
      <Skeleton className="h-[24px] w-[100px] rounded-lg" />
      <Skeleton className="h-[24px] w-[220px] rounded-lg" />
    </>
  );
}

function LeaderboardsLoading() {
  return Array(5)
    .fill(null)
    .map(() => (
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Skeleton className="w-[22px] h-[18px] rounded-md" />
          <Skeleton className="w-[36px] h-[36px] rounded-full" />
          <Skeleton className="w-[120px] h-[24px] rounded-lg" />
        </div>
        <Skeleton className="w-[26px] h-[28px] rounded-lg" />
      </div>
    ));
}

export default InfoSidebar;
