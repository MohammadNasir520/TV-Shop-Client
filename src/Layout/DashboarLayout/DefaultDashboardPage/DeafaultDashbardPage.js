import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { getRoleByEmail } from '../../../api/usersApi';
import { AuthContext } from '../../../Context/AuthProvider';
import Spinner from '../../../Shared/Spinner/Spinner';


const DeafaultDashbardPage = () => {
    const { user, loading } = useContext(AuthContext)


    const [role, setRole] = useState('')


    useEffect(() => {
        getRoleByEmail(user?.email)
            .then(data => {
                console.log('role', data);
                setRole(data)
            })
    }, [user?.email])


    if (loading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            {
                role === 'Seller' && <Navigate to='/dashboard/myproducts'></Navigate>
            }
            {
                role === 'Buyer' && <Navigate to='/dashboard/myorders'></Navigate>
            }
            {
                role === 'Admin' && <Navigate to='/dashboard/allseller'></Navigate>
            }
        </div>
    );
};

export default DeafaultDashbardPage;