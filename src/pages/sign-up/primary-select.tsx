import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BsCheck } from "react-icons/bs";
import countryCodes from "country-codes-list";
import SportIcon from "src/assets/icons/sport-icon";
import Image from "next/image";

//components
import ResponsiveFrame from "src/components/ResponsiveFrame";
import PurchaseModal from "src/components/PurchaseModal";
import InputComponent from "src/components/forms/InputComponent";
import { useQuery } from "@tanstack/react-query";
import { get_communities } from "src/queries/communities";

interface FillStateProps {}

interface SelectItemProps {
  name: string;
  slug: string;
  selected: boolean;
  handleSelect: (slug: string) => void;
}

interface ContributorItemProps {}

const SelectItem: React.FC<SelectItemProps> = ({
  name,
  slug,
  selected,
  handleSelect,
}) => {
  return (
    <div
      className={[
        "flex justify-between items-center py-4 px-4 border rounded overflow-hidden text-black cursor-pointer",
        selected ? "border-black" : "border-newsmast-blue-grey",
      ].join(" ")}
      onClick={() => handleSelect(slug)}
    >
      <div className="flex items-center gap-2">
        <div className="p-2" style={{ backgroundColor: "#F3FFF9" }}>
          <SportIcon width="2.5rem" />
        </div>
        <h5 className="font-semibold text-sm">{name}</h5>
      </div>
      <div
        className={[
          "flex justify-center items-center rounded-full border-2",
          selected
            ? "bg-black border-transparent"
            : "bg-white border-newsmast-blue-grey",
        ].join(" ")}
        style={{ width: "1.5rem", aspectRatio: "1" }}
      >
        <BsCheck className="fill-white" />
      </div>
    </div>
  );
};

const ContributorItem: React.FC<ContributorItemProps> = () => {
  const [follow, setFollow] = useState<boolean>(false);
  return (
    <div className="w-full flex gap-2 border-b border-b-newsmast-light-blue py-3">
      <div
        className="relative border-2 border-newsmast-tab-grey rounded-full"
        style={{
          width: "6rem",
          height: "6rem",
          padding: "0.5rem",
          aspectRatio: "1",
        }}
      >
        <div className="rounded-full overflow-hidden">
          <Image
            src="/images/profile-sample-1.png"
            alt=""
            className="w-full"
            width="828"
            height="828"
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-end">
          <div className="flex flex-col justify-end">
            <h3 className="font-semibold mb-0">$Name</h3>
            <p className="text-newsmast-grey-3 mt-0">@iwashere</p>
          </div>
          <button
            type="button"
            className="flex gap-2 items-center border border-newsmast-blue-grey px-5 rounded-full"
            style={{
              height: "2.2rem",
            }}
            onClick={() => setFollow((pre) => !pre)}
          >
            Following
            {follow && <BsCheck className="fill-black" />}
          </button>
        </div>
        <p>Some description subtitle goes here if any added</p>
      </div>
    </div>
  );
};

