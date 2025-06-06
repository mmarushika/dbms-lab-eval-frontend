import './ColumnInputField.module.css';

import { useState } from 'react';

import Dropdown from '../../../components/Dropdown/Dropdown';
import { Database as DbData } from '../../../data/DatabaseData';

function ColumnInputField({id}) {
    const [columnName, setColumnName] = useState("");

    return (
        <tr>
            <td><input name={`columnName${id}`} type="text" value={columnName}
                onChange={(e) => setColumnName(e.target.value)} placeholder="Column Name"></input></td>
            <td><Dropdown name={`columnType${id}`} list={DbData.dataTypes} placeholder="Column Type"/></td>
        </tr>
    );
}

export default ColumnInputField;