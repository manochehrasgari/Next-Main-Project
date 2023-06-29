import React from "react";
import SingleComment from "./singleComment";

const ReplyComment = ({ comments, parentCommentId ,postId}) => {
  return comments.map((comment) => {
    return (
      comment.responseTo === parentCommentId && (
        <div className="mr-4" key={comment._id}>
          <React.Fragment key={comment._id}>
            <SingleComment comment={comment} postId={postId}/>
            <ReplyComment comments={comments} parentCommentId={comment._id} postId={postId}/>
          </React.Fragment>
        </div>
      )
    );
  });
};

export default ReplyComment;
