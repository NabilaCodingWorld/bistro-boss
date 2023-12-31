import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';


const Navbar = () => {

    const [cart] = useCart();

    const [isAdmin] = useAdmin(); 

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <Link to="/"> <li><a>Home</a></li> </Link>
        <Link to="/menu"> <li><a>Menu</a></li> </Link>
        <Link to="/order/dessert"> <li><a>Order</a></li> </Link>

        {
            isAdmin ? <li><Link to="/dashboard/adminhome">Dashboard</Link></li> : 
            <li><Link to="/dashboard/userhome">Dashboard</Link></li>
        }

        <Link to="/dashboard/myCart">
            <button className="btn">
                <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </button>
        </Link>

        {
            user ?
                <> <button onClick={handleLogOut} className='btn btn-primary'> Log out </button> </>
                :
                <>  <Link to="/login"> <li><a>LogIn</a></li> </Link> </>
        }


    </>

    return (
        <div>
            <div className="navbar text-white max-w-screen-xl mx-auto fixed z-10 bg-black bg-opacity-30">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>

                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;