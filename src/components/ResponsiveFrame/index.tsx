import React from "react";
import { GoChevronLeft } from "react-icons/go";
import { useRouter } from "next/router";

type ResponsiveFrameProps = {
    children: React.ReactNode,
    backState?: boolean,
    title?: string,
    paddingState?: number,
    action?: string;
}

const ResponsiveFrame = ({ children, backState = true, title, action, paddingState = 9 }: ResponsiveFrameProps) => {
    const router = useRouter();
    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden md:bg-gray-50">
            <div className={`relative bg-white pb-${paddingState} shadow-xl mx-auto w-full max-w-lg rounded-2xl min-h-screen`}>
                {backState &&
                    <div className="relative w-full flex justify-center items-center box-border ml-5 pt-10 cursor-pointer" onClick={() => router.back()}>
                        <button className="absolute left-0 text-xl text-gray-600 p-3 rounded-full border-2 border-gray-400 w-max h-max flex justify-center items-center cursor-pointer" type="button">
                            <GoChevronLeft />
                        </button>
                    </div>
                }
                {title &&
                    <h3 className="text-xl font-bold absolute inset-x-0 top-6 text-center">{title}</h3>
                }
                {children}
            </div>
        </div>
    )

}

export default ResponsiveFrame;