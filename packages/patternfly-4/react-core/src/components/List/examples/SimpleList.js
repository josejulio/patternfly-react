import React from 'react';
import { List, ListItem } from '@patternfly/react-core';

class SimpleList extends React.Component {
  static title = 'Simple List';

  render() {
    return (
      <List>
        <ListItem>First</ListItem>
        <ListItem>Second</ListItem>
        <ListItem>Third</ListItem>
      </List>
    );
  }
}

export default SimpleList;
