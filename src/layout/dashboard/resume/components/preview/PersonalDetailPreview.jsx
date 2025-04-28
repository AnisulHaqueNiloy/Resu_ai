import React from "react";

const PersonalDetailPreview = ({ resumeInfo }) => {
  return (
    <div className="text-gray-800">
      {" "}
      {/* Changed default text color */}
      <h2
        className="font-bold text-xl text-center"
        style={{ color: resumeInfo?.themeColor }}
      >
        {resumeInfo?.firstName} {resumeInfo?.lastName}
      </h2>
      <h2 className="text-center text-sm font-medium text-gray-700">
        {" "}
        {/* Changed job title color */}
        {resumeInfo?.jobTitle}
      </h2>
      <h2
        className="text-center font-normal text-xs"
        style={{ color: resumeInfo?.themeColor }}
      >
        {resumeInfo?.address}
      </h2>
      <div className="flex justify-between mt-1">
        <h2
          className="font-normal text-xs text-gray-600"
          style={{ color: resumeInfo?.themeColor }}
        >
          {resumeInfo?.phone}
        </h2>
        <h2
          className="font-normal text-xs text-gray-600"
          style={{ color: resumeInfo?.themeColor }}
        >
          {resumeInfo?.email}
        </h2>
      </div>
      <hr
        className="border-[1.5px] my-2 border-gray-300"
        style={{ borderColor: resumeInfo?.themeColor }}
      />
    </div>
  );
};

export default PersonalDetailPreview;
