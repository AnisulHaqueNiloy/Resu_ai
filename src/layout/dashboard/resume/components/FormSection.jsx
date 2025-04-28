import { Button } from "@/components/ui/button";
import PersonalDetail from "./forms/PersonalDetail";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import { useState } from "react";
import Summery from "./forms/Summery";
import Experience from "./forms/Experience";
import { Navigate, useParams } from "react-router-dom";
import ThemeColor from "./ThemeColor";
import Education from "./forms/Education";
import Skills from "./forms/Skills";

const FormSection = ({ resumeId }) => {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <ThemeColor></ThemeColor>
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              <ArrowLeft />
            </Button>
          )}
          <Button
            disabled={!enableNext}
            variant="outline"
            className="flex gap-2"
            size="sm"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            Next <ArrowRight />
          </Button>
        </div>
      </div>
      {/* Personal Detail */}
      {activeFormIndex === 1 ? (
        <PersonalDetail
          resumeId={resumeId}
          enableNext={(v) => setEnableNext(v)}
        />
      ) : activeFormIndex === 2 ? (
        <Summery resumeId={resumeId} enableNext={(v) => setEnableNext(v)} />
      ) : activeFormIndex === 3 ? (
        <Experience resumeId={resumeId} enableNext={(v) => setEnableNext(v)} />
      ) : activeFormIndex === 4 ? (
        <Education resumeId={resumeId} enableNext={(v) => setEnableNext(v)} />
      ) : activeFormIndex === 5 ? (
        <Skills resumeId={resumeId} enableNext={(v) => setEnableNext(v)} />
      ) : activeFormIndex === 6 ? (
        <Navigate to={`/my-resume/${resumeId}/view`} />
      ) : null}

      {/* Summary */}

      {/* Experience */}

      {/* Educational Detail */}

      {/* Skills */}
    </div>
  );
};

export default FormSection;
