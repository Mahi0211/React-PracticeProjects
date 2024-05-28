// import React from 'react';

// const UserContext = React.createContext();

// export default UserContext;



import { useContext, createContext } from 'react';

// Define the UserContext
export const UserContext = createContext({
    user: null,
    setUser: () => {}
});

// Define the UserProvider component
export const UserProvider = UserContext.Provider

// Define a custom hook to use the UserContext
export default function useUser() {
    return useContext(UserContext);
}


// import UserContext from './UserContext'
// import { useState } from 'react'

// const UserContextProvider = ({children}) => {
//     const [user, setUser] = useState(null)
//     return (
//         <UserContext.Provider value={{user, setUser}}>
//             {children}
//         </UserContext.Provider>
//     )
// }


// export default UserContextProvider