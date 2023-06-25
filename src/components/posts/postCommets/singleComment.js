import { UserCircleIcon } from "@heroicons/react/outline";
import { persianDate } from "../../../utils/toPersianDigits";
import { useState } from "react";
import CommentForm from "./commentForm";

const SingleComment = ({ comment }) => {
    const [commentValue , setCommentValue] = useState('')
  const [onReply, setOnreply] = useState(false);
  return (
    <div className="rounded-xl mb-8 overflow-hidden shadow-lg border border-gray-100 bg-white">
    <div className="flex items-center justify-start bg-gray-50 px-4 py-2">
      <UserCircleIcon className="w-12 h-12 stroke-gray-400" strokeWidth={1} />
      <div className="flex flex-col justify-between mr-4">
        <span className="block text-sm text-gray-600">{comment.writer?.name}</span>
        <span className="block text-xs text-gray-500 mt-2 dark:text-slate-500">
          {persianDate(comment.createdAt)}
        </span>
      </div>
    </div>
    <div className="px-4 pb-4">
      <div className="mt-4 leading-10">{comment.content}</div>
      <button
        className="text-sm p-4 cursor-pointer text-blue-600"
        onClick={() => setOnreply(!onReply)}
      >
        {onReply ? "بیخیال" : "پاسخ به"}
      </button>

      {onReply && (
        <div className="mt-4">
          <span className="text-gray-500 text-sm">در حال پاسخ به {comment.writer?.name}</span>
          <CommentForm comment={commentValue} setComment={setCommentValue} />
        </div>
      )}
    </div>
  </div>
  );
};

export default SingleComment;
