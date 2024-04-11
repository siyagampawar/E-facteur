// import { createContext, useState } from "react";
// import React from "react";

// export const DataContext = createContext(null);

// const DataProvider = ({ children }) => {
//     const [ account, setAccount ] = useState({username: ''});
        
//     return (
//         <DataContext.Provider value={{ 
//             account,
//             setAccount 
//         }}>
//             {children}
//         </DataContext.Provider>
//     )
// }

// export default DataProvider;

import React, { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const [account, setAccount] = useState({ username: '' });

    // This check doesn't make sense for a useState hook, so it's removed
    // if (!setAccount) {
    //     throw new Error("setAccount is null");
    // }
        
    return (
        <DataContext.Provider value={{ 
            account,
            setAccount 
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;
