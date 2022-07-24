import Modal from "react-bootstrap/Modal";
import ProfilePic from "./ProfilePic";
import Input from "../Input";
import Socials from "./Socials";
import { IconContext } from "react-icons";
import { IoIosCloseCircle } from "react-icons/io";
import { FiCheckCircle } from "react-icons/fi";

const EditProfileModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header>
        <div className="font-bold text-[1.1rem]">Edit Profile</div>
        <IconContext.Provider value={{ color: "#737577", size: "1.5rem" }}>
          <div className="cursor-pointer" onClick={handleClose}>
            <IoIosCloseCircle />
          </div>
        </IconContext.Provider>
      </Modal.Header>
      <Modal.Body>
        <div className="max-h-[498px] overflow-auto p-[1rem]">
          <div className="flex">
            <div>
              <ProfilePic size="120" type="upload" />
            </div>
            <div className="w-full ml-4">
              <Input placeholderText={"Name"} />
              <Input placeholderText={"Location"} />
            </div>
          </div>
          <div>
            <Input placeholderText={"Bio"} />
          </div>
          <div>
            <Socials />
          </div>
          <div className="py-[10px] px-[14px] bg-[#333537] w-fit text-white flex items-center rounded-lg hover:bg-[#535557] hover:text-white transition-all cursor-pointer mt-3">
            <IconContext.Provider
              value={{ className: "button-icon mr-1.5", size: "1rem" }}
            >
              <FiCheckCircle />
            </IconContext.Provider>
            <span className="font-medium leading-none">Save Changes</span>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EditProfileModal;
