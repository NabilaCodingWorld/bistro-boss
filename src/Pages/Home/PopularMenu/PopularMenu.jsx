import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../cpmponents/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {

    const [menu] = useMenu();

    const popular = menu.filter ( item => item.category === 'popular' )

    return (
        <div> <br />
            <SectionTitle subHeading={"---Check it out---"}  heading={"FROM OUR MENU"} ></SectionTitle>

            <div className='grid md:grid-cols-2'>
                {
                    popular.map (item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem> )
                }
            </div>

            <center><button className="btn btn-outline border-0 mb-10 border-b-4">View Full  Menu</button></center>

        </div>
    );
};

export default PopularMenu;