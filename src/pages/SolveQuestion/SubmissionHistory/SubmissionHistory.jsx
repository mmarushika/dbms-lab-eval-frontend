import styles from './SubmissionHistory.module.css';

import { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import SubmissionListItem from '../SubmissionListItem/SubmissionListItem';
function SubmissionHistory({submissions}) {
    const navigate = useNavigate();
    const {
        task_id,
        question_id, 
    } = useParams();

    function getStatus(totalCount, passedCount) {
        if(totalCount == passedCount) {
            return "Accepted";
        } else {
            return "Wrong Answer";
        }
    }
    return (
        <div className={styles.frame}>
            {
                submissions?.map((i, index) => 
                    <SubmissionListItem key={i._id}
                        id={i._id}
                        status={getStatus(i.testCases.length, i.passedCount)} 
                        timestamp={i.timestamp}
                        style={index % 2 == 0 ? "even" : "odd"}
                    />
                )
            }
        </div>
    );
}

export default SubmissionHistory;