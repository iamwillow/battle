import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Toolbar} from 'react-onsenui';

export default class HomePage extends React.Component {
  render() {
    return (
      <Page
        renderToolbar={() =>
          <Toolbar>
            <div className='center'>App Title</div>
          </Toolbar>
        }
      >
        <div>
          Hello world!
        </div>
      </Page>
    );
  }
}