import React,{useContext} from 'react'
import { DocumentContext } from '../../../context/documentContext'
import { Buttons } from '../../common/Buttons'
import Tables from '../../common/Tables/Tables'
import NavBars from '../../common/NavBars'
import Footers from '../../common/Footers'
import './Document.css'

const Documents = () => {
    const { pendingDocuments,approveDocument,rejectDocument } = useContext(DocumentContext)

    const columns = [
        { key: "1", path: "topic", label: "Title" },
        { key: "2", path: "upload_by.username", label: "Author" },
        { key: "3", path: "createdAt", date: "Uploaded date" },
        { key: "4", path: "type", label: "Type" },
        { key: "5",  label: "" , 
        content : (document) => (
        <>
        <a href={`http://localhost:4000/${document.file}`} target="_blank"> 
          <Buttons 
          value="View"
          variant="primary"
          />
          </a>
          <Buttons 
          onSubmit={() => approveDocument(document)}
          value="Approve"
          variant="success"
          />
          <Buttons 
          onSubmit={() => rejectDocument(document)}
          value="Reject"
          variant="danger"
          />
        </>
        ),
      },
      ]

    return ( 
        <>
          <div className="document-body">
          <NavBars/>
            <div className="row justify-content-center mt-3">
                <h5 className="col-12 title text-center text-capitalize font-weight-bold text-white">Documents to review</h5>
            </div>
            <div className="container p-2">
                <Tables columns ={columns} data={pendingDocuments}/>
            </div>
          </div>
          <Footers />
        </>
     );
}
 
export default Documents;