// import React, { useState } from "react";
// import ContentReferenceModal from "src/components/HomeModal/ContentReferenceModal";

// interface TimelineModalProps {
//     showModal: boolean;
//     setShowModal: (modal: boolean) => void;
// }

// const styles = {
//     createPostModalContainer: (showModal: boolean) => {
//         const pointerEvent = showModal ? "pointer-events-auto show" : "pointer-events-none hidden"
//         return "fixed top-0 left-0 w-screen h-screen z-50 audience-modal-container " + pointerEvent;
//     },
//     createPostModal: (showModal: boolean) => {
//         const status = showModal ? "show" : "hide";
//         return "absolute w-screen  pointer-events-auto flex flex-col bg-white z-50 audience-modal mt-96 " + status
//     }
// }

// const TimelineModal: React.FC<TimelineModalProps> = (props) => {
//     const { showModal, setShowModal } = props;
//     const [openContentRef, setOpenContentRef] = useState(false);
//     const timelines = [
//         { type: "Standard", detail: "The newest top" },
//         { type: "Smart Order", detail: "Shows the most relevant to your interest" },
//         { type: "Location Based", detail: "Show content close to my location" },
//         { type: "Amplifier", detail: "Apply filters for more of the content you want" },
//     ]
//     return (
//         <div className={styles.createPostModalContainer(showModal)} onClick={() => { setShowModal(false) }}>
//             <div className={styles.createPostModal(showModal)} onClick={(e) => { e.stopPropagation(); }}>
//                 <div className="box-border">
//                     <div className="flex justify-between">
//                         <label className="font-bold px-5">Your timeline</label>
//                         <label className="px-5" onClick={() => setOpenContentRef(true)}>Content Preference</label>
//                         {openContentRef && <ContentReferenceModal showModal={showModal} setShowModal={setShowModal} />}
//                     </div>
//                     <ul>
//                         {timelines.map((timeline, index) => (
//                             <div key={index}>
//                                 <li className="text-black" key={1}>
//                                     <div className="px-5">
//                                         <label className="">{timeline.type}</label> <br />
//                                         <label className="text-sm">{timeline.detail}</label>
//                                     </div>
//                                 </li>
//                                 {timeline.type !== "Mentioned people only" && <hr />}
//                             </div>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TimelineModal;

const TimelineModal = () => {
    return (
      <div></div>
    )
  }
  
  export default TimelineModal;