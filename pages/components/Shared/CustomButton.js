import React from 'react';

const CustomButton = ({ name }) => {
    return (
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-2 md:px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-purple-700 dark:hover:bg-purple-800 ">{name}</button>
    );
};

export default CustomButton;