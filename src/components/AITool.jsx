import React from 'react';
import ImageAi from '../assets/aiImage.jpg'
const AITool = () => {
    return (
        <div className='w-[100%] min-h-screen border border-black  bg-black'>
            <div className='w-[90%] h-[100%] mx-auto mt-20  md:flex justify-between items-center'>
                <div className='w-[100%] md:w-[45%] h-[700px] mt-5'>
                    <img src={ImageAi} className='w-[100%] h-[100%] rounded-md' alt="" />
                </div>
                <div className='w-[100%] md:w-[45%]'>
                    <h1 className='text-start text-2xl md:text-5xl font-extrabold py-4'>AI-Powered Resume <br/>
                    Optimization Tools </h1>
                    <p className='my-4 text-xl'>Optimize your resume with AI-driven suggestions. Improve your chances of landing interviews.</p>
                    <p className='my-4 text-xl'>Our platform analyzes job descriptions to tailor your resume, highlighting relevant skills and experiences that employers are looking for.</p>
                </div>
            </div>    
        </div>
    );
};

export default AITool;