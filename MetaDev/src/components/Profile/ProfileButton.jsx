import { IconContext } from "react-icons";

const ProfileButton = ({ icon, title }) => {
  return (
    <div className="py-[0.4375rem] px-[0.625rem] bg-gray-100 w-fit text-gray-70 flex items-center rounded-lg hover:bg-gray-600 hover:text-white transition-all text-sm cursor-pointer">
      <IconContext.Provider
        value={{ className: "button-icon mr-1.5", size: "1rem" }}
      >
        {icon}
      </IconContext.Provider>
      <span className="font-medium leading-none">{title}</span>
    </div>
  );
};

export default ProfileButton;
