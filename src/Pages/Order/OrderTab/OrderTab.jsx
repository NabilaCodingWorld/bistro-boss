import React from 'react';
import FootCart from '../../../cpmponents/FoodCart/FootCart';

const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-10 my-10'>
                    {
                        items.map(item => <FootCart
                        key={item._id}
                        item={item}
                        ></FootCart> )
                    }
                    </div>
    );
};

export default OrderTab;