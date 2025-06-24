import styles from './TestResult.module.css'

import TestCaseResult from '../TestCaseResult/TestCaseResult';

function TestResult({ result }) {
    function getStatus() {
        if (result?.testCases?.length == result?.passedCount) {
            return "Accepted";
        } else {
            return "Wrong Answer";
        }
    }
    function getStyle() {
        if (result?.testCases?.length == result?.passedCount) {
            return "green";
        } else {
            return "red"
        }
    }
    function getResultCount() {
        console.log(result);
        let passed = result?.passedCount;
        let total = result?.testCases?.length;
        return `${passed} / ${total} testcases passed`
    }

    return (
        <div className={styles.frame}>
            {result ? (
                <div className={styles.wrapper}>
                    <div className={styles.header}>
                        <h1 className={`main-heading ${getStyle()}`}>
                            {getStatus()}
                        </h1>
                        <div className="gray">{getResultCount()}</div>
                    </div>
                    <div className={styles.result}>
                        <TestCaseResult testCases={result.testCases} /> 
                    </div>
                </div>
            ) : (
                <div className="gray">You must run your code first!</div>
            )}
        </div>
    );
}

export default TestResult;



