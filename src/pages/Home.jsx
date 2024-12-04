import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ThreadItem from "../components/threads/ThreadItem";
import { Button, Skeleton } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

function Home() {
  const [isLoading] = useState(false);

  const threads = Array.from({ length: 10 }, (_, index) => ({
    id: `thread-${index + 1}`,
    title: `Thread ${index + 1}`,
    body: `Ini adalah thread ke-${index + 1}`,
    category: "General",
    createdAt: "2021-06-21T07:00:00.000Z",
    ownerId: `users-${index + 1}`,
    upVotesBy: ["asdfasdf", "sdafsdaf"],
    downVotesBy: ["asdfasfd"],
    totalComments: 0,
  }));

  return (
    <MainLayout>
      {/* TITLE */}
      <Helmet>
        <title>Feeds</title>
      </Helmet>

      {/* MAIN CONTENT */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Feeds</h1>
        <Button radius="full" className="min-w-0 h-fit p-2 bg-indigo-600 text-white">
          <FaPlus className="text-[20px]" />
        </Button>
      </div>
      <div className="flex flex-col mt-6 gap-4">
        {!isLoading
          ? threads.length > 0 && threads.map((thread) => <ThreadItem key={thread.id} thread={thread} />)
          : Array(3)
              .fill(null)
              .map(() => <Skeleton className="h-[192px] w-full rounded-2xl" />)}
      </div>
    </MainLayout>
  );
}

export default Home;
