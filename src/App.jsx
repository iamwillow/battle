import React from 'react';
import ReactDOM from 'react-dom';
import {Tabbar, Tab} from 'react-onsenui';

import TaskList from './components/TaskList';
//import SettingsPage from './SettingsPage';

export default class App extends React.Component {
  renderTabs() {
    return [
      {
        content: <TaskList />,
        tab: <Tab label='Home' icon='md-home' />
      },
      {
        content: <SettingsPage />,
        tab: <Tab label='Settings' icon='md-settings' />
      }
    ]
  }

  render() {
    return (
      <TaskList />
    );
  }
}

//<Tabbar initialIndex={0} renderTabs={this.renderTabs.bind(this)} /> //for onsen tabs