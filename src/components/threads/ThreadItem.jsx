import { Avatar, Button, Tooltip } from "@nextui-org/react";
import PropTypes from "prop-types";
import React from "react";
import { FaCircle, FaRegCalendar, FaRegCircleUser, FaRegComments, FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa6";
import { getTimeAgo } from "../../utils";

function ThreadItem({ thread }) {
  return (
    <div className="flex flex-col w-full bg-white p-6 rounded-2xl smooth-shadow hover:bg-slate-50 transition-colors cursor-pointer">
      <div className="flex items-center gap-4">
        <Avatar isBordered radius="full" src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-[48px] h-[48px]" />
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold">{thread.title}</h1>
          <div className="flex items-center text-sm gap-4 text-slate-500">
            <div className="flex gap-2 items-center">
              <FaRegCircleUser />
              <p className="font-semibold">Jhon Doe</p>
            </div>
            <FaCircle className="text-slate-500 w-[4px]" />
            <div className="flex gap-2 items-center">
              <FaRegCalendar />
              <p>{getTimeAgo(thread.createdAt)}</p>
            </div>
            <FaCircle className="text-slate-500 w-[4px]" />
            <Tooltip showArrow content={`Filtering thread by category: ${thread.category}`} classNames={{ content: 'text-xs' }}>
              <Button className="min-w-0 bg-transparent text-slate-500 border-2 px-2 py-1 h-fit text-xs font-semibold rounded-lg hover:bg-indigo-200 hover:border-indigo-600 hover:text-indigo-600 hover:!opacity-100">
                <p>{thread.category}</p>
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="flex w-full my-4">
        <p>{thread.body}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Button
              radius="full"
              className="min-w-0 h-fit p-[6px] bg-transparent text-slate-500 border-2 hover:bg-indigo-200 hover:border-indigo-600 hover:text-indigo-600"
            >
              <FaRegThumbsUp className="text-xs" />
            </Button>
            <p className="font-semibold text-slate-500">{thread.upVotesBy.length}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              radius="full"
              className="min-w-0 h-fit p-[6px] bg-transparent text-slate-500 border-2 hover:bg-indigo-200 hover:border-indigo-600 hover:text-indigo-600"
            >
              <FaRegThumbsDown className="text-xs" />
            </Button>
            <p className="font-semibold text-slate-500">{thread.downVotesBy.length}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-slate-500">
          <FaRegComments className="text-lg" />
          <p className="text-sm">
            {thread.totalComments}
            <span className="ml-1">Comments</span>
          </p>
        </div>
      </div>
    </div>
  );
}

ThreadItem.propTypes = {
  thread: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
    ownerId: PropTypes.string.isRequired,
    upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    totalComments: PropTypes.number.isRequired,
  }).isRequired,
};

export default ThreadItem;
