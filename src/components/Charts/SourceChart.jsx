import React from 'react';
import Table from "components/Table/Table.jsx";


export default ({data}) => {
  const total = dataPoint => dataPoint.positive + dataPoint.neutral + dataPoint.negative
  const purgedData = data.filter(dataPoint => dataPoint.source.toLowerCase().indexOf("bot") === -1)
                          .filter(dataPoint => total(dataPoint) !== 0)
                          .sort((a, b) => total(b) - total(a))
                          .slice(0, 3);

  return (
    <Table
      tableHeaderColor="warning"
      tableHead={["Fuente", "Positivo", "Neutral", "Negativo"]}
      tableData={purgedData.map(dataPoint => [dataPoint.source, dataPoint.positive, dataPoint.neutral, dataPoint.negative])}
    />
  );
};