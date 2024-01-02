import React from 'react';
import { Link } from 'react-router-dom';

const BuyerSideNavLink = () => {
    return (
        <div>
            <li><Link to='/dashboard/myorders'>My Bookings</Link></li>
            {/* <li><Link>My Wish List</Link></li> */}
        </div>
    );
};

export default BuyerSideNavLink