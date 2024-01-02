import React from 'react';
import { Link } from 'react-router-dom';

const SellerSideNavLink = () => {
    return (
        <div>
            <li><Link to='/dashboard/myproducts' >My Products For sale</Link></li>
            <li><Link to='/dashboard/addProduct'>Add a Product</Link></li>
        </div>
    );
};

export default SellerSideNavLink;