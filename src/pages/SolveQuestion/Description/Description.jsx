import styles from './Description.module.css';

import Table from '../../../components/Table/Table';

function Description({title, description, schemas}) {
    title=  "Recyclable and Low Fat Products";
    description = `Write a solution to find the ids of products that are both low fat and recyclable.
    Return the result table in any order.
    The result format is in the following example.`

    schemas = [{
        tableName: 'Employee', 
        rows: [
            {columnName: 'id', columnType: 'VARCHAR2'},
            {columnName: 'name', columnType: 'VARCHAR2'}
        ]
    }];

    return (
        <div className={styles.frame}>
            <h1 className={"main-heading"}>{title}</h1>
            {description}
            <h2 className={"sub-heading"}>Schemas</h2>
            {schemas.map(i => {
                return <Table key={i.tableName} tableName={i.tableName} rows={i.rows} />
            })}
        </div>
    );
}

export default Description;