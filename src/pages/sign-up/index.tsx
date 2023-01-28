import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import AppleIcon from "src/assets/icons/apple-icon";
import GoogleIcon from "src/assets/icons/google-icon";
import TwitterIcon from "src/assets/icons/twitter-icon";

//components
import ResponsiveFrame from "src/components/ResponsiveFrame";
import { useMutation } from "@tanstack/react-query";
import { RegisterReponseObj, RegisterWithEmailProps, register_with_email } from "src/mutations/auth";

interface SignUpProps { };

interface Inputs {
    email: string,
    username: string;
    password: string,
    confirm_password: string
};

const inputStyle = "input-container w-full relative bg-newsmast-very-light-blue text-newsmast-dark-blue h-max mt-3 rounded-lg pl-5  focus:border-b-4 border border-red-600 outline-0 border-0"

const SignUp: React.FC<SignUpProps> = () => {
    const router = useRouter();
    const goToEmailVerify = () => {
        router.push("/sign-up/email-verification");
    }

    const { register, setError, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const registerWithEmailMutation = useMutation({
        mutationFn: register_with_email,
        onSuccess: (result: RegisterReponseObj) => {
            localStorage.setItem("account_id", result.account_id.toString());
            localStorage.setItem("id", result.id.toString());
            goToEmailVerify();
        },
        onError: (error: any, variables: any) => {
            // do something
            console.log({
                error,
                variables
            })

            try {
                if (error.status = 422) {
                    const emailError = error.response?.data?.details?.email[0];
                    const usernameError = error.response?.data?.details?.username[0];
                    if (emailError?.error == "ERR_TAKEN") {
                        setError("email", { type: "server-error", message: `${variables.email} is already taken` })
                    }
                    if (usernameError?.error == "ERR_TAKEN") {
                        setError("username", { type: "server-error", message: `${variables.username} is already taken` })
                    }
                }
            } catch (error) {
                console.log({ error });
            }
        }
    })
    const onSubmit: SubmitHandler<Inputs> = async data => {
        //to do fetch api
        const mutationData: RegisterWithEmailProps = {
            username: data.username,
            email: data.email,
            password: data.password,
        }
        const response = await registerWithEmailMutation.mutate(mutationData);
        console.log({ response });
        // goToEmailVerify();
    };

    const showMutationError = () => {
        console.log(registerWithEmailMutation.error)
    }

    return (
        <ResponsiveFrame>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-3xl text-black font-bold my-10 ml-5 uppercase">Create Account</h3>
                {/* no develop in beta version */}
                {/* <div className="p-1 w-max h-max bg-gray-300 flex gap-2 rounded-full overflow-hidden ml-5">
                        <button
                        className={["px-7 py-2 ", tab == "email" ? "bg-white rounded-full" : ""].join(" ")}
                        onClick={() => setTab("email")}>
                         Email
                        </button>
                        <button
                        className={["px-7 py-2", tab == "phone" ? "bg-white rounded-full" : ""].join(" ")}
                        onClick={() => setTab("phone")}>
                            Phone Number
                        </button>
                    </div> */}
                <div className="mx-5">
                    <input
                        className={inputStyle}
                        {...register("email", { required: true })}
                        placeholder="Email"
                        type="email"
                    />
                    {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                    {/* no develop in beta version   */}
                    {/* <div className={["flex justify-between box-border", , tab != "phone" ? "hidden" : ""].join(" ")}>
                            <div className="bg-gray-200 text-gray-800 placeholder:text-gray-800 px-5 py-5 mt-5 rounded-lg" style={{ width: "27%" }}>
                                🇲🇲 +950
                            </div>
                            <input
                                className="bg-gray-200 text-gray-800 placeholder:text-gray-800 px-5 py-5 mt-5 rounded-lg col-span-3"
                                placeholder="000-00-00"
                                type="text"
                                style={{ width: "71%" }}
                            />
                        </div> */}
                    <input
                        className={inputStyle}
                        {...register("username", { required: true })}
                        placeholder="Username"
                        type="text"
                    />
                    {errors.username && <p className="text-red-600">{errors.username.message}</p>}
                    <input
                        className={inputStyle}
                        placeholder="Password"
                        type="password"
                        {...register("password", { required: true })}
                    />
                    {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                    <input
                        className={inputStyle}
                        placeholder="Repeat Password"
                        type="password"
                        {...register("confirm_password", { required: true })}
                    />
                    {errors.confirm_password && <p className="text-red-600">{errors.confirm_password.message}</p>}
                </div>
                <button className="flex justify-center w-full px-5 mt-5 mb-7" onClick={handleSubmit(onSubmit)} type="submit">
                    <div className="px-5 py-4 text-center bg-black text-white w-full rounded-lg">
                        Create Account
                    </div>
                </button>
                <div className="relative flex justify-center w-full">
                    <p className="text-center py-5 text-gray-700 z-10 w-max bg-white px-4">
                        or
                    </p>
                    <div className="absolute top-8 border-t border-gray-500 w-full"></div>
                </div>
                <div className="flex justify-center gap-3 mt-3">
                    <Link className="p-1 border-2 border-gray-300 rounded-full" href="/">
                        <AppleIcon width={40} />
                    </Link>
                    <Link className="p-2 border-2 border-gray-300 rounded-full" href="/">
                        <TwitterIcon width={30} />
                    </Link>
                    <Link className="p-1 border-2 border-gray-300 rounded-full" href="/">
                        <GoogleIcon width={40} />
                    </Link>
                </div>
                <div className="flex justify-center items-center gap-3 mt-5">
                    <p>Already have an account ?</p>
                    <Link className="px-5 py-2 border-2 border-gray-200 rounded-full" href="/sign-in">Sign In</Link>
                </div>
            </form>
        </ResponsiveFrame>
    );
};

export default SignUp;
