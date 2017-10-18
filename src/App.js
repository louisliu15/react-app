import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import Header from './Components/Header';
import Content from './Components/Content';
import './App.css';

class App extends Component {

  state = {
    guests:[],
    pendingGuest:"",
    isFiltered:false
  };

  guestListLen = this.state.guests.length;

  getNewId = () =>
    this.guestListLen = this.guestListLen+1;

  handleNameInput = e =>
    this.setState({pendingGuest: e.target.value});

  newGuestSubmitHandler = e =>{
    e.preventDefault();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id:this.getNewId()
        },
        ...this.state.guests
      ],
      pendingGuest: ''
    })
  };

  updateName = (name, id) =>
    this.setState({
      guests: this.state.guests.map(guest=>{
        if (guest.id === id) {
          return {
            ...guest,
            name
          }
        };
        return guest;
      })
    });

  toggleGuestProperty = (property, id) =>
    this.setState({
      guests: this.state.guests.map(guest=>{
        if (guest.id === id) {
          return {
            ...guest,
            [property]: !guest[property]
          }
        };
        return guest;
      })
    });

  toggleComfirmation = id =>
    this.toggleGuestProperty("isConfirmed",id);

  toggleEditing = id =>
    this.toggleGuestProperty("isEditing", id);

  toggleFilter = () =>
    this.setState({
      isFiltered: !this.state.isFiltered
    })

  removeGuest = id =>
    this.setState({
      guests:[
        ...this.state.guests.filter(guest => guest.id !== id)
      ]
    })

  getTotalGuest = () =>
    this.guestListLen

  getConfirmedGuest = () =>
    this.state.guests
      .filter(guest => guest.isConfirmed)
      .length

  render() {
    const totalGuest = this.getTotalGuest();
    const confirmedGuest = this.getConfirmedGuest();
    const unconfirmedGuest = totalGuest - confirmedGuest;

    return (
      <div className="App">
        <Header 
          newGuestSubmitHandler={this.newGuestSubmitHandler}
          handleNameInput={this.handleNameInput}
          pendingGuest={this.state.pendingGuest}
        />
        <Content
          guests={this.state.guests}
          pendingGuest={this.state.pendingGuest}
          totalGuest={totalGuest}
          confirmedGuest={confirmedGuest}
          unconfirmedGuest={unconfirmedGuest}
          isFiltered={this.state.isFiltered}
          updateName={this.updateName}
          toggleComfirmation={this.toggleComfirmation}
          toggleEditing={this.toggleEditing}
          toggleFilter={this.toggleFilter}
          removeGuest={this.removeGuest}
        />
      </div>
    );
  }
}

export default App;
