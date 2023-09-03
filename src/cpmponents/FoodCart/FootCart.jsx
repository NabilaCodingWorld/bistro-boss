import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const FootCart = ({item}) => {

    const [, refetch] = useCart();

    const {image, name, recipe,  price, _id} = item;

    const {user} = useContext(AuthContext)

    const navigate = useNavigate();

    const location = useLocation();

    const handleAddToCart = item => {

        console.log(item)

        if(user && user.email){
            const orderItem = {menuItemId: _id, name, image, price, email:user.email }

            fetch('https://bistro-boss-server-rouge-seven.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }

        else{
            Swal.fire({
                title: 'If You are not login?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login First!'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from:location}} )
                }
              })
        }

    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='text-white bg-slate-900 px-3 absolute mr-4 mt-4 right-0'> ${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                
                <div className="card-actions justify-end">
                    <button onClick={()=> handleAddToCart(item)} className="btn btn-primary">Add Now</button>
                </div>
            </div>
        </div>
    );
};

export default FootCart;