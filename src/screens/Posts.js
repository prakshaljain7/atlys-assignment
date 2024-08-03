import React from "react";
import CreatePost from "../components/home/CreatePost";
import handEmoji from "../assets/hand_wave_emoji.png";
import sadEmoji from "../assets/sad_emoji.png";
import profile1 from "../assets/profile_1.png";
import profile2 from "../assets/profile_2.png";
import PostEntry from "../components/home/PostEntry";

function Posts() {
    const post_list = [
        {
            name: "Theresa Webb",
            content:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            comment_count: 24,
            is_edited: false,
            image: handEmoji,
            profile_image: profile1,
            post_time: 5,
        },
        {
            name: "Marvin McKinney",
            content:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            comment_count: 10,
            is_edited: true,
            image: sadEmoji,
            profile_image: profile2,
            post_time: 8,
        },
    ];
    return (
        <div className="flex justify-center h-[100vh]">
            <div className="w-1/2">
                <h1 className="text-light-gray mt-10">Hello Jane</h1>
                <p className="text-dark-gray">
                    How are you doing today? Would you like to share something
                    with the community 🤗
                </p>
                <CreatePost />
                {post_list.map((post, index) => {
                    return <PostEntry post={post} key={`post${index}`} />;
                })}
            </div>
        </div>
    );
}

export default Posts;
