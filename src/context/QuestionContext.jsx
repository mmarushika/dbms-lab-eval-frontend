import { useEffect, createContext } from 'react';

export const QuestionContext = createContext();

export function QuestionProvider({children}) {
    return (
        <QuestionContext.Provider
            value = {{
                userId: '68480975bc45cac30dfe6de9',
                taskId: '68480975bc45cac30dfe6de9',
                questionId: '685455410bd9f4a86d5befe7'
            }}
        >
            {children}
        </QuestionContext.Provider>
    );
}
