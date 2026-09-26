import React, { createContext, useState } from 'react'
import { getLoacalStorage } from '../utils/localStorage';
import { useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const { employee, admin } = getLoacalStorage();
        setUserData({ employee, admin });
    }, []);


    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
