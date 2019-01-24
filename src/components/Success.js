import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM - SEND DATA TO API //
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.previousStep();
    }
    
  render() {
    return (
      <MuiThemeProvider >
        <React.Fragment >
          <AppBar title="Confirm user data" />
            <h1>Submission complete! Thank you!</h1>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}



export default Success
