import React, { FormEventHandler, use, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ResponsiveFrame from "src/components/ResponsiveFrame";
import OtpInput from 'react18-input-otp';
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { VerifyContributorProps, verify_waitlist } from "src/mutations/wait_lists";

interface InvitationCodeProps { };

const InvitationCode: React.FC<InvitationCodeProps> = () => {
    const router = useRouter();
    const [OTPValue, setOTPValue] = useState("");
    const [errorMessage, setErrorMessage] = useState(" ");
    const verifyWaitlistMutation = useMutation({
        mutationFn: verify_waitlist
    })
    const goToStartScreen = () => {
        router.push("/start-screen");
    }
    const goToWaitList = () => {
        router.push("/waitlist");
    }

    useEffect(() => {
        console.log("otp value", OTPValue);
    }, [setOTPValue]);

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        if (!OTPValue) {
            setErrorMessage("The code you entered is either incorrect or has expired");
            return;
        }
        const data: VerifyContributorProps = {
            invitation_code: OTPValue,
        }
        console.log({ data });
        // const result = await verifyWaitlistMutation.mutateAsync(data);
        // console.log({ result });
        goToStartScreen();
    }

    return (
        <ResponsiveFrame>
            <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                <div className="flex flex-col items-center justify-center text-center space-y-2">
                    <div className="font-bold text-black text-2xl mt-20 uppercase">
                        <p>Invitation Code</p>
                    </div>
                    <div className="flex flex-row text-sm font-medium text-gray-400">
                        <p>If you have an invitation, enter your code here</p>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col space-y-16">
                        <div className="flex flex-col gap-2 items-center justify-center mx-auto w-full max-w-xs">
                            <OtpInput
                                containerStyle="w-full text-black"
                                errorStyle="text-red-600 border-b-4 border border-red-600 outline-0 border-0"
                                hasErrored={false}
                                focusStyle="border-b-4 border border-red-600 outline-0 border-0"
                                className="w-full text-black opt-input-box"
                                value={OTPValue}
                                onChange={(opt: any) => setOTPValue(opt)}
                                numInputs={4}
                                separator={<span></span>}
                            />
                            <p className="text-sm text-newsmast-error">{errorMessage}</p>
                        </div>

                        <div className="flex flex-col space-y-5">
                            <form onSubmit={handleSubmit} className="px-7 md:px-0">
                                <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-black border-none text-white text-sm shadow-sm" type="submit">
                                    Verify
                                </button>
                            </form>

                            <div className="px-7 md:px-0">
                                <button className="flex gap-2 flex-row items-center justify-center text-center w-full border rounded-xl py-5 border-gray-100 text-black text-sm shadow-sm">
                                    <Image src={"/images/contact.png"} width={20} height={20} alt="contributor" className="flex justify-center" />
                                    <span className="text-black">Contact Support</span>
                                </button>
                            </div>
                            <div className="flex md:justify-between item-center">
                                <p className="absolute md:left-24 left-10 bottom-4 item-center text-black">{"Don't have invatation code?"}</p>
                                <p className="absolute right-9 md:right-24  bottom-3 border-2 rounded-full px-2 py-1 cursor-pointer text-black" onClick={goToWaitList}>Join Waitlist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ResponsiveFrame>
    )

}

export default InvitationCode;