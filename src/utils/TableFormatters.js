export function formatSchemaRows(rows) {
    let formattedRows = rows.map(i => {
        return {
            columnName: i.columnName,
            columnType: i.columnType
        }
    })
    return formattedRows;
}