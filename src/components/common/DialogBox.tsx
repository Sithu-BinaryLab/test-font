import React from "react";

interface SignInProps {
    setIsOpenDialogBox: any,
    title: string,
    content: string,
    btnName: string
 }

const DialogBox: React.FC<SignInProps> = ({
    setIsOpenDialogBox,
    title,
    content,
    btnName,
}) => {
  

  return (
    <>
    <div className="justify-center flex  items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="flex max-w-lg">
        <div className="rounded-xl bg-white text-black p-6 shadow-2xl z-40 mx-10">
          <p className="text-md font-bold text-center">{title}</p>

          <p className="mt-3 text-md text-center ">
            {content}
            {/* We couldn’t find an account associated with number “380962987089”.
            Check your credentials again.
            Register
            OK */}
          </p>
          <hr className="w-full h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="mt-4 mx-8 flex items-center justify-between text-md">
            <button
              type="button"
              className="rounded px-4 py-1 font-medium text-orange-600"
            >
              {btnName}
            </button>
            <button
              type="button"
              className="ml-2 px-4 py-1 font-medium text-black text-md"
              onClick={() => setIsOpenDialogBox(false)}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
  );
};



export default DialogBox;
