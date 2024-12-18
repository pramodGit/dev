import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Value } from 'sass';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const handleNav = (event) => {
    event.stopPropagation();
    console.log(event.target.innerText);
    let link = event.target.innerText.toLowerCase();
    let url = '/';
    if(link !== 'home') {
        url = '/pages/' + link;
    }
    window.location.href=url;
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Home', 'About', 'Search', 'History'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={handleNav}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Transactions'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={handleNav}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open Menu</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
