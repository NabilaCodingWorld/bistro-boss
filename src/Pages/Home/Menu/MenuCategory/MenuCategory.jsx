import React from 'react';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import Cover from '../../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, title, img}) => {
    return (
        <div>
            { title && <Cover img={img} title={title}></Cover>}

            <div className='grid md:grid-cols-2 mt-20'>
                {
                    items.map (item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem> )
                }
            </div>
            <center> <Link to={`/order/${title}`} ><button className="btn btn-outline  border-0 mt-5 border-b-4">View Full  Menu</button></Link> </center> <br />
        </div>
    );
};

export default MenuCategory;