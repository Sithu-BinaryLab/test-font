import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//components
import CUSTOM_ICON_PACK from "src/const/IconPack";
import ResponsiveFrame from "src/components/ResponsiveFrame";

const StartScreen = () => {
    const router = useRouter();

    // need to code refractor and reduce
    const goToInvitation = () => {
        router.push("/invitation-code");
    }
    const goToContributor = () => {
        router.push("/contributor");
    }

    const goToModerator = () => {
        router.push("/moderator");
    }

    const goToWaitList = () => {
        router.push("/waitlist");
    }

    const goToDonate = () => {
        router.push("donate");
    }

    return (
        <ResponsiveFrame backState={false} paddingState={0}>
            <div className="start-page-bg h-screen px-10">
                <div className='flex flex-col items-center z-20 h-max cursor-pointer text-white' style={{ paddingTop: "5vh" }}>
                    <div className="logo-container-1 aspect-logo z-50">
                    {CUSTOM_ICON_PACK.newsmastIcon}
                    </div>
                    {/* <h3 className="mt-1 text-2xl">newsmast</h3> */}
                    <h3 className="mt-5 text-2xl">Welcome!</h3>
                    <p className="text-center">We’re currently in beta testing and are extending invitations to key content contributors in all our communities.</p>

                    <button className="border-2 border-gray-100 rounded-full w-full mt-10 px-5 py-2" onClick={goToInvitation}>
                        I have invitation code
                    </button>
                    <button className="bg-white border-2 border-gray-100 rounded-full w-full mt-5 px-5 py-2 text-black" onClick={goToContributor}>
                        Join as a content contributor
                    </button>
                    <button className="bg-white border-2 border-gray-100 rounded-full w-full mt-5 px-5 py-2 text-black" onClick={goToModerator}>
                        Join as a content moderator
                    </button>
                    <div>
                        <p className="text-center text-sm mt-10 mb-5">or</p>
                    </div>
                    <button className="bg-red-500 rounded-lg w-full mt-5 px-5 py-2 text-white" onClick={goToWaitList}>
                        Join our waitlist
                    </button>
                    {/* <div className="flex justify-between space-x-2 mt-5">
                        <p>Want to support our project ?</p>
                        <button className="border-2 px-2 rounded-full" onClick={goToDonate}>
                            Donate
                        </button>
                    </div> */}
                    <p className="text-sm mt-5">By continuing you agree to our <span className="text-red-400">Terms & Conditions, Privacy Policy</span></p>
                </div>
            </div>
        </ResponsiveFrame >


    )
}

export default StartScreen;