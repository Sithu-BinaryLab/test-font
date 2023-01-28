import React, { FormEventHandler, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ResponsiveFrame from "src/components/ResponsiveFrame";
import InputComponent from "src/components/forms/InputComponent";
import { useMutation } from "@tanstack/react-query";
import { EndUserWaitlistProps, register_end_user_waitlist } from "src/mutations/end_user";

type WaitListProps = {

}

const WaitList = ({ }: WaitListProps) => {

    const router = useRouter();
    const endUserWaitlistMutation = useMutation({
        mutationFn: register_end_user_waitlist
    })
    const goToWelcomeScreen = () => {
        router.push("/welcome-screen");
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        if(!endUserWaitlistMutation.isLoading){
            const target = e.target as any;
            const data: EndUserWaitlistProps = {
                email: target.email.value as string,
            }
            console.log({ data });
            const result = await endUserWaitlistMutation.mutateAsync(data);
            console.log({ result });
            //this pages used request, so return to welcome page
            goToWelcomeScreen();
        }
        
    }

    return (
        <ResponsiveFrame>
            <div className="flex w-full flex-col">
                <div className="text-center pt-20">
                    <div className="flex justify-center mb-5">
                        <Image src="/images/waitlist.png" width={70} height={70} alt="contributor" />
                    </div>
                    <h3 className="text-2xl font-bold">Join Our Waitlist</h3>
                    <p className="text-sm px-5 pt-3">To be notified about all the further updates please leave your email below and we will add you to wait que unities</p>
                </div>
                <form onSubmit={handleSubmit} className="px-5 flex flex-col space-y-5 mt-5">
                    <InputComponent label="Email" name="email" type="email" />
                </form>
                {/* <p className="absolute bottom-44 text-sm px-32">Riveiw might take up to 5 work days</p> */}
                <button className="absolute bottom-3 ml-5 w-11/12 bg-gray-100 p-3 rounded-lg">Apply</button>
            </div>
        </ResponsiveFrame>
    )

}

export default WaitList;