import React from 'react'
import Moment from "react-moment"
import _ from "lodash"

const Cards = ({columns,data}) => {
    const renderCell = (item, column) => {
        if (column.content) return column.content(item);
        else if (column.date)
          return <Moment format="D MMM - HH:mm">{_.get(item, column.date)}</Moment>;
        return _.get(item, column.path);
      }; 

      const renderLabel = (column) => {
        if (column.label) return column.label
        else return column.date
      }; 

    return ( 
        <>
         <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 justify-content-center">
                        {data.map((item,index) => (
                        <div className="col-md-4 col-6 mb-4" key={index}>
                            <div className="card bg-secondary">
                                <div className="card-body">
                                    <ul className="list-group">
                                    {columns.map((column) => (
                                        <li key={column.key} className="list-group-item">{renderLabel(column)} : {renderCell(item,column)}</li>
                                    ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        ))}  
                    </div>
        </>
     );
}
 
export default Cards;