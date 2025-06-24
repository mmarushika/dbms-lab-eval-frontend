import './App.css'

import { useState, useContext } from 'react'
import { Routes, Route } from 'react-router';
import { Navigate } from 'react-router';
import SolveQuestion from './pages/SolveQuestion/SolveQuestion';
import { QuestionContext } from './context/QuestionContext';
function App() {
  const {
    userId,
    taskId,
    questionId
  } = useContext(QuestionContext);

  return (
    <>
      <Routes>
        <Route path="/" element= {<Navigate to={`/dbms/${taskId}/${questionId}/description`}/>} />
        <Route path="/dbms/dashboard" element= {<SolveQuestion />} />
        <Route path="/dbms/:task_id/:question_id/description" element= {<SolveQuestion />} />
        <Route path="/dbms/:task_id/:question_id/submissions" element= {<SolveQuestion />} />
        <Route path="/dbms/:task_id/:question_id/testcases" element= {<SolveQuestion />} />
        <Route path="/dbms/:task_id/:question_id/submissions/:submission_id" element= {<SolveQuestion />} />
        <Route path="/dbms/:task_id/:question_id/" element= {<SolveQuestion />} />
        <Route path="/dbms/:task_id/:question_id/result" element= {<SolveQuestion />} />
      </Routes>

    </>
  )
}

export default App
