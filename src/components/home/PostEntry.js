import React from "react";
import comment from "../../assets/comment.svg";
import menuDots from "../../assets/menu_dots.svg";

function PostEntry({ post, onClick }) {
  return (
    <div className="post-container p-2 cursor-pointer" onClick={onClick}>
      <div className="flex justify-between items-center">
        <div className="flex">
          <img src={post.profile_image} alt="profile" />
          <div className="flex flex-col ml-3 justify-center">
            <div className="text-light-gray text-[18px]">{post.name}</div>
            <p className="text-dark-gray text-[14px]">
              {post.post_time + "mins ago"}
              {post.is_edited && <span> &bull; Edited</span>}
            </p>
          </div>
        </div>
        <div onClick={onClick}>
          <img src={menuDots} alt="dots" />
        </div>
      </div>
      <div className="w-full bg-light-black h-[80px] flex items-center my-5 rounded-lg">
        <img src={post.image} alt="eye" className="h-[48px] w-[48px] ml-3" />
        <p className="border-none text-dark-gray ml-8 text-[16px]">
          {post.content}
        </p>
      </div>
      <div className="flex flex-wrap ">
        <img src={comment} alt="comment" />
        <p className="text-light-gray ml-2">{`${post.comment_count} comments`}</p>
      </div>
    </div>
  );
}

export default PostEntry;
