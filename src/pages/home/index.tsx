import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import { BiSearchAlt2 } from "react-icons/bi";
import { GiSpeedometer } from "react-icons/gi";
import { RiHomeFill } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FiSend } from "react-icons/fi";

//components
import ResponsiveFrame from "src/components/ResponsiveFrame";
import TimelibeModal from "src/components/HomeModal/TimelineModal";
import PostComponent from "src/components/PostModal/PostComponent";

interface HomeProps { };

const Home: React.FC<HomeProps> = () => {
  const router = useRouter();
  const goToCreatePost = () => {
    router.push("/create-post");
  }
  const [tab, setTab] = useState<number>(0);
  const [isOpenTimeline, setIsOpenTimeline] = useState<boolean>(false);
  useEffect(() => {
    if (window) {
      const bodyTag = document.querySelector("body") as any;
      bodyTag.style.backgroundColor = "#fff";
    }
  })
  return (
    <ResponsiveFrame backState={false}>
      <div className="relative">
        <div className="relative">
          {/* <main className="h-screen w-screen overflow-y-auto text-black"> */}
          <div className="flex flex-col bg-white px-3 py-2 relative">
            <div className="relative flex justify-center items-center h-14">
              {/* avatar */}
              <div className="absolute left-0 flex justify-center items-center font-bold bg-newsmast-light-blue text-black rounded-full" style={{ width: "3.5rem", height: "3.5rem" }}>
                <h5>DS</h5>
              </div>
              <h3 className="text-center font-bold 2xl">Home</h3>
              {/* <div className="absolute right-0">
              <GiSpeedometer className="text-2xl" onClick={()=>setIsOpenTimeline(true)}/>
              {
                            isOpenTimeline && (
                                <TimelibeModal showModal={isOpenTimeline} setShowModal={setIsOpenTimeline} />

                            )
                        }
            </div> */}
              {/* <div className="absolute right-0">
                <GiSpeedometer className="text-2xl" onClick={() => setIsOpenTimeline(true)} />
              </div> */}
            </div>
            <div className="w-full flex justify-between rounded-full p-1 bg-newsmast-tab-grey mt-5 items-center">
              <div
                className={[
                  "py-2 text-center",
                  tab == 0 ? "bg-white rounded-full" : ""
                ].join(" ")}
                style={{ width: "46%" }}
                onClick={() => setTab(0)}
              >
                Following
              </div>
              <div
                className={[
                  "p-2 text-center",
                  tab == 1 ? "bg-white rounded-full" : ""
                ].join(" ")}
                style={{ width: "51%" }}
                onClick={() => setTab(1)}
              >
                Primary Community
              </div>
            </div>

          </div>
          <div className="flex flex-col">
            <PostComponent />
            <PostComponent />
            <PostComponent />
          </div>
          {/* </main> */}
          <div className="absolute inset-x-0 bottom-0 z-50 pointer-events-none">
            <div className="absolute flex justify-between text-center py-5 px-7 bottom-0 bg-white w-full h-20 reverse-shadow pointer-events-auto">
              <RiHomeFill className="text-black text-3xl" />
              {/* <BiSearchAlt2 className="text-newsmast-grey text-3xl" /> */}
              <HiOutlineUserGroup className="text-newsmast-grey  text-3xl" />
              {/* <FiSend className="text-newsmast-grey text-3xl" /> */}
            </div>
          </div>
        </div>
        <div className=" static absolute bottom-24 right-5 p-5 rounded-full bg-black cursor-pointer" onClick={goToCreatePost}>
          <Image
            src="/images/createPin.png"
            alt=""
            className=""
            width="20"
            height="20"
          />
        </div>
      </div>
    </ResponsiveFrame>
  );
}

export default Home;