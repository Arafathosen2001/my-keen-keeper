import React, { Children, createContext, useState } from 'react';
import { toast } from 'react-toastify';
export const Context = createContext();
const ContextProviderData = ({ children }) => {
    const [frindg, setFriendg] = useState([]);
    const handelButtonClick = (friend, type) => {
        // console.log(friend)
        const isExist = frindg.find(frnd => frnd.userData.id == friend.id);
        if (!isExist) {
            toast.success(`${friend.name} added to ${type} timeline!`);
            setFriendg(prev => [...prev, { userData: friend, actionType: type, timestamp: new Date() }]);
        } else {
            toast.error(`${friend.name} is already in the timeline!`);
        }
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