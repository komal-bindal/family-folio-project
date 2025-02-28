"use client";

import {
  ArrowIcon,
  BookIcon,
  BridgeIcon,
  FamilyGroupPhoto,
  Logo,
  LeavesIcon,
  OldPaper,
  TreeIcon,
} from "../assets/images";

import Link from "next/link";
import Image from "next/image";
import IconText from "../components/IconText";

export const Home = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 z-20 bg-rusticBrown h-1 w-full"></div>
      <div className="absolute z-20 left-14 h-72 w-36">
        <div className="bg-rusticBrown h-40">
          <Image className="h-[140%] w-[110%] p-[2%]" src={Logo} alt="Logo" />
        </div>
        <div className="bg-rusticBrown h-32 border-t-white border-t-[1px] rounded-b-[50%]">
          <div className="font-ephesis text-white text-3xl w-full h-full flex flex-col items-center justify-center -rotate-[20deg]">
            <div className="">Tracing</div>
            <div className="">Heritage</div>
          </div>
        </div>
      </div>
      <div className="bg-lightSand h-[660px] w-full relative  px-[6%] py-[100px]">
        <div className="relative h-full w-full">
          <div className="absolute bottom-[5%] w-[50%] h-[400px] flex items-end">
            <div className="absolute top-0 bg-white w-full h-[100px] clip-top-border"></div>
            <Image
              className="h-[390px] w-full clip-img-top-border"
              src={FamilyGroupPhoto}
              alt="FamilyGroupImage"
            />
          </div>
          <div className="absolute top-0 right-[20%] w-[20%] h-[300px]">
            <Image
              className="h-full w-full rounded-t-[150px]"
              src={FamilyGroupPhoto}
              alt="FamilyGroupImage"
            />
          </div>
          <div className="absolute bottom-0 left-[35%] w-[40%] h-[240px]">
            <Image
              className="h-full w-full clip-y-border"
              src={OldPaper}
              alt="FamilyGroupImage"
            />
            <div className="absolute bottom-0 right-0 h-full rotate-[20deg] scale-125">
              <Image
                className="h-full w-full"
                src={LeavesIcon}
                alt="FamilyGroupImage"
              />
            </div>
            <div className="absolute bottom-0 h-full p-[15%] font-DM_Serif_Text text-forestGreen text-3xl">
              <span>Explore Your Ancestry, Connect Your Roots</span>
              <Link href="/family-tree">
                <button className="absolute bottom-0 left-[15%] bg-forestGreen text-white text-xl px-[5%] py-[3%] uppercase">
                  Start Journey
                </button>
              </Link>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-[25%] h-[200px] bg-lightKhaki border-b-2 border-b-oliveGreen flex justify-center items-center">
            <Image
              className="h-[90%] w-[90%]"
              src={FamilyGroupPhoto}
              alt="FamilyGroupImage"
            />
          </div>
        </div>
      </div>
      <div className="bg-warmTaupe h-[120px] w-full relative flex justify-between px-[15%] py-[2%]">
        <IconText icon={TreeIcon} text={"Discover Roots"} />
        <span className="h-full w-1 border-r-[1px] border-r-paleBeige" />
        <IconText icon={BridgeIcon} text={"Connect Generations"} />
        <span className="h-full w-1 border-r-[1px] border-r-paleBeige" />
        <IconText icon={BookIcon} text={"Preserve Legacy"} />
      </div>
      <div className="h-[500px] w-full relative flex ">
        <div className="w-[60%] h-full bg-forestGreen text-white font-Lexend_Deca flex flex-col pl-[10%] items-left justify-center">
          <div className="font-ephesis text-4xl">Whatcha Here For?</div>
          <p className="text-base pt-[5%] pb-[2%] font-thin">
            You're here to{" "}
            <span className="font-semibold">find your roots</span>,
            <br />
            And trace the paths you've never known.
            <br />
            To <span className="font-semibold">preserve your legacy</span>,
            <br />
            And keep your family's story grown.
          </p>
          <p className="text-base font-thin">
            You're here to{" "}
            <span className="font-semibold">build your tree</span>,
            <br />
            Branch by branch, a tale untold.
            <br />
            To{" "}
            <span className="font-semibold">explore your past with pride</span>,
            <br />
            And share the legacy you'll unfold.
          </p>
        </div>
        <div className="w-[40%] h-full bg-rusticBrown">
          <div className="absolute left-[40%] top-[10%] w-[30%] h-[250px]">
            <Image
              className="h-full w-full"
              src={FamilyGroupPhoto}
              alt="FamilyGroupImage"
            />
          </div>
          <div className="absolute top-[5%] left-[72%] w-[15%] h-[250px]">
            <Image
              className="h-full w-full rounded-t-[150px]"
              src={FamilyGroupPhoto}
              alt="FamilyGroupImage"
            />
          </div>
          <div className="absolute left-[55%] bottom-[15%] w-[28%] h-[200px] bg-lightKhaki flex justify-center items-center origin-bottom -rotate-6">
            <Image
              className="h-[90%] w-[90%]"
              src={FamilyGroupPhoto}
              alt="FamilyGroupImage"
            />
          </div>
          <div className="absolute bottom-0 right-[2%] w-[30%] h-[180px] ">
            <Image
              className="h-full w-full clip-bottom-border"
              src={OldPaper}
              alt="FamilyGroupImage"
            />
            <div className="absolute bottom-0 h-full p-[10%] font-DM_Serif_Text text-forestGreen text-2xl">
              <span>Let Us</span>
              <p className="text-base">
                Help you in creating a family tree that connects your past to
                your future.
              </p>
            </div>
          </div>
          <div className="absolute bottom-[2%] right-[33%] w-[20%] h-[30%]">
            <Image
              className="h-full w-full"
              src={ArrowIcon}
              alt="FamilyGroupImage"
            />
          </div>
          <div className="absolute bottom-[22%] right-[50%] font-ephesis text-4xl text-white lowercase">
            With Love
          </div>
        </div>
      </div>
      <div className="relative h-[500px] w-full relative flex bg-softGrey">
        <div className="absolute left-[10%] top-[40%] w-[20%] h-[180px] bg-lightKhaki border-b-2 border-b-oliveGreen flex justify-center items-center z-10">
          <Image
            className="h-[90%] w-[90%]"
            src={FamilyGroupPhoto}
            alt="FamilyGroupImage"
          />
        </div>
        <div className="absolute top-[10%] left-[25%] w-[20%] h-[400px]">
          <Image
            className="h-full w-full rounded-t-[150px]"
            src={FamilyGroupPhoto}
            alt="FamilyGroupImage"
          />
        </div>
      </div>
      <div className="h-[300px] w-full relative flex bg-creamBeige"></div>
    </div>
  );
};

export default Home;
