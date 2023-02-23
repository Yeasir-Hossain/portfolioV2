import React from 'react';
import { AiOutlineFacebook, AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'

const Social = () => {
    return (
        <>
            <div className='flex flex-col  text-xl lg:text-3xl space-y-5 fixed top-[21.5%] right-1 md:right-6'>
                <a href="https://www.facebook.com/yeasir.hossain1" target="_blank" rel='noreferrer'>
                    <AiOutlineFacebook className='hover:cursor-pointer text-[#707070] hover:scale-110 hover:text-black dark:hover:text-white transition ease-in-out duration-1000' />
                </a>
                <a href="https://www.linkedin.com/in/yeasir-hossain/" target="_blank" rel='noreferrer'>
                    <AiOutlineLinkedin className='hover:cursor-pointer text-[#707070] hover:scale-110 hover:text-black dark:hover:text-white transition ease-in-out duration-1000' />
                </a>
                <a href="https://github.com/Yeasir-Hossain" target="_blank" rel='noreferrer'>
                    <AiFillGithub className='hover:cursor-pointer text-[#707070] hover:scale-110 hover:text-black dark:hover:text-white transition ease-in-out duration-1000' />
                </a>
                <a href="https://twitter.com/FATAGAMING1" target="_blank" rel='noreferrer'>
                    <FiTwitter className='hover:cursor-pointer text-[#707070] hover:scale-110 hover:text-black dark:hover:text-white transition ease-in-out duration-1000' />
                </a>
            </div>
        </>
    );
};

export default Social;