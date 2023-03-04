import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidNavLink = () => {
    return (
        <div>

            <li><Link to='/dashboard/allSeller' >All Sellers</Link></li>
            <li><Link to='/dashboard/allBuyer'> All Buyers</Link></li>
            <li><Link to='/dashboard/myproducts' >My Products</Link></li>
            <li><Link to='/dashboard/addProduct'>Add a Product</Link></li>
            <li><Link to='/dashboard/myorders'>My Orders</Link></li>
        </div>
    );
};

export default AdminSidNavLink;