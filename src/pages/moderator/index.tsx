import React, { FormEventHandler, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ResponsiveFrame from "src/components/ResponsiveFrame";
import InputComponent from "src/components/forms/InputComponent";
import { ModeratorWaitlistProps, register_moderator_waitlist } from "src/mutations/moderator";
import { useMutation } from "@tanstack/react-query";

type ModeratorProps = {

}

const Moderator = ({ }: ModeratorProps) => {

    const router = useRouter();
    const endUserWaitlistMutation = useMutation({
        mutationFn: register_moderator_waitlist
    })
    const goToWelcomeScreen = () => {
        router.push("/welcome-screen");
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const target = e.target as any;
        const data: ModeratorWaitlistProps = {
            email: target.email.value as string,
            description: target.description.value as string
        }
        console.log({ data });
        const result = await endUserWaitlistMutation.mutateAsync(data);
        console.log({ result });
        //this pages used request, so return to welcome page
        goToWelcomeScreen();
    }

    return (
        <ResponsiveFrame>
            <div className="flex w-full flex-col">
                <div className="text-center pt-20">
                    <div className="flex justify-center mb-5">
                        <Image src="/images/Vector.png" width={70} height={70} alt="contributor" />
                    </div>
                    <h3 className="text-2xl font-bold">Join us as moderator</h3>
                    <p className="text-sm">We’re welcoming volunteers in all our communities</p>
                </div>
                <form onSubmit={handleSubmit} className="px-5 flex flex-col space-y-5 mt-5">
                    <InputComponent label="Email" name="email" type="email" />
                    <textarea
                        className="w-full rounded-lg border-2 border-gray-100 p-5 text-sm"
                        placeholder="Please describe in why do you want to become a moderator"
                        rows={8}
                        id="message"
                        name="description"
                    ></textarea>
                    <button className="absolute bottom-3 w-11/12 bg-gray-100 p-3 rounded-lg">Apply</button>
                </form>
                {/* <p className="absolute bottom-44 text-sm px-32">Riveiw might take up to 5 work days</p> */}
            </div>
        </ResponsiveFrame>
    )

}

export default Moderator;