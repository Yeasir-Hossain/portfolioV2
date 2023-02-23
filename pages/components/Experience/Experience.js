import React from 'react';
import SectionHeading from '../Shared/SectionHeading';

const Experience = () => {
    return (
        <div id='experience'>
            <SectionHeading heading={"Experience"} />
            <h3 className='text-lg md:text-xl font-semibold'>Repsoft Consultancy Services Ltd. ,Hyderabad, India</h3>
            <p className='text-base md:text-lg font-semibold'>Front-End Developer</p>
            <p className='text-base md:text-lg font-semibold'>July, 2022 to October, 2022</p>
            <div className='ml-2 mt-1 flex flex-col space-y-1 font-medium'>
                <p>1. Built fully responsive websites</p>
                <p>2. Worked in a team building full stack projects</p>
                <p>3. Single-handedly built a few websites</p>
            </div>
        </div>
    );
};

export default Experience;