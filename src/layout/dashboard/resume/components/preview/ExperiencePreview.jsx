import React from "react";

const ExperiencePreview = ({ resumeInfo }) => {
  return (
    <div className="my-6 text-gray-800">
      {" "}
      {/* Changed default text color */}
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{ color: resumeInfo?.themeColor }}
      >
        Professional Experience
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />
      {resumeInfo?.experience?.map((experience, idx) => (
        <div key={idx} className="my-5">
          <h2
            className="text-sm font-bold"
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            {experience?.title}
          </h2>
          <h2 className="text-xs flex justify-between text-gray-700">
            {" "}
            {/* Changed location text color */}
            {experience?.companyName},{experience?.city}, {experience?.state}
            <span>
              {experience?.startDate} To
              {experience?.currentlyWorking ? "Present" : experience?.endDate}
            </span>
          </h2>
          <div
            className="text-xs mt-2 text-gray-600" // Changed work summary text color and added margin
            dangerouslySetInnerHTML={{ __html: experience?.workSummery }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ExperiencePreview;
