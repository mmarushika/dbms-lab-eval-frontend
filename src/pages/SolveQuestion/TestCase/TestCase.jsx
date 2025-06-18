import styles from './TestCase.module.css';;

import Table from '../../../components/Table/Table';
import { formatSchemaRows } from '../../../utils/TableFormatters';

function TestCase({ testCase }) {

    return (
        <div className={styles.frame}>
            <h3 className={styles.heading}>Input</h3>
            {
                testCase.input.map(i => 
                    <Table
                        key={i.tableName} 
                        tableName={i.tableName}
                        headers={testCase.input_headers}
                        rows={i.rows}
                    />
                )
            }    
            <h3 className={styles.heading}>Output</h3>
            <Table 
                tableName="" 
                headers={testCase.output_headrs} 
                rows={testCase.output_rows} />
        </div>
    );
}

export default TestCase;