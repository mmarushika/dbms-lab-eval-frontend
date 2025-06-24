import styles from './CodeOutput.module.css';

import Table from '../../../components/Table/Table';

function CodeOutput({ output, errorMsg }) {
    console.log(errorMsg);
    return (
        <div className={styles.frame}>
            {
                errorMsg ?
                    <div>{errorMsg}</div> :
                    <Table
                        tableName=""
                        headers={Object.keys(output[0])}
                        rows={output}
                        isCollapsable={false}
                    /> 
            }
        </div>
    )
}

export default CodeOutput;