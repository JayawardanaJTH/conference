import React, { Component } from "react"
import auth from '../services/authServices'
import { UpdateDetails,getDetails,getPendingDetails,getApprovedDetails,updateDetails,
  insertEvents,getEvents,getPendingEvents,getApprovedEvents,updateEvent,
  insertGuests,getGuests,getPendingGuests,getApprovedGuests,updateGuest } from '../services/editServices'

const EditContext = React.createContext();

class EditProvider extends Component {
    state = {
        details: [],
        pendingDetails: [],
        approvedDetails: [],
        events: [],
        pendingEvents: [],
        approvedEvents: [],
        guests: [],
        pendingGuests: [],
        approvedGuests: [],
      };

    async componentDidMount() {
      // try {    
        await this.viewDetails();
        await this.viewPendingDetails();
        await this.viewApprovedDetails();
        await this.viewEvents();
        await this.viewPendingEvents();
        await this.viewApprovedEvents();
        await this.viewGuests();
        await this.viewPendingGuests();
        await this.viewApprovedGuests()
      // } catch (ex) {}
    };

    EditDetails = async (data,id) => {   
        try {
          return await UpdateDetails(data,id);
        } catch (ex) {
          if (ex.response)
            return ex.response
        }
    }

    viewDetails = async () => {   
      try {
        const detail = await getDetails();
        this.setState({ details :detail.data });
      } catch (ex) {
        if (ex.response)
          return ex.response
      }
  }

  viewPendingDetails = async () => {   
    try {
      const pendingDetail = await getPendingDetails();
      this.setState({ pendingDetails : pendingDetail.data });
    } catch (ex) {
      if (ex.response)
        return ex.response
    }
}

viewApprovedDetails = async () => {   
  try {
    const approvedDetail = await getApprovedDetails();
    this.setState({ approvedDetails : approvedDetail.data });
  } catch (ex) {
    if (ex.response)
      return ex.response
  }
}

  approveDetails = async (info) => {
    const data = { 
      page_title: info.page_title,
      sub_title: info.sub_title,
      email: info.email,
      contact: info.contact,
      cover: info.cover,
      start: info.start,
      end: info.end,
      venue: info.venue,
      description: info.description,
      approval: 'approved',
      edited_by: info.edited_by._id,
      approved_by: auth.getCurrentUserId()
    }
    const pendingDetails = this.state.pendingDetails.filter(
      (p) => p._id !== info._id
    );
    this.setState({ pendingDetails });
    try {
      await updateDetails(data,info._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 400)
        console.log('err',ex.response.data);
    }
  }

  rejectDetails = async (info) => {
    const data = {
      page_title: info.page_title,
      sub_title: info.sub_title,
      email: info.email,
      contact: info.contact,
      cover: info.cover,
      start: info.start,
      end: info.end,
      venue: info.venue,
      description: info.description,
      approval: 'rejected',
      edited_by: info.edited_by._id,
      approved_by: auth.getCurrentUserId()
    }
    const pendingDetails = this.state.pendingDetails.filter(
      (p) => p._id !== info._id
    );
    this.setState({ pendingDetails });
    try {
      await updateDetails(data,info._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 400)
        console.log('err',ex.response.data);
    }
  }

    AddEvents = async (data) => {   
      try {
        return await insertEvents(data);
      } catch (ex) {
        if (ex.response)
          return ex.response
      }
  }

  viewEvents = async () => {   
    try {
      const event = await getEvents();
      this.setState({ events :event.data });
    } catch (ex) {
      if (ex.response)
        return ex.response
    }
}

viewPendingEvents = async () => {   
  try {
    const pendingEvent = await getPendingEvents();
    this.setState({ pendingEvents :pendingEvent.data });
  } catch (ex) {
    if (ex.response)
      return ex.response
  }
}

viewApprovedEvents = async () => {   
  try {
    const approvedEvent = await getApprovedEvents();
    this.setState({ approvedEvents :approvedEvent.data });
  } catch (ex) {
    if (ex.response)
      return ex.response
  }
}

approveEvent = async (info) => {
  const data = {
    speaker: info.speaker,
    topic: info.topic,
    start: info.start,
    end: info.end,
    description: info.description,
    approval: 'approved',
    edited_by: info.edited_by._id,
    approved_by: auth.getCurrentUserId()
  }
  const pendingEvents = this.state.pendingEvents.filter(
    (p) => p._id !== info._id
  );
  this.setState({ pendingEvents });
  try {
    await updateEvent(data,info._id);
  } catch (ex) {
    if (ex.response && ex.response.status === 400)
      console.log('err',ex.response.data);
  }
}

  rejectEvent = async (info) => {
    const data = {
      speaker: info.speaker,
      topic: info.topic,
      start: info.start,
      end: info.end,
      description: info.description,
      approval: 'rejected',
      edited_by: info.edited_by._id,
      approved_by: auth.getCurrentUserId()
    }
    const pendingEvents = this.state.pendingEvents.filter(
      (p) => p._id !== info._id
    );
    this.setState({ pendingEvents });
    try {
      await updateEvent(data,info._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 400)
        console.log('err',ex.response.data);
    }
  }

  AddGuests = async (data) => {   
    try {
      return await insertGuests(data);
    } catch (ex) {
      if (ex.response)
        return ex.response
    }
}

viewGuests = async () => {   
  try {
    const guest = await getGuests();
    this.setState({ guests :guest.data });
  } catch (ex) {
    if (ex.response)
      return ex.response
  }
}

viewPendingGuests = async () => {   
  try {
    const pendingGuest = await getPendingGuests();
    this.setState({ pendingGuests : pendingGuest.data });
  } catch (ex) {
    if (ex.response)
      return ex.response
  }
}

viewApprovedGuests = async () => {   
  try {
    const approvedGuest = await getApprovedGuests();
    this.setState({ approvedGuests : approvedGuest.data });
  } catch (ex) {
    if (ex.response)
      return ex.response
  }
}

  approveGuest = async (info) => {
    const data = {
      name: info.name,
      designation: info.designation,
      image: info.image,
      description: info.description,
      approval: 'approved',
      edited_by: info.edited_by._id,
      approved_by: auth.getCurrentUserId()
    }
    const pendingGuests = this.state.pendingGuests.filter(
      (p) => p._id !== info._id
    );
    this.setState({ pendingGuests });
    try {
      await updateGuest(data,info._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 400)
        console.log('err',ex.response.data);
    }
  }

  rejectGuest = async (info) => {
    const data = {
      name: info.name,
      designation: info.designation,
      image: info.image,
      description: info.description,
      approval: 'rejected',
      edited_by: info.edited_by._id,
      approved_by: auth.getCurrentUserId()
    }
    const pendingGuests = this.state.pendingGuests.filter(
      (p) => p._id !== info._id
    );
    this.setState({ pendingGuests });
    try {
      await updateGuest(data,info._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 400)
        console.log('err',ex.response.data);
    }
  }

  render() {
    return (
      <EditContext.Provider
        value={{
          ...this.state,
          EditDetails: this.EditDetails,
          approveDetails: this.approveDetails,
          rejectDetails: this.rejectDetails,

          AddEvents: this.AddEvents,
          approveEvent: this.approveEvent,
          rejectEvent: this.rejectEvent,

          AddGuests: this.AddGuests,
          approveGuest: this.approveGuest,
          rejectGuest: this.rejectGuest
        }}
      >
        {this.props.children}
      </EditContext.Provider>
    );
  }
}

const EditConsumer = EditContext.Consumer;
export { EditProvider, EditConsumer, EditContext };
