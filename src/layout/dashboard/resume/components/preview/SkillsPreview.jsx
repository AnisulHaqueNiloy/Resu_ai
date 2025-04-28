import React from "react";

const SkillsPreview = ({ resumeInfo }) => {
  return (
    <div className="text-gray-800">
      {" "}
      {/* Changed default text color */}
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{ color: resumeInfo?.themeColor }}
      >
        Skills
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />
      <div className="grid grid-cols-2 gap-3 my-4">
        {resumeInfo?.skills.map((skill, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <h2 className="text-xs text-gray-700">{skill?.name}</h2>{" "}
            {/* Changed skill name color */}
            <div className="h-2 bg-gray-200 w-[120px]">
              <div
                className="h-2"
                style={{
                  backgroundColor: resumeInfo?.themeColor,
                  width: skill?.rating * 20 + "%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPreview;
