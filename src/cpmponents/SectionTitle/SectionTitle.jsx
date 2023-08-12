import React from 'react';

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className='text-center'>
            <p className='md:text-2xl text-[#D99904]'> ---{subHeading} --- </p>
            <p className='md:text-4xl md:border-y-4 uppercase mx-20 md:mx-96 md:py-5 my-5'> {heading} </p> <br /> <br />
        </div>
    );
};

export default SectionTitle;