import React from "react";

const SummeryPreview = ({ resumeInfo }) => {
  return (
    <div>
      <p className="text-xs text-gray-700">{resumeInfo?.summery}</p>
    </div>
  );
};

export default SummeryPreview;
