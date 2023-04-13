import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

type Anchor = 'bottom';

interface drawerProps {
  state: {
    bottom: boolean;
  };
  toggleDrawer: (anchor: 'bottom', open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export default function SwipeableTemporaryDrawer({ state, toggleDrawer }: drawerProps): JSX.Element {
  // const [state, setState] = React.useState({
  //   top: false,
  //   left: false,
  //   bottom: false,
  //   right: false
  // });

  // const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
  //   if (
  //     event &&
  //     event.type === 'keydown' &&
  //     ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
  //   ) {
  //     return;
  //   }
  // };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>Abdulbasit</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <SwipeableDrawer
        anchor="bottom"
        open={state['bottom']}
        onClose={toggleDrawer('bottom', false)}
        onOpen={toggleDrawer('bottom', true)}>
        {list('bottom')}
      </SwipeableDrawer>
    </div>
  );
}
