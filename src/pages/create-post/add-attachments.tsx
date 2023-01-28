import React, { useState } from "react";
import { useRouter } from "next/router";
import { GoChevronLeft } from "react-icons/go";

//components
import ResponsiveFrame from "src/components/ResponsiveFrame";
import AttachmentModel from "src/components/CreatePostModal/AttachmentModal";
import PollModal from "src/components/CreatePostModal/PollModal";

interface PollProps { }

const AddPoll: React.FC<PollProps> = () => {
    const [showModal, setShowModal] = useState<boolean>(true);
    const router = useRouter();

    return (
        <ResponsiveFrame backState={true} title="New Post">
            <AttachmentModel showModal={showModal} setShowModal={setShowModal} />
            {/* <PollModal showModal={showModal} setShowModal={setShowModal} />  */}
        </ResponsiveFrame>
    );
};

export default AddPoll;
