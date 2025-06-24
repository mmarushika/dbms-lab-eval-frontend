import styles from './SubmissionListItem.module.css'

import { useNavigate, useParams } from 'react-router';
import { formatTimestamp } from '../../../utils/Formatters';

function SubmissionListItem({id, status, timestamp, style}) {
    const navigate = useNavigate();
    const {
        task_id,
        question_id,
    } = useParams();

    function getFrameStyle() {
        if(style == "odd") {
            return styles.frame_odd;
        } else {
            return styles.frame_even;
        }
    }
    function getStatusStyle() {
        if(status == "Accepted") {
            return "green bold"
        } else {
            return "red bold";
        }
    }
    return (
        <div 
            className={getFrameStyle()}
            onClick = {() => navigate(`/dbms/${task_id}/${question_id}/submissions/${id}`)}
        >
            <div>
                <span className={getStatusStyle()}>{status}</span>
            </div>
            <div className={styles.gray}>
                {formatTimestamp(timestamp)}
            </div>
        </div>
    );
}

export default SubmissionListItem;