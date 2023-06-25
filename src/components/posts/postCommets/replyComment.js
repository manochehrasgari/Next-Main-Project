import React from "react";
import SingleComment from "./singleComment";

const ReplyComment = ({ comments, parentCommentId }) => {
  return comments.map((comment) => {
    return (
      comment.responseTo === parentCommentId && (
        <div className="mr-4">
          <React.Fragment>
            <SingleComment comment={comment} />
            <ReplyComment comments={comments} parentCommentId={comment._id} />
          </React.Fragment>
        </div>
      )
    );
  });
};

export default ReplyComment;
