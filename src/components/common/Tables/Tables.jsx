import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Tables = ({columns,data}) => {
    return ( 
        <table className="table text-white table-responsive-sm">
            <TableHeader columns={columns}/>
            <TableBody columns={columns} data={data}/>
        </table> 
     );
}
 
export default Tables;