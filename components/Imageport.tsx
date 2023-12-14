import React from "react";

const Imageport: React.FC = () => {
  return (
    <div className="h-full pt-8 bg-white">
      <div className="h-4/5 flex justify-between p-6">
        <div className="image">
          {/* <img src="../public/blob.svg" alt="" /> */}
        </div>
        <div className="content hidden md:block">content</div>
      </div>
      <div>
        <p>Skills</p>
      </div>
    </div>
  );
};

export default Imageport;
