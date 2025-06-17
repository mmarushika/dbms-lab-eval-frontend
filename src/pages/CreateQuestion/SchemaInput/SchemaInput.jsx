import styles from './SchemaInput.module.css';

import { useState } from "react";
import { apiCreateQuestion } from '../../../services/api.mjs';

import ColumnInputField from '../ColumnInputField/ColumnInputField';

function SchemaInput() {
    const [columnCount, setColumnCount] = useState(0);

    function renderColumnInputFields() {
        let columnInputFields = [];
        for(let i = 0; i < columnCount; i++) {
            columnInputFields.push(<ColumnInputField key={i} id={i}/>)
        } 
        return columnInputFields;
    }
    function validateColumnInput(e) {
        if(e.target.value < 0) {
            setColumnCount(0);
        } else {
            setColumnCount(e.target.value);
        }
    }
    async function submitSchema(formData) {
        console.log("hello");
        console.log(formData);
        let columns = [];
        for(let i = 0; i < columnCount; i++) {
            let columnInfo = {
                columnName: formData.get("columnName"+i),
                columnType: formData.get("columnType"+i)
            }
            columns.push(columnInfo);
        }
        const question = {
            schema : {
                tableName : formData.get("tableName"),
                columns : columns
            }
        }
        console.log(question.schema);
        await apiCreateQuestion(question);
    }

    return (
        <form action={submitSchema}>
            Table Name: <input name="tableName" type="tesxt"></input><br></br>
            No. of columns: <input value={columnCount} type="number" onChange={validateColumnInput}></input><br></br>
            <table>
                <tbody>{renderColumnInputFields()}</tbody>
            </table>
            <button type="submit">Submit</button>
        </form>
    );
}

export default SchemaInput;