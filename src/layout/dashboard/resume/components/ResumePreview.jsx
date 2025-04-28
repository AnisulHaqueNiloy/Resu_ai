import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useContext } from "react";

import SummeryPreview from "./preview/SummeryPreview";
import ExperiencePreview from "./preview/ExperiencePreview";
import EducationalPreview from "./preview/EducationalPreview";
import SkillsPreview from "./preview/SkillsPreview";
import PersonalDetailPreview from "./preview/PersonalDetailPreview";

const ResumePreview = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  return (
    <div
      className="shadow-lg shadow-gray-400 h-full p-14 border-t-[20px]"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      {/* Personal Details */}
      <PersonalDetailPreview resumeInfo={resumeInfo} />
      {/* Summery */}
      <SummeryPreview resumeInfo={resumeInfo} />
      {/* Professional Experience */}
      <ExperiencePreview resumeInfo={resumeInfo} />
      {/* Education */}
      <EducationalPreview resumeInfo={resumeInfo} />
      {/* Skilss */}
      <SkillsPreview resumeInfo={resumeInfo} />
    </div>
  );
};

export default ResumePreview;
