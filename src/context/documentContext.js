import React, { Component } from "react"
import auth from '../services/authServices'
import { insertDocument,getDocuments,getPendingDocuments,getApprovedWorkshops,getApprovedResearches,updateDocuments } from '../services/documentServices'

const DocumentContext = React.createContext();

class DocumentProvider extends Component {
    state = {
        documents: [],
        pendingDocuments: [],
        approvedWorkshops: [],
        approvedResearches: []
      };

    async componentDidMount() {
      // try {    
        await this.ViewDocuments();
        await this.ViewPendingDocuments();
        await this.ViewApprovedWorkshops(),
        await this.ViewApprovedResearches()
      // } catch (ex) {}
    };

    AddDocument = async (formData) => {
        try {
          await insertDocument(formData);
        } catch (ex) {
          if (ex.response && ex.response.status === 400)
            console.log('err',ex.response.data);
        }
    }

    ViewDocuments = async () => {
      try {
        const document = await getDocuments();
        this.setState({ documents :document.data });
        
      } catch (ex) {
        if (ex.response && ex.response.status === 400)
          console.log('err',ex.response.data);
      }
  }

  ViewPendingDocuments = async () => {
    try {
      const pendingDocument = await getPendingDocuments();
      this.setState({ pendingDocuments :pendingDocument.data });
      
    } catch (ex) {
      if (ex.response && ex.response.status === 400)
        console.log('err',ex.response.data);
    }
}

ViewApprovedWorkshops = async () => {
  try {
    const approvedWorkshop = await getApprovedWorkshops();
    this.setState({ approvedWorkshops :approvedWorkshop.data });
    
  } catch (ex) {
    if (ex.response && ex.response.status === 400)
      console.log('err',ex.response.data);
  }
}

ViewApprovedResearches = async () => {
  try {
    const approvedResearch = await getApprovedResearches();
    this.setState({ approvedResearches :approvedResearch.data });
    
  } catch (ex) {
    if (ex.response && ex.response.status === 400)
      console.log('err',ex.response.data);
  }
}

  approveDocument = async (info) => {
    const data = {
      approval: 'approved',
      topic: info.topic,
      file: info.file,
      date: info.date,
      type: info.type,
      upload_by: info.upload_by._id,
      approved_by: auth.getCurrentUserId()
    }
    const pendingDocuments = this.state.pendingDocuments.filter(
      (p) => p._id !== info._id
    );
    this.setState({ pendingDocuments });
    try {
      await updateDocuments(data,info._id);  
    } catch (ex) {
      if (ex.response && ex.response.status === 400 )
        console.log('err',ex.response.data);
    }
}

rejectDocument = async (info) => {
    const data = {
      approval: 'rejected',
      topic: info.topic,
      file: info.file,
      date: info.date,
      type: info.type,
      upload_by: info.upload_by._id,
      approved_by: auth.getCurrentUserId()
    }
    const pendingDocuments = this.state.pendingDocuments.filter(
      (p) => p._id !== info._id
    );
    this.setState({ pendingDocuments });
    try {
      await updateDocuments(data,info._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 400)
        console.log('err',ex.response.data);
    }
}

  render() {
    return (
      <DocumentContext.Provider
        value={{
          ...this.state,
          AddDocument: this.AddDocument,
          approveDocument: this.approveDocument,
          rejectDocument: this.rejectDocument,
        }}
      >
        {this.props.children}
      </DocumentContext.Provider>
    );
  }
}

const DocumentConsumer = DocumentContext.Consumer;
export { DocumentProvider, DocumentConsumer, DocumentContext };
