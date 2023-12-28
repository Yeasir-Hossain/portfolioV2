import React from 'react';
import SectionHeading from '../Shared/SectionHeading';

const Experience = () => {
    const experience = [
        {
            "position": "Front-End Developer Intern",
            "company": "Repsoft Consultancy Services Ltd",
            "dates": "July, 2022 - October, 2022",
            "description": "Software technologies: NodeJs, Express, HTML/CSS, etc. Managed back-end development and MongoDB. Wrote reusable, efficient code. Ensured high performance and responsiveness."
        },
        {
            "position": "MERN Stack Developer Intern",
            "company": "Exploregent",
            "dates": "April, 2023 - June, 2023",
            "description": "Developed responsive UI components using React/Next. Implemented interface codes following React/Next workflows. Debugged application codes. Monitored and improved front-end performance."
        },
        {
            "position": "Junior MERN Stack Developer",
            "company": "Core Devs Ltd",
            "dates": "July, 2023 - Present",
            "description": "Implemented design to ReactJs/NextJs components. Developed back-end using Node JS, Express, and MongoDB. Improved application speed and responsiveness. Managed code changes and provided assistance to team members."
        }
    ]

    return (
        <div id='experience' className='my-10'>
            <SectionHeading heading={"Experience"} />
            <div className={`grid grid-cols-1 gap-4 justify-items-center`}>
                {experience.map((job, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-md shadow-md dark:shadow-gray-600 max-w-3xl border border-gray-300"
                    >
                        <div className='flex justify-between items-center'>
                            <h3 className="text-lg md:text-2xl font-semibold">
                                {job.company}
                            </h3>
                            <p className="text-base font-semibold">{job.dates}</p>
                        </div>
                        <p className="text-base md:text-lg font-semibold">{job.position}</p>
                        <div className="mt-1 flex flex-col space-y-1 font-medium text-base">
                            <p>{job.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Experience;