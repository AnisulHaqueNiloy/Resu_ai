import React from "react";

const EducationalPreview = ({ resumeInfo }) => {
  return (
    <div className="my-6 text-gray-800">
      {" "}
      {/* Changed default text color */}
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{ color: resumeInfo?.themeColor }}
      >
        Education
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />
      {resumeInfo?.education.map((education, idx) => (
        <div key={idx} className="my-5">
          <h2
            className="text-sm font-bold"
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            {education?.universityName}
          </h2>
          <h2 className="text-xs flex justify-between">
            {education?.degree} in {education?.major}
            <span className="text-gray-600">
              {education?.startDate}-{education?.endDate}
            </span>{" "}
            {/* Changed date span color */}
          </h2>
          <p className="text-xs my-2 text-gray-700">
            {" "}
            {/* Changed description color */}
            {education?.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default EducationalPreview;
