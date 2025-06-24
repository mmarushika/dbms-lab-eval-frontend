import styles from './Submission.module.css'

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { apiFetchSubmissions } from '../../../services/StudentApi.mjs';

import ButtonPanel from '../../../components/ButtonPanel/ButtonPanel';

function Submission({ submission, setSolution }) {
    const navigate = useNavigate();
    const {
        task_id,
        question_id,
    } = useParams();

    function getStatus() {
        if (submission?.testCases?.length == submission?.passedCount) {
            return "Accepted";
        } else {
            return "Wrong Answer";
        }
    }
    function getStyle() {
        if (submission?.testCases?.length == submission?.passedCount) {
            return "green";
        } else {
            return "red"
        }
    }
    function getResultCount() {
        let passed = submission?.passedCount;
        let total = submission?.testCases?.length;
        return `${passed} / ${total} testcases passed`
    }

    function formattedSolution() {
        return (
            submission?.code
                .split("\n")
                .map((line, i) => (
                    <div key={i}>
                        <span className={styles.lineNumber}>{i + 1}</span>{line}
                    </div>
                ))
        );
    }

    function copyToClipboard() {
        navigator.clipboard.writeText(submission.code);
    }

    function copyToEditor() {
        setSolution(submission.code);
        navigate(`/dbms/${task_id}/${question_id}/`);
    }
    return (
        <div className={styles.frame}>
            <div className={styles.header}>
                <h1 className={`main-heading ${getStyle()}`}>
                    {getStatus()}
                </h1>
                <div className="gray">{getResultCount()}</div>
            </div>
            <div>
                <h2 className="sub-heading gray">Code</h2>
                <div className={styles.buttonPanel}>
                    <ButtonPanel
                        names={["Copy To Clipboard", "Copy To Editor"]}
                        handlers={[copyToClipboard, copyToEditor]}
                    />
                </div>
                <pre className={styles.code}>
                    {formattedSolution()}
                </pre>
            </div>
        </div>
    );
}

export default Submission;