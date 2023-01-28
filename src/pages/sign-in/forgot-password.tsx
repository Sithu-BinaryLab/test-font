import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";

//components
import ResponsiveFrame from "src/components/ResponsiveFrame";
import InputComponent from "src/components/forms/InputComponent";

interface ForgotPasswordProps { }

type Inputs = {
  email: string,
};

const inputStyle = "input-container w-full relative bg-newsmast-very-light-blue text-newsmast-dark-blue h-max mt-3 rounded-lg pl-5  focus:border-b-4 border border-red-600 outline-0 border-0"

const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
    const [tab, setTab] = useState<"email" | "phone">("email");
    const router = useRouter();
    const goToResetPassword = () => {
        router.push("/sign-in/reset-password");
    }
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        //to do fetch api
        goToResetPassword();
    }; 

    return (
        <ResponsiveFrame>
            <div className="relative mx-5">
                <h3 className="text-3xl text-black font-bold my-10 uppercase">Forgot Password</h3>
                {/* no develop in beta version */}
                {/* <div className="p-1 w-max h-max bg-newsmast-tab-grey flex gap-2 rounded-full overflow-hidden mb-7">
          <button
            className={[
              "px-7 py-2 rounded-full",
              tab == "email" ? "bg-white shadow" : "",
            ].join(" ")}
            type="button"
            onClick={() => setTab("email")}
          >
            Email
          </button>
          <button
            className={[
              "px-7 py-2 rounded-full",
              tab == "phone" ? "bg-white shadow" : "",
            ].join(" ")}
            type="button"
            onClick={() => setTab("phone")}
          >
            Phone Number
          </button>
        </div> */}
                {/* no develop in beta version */}
                {
                    //   (tab == "email") ? (
                    //     <InputComponent label="Email" />
                    //   ) : (
                    //     <div className={["flex justify-between box-border"].join(" ")}>
                    //       <div className="bg-newsmast-very-light-blue text-gray-800 placeholder:text-gray-800 px-5 py-5 mt-5 rounded-lg" style={{ width: "27%" }}>
                    //         🇲🇲 +950
                    //       </div>
                    //       <input
                    //         className="bg-newsmast-very-light-blue text-gray-800 placeholder:text-gray-800 px-5 py-5 mt-5 rounded-lg col-span-3"
                    //         placeholder="000-00-00"
                    //         type="text"
                    //         style={{ width: "71%" }}
                    //       />
                    //     </div>
                    //   )
                }
                 <form onSubmit={handleSubmit(onSubmit)}>
                 <input
                        className={inputStyle}
                        {...register("email", { required: true })}
                        placeholder="Email"
                        type="email"
                    />
                <div className="my-10">
                    <button className="px-5 py-4 bg-black text-white rounded-lg w-full">
                        Continue
                    </button>
                </div>
                </form>
            </div>
        </ResponsiveFrame>
    );
};

export default ForgotPassword;
