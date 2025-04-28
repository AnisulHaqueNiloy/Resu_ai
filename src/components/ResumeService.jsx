import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ResumeService = () => {
  return (
    <div className="w-[100%] min-h-screen border border-black bg-gray">
      <div className="w-[90%] h-[100%] mx-auto mt-20 py-5">
        <h1 className="text-2xl md:text-6xl my-10 font-extrabold ">
          Our Key Resume Services
        </h1>
        <div className="w-[100%] grid md:grid-cols-3 gap-4 my-5 py-5">
          <div className=" bg-gray hover:bg-[#d49ba4] rounded-md shadow shadow-black h-[500px]">
            <div className="flex justify-between p-3 mt-1">
              <h1 className="text-6xl font-extrabold">01</h1>
              <h1>
                <FaArrowRight className="text-6xl -rotate-45" />
              </h1>
            </div>
            <div className="translate-y-20 px-4">
              <h2 className="text-2xl lg:text-4xl font-bold text-white">
                Resume Builder
              </h2>
              <p className=" lg:text-xl mt-6">
                Create a professional resume in minutes with our easy-to-use
                builder. Choose from a variety of templates and customize to
                showcase your skills and experience effectively for recruiters.
              </p>
            </div>
          </div>
          <div className=" bg-[rgb(20,20,20,0.8)] hover:bg-[#d49ba4] rounded-md shadow shadow-black h-[500px]">
            <div className="flex justify-between p-3 mt-1">
              <h1 className="text-2xl lg:text-6xl font-extrabold">02</h1>
              <h1>
                <FaArrowRight className="text-6xl -rotate-45" />
              </h1>
            </div>
            <div className="translate-y-20 px-4">
              <h2 className="text-2xl lg:text-4xl font-bold">Resume Review</h2>
              <p className="lg:text-xl mt-6">
                Get expert feedback on your resume from our AI-powered review
                tool. Identify areas for improvement and ensure your resume is
                polished and professional, ready to impress any recruiter.
              </p>
            </div>
          </div>
          <div className=" bg-[rgb(20,20,20,0.8)] hover:bg-[#d49ba4] rounded-md shadow shadow-black h-[500px]">
            <div className="flex justify-between p-3 mt-1">
              <h1 className="text-6xl font-extrabold">03</h1>
              <h1>
                <FaArrowRight className="text-6xl -rotate-45" />
              </h1>
            </div>
            <div className="translate-y-20 px-4">
              <h2 className="text-2xl lg:text-4xl font-bold">Cover Letters</h2>
              <p className="lg:text-xl mt-6">
                Craft compelling cover letters that complement your resume. Our
                AI helps you tailor each letter to specific job requirements,
                increasing your chances of getting noticed by potential
                employers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeService;
