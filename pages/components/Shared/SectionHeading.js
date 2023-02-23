import React from 'react';

const SectionHeading = ({heading}) => {
    return (
        <h2 className='text-xl md:text-3xl text-center font-semibold my-5'>{heading}</h2>
    );
};

export default SectionHeading;