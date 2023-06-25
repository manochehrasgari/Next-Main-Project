import React, { useState } from "react";

import SingleComment from "./singleComment";
import axios from "axios";
import CommentForm from "./commentForm";
import ReplyComment from "./replyComment";

const PostComments = ({ post }) => {
  const [commentValue, setCommentValue] = useState("");
  // const sendCommentHandler = (e)=>{
  //     e.preventDefault()
  //     const comment = {
  //         content : value,
  //         postId : post._id,
  //         responseTo:null
  //     }
  //     console.log(comment);
  //     axios.post(`http://localhost:5000/api/post-comment/save-comment`,comment)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // }
  return (
    <div>
      <h2 className="mb-10 font-bold text-4xl">نظرات</h2>
      {post.comments.map((comment, index) => {
        return (
          !comment.responseTo &&
          comment.status === 2 && (
            <React.Fragment key={comment._id}>
              <SingleComment comment={comment} />
              <ReplyComment comments={post.comments} parentCommentId={comment._id}/>
            </React.Fragment>
          )
        );
      })}
      <div>
        <h2 className="mb-4">ارسال نظر</h2>
        <CommentForm comment={commentValue} setComment={setCommentValue} />
      </div>
    </div>
  );
};

export default PostComments;
