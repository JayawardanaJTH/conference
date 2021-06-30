import React from 'react'
import Moment from "react-moment"
import _ from "lodash"

const TableBody = ({columns,data}) => {
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    else if (column.date)
      return <Moment format="D MMM - HH:mm">{_.get(item, column.date)}</Moment>;
    return _.get(item, column.path);
  }; 

    return ( 
        <tbody>
      {data.map((item, index) =>(
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key}>{renderCell(item,column)}</td>
              ))}
            </tr>
      ))}
    </tbody>
     );
}
 
export default TableBody;