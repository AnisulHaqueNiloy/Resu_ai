import React, { useEffect, useState } from 'react';
import AddResume from './components/AddResume';
import { useUser } from '@clerk/clerk-react';
import GlobalApi from './../../../apiendpoint/GlobalApi';
import ResumeCardItem from './components/ResumeCardItem';

const Dashboard = () => {

    const {user}=useUser()
    const [resumeList, setResumeList]=useState([]);

    useEffect(()=>{
        user && GetResumesList()
    },[user])
    /**
     * Used to Get Users Resume List
     */
    const GetResumesList=()=>{
        GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress)
        .then(resp=>{
            setResumeList(resp.data.data);
        })
    }
    return (
        <div className='p-10 md:px-20 lg:px-32'>
            <h2 className='text-white text-3xl font-bold'>My Resume</h2>
            <p className='text-white'>Start Creating AI Resume for your next Job Role</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5'>
                <AddResume />
                {
                    resumeList.length>0 && resumeList.map((resume, idx)=>(
                        <ResumeCardItem resume={resume} key={idx} />
                    ))
                }
            </div>
        </div>
    );
};

export default Dashboard;