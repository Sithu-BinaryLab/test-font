import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GoCommentDiscussion } from "react-icons/go";
import countryCodes from "country-codes-list";
import { FiHeart, FiRefreshCw } from "react-icons/fi";
import { BiBookmark, BiUpload } from "react-icons/bi";

//components
import ResponsiveFrame from "src/components/ResponsiveFrame";
import UserComment from "src/components/UserComment";
import PostReplyModal from "src/components/PostModal/PostReplyModal";
import PostComponent from "src/components/PostModal/PostComponent";

interface PostProps { };

const PostById: React.FC<PostProps> = () => {
    const [countryCodesArray, setCountryCodes] = useState<Array<any> | []>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const router = useRouter();
    const id = router.query["id"];
    // get dynamic-name from url path and not mean definitely id

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCountryCodes(countryCodes.all());
        }
    }, []);

    const handlePhoneClick = () => {
        setShowModal(true)
    }

    return (
        <ResponsiveFrame title="Post">
            <div className="mt-10 h-screen overflow-y-auto">
                <PostComponent hideIcons />
                <div className="px-3 py-2">
                    <div className="flex gap-3 items-center text-lg text-newsmast-grey-2">
                        <span>#tag</span>
                        <span>#tag</span>
                        <span>#tag</span>
                        <span>#tag</span>
                    </div>
                    <div className="text-newsmast-grey-3 text-xl py-2">
                        {"07:00 AM > 15:02.2022"}
                    </div>
                    <div className="flex gap-5 text-newsmast-grey">
                        <div className="flex gap-2 items-center">
                            <span className="text-newsmast-grey-3 text-lg">546</span>
                            Comments
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="text-newsmast-grey-3 text-lg">546</span>
                            Quotes
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="text-newsmast-grey-3 text-lg">546</span>
                            Likes
                        </div>
                    </div>
                </div>
                <div className="flex justify-between py-3 gap-5 mx-3 box-border border-y border-y-newsmast-blue-grey text-newsmast-grey">
                    <GoCommentDiscussion className="text-2xl " />
                    <FiRefreshCw className="text-2xl " />
                    <FiHeart className="text-2xl " />
                    <BiBookmark className="text-2xl " />
                    <BiUpload className="text-2xl" />
                </div>
                <div className="flex flex-col">
                    <UserComment />
                    <UserComment />
                    <UserComment />
                </div>
                <PostReplyModal /> 
            </div>
        </ResponsiveFrame>
    );
};

export default PostById;
