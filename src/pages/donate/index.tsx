import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ResponsiveFrame from "src/components/ResponsiveFrame";
import InputComponent from "src/components/forms/InputComponent";


type DonationProps = {

}

const DivisinLine = ({ margin }: any) => <hr className={`h-px my-${margin} bg-gray-200 border-0 dark:bg-gray-700`}></hr>;

const Donation = ({ }: DonationProps) => {

    const router = useRouter();

    return (
        <ResponsiveFrame title="Donate">
            <DivisinLine margin={8} />
            <div className="flex w-full flex-col overflow-x-auto h-screen">
                <div className="text-center mx-5">
                    <div className="bg-gray-100 flex justify-between p-4 border-2 border-gray-400">
                        <p>Donation</p>
                        <div className="bg-black rounded-full p-2">
                            <Image src="/images/Path.png" width={10} height={10} alt="contributor" />
                        </div>
                    </div>
                </div>
                <div className="px-5 flex flex-col space-y-5 mt-2">
                    <InputComponent label="Please insert amount" />
                </div>
                <DivisinLine margin={4} />
                <div className="pl-5">
                    <p className="text-sm">Your Summary:</p>
                    <div className="flex space-x-3">
                        <Image src="/images/dollar.png" width={10} height={10} alt="dollar sign" />
                        <p>20.00 <span className="text-sm">Donation</span></p>
                    </div>
                </div>
                <DivisinLine margin={4} />
                <div className="flex flex-col space-y-5">
                    <button className="mx-5 text-center border rounded-xl outline-none py-4 bg-black border-none text-white text-2xl shadow-sm">
                        <div className="flex justify-center space-x-3">
                            <p>Pay with Apple</p>
                            {/* <Image src="/images/Ipay.png" width={59} height={25} alt="contributor" /> */}
                        </div>
                    </button>
                    <button className="mx-5 text-center border rounded-xl py-2 border-2 text-black text-2xl shadow-sm">
                        Pay with GPay
                    </button>
                </div>
                <div className="inline-flex items-center justify-center w-full mt-5">
                    <hr className="w-full mx-5 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">Or pay with card</span>
                </div>
                <div className="flex flex-col space-y-3 mx-5 text-sm">
                    <InputComponent label="0000 0000 0000" />
                    <InputComponent label="Email (Optional)" />
                    <div className="flex justify-between space-x-5">
                        <InputComponent label="MM/YY" />
                        <InputComponent label="CVC" />
                    </div>
                    <InputComponent label="Name on Card" />
                    <InputComponent label="Email (Optional)" />
                </div>

                {/* <p className="absolute bottom-44 text-sm px-32">Riveiw might take up to 5 work days</p> */}
                <button className="ml-5 w-11/12 bg-gray-100 p-3 mt-2 rounded-lg">Pay</button>
            </div>
        </ResponsiveFrame>
    )

}

export default Donation;