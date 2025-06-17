

export const sampleQuestion = {
    category: "DML",
    title: "Display Names",
    description: "Select and display the names",
    schemas: [
        {
            tableName: "Person",
            rows: [
                {
                    columnName: "id",
                    columnType: "NUMBER"
                },
                {
                    columnName: "name",
                    columnType: "VARCHAR2"
                }
            ]
        }
    ]

}