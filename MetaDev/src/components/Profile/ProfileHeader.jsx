import { useEffect, useState } from "react";
import { default as CustomButton } from "./ProfileButton";

import ProfilePic from "./ProfilePic";

import { IconContext } from "react-icons/lib/esm/iconContext";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { TbCrown } from "react-icons/tb";
import ProfileModal from "./ProfileModal";
import BlueButton from "../BlueButton";
import ShowProfilePhoto from "../ShowProfilePhoto";

const ProfileHeader = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const [showprofilephoto, setShowprofilephoto] = useState(false);

  const [profilePhoto, setProfilePhoto] = useState(
    localStorage.getItem("profileImgUrl")
  );

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    const body = document.getElementsByTagName("body");
    if (showprofilephoto) {
      body[0].style.overflow = "hidden";
      body[0].style.position = "fixed";
      body[0].style.width = "100%";
    } else {
      body[0].style.overflow = "auto";
      body[0].style.position = "relative";
    }
  }, [showprofilephoto, handleShow]);

  return (
    <>
      <div className="flex w-full items-end justify-between">
        <span className="relative inline-flex flex-shrink-0 align-middle">
          {profilePhoto === null ? (
            <div className="bg-[#c0f2ef] text-[#25b2aa] h-[4.6875rem] w-[4.6875rem] text-[2.5rem] font-bold mr-5 cursor-pointer flex overflow-hidden relative items-center flex-shrink-[1] rounded-full justify-center">
              S
            </div>
          ) : (
            <div
              className="h-[4.6875rem] w-[4.6875rem] mr-5 cursor-pointer rounded-full bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: `url("${profilePhoto}")`,
              }}
            />
          )}
          <span className="absolute right_circle h-[50px] w-[50px] flex py-0 px-[6px] z-10 flex-wrap text-[0.75rem]  min-w-[20px] items-center font-medium content-center rounded-[10px] flex-row justify-center -top-4 -right-4">
            <img
              src="https://sowmiya-home-page.herokuapp.com/static/media/avatar-edit.1d269375.png"
              className="w-[20px] h-[20px] ml-[-35px] cursor-pointer align-middle border-none"
              alt=""
              onClick={() => setShowprofilephoto(true)}
            />
          </span>
        </span>
        <div className="flex mt-14">
          <div onClick={handleShow}>
            <BlueButton>Edit Profile</BlueButton>
          </div>
        </div>
      </div>
      <div>
        <div className="font-semibold text-lg mt-2 flex justify-between items-center">
          <div className="flex items-center justify-center">
            <span className=" ml-1 font-inter mr-2">{name}</span>
            <IconContext.Provider
              value={{
                className: "toast-icon",
                size: "20px",
                color: "#07a460",
              }}
            >
              <TbCrown />
            </IconContext.Provider>
          </div>
          <p className="font-inter text-base font-normal">+{value}</p>
        </div>
        <p className=" mt-5 font-inter text-sm leading-6">{bio}</p>
      </div>
      <div className="text-black">
        <ProfileModal
          name={name}
          setName={setName}
          onClose={handleClose}
          visible={show}
          bio={bio}
          setBio={setBio}
          value={value}
          setValue={setValue}
        />
      </div>

      <ShowProfilePhoto
        showprofilephoto={showprofilephoto}
        setShowprofilephoto={setShowprofilephoto}
        profilePhoto={profilePhoto}
        setProfilePhoto={setProfilePhoto}
      />
    </>
  );
};

export default ProfileHeader;
