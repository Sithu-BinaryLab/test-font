import React, { FormEventHandler } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ResponsiveFrame from "src/components/ResponsiveFrame";
import SelectTypeModal from "src/components/ContributorModal/SelectTypeModal";
import InputComponent from "src/components/forms/InputComponent";
import { ContributorWaitlistProps, register_contributor_waitlist } from "src/mutations/contributor";
import { useMutation } from "@tanstack/react-query";

type ContributorProps = {

}

const ContributorType = ({ setIsOpenSelectRoleModal }: any) =>
    <div>
        <div className="flex justify-center mb-3">
            <Image src="/images/contributor.png" width={70} height={70} alt="contributor" className="flex justify-center" />
        </div>
        <h3 className="text-2xl font-bold text-center">Join us a content contributor</h3>
        <p className="text-sm text-newsmast-dark-blue mt-2 mb-5 text-center">
            We’d love to hear from all content contributors who can <br />
            help launch one of our communities. </p>
        <p className="text-sm text-newsmast-dark-blue mt-2 mb-5 text-center"> Journalists, academics, media organisations, charities <br />and NGOs are among the early contributors. As are <br />diverse voices from minority groups. And anyone <br />creating datajournalism, photojournalism or podcasts.</p>
        <div className="flex justify-between input-container relative bg-newsmast-very-light-blue text-newsmast-dark-blue h-max mt-3 px-5 mx-5 rounded-lg">
            <p className="my-auto">About me</p>
            <div className="flex justify-between space-x-3">
                <div className="bg-white my-auto py-2 px-3 rounded-full">
                    <p className="text-sm">Select your role</p>
                </div>
                <svg onClick={() => setIsOpenSelectRoleModal(true)} className="fill-current h-4 w-4 my-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
            </div>
        </div>
    </div>

const ContributorMail = () =>
    <div className="px-5 flex flex-col space-y-5 mt-5">
        <InputComponent label="Email" name="email" type="email" />
        <textarea
            className="w-full rounded-lg border-2 border-gray-100 p-5 text-sm"
            placeholder="Please describe in which area you are working and which topic you are observing"
            rows={8}
            name="description"
            id="message"
        ></textarea>
    </div>


const Contributor = ({ }: ContributorProps) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [tab, setTab] = useState<number>(0);
    const [isOpenSelectRoleModal, setIsOpenSelectRoleModal] = useState<boolean>(false);
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const router = useRouter();
    const goToWelcomeScreen = () => {
        router.push("/goToWelcomeScreen");
    }
    const contributorWaitlistMutation = useMutation({
        mutationFn: register_contributor_waitlist
    })

    const handleNext = () => {
        if (tab == 1) {
            setShowModal(true);
        } else {
            setTab(pre => {
                return pre + 1;
            })
        }
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const target = e.target as any;
        const data: ContributorWaitlistProps = {
            email: target.email.value as string,
            role_id: target.role_id.value as string,
            description: target.description.value as string,
        }
        console.log({ data });
        const result = await contributorWaitlistMutation.mutateAsync(data);
        console.log({ result });
        //this pages used request, so return to welcome page
        goToWelcomeScreen();
    }

    useEffect(() => {
        if (window) {
            const bodyTag = document.querySelector("body") as any;
            bodyTag.style.backgroundColor = "white";
        }
    }, []);

    return (
        <ResponsiveFrame>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-1 my-10 mx-5">
                    <div className={["w-full bg-black rounded-full", tab == 0 ? "bg-black" : "bg-newsmast-tab-grey"].join(" ")}
                        style={{ height: "0.5rem" }}>
                    </div>
                    <div className={["w-full bg-black rounded-full", tab == 1 ? "bg-black" : "bg-newsmast-tab-grey"].join(" ")} style={{ height: "0.5rem" }}>
                    </div>
                </div>
                <div className={[tab != 0 ? "hidden" : ""].join(" ")}>
                    <ContributorType setIsOpenSelectRoleModal={setIsOpenSelectRoleModal} />
                </div>
                <div className={[tab != 1 ? "hidden" : ""].join(" ")}>
                    <ContributorMail />
                </div>
                <input type="hidden" name="role_id" value={selectedType ? selectedType : ""} onChange={() => { }} />
                <div className="relative top-60 mx-5">
                    <button className="bg-black py-3 rounded-lg font-semibold text-white w-full"
                        type="submit"
                        onClick={handleNext}
                    >
                        Continue
                    </button>
                </div>
                {
                    isOpenSelectRoleModal && (
                        <SelectTypeModal selectedType={selectedType} setSelectedType={setSelectedType} showModal={isOpenSelectRoleModal} setShowModal={setIsOpenSelectRoleModal} />
                    )
                }
            </form>
        </ResponsiveFrame>
    );
};

export default Contributor;