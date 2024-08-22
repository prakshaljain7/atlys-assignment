import React, { useState } from "react";
import thinkBubble from "../../assets/think_bubble.png";

function CreatePost({ onClick }) {
  return (
    <div className="post-container cursor-pointer">
      <div className="text-light-gray text-[18px]">Create post</div>
      <div
        className="w-full relative bg-light-black h-[80px] flex items-center my-5 rounded-lg"
        onClick={onClick}
      >
        <p className="text-dark-gray ml-20 text-[16px]" placeholder="">
          How are you feeling today?
        </p>
        <div className="absolute inset-y-0 left-2 flex items-center pl-2 text-gray-500 cursor-pointer">
          <img src={thinkBubble} alt="eye" />
        </div>
      </div>
      <div className="flex justify-end flex-wrap">
        <button className="button w-auto px-10 text-white" onClick={onClick}>
          Post
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