const FillState: React.FC<FillStateProps> = () => {
  const [countryCodesArray, setCountryCodes] = useState<Array<any> | []>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [tab, setTab] = useState<number>(0);
  const [token, setToken] = useState<string>("");
  const router = useRouter();
  const [selectedCommunities, setSelectedCommunities] = useState<any[]>([]);
  const [primaryInterest, setPrimaryInterest] = useState<string>("");

  const contributorRolesQuery = useQuery({
    queryKey: ["communities", { myAccessToken: token }],
    queryFn: get_communities,
    retry: 10,
    staleTime: 1000 * 60 * 3,
  });
  const goToHome = () => {
    router.push("/home");
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCountryCodes(countryCodes.all());
      const token = localStorage.getItem("---nmat---");
      if (token) {
        setToken(token);
        // contributorRolesQuery.refetch();
      }
    }
  }, []);

  const handleNext = () => {
    if (tab == 3) {
      // setShowModal(true);
      goToHome();
    } else {
      setTab((pre) => {
        return pre + 1;
      });
    }
  };

  const handleSelect = (slug: string) => {
    if (selectedCommunities.includes(slug)) {
      const newSelectedCommunities = selectedCommunities.filter(
        (item) => item != slug
      );
      setSelectedCommunities([...newSelectedCommunities]);
    } else {
      setSelectedCommunities([...selectedCommunities, slug]);
    }
  };
  

  const getSelectedItem = () => {
    if (contributorRolesQuery.data?.length) {
      return contributorRolesQuery.data?.filter((item) => {
        let flag = false;
        selectedCommunities.map((selec) => {
          if (item.slug == selec) {
            flag = true;
          }
        });
        return flag;
      });
    }
    return [];
  };

  useEffect(() => {
    if (window) {
      const bodyTag = document.querySelector("body") as any;
      bodyTag.style.backgroundColor = "white";
    }
  }, []);

  return (
    <ResponsiveFrame>
      <div className="grid grid-cols-3 gap-1 mt-10 mb-5 px-5">
        <div
          className={[
            "w-full bg-black rounded-full",
            tab == 0 ? "bg-black" : "bg-newsmast-tab-grey",
          ].join(" ")}
          style={{ height: "0.5rem" }}
        ></div>
        <div
          className={[
            "w-full bg-black rounded-full",
            tab == 1 ? "bg-black" : "bg-newsmast-tab-grey",
          ].join(" ")}
          style={{ height: "0.5rem" }}
        ></div>
        <div
          className={[
            "w-full bg-black rounded-full",
            tab == 2 ? "bg-black" : "bg-newsmast-tab-grey",
          ].join(" ")}
          style={{ height: "0.5rem" }}
        ></div>
      </div>
      {/* no need develop in beta version */}
      {/* <div className={[
        tab != 0 ? "hidden" : ""
      ].join(" ")}>
        <div className="px-5">
          <h3 className="text-2xl font-bold">{"What’s your birth date?"}</h3>
          <p className="text-sm text-newsmast-dark-blue mt-2 mb-5">{"It won’t be public"}</p>
          <InputComponent type="date" label="Date of Birth" />
        </div>
      </div> */}
      <div className={[tab != 0 ? "hidden" : ""].join(" ")}>
        <div className="px-5">
          <h3 className="text-2xl font-bold text-black">
            {"Choose communities of interest"}
          </h3>
          <p className="text-sm text-newsmast-dark-blue mt-2 mb-5">
            {"Select at least 5"}
          </p>
          <div className="flex flex-col gap-2 bg-white mb-28">
            {contributorRolesQuery.data &&
              contributorRolesQuery.data?.length > 0 &&
              contributorRolesQuery.data?.map((item) => (
                <SelectItem
                  name={item.name}
                  slug={item.slug}
                  selected={selectedCommunities.includes(item.slug)}
                  key={item.id}
                  handleSelect={handleSelect}
                />
              ))}
          </div>
        </div>
      </div>
      <div className={[tab != 1 ? "hidden" : ""].join(" ")}>
        <div className="px-5">
          <h3 className="text-2xl font-bold mb-5">
            {"Choose Primary Interest"}
          </h3>
          <div className="flex flex-col gap-2 bg-white mb-28">
            {getSelectedItem().map((item) => (
              <SelectItem
                name={item.name}
                slug={item.slug}
                selected={primaryInterest == item.slug}
                key={item.id}
                handleSelect={setPrimaryInterest}
              />
            ))}

            {/* <SelectItem />
            <SelectItem /> */}
          </div>
        </div>
      </div>
      <div className={[tab != 2 ? "hidden" : ""].join(" ")}>
        <div className="px-5">
          <h3 className="text-2xl font-bold">{"Contributors to follow"}</h3>
          <p className="text-sm text-newsmast-dark-blue mt-2 mb-5">
            {"We’ve pre-selected the best contributors to follow on your topic"}
          </p>
          <div className="flex flex-col gap-2 bg-white mb-28">
            <ContributorItem />
            <ContributorItem />
            <ContributorItem />
          </div>
        </div>
      </div>

      <PurchaseModal showModal={showModal} setShowModal={setShowModal} />
      <div className="absolute bottom-0 px-5 py-5 w-full box-border z-50 bg-white reverse-shadow">
        <button
          className="bg-black py-3 rounded-lg font-semibold text-white w-full"
          type="button"
          onClick={handleNext}
        >
          Continue
        </button>
      </div>
    </ResponsiveFrame>
  );
};

export default FillState;
