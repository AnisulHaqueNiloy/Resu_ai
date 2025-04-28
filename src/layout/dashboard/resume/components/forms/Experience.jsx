import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import React, { useContext, useEffect, useState } from "react";
import RichTextEditor from "../RichTextEditor";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import GlobalApi from "../../../../../../apiendpoint/GlobalApi";
import { toast } from "sonner";

const formField = {
  title: "",
  companyName: "",
  city: "",
  state: "",
  startDate: "",
  endDate: "",
  workSummery: "",
};
const Experience = ({ enableNext, resumeId }) => {
  const [experienceList, setExperienceList] = useState([formField]);

  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [aiGeneratedSummeryList, setAiGeneratedSummeryList] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleChange = (idx, event) => {
    const newEntries = experienceList.slice();
    const { name, value } = event.target;
    newEntries[idx][name] = value;
    setExperienceList(newEntries);
  };

  const handleRichTextEditor = (value, name, index) => {
    const newEntries = [...experienceList];
    newEntries[index][name] = value;
    setExperienceList(newEntries);
  };

  const AddNewExperience = () => {
    setExperienceList([...experienceList, { ...formField }]); // clone object
  };
  const RemoveExperience = () => {
    setExperienceList((experienceList) => experienceList.slice(0, -1));
  };
  //   useEffect(() => {
  //     console.log(experienceList);
  //   }, [experienceList]);

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      data: {
        experience: experienceList,
      },
    };

    GlobalApi.UpdateResumeDetail(resumeId, data).then(
      (resp) => {
        console.log(resp);
        enableNext(true);
        setLoading(false);
        toast("Experience updated");
      },
      (error) => {
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    console.log(experienceList);
    setResumeInfo({
      ...resumeInfo,
      experience: experienceList,
    });
  }, [experienceList]);
  return (
    <div>
      <div className="p-5 shadow-lg shadow-gray-200 rounded-lg border-t-gray-200 border-t-4 mt-10 bg-white">
        <h2 className="font-bold text-lg text-gray-800">
          Professional Experience
        </h2>
        <p className="text-gray-700">Add Your previous Job Experience</p>
        <div>
          {experienceList.map((item, idx) => (
            <div key={idx}>
              <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg border-gray-200">
                <div>
                  <label className="text-xs text-gray-700">
                    Position Title
                  </label>
                  <Input
                    name="title"
                    className="text-gray-800"
                    onChange={(event) => handleChange(idx, event)}
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-700 ">Company Name</label>
                  <Input
                    className="text-gray-800"
                    name="companyName"
                    onChange={(event) => handleChange(idx, event)}
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-700">City</label>
                  <Input
                    name="city"
                    className="text-gray-800"
                    onChange={(event) => handleChange(idx, event)}
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-700">State</label>
                  <Input
                    name="state"
                    className="text-gray-800"
                    onChange={(event) => handleChange(idx, event)}
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-700">Start Date</label>
                  <Input
                    type="date"
                    name="startDate"
                    className="text-gray-800"
                    onChange={(event) => handleChange(idx, event)}
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-700">End Date</label>
                  <Input
                    type="date"
                    name="endDate"
                    className="text-gray-800"
                    onChange={(event) => handleChange(idx, event)}
                  />
                </div>
                <div className="col-span-2">
                  <label className="text-xs text-gray-700">Work Summary</label>
                  <RichTextEditor
                    idx={idx}
                    value={experienceList[idx].workSummery}
                    onRichTextEditorChange={(value) =>
                      handleRichTextEditor(value, "workSummery", idx)
                    }
                    className="text-gray-800"
                  ></RichTextEditor>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button onClick={AddNewExperience} variant="outline">
              + Add More Experience
            </Button>
            <Button onClick={RemoveExperience} variant="outline">
              - Remove
            </Button>
          </div>

          <Button variant="outline" onClick={onSave} disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Experience;
// fixed conflict
