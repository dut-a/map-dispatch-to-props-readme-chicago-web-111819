import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    // Code change: this.props.dispatch.store is no longer being called
    this.props.addItem();
  }

  render() {
    debugger;
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   };
// };
 
// Code change: this new function takes in dispatch as an argument
// It then returns an object that contains a function as a value!
// Notice above in handleOnClick() that this function, addItem(),
// is what is called, NOT the addItem action creator itself.
// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   };
// };

// [alt 1] 
// export default connect(mapStateToProps, mapDispatchToProps)(App);

// [alt 2] Code change: no mapDispatchToProps function required!
// export default connect(mapStateToProps, { addItem })(App);

export default connect(state => ({ items: state.items }), { addItem })(App);


