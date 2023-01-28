import React from "react";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";

import ResponsiveFrame from "src/components/ResponsiveFrame";

interface NewPasswordProps { };

interface Inputs {
    password: string;
    confirm_password: string;
};


const inputStyle = "input-container w-full relative bg-newsmast-very-light-blue text-newsmast-dark-blue h-max mt-3 rounded-lg pl-5  focus:border-b-4 border border-red-600 outline-0 border-0"

const NewPassword: React.FC<NewPasswordProps> = () => {

    const router = useRouter();
    const goToHome = () => {
        router.push("/home");
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        // to return if password and confirm password not equl
        //to do fetch api
        goToHome();
    };
    return (
        <ResponsiveFrame>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-3xl font-bold my-10 ml-5 uppercase">New Password</h3>
                <div className="mx-5">
                    <input
                        className={inputStyle}
                        placeholder="Password"
                        type="password"
                        {...register("password", { required: true })}
                    />
                    <input
                        className={inputStyle}
                        placeholder="Repeat Password"
                        type="password"
                        {...register("confirm_password", { required: true })}
                    />
                </div>
                <button className="flex justify-center w-full px-5 mt-7 mb-7" onClick={() => handleSubmit(onSubmit)} type="submit">
                    <div className="px-5 py-4 text-center bg-black text-white w-full rounded-lg">
                        Update
                    </div>
                </button>
            </form>
        </ResponsiveFrame>
    );
};

export default NewPassword;
