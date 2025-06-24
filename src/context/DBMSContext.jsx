import { useEffect, createContext } from 'react';

const DBMSContext = createContext();

export function DBMSContext({children}) {
    return (
        <DBMSContext.Provider
            value = {{
                
            }}>
            {children}
        </DBMSContext.Provider>
    )
}
