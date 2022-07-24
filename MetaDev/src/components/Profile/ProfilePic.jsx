import { useState, useEffect } from "react";
import ShowProfilePhoto from "../ShowProfilePhoto";



const ProfilePic = ({ size, type }) => {

  const [profileImg, setProfileImg] = useState();
  const [profilePhoto, setProfilePhoto] = useState(localStorage.getItem("profileImgUrl"));
  const [showprofilephoto, setShowprofilephoto] = useState(false);


  useEffect(() => {
    let item = localStorage.getItem("profileImgUrl");
    if (item) {
      setProfileImg(item);
    } else {
      setProfileImg("https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=85,width=120,height=120/avatars-default/avatar_9.png");
    }
  }, [showprofilephoto,]);


  const str = `w-[${size}px] h-[${size}px]  rounded-full border-white border-4`;
  return (
    <div
      className="group mt-1 w-[120px] h-[120px] rounded-full border-white border-4 relative"
      style={{
        backgroundImage: `url('${profileImg}')`,
        backgroundSize: "cover",
      }}
    >
      {type === "upload" ? (
        <div className="absolute right_circle h-[35px] w-[35px] flex py-0 px-[6px] z-10 flex-wrap text-[0.75rem]  min-w-[20px] items-center font-medium content-center rounded-[10px] flex-row justify-center -bottom-4 -right-4" onClick={() => setShowprofilephoto(true)}>
          <img
              src="https://sowmiya-home-page.herokuapp.com/static/media/avatar-edit.1d269375.png"
              className=" ml-[-35px] cursor-pointer align-middle border-none"
              alt=""
              
            />
        </div>
      ) : (
        ""
      )}
      <ShowProfilePhoto
        showprofilephoto={showprofilephoto}
        setShowprofilephoto={setShowprofilephoto}
        profilePhoto={profilePhoto}
        setProfilePhoto={setProfilePhoto}
      />
    </div>
  );
};

export default ProfilePic;
