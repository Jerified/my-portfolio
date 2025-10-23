import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <a href="mailto:oyedelejerermiah.ng@gmail.com">
        <p className="text-sm rotate-90 w-72 tracking-widest text-[#ff7e5f] mt-[-8rem]">
          oyedelejerermiah.ng@gmail.com
        </p>
      </a>
      <span className="w-[2px] h-32 bg-white inline-flex"></span>
    </div>
  );
};

export default RightSide;