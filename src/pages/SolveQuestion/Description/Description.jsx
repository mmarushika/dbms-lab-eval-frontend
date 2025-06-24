import styles from './Description.module.css';

import Table from '../../../components/Table/Table';

function Description({ title, description, schemas, testCases }) {
    return (
        <div className={styles.frame}>
            <div className={styles.body}>
                <h1 className={"main-heading blue"}>{title}</h1>
                <div className={styles.description}>
                    {description}
                </div>
                {schemas?.length != 0 ?
                     <h2 className={"sub-heading blue"}>Schemas</h2> : <></>}
                <div className={styles.schemas}>
                    {
                        schemas?.map(i => {
                            return (
                                <Table key={i.tableName}
                                    tableName={i.tableName}
                                    headers={["Column Name", "Column Type"]} 
                                    rows={(i.rows)} 
                                    isCollapsable={false}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Description;

/*
         <div className={styles.body}>
                <h1 className={"main-heading"}>{title}</h1>
                <div className={styles.description}>
                    {description}
                </div>
                <h2 className={"sub-heading"}>Schemas</h2>
                <div className={styles.schemas}>
                    {schemas?.map(i => {
                        return <Table key={i.tableName} tableName={i.tableName}
                            headers={["Column Name", "Column Type"]} rows={formatSchemaRows(i.rows)} />
                    })}
                </div>
            </div>

*/