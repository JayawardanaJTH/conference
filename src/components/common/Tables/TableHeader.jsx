import React from 'react';

const TableHeader = ({columns}) => {
  const renderCell = (column) => {
    if (column.label) return column.label
    else return column.date
  }; 
    return ( 
        <thead>
      <tr>
          {columns.map((column, index) =>(
            <th key={index}>{renderCell(column)}</th>
          ))}  
      </tr>
    </thead>
     );
}
 
export default TableHeader;