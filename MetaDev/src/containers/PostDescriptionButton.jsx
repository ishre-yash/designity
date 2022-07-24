import React from "react";

const PostDescriptionButton = ({ icon, description }) => {
  return (
    <div className="bg-white font-inter border-2 w-[330px] p-6 cursor-pointer flex items-center justify-start space-x-7">
      <div className="text-xl">{icon}</div>

      <div className="text-lg">{description}</div>
    </div>
  );
};

export default PostDescriptionButton;
