import { useEffect, createContext } from 'react';

const QuestionContext = createContext();

export function QuestionProvider({children}) {
    return (
        <QuestionContext.Provider>
            {children}
        </QuestionContext.Provider>
    )
}
