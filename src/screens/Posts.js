import React, { useState } from "react";
import CreatePost from "../components/home/CreatePost";
import handEmoji from "../assets/hand_wave_emoji.png";
import sadEmoji from "../assets/sad_emoji.png";
import profile1 from "../assets/profile_1.png";
import profile2 from "../assets/profile_2.png";
import PostEntry from "../components/home/PostEntry";
import LoginPopup from "../modules/LoginPopup/LoginPopup";
import RegisterPopup from "../modules/RegisterPopup/RegisterPopup";

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

function Posts() {
    const [show_login_popup, set_show_login_popup] = useState(false);
    const [show_register_popup, set_show_register_popup] = useState(false);
    return (
        <div className="flex justify-center h-[100vh]">
            <div className="w-1/2">
                <h1 className="text-light-gray mt-10">Hello Jane</h1>
                <p className="text-dark-gray">
                    How are you doing today? Would you like to share something
                    with the community 🤗
                </p>
                <CreatePost onClick={() => set_show_login_popup(true)} />
                {post_list.map((post, index) => {
                    return <PostEntry post={post} key={`post${index}`} />;
                })}
            </div>
            {show_login_popup && (
                <div className="absolute flex justify-center items-center h-[100vh] w-[100vw] backdrop-blur-lg">
                    <LoginPopup
                        on_register_click={() => {
                            set_show_register_popup(true);
                            set_show_login_popup(false);
                        }}
                        onClose={() => {
                            set_show_login_popup(false);
                        }}
                    />
                </div>
            )}
            {show_register_popup && (
                <div className="absolute flex justify-center items-center h-[100vh] w-[100vw] backdrop-blur-lg">
                    <RegisterPopup
                        on_login_click={() => {
                            set_show_login_popup(true);
                            set_show_register_popup(false);
                        }}
                        onClose={() => {
                            set_show_register_popup(false);
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default Posts;
