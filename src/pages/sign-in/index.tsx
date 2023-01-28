import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

// components
import ResponsiveFrame from "src/components/ResponsiveFrame";
import DialogBox from "src/components/common/DialogBox";

interface Inputs {
    email: string,
    password: string,
};


const inputStyle = "input-container w-full relative bg-newsmast-very-light-blue text-newsmast-dark-blue h-max mt-3 rounded-lg pl-5  focus:border-b-4 border border-red-600 outline-0 border-0"

export default function App() {
    const router = useRouter();
    const goToHome = () => {
        router.push("/home");
    }
    const goToSignUp = () => {
        router.push("/sign-up")
    }
    const goToForgotPassword = () => {
        router.push("sign-in/forgot-password")
    }

    const [isOpenDialogBox, setIsOpenDialogBox] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        //to do fetch api
        //to call DialogBox if not fount account
        goToHome();
    };

    console.log(watch("email")) // watch input value by passing the name of it

    return (
        <ResponsiveFrame>
            <div className="relative mx-5">
                <h3 className="text-3xl text-black font-bold my-10 uppercase">Login</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className={inputStyle}
                        {...register("email", { required: true })}
                        placeholder="Email"
                        type="email"
                    />
                    {/* {errors.password && <span className="text-sm text-newmast-warning">This field is required</span>} */}
                    <input
                        className={inputStyle}
                        placeholder="Password"
                        type="password"
                        {...register("password", { required: true })}
                    />
                    {/* {errors.password && <span className="text-sm text-newmast-warning">This field is required</span>} */}
                    <div className="w-full flex justify-end py-5" onClick={goToForgotPassword}>
                        <div className="text-newmast-warning text-right cursor-pointer text-md">
                            Forgot your password?
                        </div>
                    </div>
                    <div className="mb-5">
                        <button className="px-5 py-4 bg-black text-white rounded-lg w-full" type="submit">
                            Login
                        </button>
                    </div>
                    {
                        isOpenDialogBox && (
                            <DialogBox title="Error"
                                content=" We couldn’t find an account associated with number “380962987089”.
                                Check your credentials again.
                                Register
                                OK"
                                btnName="Register" setIsOpenDialogBox={setIsOpenDialogBox} />
                        )
                    }
                </form>
                <div className="relative flex justify-center w-full">
                    <p className="text-center py-5 text-gray-700 z-10 w-max bg-white px-4">
                        or
                    </p>
                    <div className="absolute top-8 border-t border-gray-500 w-full"></div>
                </div>
                <div className="flex justify-center gap-3 mt-3">

                </div>
                <div className="flex justify-center gap-3 mt-40" onClick={goToSignUp}>
                    <p className="text-center mt-2">{"Don't have account yet?"}</p>
                    <div
                        className="px-5 py-2 border-2 border-gray-200 rounded-full cursor-pointer"
                    >
                        Create
                    </div>
                </div>
            </div>
        </ResponsiveFrame>
    );
}