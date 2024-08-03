import React, { useState } from "react";
import thinkBubble from "../../assets/think_bubble.png";

function CreatePost({ onClick }) {
    const [post_text, set_post_text] = useState("");
    return (
        <div className="post-container cursor-pointer">
            <div className="text-light-gray text-[18px]">Create post</div>
            <div className="w-full relative bg-light-black h-[80px] flex items-center my-5 rounded-lg">
                <input
                    value={post_text}
                    onChange={(e) => set_post_text(e.target.value)}
                    className="focus:outline-none border-none ml-20"
                    placeholder="How are you feeling today?"
                />
                <div className="absolute inset-y-0 left-2 flex items-center pl-2 text-gray-500 cursor-pointer">
                    <img src={thinkBubble} alt="eye" />
                </div>
            </div>
            <div className="flex justify-end flex-wrap">
                <button
                    className="button w-auto px-10 text-white"
                    onClick={onClick}
                >
                    Post
                </button>
            </div>
        </div>
    );
}

export default CreatePost;
