import React from 'react';

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className='text-center'>
            <p className='text-2xl text-[#D99904]'> ---{subHeading} --- </p>
            <p className='text-4xl border-y-4 uppercase mx-5 md:mx-96 py-5 my-5'> {heading} </p> <br /> <br />
        </div>
    );
};

export default SectionTitle;