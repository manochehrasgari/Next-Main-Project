import React, { useState } from "react";

import SingleComment from "./singleComment";
import axios from "axios";
import CommentForm from "./commentForm";
import ReplyComment from "./replyComment";

const PostComments = ({ post }) => {
  
  return (
    <div>
      <h2 className="mb-10 font-bold text-4xl">نظرات</h2>
      {post.comments.map((comment) => {
        return (
          !comment.responseTo &&
          comment.status === 2 && (
            <React.Fragment key={comment._id}>
              <SingleComment comment={comment} postId={post._id}/>
              <ReplyComment comments={post.comments} parentCommentId={comment._id} postId={post._id}/>
            </React.Fragment>
          )
        );
      })}
      <div>
        <h2 className="mb-4">ارسال نظر</h2>
        <CommentForm id={post._id} responseTo={null}/>
      </div>
    </div>
  );
};

export default PostComments;
