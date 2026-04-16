import React, { Children, createContext, useState } from 'react';
export const Context = createContext();
const ContextProviderData = ({ children }) => {
    const [frindg, setFriendg] = useState([]);
    const handelButtonClick = (friend, type) => {
        setFriendg(prev => [...prev, { userData: friend, actionType: type, timestamp: new Date() }]);
        // console.log(data,status);
    }
    const data = {
        handelButtonClick,
        frindg
    };
    return <Context.Provider value={data}>
            {children}
        </Context.Provider>
    
};

export default ContextProviderData;