// import React from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";

// // images
// import RightStroke from "src/assets/home/Stroke.png";

// interface ContentReferenceModalProps {
//   showModal: boolean;
//   setShowModal: (modal: boolean) => void;
// }

// const styles = {
//   pollModalContainer: (showModal: boolean) => {
//     const pointerEvent = showModal ? "pointer-events-auto show" : "pointer-events-none hidden"
//     return "fixed top-0 left-0 w-screen h-screen z-50 phone-modal-container " + pointerEvent;
//   },
//   pollModal: (showModal: boolean) => {
//     const status = showModal ? "show" : "hide";
//     return "w-screen h-screen pointer-events-auto flex flex-col bg-white z-50 phone-modal " + status
//   }
// }

// const ContentReferenceModal: React.FC<ContentReferenceModalProps> = (props) => {
//   const { showModal, setShowModal } = props;
//   const router = useRouter();
//   const goBack = () => {
//     router.back();
//   }
//   return (
//     <div className={styles.pollModalContainer(showModal)} onClick={() => { setShowModal(false) }}>
//       <div className={styles.pollModal(showModal)} onClick={(e) => { e.stopPropagation(); }}>
//         <div className="px-5 box-border">
//           <div className="relative w-full flex justify-start items-center box-border text-slate-500">
//             <p className="text-sm my-5" onClick={goBack}>Cancel</p>
//           </div>
//           <h3 className="text-xl font-bold mb-3">Content Preference</h3>
//         <div className="flex justify-between">
//             <div>
//                 <p>Block List</p>
//                 <p className="text-sm">84 blocked entities</p>
//             </div>
//             <div>
//             <Image
//       // loader={myLoader}
//       src={RightStroke}
//       alt="Picture of the author"
//       width={500}
//       height={500}
//     />
//             </div>
//         </div>
//         <div className="flex justify-between mt-3">
//             <div>
//                 <p>Filtered Out</p>
//                 <p className="text-sm">8 filtered out entities</p>
//             </div>
//             <div>
                
//             </div>
//         </div>
//         </div>
       
//       </div>
//     </div>
//   );
// };

// export default ContentReferenceModal;

const ContentReferenceModal = () => {
  return (
    <div></div>
  )
}

export default ContentReferenceModal;