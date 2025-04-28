import { Input } from "@/components/ui/input";
import React, { useContext, useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Button } from "@/components/ui/button";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import GlobalApi from "../../../../../../apiendpoint/GlobalApi";
import { toast } from "sonner";
const Skills = ({ enableNext, resumeId }) => {
  const [skillList, setSkillList] = useState([
    {
      name: "",
      rating: 0,
    },
  ]);
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const handleChange = (idx, name, value) => {
    const newEntries = skillList.slice();
    newEntries[idx][name] = value;
    setSkillList(newEntries);
  };
  const AddNewSkills = () => {
    setSkillList([
      ...skillList,
      {
        name: "",
        rating: 0,
      },
    ]);
  };
  const RemoveSkills = () => {
    setSkillList((skillList) => skillList.slice(0, -1));
  };

  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        skills: skillList,
      },
    };
    GlobalApi.UpdateResumeDetail(resumeId, data).then(
      (resp) => {
        console.log(resp);
        setLoading(false);
        toast("Details updated");
      },
      (error) => {
        setLoading(false);
        toast("Server error");
      }
    );
  };
  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      skills: skillList,
    });
  }, [skillList]);
  return (
    <div className="p-5 shadow-lg shadow-gray-200 rounded-lg border-t-gray-200 border-t-4 mt-10 bg-white">
      <h2 className="font-bold text-lg text-gray-800">Skills</h2>
      <p className="text-gray-700">Add Your top skills</p>
      <div>
        {skillList.map((item, idx) => (
          <div className="flex items-center justify-between border rounded-lg p-3 mb-2 border-gray-200">
            <div>
              <label className="text-xs text-gray-700">Name</label>
              <Input
                className="text-gray-800"
                onChange={(e) => handleChange(idx, "name", e.target.value)}
              ></Input>
            </div>
            <Rating
              style={{ maxWidth: 200 }}
              value={item.rating}
              onChange={(v) => handleChange(idx, "rating", v)}
            ></Rating>
          </div>
        ))}
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button onClick={AddNewSkills} variant="outline">
              + Add More Skills
            </Button>
            <Button onClick={RemoveSkills} variant="outline">
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

export default Skills;
