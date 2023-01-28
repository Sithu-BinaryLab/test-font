import React, { useState } from "react";
import { useRouter } from "next/router";
import SearchBox from "./SearchBox";
import { useQuery } from "@tanstack/react-query";
import { ContributorObj, get_contributor_roles } from "src/queries/contributor";

interface SelectTypeModalProps {
  showModal: boolean;
  selectedType: string | null;
  setSelectedType: (selectedType: string | null) => void;
  setShowModal: (modal: boolean) => void;
}

const styles = {
  roleModalContainer: (showModal: boolean) => {
    const pointerEvent = showModal ? "pointer-events-auto show" : "pointer-events-none hidden"
    return "fixed flex justify-center top-0 left-0 w-screen h-screen z-50 role-modal-container " + pointerEvent;
  },
  roleModal: (showModal: boolean) => {
    const status = showModal ? "show" : "hide";
    return "w-full max-w-lg h-screen pointer-events-auto flex flex-col bg-white z-50 role-modal " + status
  }
}
const contributorTypes = [
  {
    id: 1,
    type: "Contirbutor",
  },
  {
    id: 2,
    type: "Journlist",
  },
  {
    id: 3,
    type: "Streamer",
  },
  {
    id: 4,
    type: "OSINT",
  },
  {
    id: 5,
    type: "Academic",
  },
  {
    id: 6,
    type: "Podcaster",
  }
]

const SelectTypeModal: React.FC<SelectTypeModalProps> = (props) => {
  const { showModal, setShowModal, selectedType, setSelectedType } = props;
  
  const contributorRolesQuery = useQuery({ queryKey: ['contributor-roles'], queryFn: get_contributor_roles, retry: 10, staleTime: 1000 * 60 * 3 }) 
  const router = useRouter();
  const goBack = () => {
    router.push("/contributor");
  }

  return (
    <div className={styles.roleModalContainer(showModal)} onClick={() => { setShowModal(false) }}>
      <div className={styles.roleModal(showModal)} onClick={(e) => { e.stopPropagation(); }}>
        <div className="px-5 box-border">
          <div className="relative w-full flex justify-between items-center box-border text-slate-500">
            <button className="text-sm my-5" onClick={() => setShowModal(!showModal)}>Cancel</button>
          </div>
          <h3 className="text-xl font-bold mb-3">About Me</h3>
          <div className="px-3">
            <textarea className="w-full bg-white post-reply-input outline-none text-sm text-slate-500" placeholder="Choose properities that are applicable to you"></textarea>
            <SearchBox />
            <div className="my-7 grid grid-cols-3 w-11/12	 gap-4">
              {
                contributorRolesQuery?.data?.map((list:ContributorObj) =>
                  <div key={list.id} onClick={() => setSelectedType(list.slug)}>
                    <div className={selectedType === list.slug ? "cursor-pointer bg-black text-white border-0 py-3 px-4 rounded-full inline-flex items-center bg-black" : "cursor-pointer bg-gray-100 text-slate-800  border-0 py-3 px-4 rounded-full inline-flex items-center bg-black"}>
                      <span className="mr-1 text-sm">{list.name}</span>
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
        <div className="bg-black absolute bottom-5 md:w-4/12 w-full md:ml-4 font-bold text-white rounded-md text-center text-md p-3" onClick={() => { setShowModal(false) }}>
          Save
        </div>
      </div>
    </div>
  );
};

export default SelectTypeModal;
