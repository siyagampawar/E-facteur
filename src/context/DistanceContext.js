import React, { createContext, useState } from 'react';

const DistanceContext = createContext(null);

const DistanceProvider = ({ children }) => {
    const [Distance, setDistance] = useState({ distance: null}); // Provide a default value for distance

    return (
        <DistanceContext.Provider value={{ 
            Distance, 
            setDistance
        }}>
            {children}
        </DistanceContext.Provider>
    );
};

export { DistanceProvider, DistanceContext };
