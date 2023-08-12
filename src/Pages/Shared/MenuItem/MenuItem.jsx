import React from 'react';

const MenuItem = ({item}) => {

    const {image, name, recipe, price} = item;
    return (
        <div className='flex gap-10 items-center mb-8 mx-5 '>
            <img className='w-24' style={{borderRadius: '0  200px  200px 200px' }} src={image} alt="" />
            <div>
                <div className='flex space-x-4 items-center mb-2'>
                <p className='text-2xl'>{name} --------- </p> 
                <p className='text-[#BB8506]' >${price}</p>
                </div>
                <p>{recipe}</p>
            </div>

            

        </div>
    );
};

export default MenuItem;