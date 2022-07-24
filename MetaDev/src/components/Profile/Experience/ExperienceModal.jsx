import React from "react";
import { IconContext } from "react-icons/lib/esm/iconContext";
import { IoIosCloseCircle } from "react-icons/io";
import RichTextEditorExample from "../../RichTextEditor/RichEditorExample";
import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import QuillEditor from "../../QuillEditor";

const ExperienceModal = ({
  visible,
  onClose,
  handleInput,
  formData,
  handleSubmit,
  value,
  setValue,
}) => {
  const [showInput, setShowInput] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  if (!visible) {
    return null;
  }

  const handleOnClose = (e) => {
    if (e.target.id === "container") {
      onClose();
    }
  };

  const handleShowInput = () => {
    setShowInput(!showInput);
  };

  const handleLocation = () => {
    setShowLocation(!showLocation);
  };
  return (
    <>
      <div
        id="container"
        onClick={handleOnClose}
        className="z-50 fixed bg-black  bg-opacity-30 backdrop-blur-sm flex items-center justify-center inset-0"
      >
        <div className="bg-white overflow-y-auto overflow-x-hidden w-[600px] rounded-lg  h-[570px] flex flex-col items-start justify-start">
          {/* Header */}
          <div className="flex px-4 py-3 w-full items-start border border-b-2 justify-between">
            <p className="font-semibold font-inter text-sm">Add Experience</p>
            <IconContext.Provider value={{ color: "#737577", size: "1.3rem" }}>
              <div onClick={onClose} className="cursor-pointer">
                <IoIosCloseCircle />
              </div>
            </IconContext.Provider>
          </div>
          {/* Main Content */}

          <div className="flex flex-col items-start w-full space-y-5 justify-center ">
            <form action="" onSubmit={handleSubmit}>
              <div className="px-6 pt-6">
                {" "}
                <p className="font-inter font-semibold text-black text-[13px] mb-1">
                  Company / Orgainization Name
                </p>
                <input
                  className="w-[318px] tracking-tight font-inter pl-[14px] text-sm border border-gray-400 rounded-lg  focus:outline-none py-[14px] h-[46px] "
                  type="text"
                  value={formData.companyName}
                  onChange={handleInput}
                  name="companyName"
                  id="companyName"
                  placeholder={"Example: Google, Facebook, Twitter..."}
                />
              </div>
              <div className="px-6">
                {" "}
                <p className="font-inter font-semibold text-black text-[13px] mb-1">
                  Website
                </p>
                <input
                  className="w-[318px] tracking-tight font-inter pl-[14px] text-sm border border-gray-400 rounded-lg  focus:outline-none py-[14px] h-[46px] "
                  type="text"
                  id="website"
                  value={formData.website}
                  onChange={handleInput}
                  name="website"
                  placeholder={"https://www.scholarly-science.git"}
                />
              </div>
              <div className="px-6">
                {" "}
                <p className="font-inter font-semibold text-black text-[13px] mb-1">
                  Title
                </p>
                <input
                  className="w-[318px] tracking-tight font-inter pl-[14px] text-sm border border-gray-400 rounded-lg  focus:outline-none py-[14px] h-[46px] "
                  type="text"
                  id="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInput}
                  name="jobTitle"
                  placeholder={"Example: Software Enginner"}
                />
              </div>
              <div
                className={` ${
                  showLocation === true ? "hidden" : "block"
                } px-6`}
              >
                {" "}
                <p className="font-inter font-semibold text-black text-[13px] mb-1">
                  Location
                </p>
                <input
                  className="w-[318px] tracking-tight font-inter pl-[14px] text-sm border border-gray-400 rounded-lg  focus:outline-none py-[14px] h-[46px] "
                  type="text"
                  id="location"
                  value={formData.location}
                  onChange={handleInput}
                  name="location"
                  placeholder={"Example: Banglore, Seatle, Boston"}
                />
              </div>
              <div className="flex items-center justify-start px-6">
                <input onClick={handleLocation} type="checkbox" name="remote" />
                <p className="font-inter text-sm ml-3 font-semibold">
                  Worked Remotely
                </p>
              </div>

              <div className="w-full px-6">
                {" "}
                <p className="font-inter font-semibold text-black text-[13px] mb-1">
                  From
                </p>
                <div className="w-full flex items-center justify-between">
                  <input
                    className="w-[250px] tracking-tight font-inter pl-[14px] text-sm border border-gray-400 rounded-lg  focus:outline-none py-[14px] h-[46px] "
                    type="text"
                    id="location"
                    value={formData.fromMonth}
                    onChange={handleInput}
                    name="fromMonth"
                    placeholder={"Month"}
                  />
                  <input
                    className="w-[250px] tracking-tight font-inter pl-[14px] text-sm border border-gray-400 rounded-lg  focus:outline-none py-[14px] h-[46px] "
                    type="text"
                    id="location"
                    value={formData.fromYear}
                    onChange={handleInput}
                    name="fromYear"
                    placeholder={"Year"}
                  />
                </div>
              </div>
              <div
                className={` ${
                  showInput === true ? "hidden" : "block"
                }  w-full px-6`}
              >
                {" "}
                <p className="font-inter font-semibold text-black text-[13px] mb-1">
                  To
                </p>
                <div className="w-full flex items-center justify-between">
                  <input
                    className="w-[250px] tracking-tight font-inter pl-[14px] text-sm border border-gray-400 rounded-lg  focus:outline-none py-[14px] h-[46px] "
                    type="text"
                    id="location"
                    value={formData.toMonth}
                    onChange={handleInput}
                    name="toMonth"
                    placeholder={"Month"}
                  />
                  <input
                    className="w-[250px] tracking-tight font-inter pl-[14px] text-sm border border-gray-400 rounded-lg  focus:outline-none py-[14px] h-[46px] "
                    type="text"
                    id="location"
                    value={formData.toYear}
                    onChange={handleInput}
                    name="toYear"
                    placeholder={"Year"}
                  />
                </div>
              </div>
              <div className="flex items-center justify-start px-6">
                <input
                  onClick={handleShowInput}
                  type="checkbox"
                  name="remote"
                />
                <p className="font-inter font-semibold text-sm ml-3">
                  I currently work here
                </p>
              </div>

              <div>
                <div className="flex items-center px-6 justify-start space-x-2">
                  <p className="font-inter font-semibold text-black text-[13px]">
                    Description
                  </p>
                  <span className="font-inter text-[13px] text-slate-400">
                    (optional)
                  </span>
                </div>
                <div className="px-3 pt-2 pb-2 mb-20 flex items-center justify-center">
                  <QuillEditor value={value} setValue={setValue} />
                </div>
              </div>

              <div
                onClick={handleSubmit}
                className="flex items-center flex-end"
              >
                <div
                  onClick={onClose}
                  className="py-[10px] mb-5 px-[14px] bg-[#333537] w-fit text-white flex items-center rounded-lg hover:bg-[#535557] hover:text-white transition-all cursor-pointer ml-3"
                >
                  <IconContext.Provider
                    value={{ className: "button-icon mr-1.5", size: "14px" }}
                  >
                    <FiCheckCircle />
                  </IconContext.Provider>
                  <span className="font-sm font-inter leading-none">
                    Save Changes
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceModal;
