import styles from './TestCase.module.css';;

import Table from '../../../components/Table/Table';
import { formatSchemaRows } from '../../../utils/TableFormatters';

function TestCase({ testCase }) {

    return (
        <div className={styles.frame}>
            <h3 className={styles.heading}>Input</h3>
            {
                testCase?.input?.map(i => <Table
                                key={i?.tableName} 
                                tableName={i?.tableName}
                                headers={Object.keys(JSON.parse(i.rows)[0])}
                                rows={JSON.parse(i?.rows)}
                            />
                )
            }    
            <h3 className={styles.heading}>Output</h3>
            <Table tableName="" headers={Object.keys(JSON.parse(testCase.output)[0])} rows={JSON.parse(testCase.output)} />
        </div>
    );
}

export default TestCase;