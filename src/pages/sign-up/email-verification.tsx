import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import ResponsiveFrame from "src/components/ResponsiveFrame";
import OtpInput from 'react18-input-otp';
import { useMutation } from "@tanstack/react-query";
import { VerifyOtpProps, verify_otp } from "src/mutations/auth";

interface EmailVerificationProps {

}

interface Inputs {
    otp_code: number;
};

const EmailVerification: React.FC<EmailVerificationProps> = () => {
    const router = useRouter();
    const [error, setError] = useState<string | null>();
    const goToHome = () => {
        router.push("/sign-up/primary-select");
    }

    const [OTPValue, setOTPValue] = React.useState("");
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const registerWithEmailMutation = useMutation({
        mutationFn: verify_otp,
        onSuccess: (result: any) => {
            // localStorage.setItem("account_id",result.account_id.toString());
            console.log({ result });
            localStorage.setItem("---nmat---", result.access_token);
            goToHome();
        },
        onError: (error: any, variables: any) => {
            // do something
            console.log({
                error,
                variables
            })

            // try {
            //     if(error.status = 422){
            //         const emailError = error.response?.data?.details?.email[0];
            //         const usernameError = error.response?.data?.details?.username[0];
            //         if(emailError?.error == "ERR_TAKEN"){
            //             setError("email", {type:"server-error", message:`${variables.email} is already taken`})
            //         }
            //         if(usernameError?.error == "ERR_TAKEN"){
            //             setError("username", {type:"server-error", message:`${variables.username} is already taken`})
            //         }
            //     } 
            // } catch (error) {
            //     console.log({error});
            // }
        }
    })
    const onSubmit: SubmitHandler<Inputs> = data => {
        //to do fetch api
        console.log(OTPValue);
        const user_id = localStorage.getItem("id");
        if (user_id) {
            const mutationData: VerifyOtpProps = {
                user_id: +user_id,
                confirmed_otp_code: OTPValue,
            }
            registerWithEmailMutation.mutate(mutationData);
        }

        // goToHome();
    };



    return (
        <ResponsiveFrame>

            <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                <div className="flex flex-col items-center justify-center text-center space-y-2">
                    <div className="font-bold text-2xl mt-20 text-black uppercase">
                        <p>Email Verification</p>
                    </div>
                    <div className="flex flex-col text-sm font-medium text-gray-400">
                        <p>We sent a code to your email</p>
                        <p className="text-newsmast-error">newsmmast@gmail.com</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div className="flex flex-col space-y-16">
                            <div className="flex flex-col gap-2 items-center justify-center mx-auto w-full max-w-xs">
                                <OtpInput containerStyle="w-full" errorStyle="text-red-600 border-b-4 border border-red-600 outline-0 border-0" hasErrored={false} focusStyle="border-b-4 border border-red-600 outline-0 border-0" className="w-full opt-input-box" value={OTPValue} onChange={(opt: any) => setOTPValue(opt)} numInputs={4} separator={<span></span>}
                                />
                                {/* {errors.otp_code && <span className="text-sm text-newmast-warning">This field is required</span>} */}
                            </div>
                            <div className="flex justify-center item-center text-sm">
                                <p className="item-center">{"Don't receive your code?"}</p>
                                <p className="rounded-full cursor-pointer pl-2 text-newsmast-error">Re-send in 19 sec...</p>
                            </div>
                            <div className="flex flex-col space-y-5">
                                <div className="px-7 md:px-0">
                                    <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-black border-none text-white text-sm shadow-sm" type="submit">
                                        Verify
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </ResponsiveFrame>
    )

}

export default EmailVerification;