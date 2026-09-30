import React, { createContext, useState } from 'react'
import { getLoacalStorage, setLocalStorage } from '../utils/localStorage';
import { useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        setLocalStorage();
        const { employees, admin } = getLoacalStorage();
        setUserData({ employee: employees, admin });
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